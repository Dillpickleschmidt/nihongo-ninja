// db.ts
"use server"
import { createBackendClient } from "./backendClient"

export async function getCompletedModules(userId: string) {
  try {
    const supabase = createBackendClient()
    const { data, error } = await supabase
      .from("user_module_completions")
      .select("module_path")
      .eq("user_id", userId)

    if (error) {
      console.error("Error fetching completed modules:", error)
      return { error: error.message }
    }

    return { data: data || [] }
  } catch (err) {
    console.error("Error in getCompletedModules:", err)
    return { error: "Failed to fetch completed modules", data: [] }
  }
}
