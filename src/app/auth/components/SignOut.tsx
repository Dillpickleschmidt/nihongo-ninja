"use client"

import { useRouter } from "next/navigation"
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient"

export default function SignOut() {
  const router = useRouter()
  async function HandleSignOut() {
    const supabase = createSupabaseBrowserClient()

    let { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error("Error signing out: " + error.message)
    }
    const {
      data: { user },
    } = await supabase.auth.getUser()
    router.refresh()
  }

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
        You're already logged in
      </h1>
      <button
        onClick={HandleSignOut}
        className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
      >
        Logout
      </button>
    </div>
  )
}
