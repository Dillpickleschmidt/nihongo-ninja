"use server"

import { createSupabaseServerClient } from "@/lib/supabase/serverClient"
import { createEmptyCardBySupabase } from "./fsrsToSupabase"
import { getUserUid, isAdmin } from "@/lib/supabase/user-session/userSession"

type AddNoteParams = {
  question: string
  answer: string
  extend?: string
  source: string
  user_id: string
}

export async function addNote(formData: FormData) {
  const question = formData.get("question") as string
  const answer = formData.get("answer") as string
  // const extend = formData.get("extend") as string
  const extend = null
  const user_id = await getUserUid()
  const privelages = await isAdmin(user_id)
  const source = privelages ? "NihongoNinja" : "User"

  const supabase = createSupabaseServerClient()
  console.log(question + ", " + answer)

  try {
    // 1. Check if note exists
    // 2. If it does, update the note
    // 3. If it doesn't, insert a new note
    // 4. Create a new card & associate with note (nid).
    // 5. Update the note to associate with card (cid).

    // 1. Check if note exists
    let { data: notes, error: findError } = await supabase
      .from("note")
      .select("nid")
      .eq("question", question)
    if (findError) {
      throw new Error("Error finding note: " + JSON.stringify(findError))
    }
    let note = notes && notes[0]

    // 2. If it does, update the note
    if (note) {
      const { data: updatedNote, error: updateError } = await supabase
        .from("note")
        .update({ answer, extend })
        .match({ user_id: user_id, nid: note.nid })
      if (updateError) {
        throw updateError
      }
    }
    // 3. If it doesn't, insert a new note
    else {
      const { data: newNote, error: createNoteError } = await supabase
        .from("note")
        .insert([{ user_id, question, answer, extend, source }])
        .select()
        .single()
      if (createNoteError) {
        throw new Error("Error creating note: " + createNoteError)
      }

      // 4. Create a new card & associate with note (nid).
      const emptyCard = createEmptyCardBySupabase()
      const { data: newCard, error: createCardError } = await supabase
        .from("card")
        .insert([
          {
            due: emptyCard.due,
            stability: emptyCard.stability,
            difficulty: emptyCard.difficulty,
            elapsed_days: emptyCard.elapsed_days,
            scheduled_days: emptyCard.scheduled_days,
            reps: emptyCard.reps,
            lapses: emptyCard.lapses,
            state: emptyCard.state,
            last_review: emptyCard.last_review,
            // Foreign key
            nid: newNote.nid, // Associate the card with the newly created note
          },
        ])
        .select()
        .single()
      if (createCardError) {
        throw new Error("Error creating card: " + createCardError)
      }

      // 5. Update the note to associate with card (cid).
      const { data: newlyUpdatedNote, error: updateNoteError } = await supabase
        .from("note")
        .update({ cid: newCard.cid })
        .eq("nid", newNote.nid)
      if (updateNoteError) {
        throw new Error("Error updating cid in note: " + updateNoteError)
      }
    }
  } catch (error) {
    console.error("Error in addNote: ", error)
  }
}
