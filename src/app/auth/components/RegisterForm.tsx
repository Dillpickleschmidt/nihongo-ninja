"use client"
import React, { useEffect, useState } from "react"
import Button from "@/components/Button"
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient"
import { useRouter } from "next/navigation"
import { readLocalUserSession } from "@/lib/supabase/user-session/userSession"
import { User } from "@supabase/supabase-js"

interface FormValues {
  email: string
  password: string
  confirm: string
}

function validateForm(values: FormValues) {
  const errors: Partial<FormValues> = {}

  if (!values.email) {
    errors.email = "Email is required"
  } else if (!isValidEmail(values.email)) {
    errors.email = "Invalid email format"
  }

  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }

  if (!values.confirm) {
    errors.confirm = "Confirm password is required"
  } else if (values.confirm !== values.password) {
    errors.confirm = "Passwords do not match"
  }

  return errors
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default function RegisterComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createSupabaseBrowserClient()

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()
  }, [])

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.ROOT_PATH + "/auth/callback",
      },
    })
    setUser(res.data.user)
    router.refresh()
    setEmail("")
    setPassword("")
  }

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setUser(res.data.user)
    const { data } = await readLocalUserSession()
    if (data.session) {
      router.replace("/learn")
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
    setUser(null)
  }

  console.log({ loading, user })

  if (loading) {
    return <h1>loading..</h1>
  }

  if (user) {
    return (
      <div>
        <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
          You're already logged in
        </h1>
        <button
          onClick={handleLogout}
          className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <Button onClick={handleSignUp} className="w-full">
        Register
      </Button>
      <Button onClick={handleSignIn} className="w-full">
        Sign In
      </Button>
    </div>
  )
}
