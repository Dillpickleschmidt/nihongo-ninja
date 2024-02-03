"use server"
import supabase from "../supabase/server"

export default async function readUserSession() {
  return supabase.auth.getSession()
}
