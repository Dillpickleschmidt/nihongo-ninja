import { redirect } from "next/navigation"
import readUserSession from "../lib/actions/readUserSession"
import createSupabaseServerClient from "../lib/supabase/server"
import { BsDatabaseFillUp } from "react-icons/bs"
import Button from "../../components/button"

export default async function Page() {
  const { data } = await readUserSession()
  if (!data.session) {
    return redirect("/auth")
  }
  const supabase = await createSupabaseServerClient()

  const { data: user } = await supabase
    .from("users")
    .select("role")
    .eq("id", data.session.user.id)
    .single()
  if (user?.role !== "admin") {
    return redirect("/learn")
  }

  return (
    <div className="max-w-5xl mx-auto h-screen flex justify-center items-center">
      <div className="w-full p-5 space-y-4">
        <div className="flex items-center gap-4">
          <BsDatabaseFillUp className="w-8 h-8" />
          <h1 className="text-3xl">NihongoNinja Vocab Dataset</h1>
        </div>
        <div className="flex justify-center">
          <textarea
            className="resize-none h-[500px] w-[100%] rounded-xl p-6 bg-[#333333]"
            placeholder="Add data for embeddings here..."
          ></textarea>
        </div>
        <Button className="w-full rounded-xl bg-emerald-500">Submit</Button>
      </div>
    </div>
  )
}
