// auth.ts
"use server"
import { createBackendClient } from "./supabase"

export async function loginWithGoogle(credential: string) {
  const supabase = createBackendClient()
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "google",
    token: credential,
  })

  if (error) {
    return { error: error.message }
  }

  return { message: "Login success", data }
}

export async function logout() {
  const supabase = createBackendClient()
  await supabase.auth.signOut()
}

export async function getSession() {
  const supabase = createBackendClient()
  // Get authenticated user instead of session
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    return { error: error.message }
  }

  return { user }
}
