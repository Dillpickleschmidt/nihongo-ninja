import { checkSession, isAdmin } from "@/lib/actions/userSession"
import { BsDatabaseFillUp } from "react-icons/bs"
import Button from "../../components/button"

export default async function Page() {
  // await checkSession()
  // await isAdmin()

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
