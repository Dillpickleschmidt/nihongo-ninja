// auth.ts
"use server"
import { createBackendClient } from "./client"

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

export async function getUser() {
  console.log("getUser - Environment check:", {
    hasSupabaseUrl: !!process.env.SUPABASE_URL,
    hasSupabaseKey: !!process.env.SUPABASE_ANON_KEY,
  })
  const supabase = createBackendClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    return { error: error.message }
  }

  return { user }
}
