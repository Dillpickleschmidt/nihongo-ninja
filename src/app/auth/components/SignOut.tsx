import Button from "@/components/Button"
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient" // Assuming this is a client-side usable version
import { useRouter } from "next/navigation"

export default function SignOut() {
  const router = useRouter() // Use useRouter for client-side navigation
  const supabase = createSupabaseBrowserClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/auth") // Use router.push for client-side redirects
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault() // Prevent form submission
        signOut()
      }}
    >
      <Button className="w-full bg-indigo-500" type="submit">
        Sign Out
      </Button>
    </form>
  )
}
