import Button from "@/app/components/button"
import createSupabaseServerClient from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default function SignOut() {
  async function signOut() {
    "use server"
    const supabase = await createSupabaseServerClient()
    await supabase.auth.signOut()
    redirect("/auth")
  }

  return (
    <form action={signOut}>
      <Button className="w-full bg-indigo-500">Sign Out</Button>
    </form>
  )
}
