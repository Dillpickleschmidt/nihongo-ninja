import Button from "@/app/components/button"
import getSupabase from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function SignOut() {
  const supabase = await getSupabase()
  async function signOut() {
    await supabase.auth.signOut()
    redirect("/auth")
  }

  return (
    <form action={signOut}>
      <Button className="w-full bg-indigo-500">Sign Out</Button>
    </form>
  )
}
