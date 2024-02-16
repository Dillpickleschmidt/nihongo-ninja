"use client"
import React, { useEffect, useState } from "react"
import Button from "@/components/Button"
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient"
import { readLocalUserSession } from "@/lib/supabase/user-session/localUserSession"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { z } from "zod"

interface FormValues {
  email: string
  password: string
  confirm: string
}

const formSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirm: z.string().min(1, "Confirm password is required"),
})

type FormSchema = z.infer<typeof formSchema>

function validateForm(values: FormSchema) {
  try {
    formSchema.parse(values)
    return {}
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.flatten().fieldErrors
    }
    throw error
  }
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
