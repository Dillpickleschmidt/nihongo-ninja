import { redirect } from "next/navigation"
import { readUserSession } from "@/lib/supabase/user-session/userSession"
import OAuthComponent from "./components/OAuthForm"

export default async function page() {
  const { data } = await readUserSession()
  if (data.session) {
    return redirect("/learn")
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] border shadow-sm p-5 rounded-sm space-y-4">
        <h1 className="font-bold text-2xl ">Welcome to NihongoNinja!</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo maiores
          enim molestiae consequuntur ipsa ducimus repellendus optio. At, vel
          recusandae.
        </p>
        <OAuthComponent />
      </div>
    </div>
  )
}
