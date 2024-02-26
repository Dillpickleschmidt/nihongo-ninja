"use client"
import AddNoteForm from "./components/AddNoteForm"
import { NoteContextProvider } from "@/context/NoteContext"
import ShortcutsList from "./components/ShortcutsList"

export default function Page() {
  return (
    <NoteContextProvider>
      <div className="flex flex-col items-center justify-center text-xl text-[#F8F5E9]">
        <h1 className="mt-24 text-5xl font-medium text-center mb-8">
          Add a note
        </h1>
        <AddNoteForm />
        <ShortcutsList />
      </div>
    </NoteContextProvider>
  )
}
