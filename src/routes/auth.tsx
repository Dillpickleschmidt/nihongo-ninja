import Login from "@/features/auth/components/login"
import { loginWithGoogle, logout, getSession } from "@/features/auth/auth"
import { onMount, createSignal } from "solid-js"
import type { User } from "@supabase/supabase-js"

declare global {
  function handleSignInWithGoogle(response: {
    credential: string
  }): Promise<void>
}

export default function Auth() {
  const [user, setUser] = createSignal<User | null>(null)

  onMount(async () => {
    // Set up Google Sign In
    window.handleSignInWithGoogle = async function (response) {
      try {
        const result = await loginWithGoogle(response.credential)
        if (result.error) {
          console.error("Error signing in:", result.error)
          return
        }
        window.location.href = "/learn"
      } catch (error) {
        console.error("Error signing in:", error)
      }
    }

    // Load Google's script
    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    // Get authenticated user
    const { user: authUser, error } = await getSession()
    if (!error && authUser) {
      setUser(authUser)
    }
  })

  const handleLogout = async () => {
    await logout()
    setUser(null)
    window.location.href = "/auth"
  }

  return (
    <div class="relative min-h-screen bg-gray-50">
      <div class="absolute right-4 top-4">
        {user() && (
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-700">{user()?.email}</span>
            <button
              onClick={handleLogout}
              class="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
            >
              Sign out
            </button>
          </div>
        )}
      </div>

      <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Login />
      </div>
    </div>
  )
}
