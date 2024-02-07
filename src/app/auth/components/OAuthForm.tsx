"use client"
import Button from "@/components/Button"
import { createBrowserClient } from "@supabase/ssr"

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export default function OAuthComponent() {
  const supabase = createBrowserClient(supabaseURL, supabaseAnonKey)

  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <Button onClick={signInWithGithub} className="w-full bg-indigo-500">
      Login With GitHub
    </Button>
  )
}
