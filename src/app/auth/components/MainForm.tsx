import { createSupabaseServerComponentClient } from "@/lib/supabase/serverClient"
import OAuthComponent from "./OAuthForm"
import RegisterComponent from "./RegisterForm"
import SignOut from "./SignOut"

export default async function MainForm() {
  // Get User ID without redirecting
  const supabase = createSupabaseServerComponentClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const user_id = user?.id // If no user is found, user_id will be undefined
  console.log("user: ", user_id)

  if (user_id) {
    return <SignOut />
  }

  return (
    <div className="space-y-4">
      <OAuthComponent />
      <RegisterComponent />
    </div>
  )
}
