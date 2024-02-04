import {
  Card,
  CardSupabase,
  Grade,
  RecordLog,
  RevlogSupabase,
  fsrs,
} from "ts-fsrs"
import { getNoteByCid, getNoteByNid } from "./note"
import {
  stateFSRSRatingToSupabase,
  stateFSRSStateToSupabase,
} from "@/lib/supabase/fsrsToSupabase"
import { getFSRSParamsByCid } from "./fsrs"
import { checkSession, isAdmin } from "@/lib/actions/userSession"
import getSupabase from "@/lib/supabase/server"

async function isAdminOrSelf(uid: string) {
  await checkSession()
  const permission = await isAdmin(uid)
  return permission
}

type Query = {
  nid: number
  cid: number
}

export async function findCardByNid(nid: number) {
  const note = await getNoteByNid(nid)
  if (!note || !note.card) {
    throw new Error("note not found")
  }

  return note.card as unknown as CardSupabase
}

export async function findCardByCid(cid: number) {
  const supabase = await getSupabase()
  try {
    let { data: card, error } = await supabase
      .from("card")
      .select("*, note(*)") // Adjust based on your actual table and column names
      .eq("cid", cid)
      .single()

    if (error) throw error
    if (!card) {
      throw new Error("card not found")
    }
    return card as unknown as CardSupabase // Adjust types as necessary
  } catch (error) {
    console.error("Error in findCardByCid:", error)
    throw error // Or handle it as per your application's error handling policy
  }
}

export async function schedulerCard(query: Partial<Query>, now: Date) {
  const supabase = await getSupabase()
  if (!query.nid && !query.cid) {
    throw new Error("nid or cid not found")
  }

  let cardBySupabase

  if (query.cid) {
    let { data: card, error } = await supabase
      .from("card")
      .select("*")
      .eq("cid", query.cid)
      .single()

    if (error) throw error
    if (!card) {
      throw new Error("card not found")
    }
    cardBySupabase = card
  } else if (query.nid) {
    // Assuming getNoteByNid fetches the note and its related card
    const note = await getNoteByNid(query.nid)
    if (!note || !note.card) {
      throw new Error("note not found")
    }
    cardBySupabase = note.card
  }

  // Assuming getFSRSParamsByCid, isAdminOrSelf and fsrs functions do not interact with the DB,
  // they can remain unchanged.
  const { params, uid } = await getFSRSParamsByCid(cardBySupabase.cid)
  const permission = await isAdminOrSelf(uid)
  if (!permission) {
    throw new Error("permission denied")
  }

  const f = fsrs(params)
  const card = {
    ...cardBySupabase,
    nid: query.cid || cardBySupabase.note.nid, // Adjust based on your data structure
    // state: statePrismaToFSRSState(cardBySupabase.state), // Convert state if necessary
    // due: fixDate(cardBySupabase.due), // Adjust date if necessary
    last_review: cardBySupabase.last_review
      ? cardBySupabase.last_review
      : undefined,
  }

  return f.repeat(card, now)
}

function isCardSupabase(card: Card | CardSupabase): card is CardSupabase {
  return (
    (card as CardSupabase).cid !== undefined &&
    (card as CardSupabase).nid !== undefined
  )
}

export async function updateCard(cid: number, now: Date, grade: Grade) {
  const supabase = await getSupabase()
  // Fetch and schedule the card
  const data: RecordLog = await schedulerCard({ cid }, now)
  const recordItem = data[Number(grade) as Grade]

  // Prepare the update data
  const updateData = {
    due: recordItem.card.due,
    stability: recordItem.card.stability,
    difficulty: recordItem.card.difficulty,
    elapsed_days: recordItem.card.elapsed_days,
    scheduled_days: recordItem.card.scheduled_days,
    reps: recordItem.card.reps,
    lapses: recordItem.card.lapses,
    state: recordItem.card.state, // Assuming state is correctly mapped
    last_review: recordItem.card.last_review || null,
  }

  // Update the card in Supabase
  let { error: updateError } = await supabase
    .from("card")
    .update(updateData)
    .match({ cid })

  if (updateError) throw updateError

  // Assuming you need to log the update, adjust this to how you handle logs in Supabase
  let { error: logError } = await supabase
    .from("revlog") // or whatever your log table is named
    .insert({
      cid: cid,
      grade: recordItem.log.rating, // Ensure mapping is correct for your enum or representation in Supabase
      state: recordItem.log.state, // Adjust for Supabase as necessary
      due: recordItem.log.due,
      stability: recordItem.log.stability,
      difficulty: recordItem.log.difficulty,
      elapsed_days: recordItem.log.elapsed_days,
      last_elapsed_days: recordItem.log.last_elapsed_days,
      scheduled_days: recordItem.log.scheduled_days,
      review: recordItem.log.review,
    })

  if (logError) throw logError

  if (!isCardSupabase(recordItem.card)) {
    throw new Error("recordItem.card is not a CardSupabase")
  }

  return {
    nextState: recordItem.card.state,
    nextDue: recordItem.card.due,
    nid: isCardSupabase(recordItem.card) && recordItem.card.nid,
  }
}

