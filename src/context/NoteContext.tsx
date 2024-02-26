"use client"

import { createContext, useContext, useState } from "react"

type NoteContextType = {
  questionText: string
  setQuestionText: (richText: string) => void
  answer1Text: string
  setAnswer1Text: (richText: string) => void
  answer2Text: string
  setAnswer2Text: (richText: string) => void
  answer3Text: string
  setAnswer3Text: (richText: string) => void
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
  const [questionText, setQuestionText] = useState("")
  const [answer1Text, setAnswer1Text] = useState("")
  const [answer2Text, setAnswer2Text] = useState("")
  const [answer3Text, setAnswer3Text] = useState("")
  const value = {
    questionText,
    setQuestionText,
    answer1Text,
    setAnswer1Text,
    answer2Text,
    setAnswer2Text,
    answer3Text,
    setAnswer3Text,
  } 
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}
