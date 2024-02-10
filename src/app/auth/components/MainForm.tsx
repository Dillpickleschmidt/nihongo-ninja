import OAuthComponent from "./OAuthForm"
import RegisterComponent from "./RegisterForm"
import { readUserSession } from "@/lib/supabase/user-session/userSession"

export default function MainForm() {
  return (
    <div className="space-y-4">
      <OAuthComponent />
      <RegisterComponent />
    </div>
  )
}
