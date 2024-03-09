import { CardContextProvider } from "@/context/CardContext"
import AddNoteForm from "./components/AddNoteForm"
import ShortcutsList from "./components/ShortcutsList"

export default function Page() {
  const dummyNoteBox0 = [[], [], [], []]

  return (
    <div className="flex flex-col items-center justify-center text-xl text-[#F8F5E9]">
      <h1 className="mt-24 text-5xl font-medium text-center mb-8">
        Add a note
      </h1>
      <CardContextProvider noteBox0={dummyNoteBox0}>
        <AddNoteForm />
      </CardContextProvider>
      <ShortcutsList />
    </div>
  )
}
