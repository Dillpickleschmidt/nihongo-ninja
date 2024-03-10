"use server"

import { CardSupabase, Grade, Rating, RecordLog, fsrs } from "ts-fsrs"
import { createSupabaseServerClient } from "@/lib/supabase/serverClient"
import { getUserID, isAdmin } from "@/lib/supabase/user-session/userSession"
import { getFSRSParamsByCid } from "./fsrs"

export async function getCardByNid(nid: number) {
  const supabase = createSupabaseServerClient()
  const user_id = await getUserID()
  const { data: CardData, error: CardError } = await supabase
    .from("card")
    .select("*")
    .match({ user_id: user_id, nid: nid })
  if (CardError) {
    throw new Error("Error finding card by nid: " + JSON.stringify(CardError))
  }
  return CardData && (CardData[0] as CardSupabase)
}

export async function getCardByCid(cid: number) {
  const supabase = createSupabaseServerClient()
  const user_id = await getUserID()
  const { data: CardData, error: CardError } = await supabase
    .from("card")
    .select("*")
    .match({ user_id: user_id, cid: cid })
  if (CardError) {
    throw new Error("Error finding card by cid: " + JSON.stringify(CardError))
  }
  return CardData && (CardData[0] as CardSupabase)
}

export async function handleCardUpdate(cid: number, now: Date, grade: Grade) {
  let data
  if ((Number(grade) as Rating) === Rating.Manual) {
    // forget
    // data = await forgetCard(Number(cid), new Date(), Boolean(reset))
  } else {
    data = await updateCard(cid, now, grade)
  }
  return data
}

export async function schedulerCard(cid: number, now: Date) {
  if (!cid) {
    throw new Error("nid not found")
  }

  const card = await getCardByCid(cid)
  const { params, user_id: user_id } = await getFSRSParamsByCid(card.cid)
  const permission = isAdmin(user_id)
  if (!permission) {
    throw new Error("Permission denied")
  }
  const f = fsrs(params)
  return f.repeat(card, now) // This returns a RecordLog which is an array of 4 RecordItem objects (Again, Hard, Good, Easy)
}

export async function updateCard(cid: number, now: Date, grade: Grade) {
  const supabase = createSupabaseServerClient()
  // Fetch and schedule the card
  const data: RecordLog = await schedulerCard(cid, now)
  const recordItem = data[Number(grade) as Grade] // Get the specific record item based on the provided grade

  // Update the card in Supabase
  const { error: updateError } = await supabase
    .from("card")
    .update({
      due: recordItem.card.due,
      stability: recordItem.card.stability,
      difficulty: recordItem.card.difficulty,
      elapsed_days: recordItem.card.elapsed_days,
      scheduled_days: recordItem.card.scheduled_days,
      reps: recordItem.card.reps,
      lapses: recordItem.card.lapses,
      state: recordItem.card.state,
      last_review: recordItem.card.last_review || null,
    })
    .eq("cid", cid)

  if (updateError) {
    throw new Error("Error updating card: " + JSON.stringify(updateError))
  }

  // Assuming you need to log the update, adjust this to how you handle logs in Supabase
  let { error: logError } = await supabase
    .from("revlog") // or whatever your log table is named
    .insert([
      {
        cid: cid,
        grade: recordItem.log.rating,
        state: recordItem.log.state,
        due: recordItem.log.due,
        stability: recordItem.log.stability,
        difficulty: recordItem.log.difficulty,
        elapsed_days: recordItem.log.elapsed_days,
        last_elapsed_days: recordItem.log.last_elapsed_days,
        scheduled_days: recordItem.log.scheduled_days,
        review: recordItem.log.review,
      },
    ])

  if (logError) {
    throw new Error("Error logging update: " + JSON.stringify(logError))
  }

  return {
    nextState: recordItem.card.state,
    nextDue: recordItem.card.due,
  }
}
