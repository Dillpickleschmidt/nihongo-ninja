import { redirect } from "next/navigation"
import { createSupabaseServerComponentClient } from "../serverClient"

export async function readUserSession() {
  const supabase = createSupabaseServerComponentClient()
  return supabase.auth.getSession()
}

export async function readRedirectUserSession() {
  const { data } = await readUserSession()
  if (!data.session) {
    return redirect("/auth")
  }
}

export async function getUserID() {
  const supabase = createSupabaseServerComponentClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error("User not found")
  }
  const user_id = user.id
  return user_id
}

export async function isAdmin(id?: string) {
  const supabase = createSupabaseServerComponentClient()
  await readUserSession()
  let user_id = undefined
  if (!id) {
    user_id = await getUserID() // Update uid value inside the if statement
  } else {
    user_id = id // Update uid value inside the else statement
  }
  const { data } = await supabase
    .from("users")
    .select("role")
    .eq("user_id", user_id)
    .single()
  return data?.role === "admin"
}
