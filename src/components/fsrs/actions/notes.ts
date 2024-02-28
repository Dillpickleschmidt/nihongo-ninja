"use server"

import { createSupabaseServerClient } from "@/lib/supabase/serverClient"
import { createEmptyCardBySupabase } from "./fsrsToSupabase"
import { getUserID, isAdmin } from "@/lib/supabase/user-session/userSession"
import { revalidatePath } from "next/cache"
import { addNoteSchema } from "@/app/flashcards/notes/components/addNoteSchema"
import { z } from "zod"
import { State } from "ts-fsrs"
import { Card, Note } from "@/lib/supabase/index"

type NoteType = z.infer<typeof addNoteSchema>
type AddNoteType = NoteType & {
  question_raw: string
  answers_raw: string[]
  style: string
}

export async function addNote(formData: AddNoteType) {
  const { question, answers, question_raw, answers_raw, style } = formData

  const result = addNoteSchema.safeParse({ question, answers })
  if (result.success === false) {
    console.log("Error in addNote: ", result.error.format())
    return { error: result.error.format() }
  }

  // const question = formData.get("question") as string
  // const answer = formData.get("answer") as string
  const user_id = await getUserID()
  const admin = await isAdmin(user_id)
  const created_by = admin ? "NihongoNinja" : user_id

  const supabase = createSupabaseServerClient()
  console.log(question + ", " + answers[0])

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
        .update({ answers, question_raw, answers_raw, style })
        .match({ user_id: user_id, nid: note.nid })
      if (updateError) {
        throw updateError
      }
    }
    // 3. If it doesn't, insert a new note
    else {
      const { data: newNote, error: createNoteError } = await supabase
        .from("note")
        .insert([
          {
            user_id,
            question,
            answers,
            created_by,
            question_raw,
            answers_raw,
            style,
          },
        ])
        .select()
        .single()
      if (createNoteError) {
        throw new Error(
          "Error creating note: " + JSON.stringify(createNoteError)
        )
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
  revalidatePath("/flashcards/notes")
}

export async function getNotes({
  user_id,
  state,
  due,
  takeLimit = 50,
}: {
  user_id: string
  state: State
  due: string // Assuming this is passed in a suitable format (e.g., 'YYYY-MM-DD')
  takeLimit?: number
}): Promise<(Note & { card: Card })[]> {
  const supabase = createSupabaseServerClient()
  try {
    // console.log("user_id: " + user_id)
    // console.log("state: " + state.toString())
    // console.log("reviewDate: " + due)
    // console.log("takeLimit: " + takeLimit)
    // Call the stored procedure via RPC
    const { data: Note_Card_Data, error: Note_Card_Error } = await supabase
      .rpc("fetch_notes_with_cards", {
        user_id_param: user_id,
        state_param: state.toString(),
        due_param: due, // rpc function will check if it's <=
      })
      .limit(takeLimit)

    if (Note_Card_Error) {
      throw new Error(
        "Error in rpc function: " + JSON.stringify(Note_Card_Error)
      )
    }
    console.log(
      "Note_Card_Data in state",
      state.toString(),
      ":",
      Note_Card_Data
    )
    return Note_Card_Data as (Note & { card: Card })[]
  } catch (error) {
    console.error("Error in getNotes:", error)
    return []
  }
}