export async function rollbackCard(query: Partial<Query>) {
  const supabase = await getSupabase()
  if (!query.nid && !query.cid) {
    throw new Error("nid or cid not found")
  }

  let cardBySupabase

  // Fetch the card by cid or nid
  if (query.cid) {
    let { data: card, error } = await supabase
      .from("card")
      .select("*")
      .eq("cid", query.cid)
      .single()

    if (error) throw error
    if (!card) {
      throw new Error("card not found")
    }
    cardBySupabase = card
  } else if (query.nid) {
    // Assuming getNoteByNid fetches the note and its related card
    const note = await getNoteByNid(query.nid)
    if (!note || !note.card) {
      throw new Error("note not found")
    }
    cardBySupabase = note.card
  }

  // Find the last log entry
  let { data: log, error: logError } = await supabase
    .from("Revlog")
    .select("*")
    .eq("cid", cardBySupabase.cid)
    .order("review", { ascending: false })
    .limit(1)
    .single()

  if (logError) throw logError
  if (!log) {
    throw new Error("log not found")
  }

  // Check permission, then rollback
  const { params, uid } = await getFSRSParamsByCid(cardBySupabase.cid)
  const permission = await isAdminOrSelf(uid)
  if (!permission) {
    throw new Error("permission denied")
  }

  const f = fsrs(params)
  const backCardTemp = f.rollback(cardBySupabase, log)
  if (!isCardSupabase(backCardTemp)) {
    throw new Error("backCardTemp is not a CardSupabase")
  }
  const backCard = backCardTemp as CardSupabase

  // Update the card in Supabase
  let { error: updateError } = await supabase
    .from("card")
    .update({
      due: backCard.due,
      stability: backCard.stability,
      difficulty: backCard.difficulty,
      elapsed_days: backCard.elapsed_days,
      scheduled_days: backCard.scheduled_days,
      reps: backCard.reps,
      lapses: backCard.lapses,
      state: backCard.state,
      last_review: backCard.last_review || null,
    })
    .match({ cid: backCard.cid })

  if (updateError) throw updateError

  // Delete the last log entry
  let { error: deleteLogError } = await supabase
    .from("revlog")
    .delete()
    .match({ lid: log.lid })

  if (deleteLogError) throw deleteLogError

  // Fetch and return the updated note
  return await getNoteByCid(cardBySupabase.cid)
}

export async function forgetCard(
  cid: number,
  now: Date,
  reset_count: boolean = false
) {
  const supabase = await getSupabase()
  // Fetch the card by cid
  let { data: cardBySupabase, error: fetchError } = await supabase
    .from("card")
    .select("*")
    .eq("cid", cid)
    .single()

  if (fetchError) throw fetchError
  if (!cardBySupabase) {
    throw new Error("card not found")
  }

  // Perform the "forget" operation
  const { params, uid } = await getFSRSParamsByCid(cardBySupabase.cid)
  const permission = await isAdminOrSelf(uid)
  if (!permission) {
    throw new Error("permission denied")
  }
  const f = fsrs(params)
  const recordItem = f.forget(cardBySupabase, now, reset_count)

  // Update the card in Supabase
  let { error: updateError } = await supabase
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
    .match({ cid })

  if (updateError) throw updateError

  // Assuming you need to log the update
  let { error: logError } = await supabase.from("revlog").insert({
    cid: cid,
    grade: recordItem.log.rating,
    state: recordItem.log.state,
    // ... other log fields ...
  })

  if (logError) throw logError

  return {
    nextState: recordItem.card.state,
    nextDue: recordItem.card.due,
    nid: cardBySupabase.nid,
  }
}
