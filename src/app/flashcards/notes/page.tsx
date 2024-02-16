import Button from "@/components/Button"
import { addNote } from "@/components/fsrs/actions/notes"

export default function page() {
  return (
    <div className="w-full flex justify-center text-xl">
      <div className="mt-24">
        <h1 className="text-3xl text-center">Add a note</h1>
        <form action={addNote}>
          <label>Question</label>
          <input
            name="question"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <label>Answer</label>
          <input
            name="answer"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <div className="flex justify-center">
            <Button type="submit">Add Note</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
