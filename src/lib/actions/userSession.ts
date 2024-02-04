"use server"
import { redirect } from "next/navigation"
import { createSupabaseServerComponentClient } from "../supabase/server"

export async function readUserSession() {
  const supabase = await createSupabaseServerComponentClient()
  return supabase.auth.getSession()
}

export async function getUserUid() {
  const supabase = await createSupabaseServerComponentClient()
  const session = await readUserSession()
  if (!session) {
    throw new Error("No active session")
  }
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error("No user found")
  }
  const uid = user.id
  return uid
}

export async function checkSession() {
  const { data } = await readUserSession()
  if (!data.session) {
    return redirect("/auth")
  }
}

export async function isAdmin(id?: string) {
  const supabase = await createSupabaseServerComponentClient()
  await checkSession()
  let uid = undefined
  if (!id) {
    uid = await getUserUid() // Update uid value inside the if statement
  } else {
    uid = id // Update uid value inside the else statement
  }
  const { data } = await supabase
    .from("users")
    .select("role")
    .eq("uid", uid)
    .single()
  return data?.role === "admin"
}
