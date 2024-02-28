import { createSupabaseServerClient } from "@/lib/supabase/serverClient"
import { date_scheduler } from "ts-fsrs"

export async function getTodayLearnedNewCardCount(
  uid: string,
  startOfDay: Date,
  source?: string
) {
  const supabase = createSupabaseServerClient()
  // Calculate the next day for filtering
  const nextDay = date_scheduler(startOfDay, 1, true)

  // From Revlog, get count of items that match uid, state, and review date range
  let { count: todayCount, error: revlogError } = await supabase
    .from("revlog")
    .select("cid", { count: "exact", head: true }) // Count the number of cards learned today and (head -> don't return data)
    .eq("state", "0")
    .gte("review", startOfDay.toISOString())
    .lt("review", nextDay.toISOString())
  if (revlogError) {
    throw new Error(
      "Error getting count from revlog: " + JSON.stringify(revlogError)
    )
  }
  console.log("todayCount: ", todayCount)

  if (!todayCount) {
    todayCount = 0
  }

  // TODO: get limit from parameters table
  const limit = 50

  // Return the count of learned/new cards and the card limit
  return {
    todayCount: todayCount,
    limit: limit, // TODO: get limit from parameters table
  }
}
