import { getSupabase } from "../supabase/serverClient"
import { date_scheduler } from "ts-fsrs"

export async function getTodayLearnedNewCardCount(
  uid: string,
  startOfDay: Date,
  source?: string
) {
  const supabase = await getSupabase()
  // Calculate the next day for filtering
  const nextDay = date_scheduler(startOfDay, 1, true)

  // Initialize Supabase query for Revlog with filtering by uid, state, and review date range
  let revlogQuery = supabase
    .from("Revlog")
    .select("cid", { count: "exact" }) // Adjust based on what you're trying to select/count
    .eq("state", "0") // Assuming '0' represents the 'New' state
    .gte("review", startOfDay)
    .lt("review", nextDay)
    .is("n.source", source || null) // Optional source filter

  // Execute the query
  const { data: revlogData, error: revlogError } = await revlogQuery

  if (revlogError) {
    console.error(revlogError)
    return { todayCount: 0, limit: 50 } // Return default values in case of error
  }

  // Fetch the card limit for the user
  const { data: parametersData, error: parametersError } = await supabase
    .from("Parameters")
    .select("card_limit")
    .eq("uid", uid)
    .single() // Assuming each user has a single entry in Parameters

  if (parametersError) {
    console.error(parametersError)
    return { todayCount: revlogData.length, limit: 50 } // Use fetched count and default limit in case of error
  }

  // Return the count of learned/new cards and the card limit
  return {
    todayCount: revlogData.length, // Assuming 'revlogData' contains the count directly
    limit: parametersData.card_limit || 50,
  }
}
