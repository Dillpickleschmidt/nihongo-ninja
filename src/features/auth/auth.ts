"use server"
import { createClient } from "./server"

export async function login(email: string, password: string) {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: "Invalid login credentials" }
  }

  return { message: "Login success" }
}

export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
}
