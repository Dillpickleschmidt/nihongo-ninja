import { NodeData } from "@/types"
import { createEmptyCardBySupabase } from "@/lib/flashcards/fsrsToSupabase"
import { getSupabase } from "../supabase/serverClient"
import { Card, Note } from "@/lib/supabase/index"
import { State } from "ts-fsrs"

export async function addNote(data: Partial<NodeData> & { uid: string }) {
  const supabase = await getSupabase()
  const question = data.question
  const answer = data.answer
  if (!question || !answer) {
    return false
  }
  const uid = data.uid

  try {
    // Find the first note that matches the question
    let { data: note, error: findError } = await supabase
      .from("note")
      .select("nid")
      .eq("question", question)
      .single()

    if (findError) throw findError

    if (note) {
      // Update the existing note
      const { data: updatedNote, error: updateError } = await supabase
        .from("note")
        .update({
          question,
          answer,
          extend: data.extend ? JSON.stringify(data.extend) : "",
        })
        .match({ uid, nid: note.nid })

      if (updateError) throw updateError
      return updatedNote
    } else {
      // Create a new note
      const { data: newNote, error: createError } = await supabase
        .from("note")
        .insert([
          {
            uid,
            question,
            answer,
            extend: data.extend ? JSON.stringify(data.extend) : "",
            // Assuming createEmptyCardBySupabase is a function that creates a card object
            card: createEmptyCardBySupabase(),
            source: "manual",
          },
        ])

      if (createError) throw createError
      return newNote
    }
  } catch (error) {
    console.error("Error in addNote:", error)
    return null
  }
}

export async function getNotes({
  uid,
  state,
  reviewDate,
  takeLimit,
}: {
  uid: string
  state: State
  reviewDate: string // Assuming this is passed in a suitable format (e.g., 'YYYY-MM-DD')
  takeLimit: number
}): Promise<(Note & { card: Card })[]> {
  const supabase = await getSupabase()
  try {
    // Call the stored procedure via RPC
    const response = await supabase.rpc("fetch_notes_with_cards", {
      uid_param: uid,
      state_param: state,
      review_date_param: reviewDate,
      take_limit_param: takeLimit,
    })

    if (response.error) throw response.error

    // Assuming the stored procedure returns JSON, parse it accordingly
    // The actual structure of 'data' will depend on how you've structured your stored procedure's return value
    return response.data as (Note & { card: Card })[]
  } catch (error) {
    console.error("Error in getNotes:", error)
    return []
  }
}

// export async function getNotesOrdered({
//   uid,
//   state,
//   reviewDate,
//   takeLimit,
// }: {
//   uid: string
//   state: State
//   reviewDate: string // Assuming this is passed in a suitable format (e.g., 'YYYY-MM-DD')
//   takeLimit: number
// }): Promise<(Note & { card: Card })[]> {
//   const supabase = await getSupabase()
//   try {
//     // Call the stored procedure via RPC
//     const response = await supabase.rpc("fetch_notes_with_cards_ordered", {
//       uid_param: uid,
//       take_limit_param: takeLimit,
//       query: { question: { contains: searchWord } },
//       order: { card: { due: "desc" } },
//     })

//     if (response.error) throw response.error

//     // Assuming the stored procedure returns JSON, parse it accordingly
//     // The actual structure of 'data' will depend on how you've structured your stored procedure's return value
//     return response.data as (Note & { card: Card })[]
//   } catch (error) {
//     console.error("Error in getNotes:", error)
//     return []
//   }
// }

export async function getNoteByNid(nid: number) {
  const supabase = await getSupabase()
  try {
    // Fetch the first note that matches the nid along with its related card
    let { data: note, error } = await supabase
      .from("note")
      .select("*, card(*)") // Adjust this to match your data model if necessary
      .eq("nid", nid)
      .single() // 'single' ensures that only one record (or null) is returned

    if (error) throw error
    return note
  } catch (error) {
    console.error("Error in getNoteByNid:", error)
    return null
  }
}

export async function getNoteByCid(cid: number) {
  const supabase = await getSupabase()
  try {
    // Fetch the first note that matches the cid along with its related card
    let { data: note, error } = await supabase
      .from("note")
      .select("*, card(*)") // Adjust this to match your data model if necessary
      .eq("cid", cid)
      .single() // 'single' ensures that only one record (or null) is returned

    if (error) throw error
    return note
  } catch (error) {
    console.error("Error in getNoteByCid:", error)
    return null
  }
}

export async function getNoteByQuestion(question: string) {
  const supabase = await getSupabase()
  try {
    // Fetch the first note that matches the question along with its related card
    let { data: note, error } = await supabase
      .from("note")
      .select("*, card(*)") // Adjust this to match your data model if necessary
      .ilike("question", `%${question}%`) // Using 'ilike' for case-insensitive partial match
      .single() // 'single' ensures that only one record (or null) is returned

    if (error) throw error
    return note
  } catch (error) {
    console.error("Error in getNoteByQuestion:", error)
    return null
  }
}

export async function delNoteByQuestion(question: string) {
  const supabase = await getSupabase()
  try {
    // Use getNoteByQuestion to find the note
    const note = await getNoteByQuestion(question)

    if (!note) {
      return false // Note not found, return false
    }

    // Then, delete the note using its nid
    let { error: deleteError } = await supabase
      .from("note")
      .delete()
      .match({ nid: note.nid })

    if (deleteError) throw deleteError

    return true // Note successfully deleted
  } catch (error) {
    console.error("Error in delNoteByQuestion:", error)
    return false // Error occurred, return false
  }
}
