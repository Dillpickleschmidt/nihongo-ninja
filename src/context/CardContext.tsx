"use client"

import { Card, Note } from "@/lib/supabase"
import { StateBox } from "@/types"
import { createContext, useContext, useMemo, useState } from "react"
import { RecordLog, State } from "ts-fsrs"

type CardContextType = {
  noteBox: { [key in StateBox]: Array<Note & { card: Card }> }
  setNoteBox: {
    [key in StateBox]: React.Dispatch<
      React.SetStateAction<Array<Note & { card: Card }>>
    >
  }
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentType: StateBox
  setCurrentType: React.Dispatch<React.SetStateAction<StateBox>>
  currentStyle: string
  setCurrentStyle: React.Dispatch<React.SetStateAction<string>>
  questionHTML: string
  setQuestionHTML: (richText: string) => void
  answer1HTML: string
  setAnswer1HTML: (richText: string) => void
  answer2HTML: string
  setAnswer2HTML: (richText: string) => void
  answer3HTML: string
  setAnswer3HTML: (richText: string) => void
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export function useCardContext() {
  const context = useContext(CardContext)
  if (context === undefined) {
    throw new Error("NoteContext must be used within NoteContextProvider")
  }
  return context
}

export function CardContextProvider({
  children,
  noteBox0,
}: {
  children: React.ReactNode
  noteBox0: Array<Array<Note & { card: Card }>>
}) {
  // Split noteBox0 into NewCard, LearningCard, RelearningCard, ReviewCard
  const [NewCard, LearningCard, RelearningCard, ReviewCard] = noteBox0

  // useState to store each card State (New, Learning, Review)
  const [NewCardBox, setNewCardBox] = useState(NewCard)
  // Combine LearningCard and RelearningCard into LearningCardBox
  const [LearningCardBox, setLearningCardBox] = useState(() => {
    const l = []
    if (LearningCard) {
      l.push(...LearningCard)
    }
    if (RelearningCard) {
      l.push(...RelearningCard)
    }
    return l
  })
  const [ReviewCardBox, setReviewCardBox] = useState(ReviewCard)
  const [open, setOpen] = useState(false)
  const [schedule, setSchedule] = useState<RecordLog | undefined>(undefined)
  // useMemo to store each card State (New, Learning, Review)
  const noteBox = useMemo(
    () => ({
      [State.New]: NewCardBox,
      [State.Learning]: LearningCardBox,
      [State.Review]: ReviewCardBox,
    }),
    [NewCardBox, LearningCardBox, ReviewCardBox]
  )
  const setNoteBox = useMemo(
    () => ({
      [State.New]: setNewCardBox,
      [State.Learning]: setLearningCardBox,
      [State.Review]: setReviewCardBox,
    }),
    [setNewCardBox, setLearningCardBox, setReviewCardBox]
  )

  // Set currentType to the first non-empty noteBox
  const [currentType, setCurrentType] = useState<StateBox>(() => {
    let current: StateBox = State.New
    for (let i = 0; i < 3; i++) {
      if (noteBox[current].length > 0) {
        break
      }
      current = (current + 1) as StateBox
    }
    return current
  })
  // Set noteStyle to the first non-empty noteBox style
  const [currentStyle, setCurrentStyle] = useState(() => {
    let current: StateBox = State.New
    for (let i = 0; i < 3; i++) {
      if (noteBox[current].length > 0) {
        return noteBox[current][0].style
      }
    }
    return "basic"
  })
  const [questionHTML, setQuestionHTML] = useState("")
  const [answer1HTML, setAnswer1HTML] = useState("")
  const [answer2HTML, setAnswer2HTML] = useState("")
  const [answer3HTML, setAnswer3HTML] = useState("")
  const value = {
    noteBox: noteBox,
    setNoteBox: setNoteBox,
    open,
    setOpen,
    currentType,
    setCurrentType,
    currentStyle,
    setCurrentStyle,
    questionHTML,
    setQuestionHTML,
    answer1HTML,
    setAnswer1HTML,
    answer2HTML,
    setAnswer2HTML,
    answer3HTML,
    setAnswer3HTML,
  }
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}
