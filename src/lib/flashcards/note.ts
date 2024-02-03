import { NodeData } from "@/types"
import { createEmptyCardBySupabase } from "@/lib/supabase/fsrsToSupabase"
import supabase from "../supabase/server"

export async function addNote(data: Partial<NodeData> & { uid: number }) {
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
  take,
  query,
  order,
}: {
  uid: number
  take?: number
  query?: any // Adjust this based on how you want to structure your query filters
  order?: any // Adjust this based on your ordering requirements
}) {
  try {
    // Building the query
    let supabaseQuery = supabase.from("note").select("*, card(*)")

    // Adding filters
    if (uid) {
      supabaseQuery = supabaseQuery.eq("uid", uid)
    }

    if (query) {
      // You'll need to convert your query object to the format expected by Supabase
      // This is a placeholder and will depend on how you structure your 'query' object
      Object.entries(query).forEach(([key, value]) => {
        supabaseQuery = supabaseQuery.eq(key, value)
      })
    }

    // Adding order by
    if (order) {
      // Similar to the query, you'll need to adapt this based on your 'order' object structure
      // For example: supabaseQuery = supabaseQuery.order('columnName', { ascending: false });
    }

    // Limiting the number of results
    if (take) {
      supabaseQuery = supabaseQuery.limit(take)
    }

    // Executing the query
    let { data: notes, error } = await supabaseQuery

    if (error) throw error
    return notes
  } catch (error) {
    console.error("Error in getNotes:", error)
    return []
  }
}

export async function getNoteByNid(nid: number) {
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
