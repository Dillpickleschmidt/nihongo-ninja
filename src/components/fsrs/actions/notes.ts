"use server"

import { createSupabaseServerClient } from "@/lib/supabase/serverClient"

type AddNoteParams = {
  question: string
  answer: string
  extend?: string
  source: string
  user_id: string
}

export async function addNote({
  question,
  answer,
  extend,
  source,
  user_id,
}: AddNoteParams) {
  const supabase = createSupabaseServerClient()
  console.log(question + ", " + answer)

  try {
    // 1. Check if note exists
    // 2. If it does, update the note
    // 3. If it doesn't, insert a new note
    // 4. Create a new card & associate with note (nid).
    // 5. Update the note to associate with card (cid).

    // 1. Check if note exists
    let { data: note, error } = await supabase.from("note").select("nid")
  } catch (error) {
    console.error("Error in addNote: ", error)
    return null
  }
}
