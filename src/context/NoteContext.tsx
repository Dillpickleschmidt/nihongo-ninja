"use client"

import { createContext, useContext, useState } from "react"

type NoteContextType = {
  questionHTML: string
  setQuestionHTML: (richText: string) => void
  answer1HTML: string
  setAnswer1HTML: (richText: string) => void
  answer2HTML: string
  setAnswer2HTML: (richText: string) => void
  answer3HTML: string
  setAnswer3HTML: (richText: string) => void
}

const NoteContext = createContext<NoteContextType | undefined>(undefined)

export function useNoteContext() {
  const context = useContext(NoteContext)
  if (context === undefined) {
    throw new Error("NoteContext must be used within NoteContextProvider")
  }
  return context
}

export function NoteContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [questionHTML, setQuestionHTML] = useState("")
  const [answer1HTML, setAnswer1HTML] = useState("")
  const [answer2HTML, setAnswer2HTML] = useState("")
  const [answer3HTML, setAnswer3HTML] = useState("")
  const value = {
    questionHTML,
    setQuestionHTML,
    answer1HTML,
    setAnswer1HTML,
    answer2HTML,
    setAnswer2HTML,
    answer3HTML,
    setAnswer3HTML,
  }
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}
