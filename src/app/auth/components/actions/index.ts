"use server"

import { createSupabaseServerClient } from "@/lib/supabase/serverClient"

export async function signUpAndSignInWithEmailPassword(data: {
  email: string
  password: string
}) {
  const supabase = createSupabaseServerClient()

  // Sign up the user
  const signUpResult = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (signUpResult.error) {
    return JSON.stringify(signUpResult.error)
  } else {
    // If sign up is successful, immediately sign in the user
    const signInResult = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (signInResult.error) {
      return JSON.stringify(signInResult.error)
    } else {
      return JSON.stringify(signInResult)
    }
  }
}

export async function signInWithEmailPassword(data: {
  email: string
  password: string
}) {
  const supabase = createSupabaseServerClient()

  // Sign in the user
  const signInResult = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })

  if (signInResult.error) {
    return JSON.stringify(signInResult.error)
  } else {
    return JSON.stringify(signInResult)
  }
}
