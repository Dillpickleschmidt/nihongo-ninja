"use client"

import { handleCardUpdate, updateCard } from "@/components/fsrs/actions/cards"
import { Card, Note } from "@/lib/supabase"
import { StateBox } from "@/types"
import {
  createContext,
  startTransition,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react"
import { Grade, RecordLog, State, fixDate } from "ts-fsrs"

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
    if (noteBox[currentType]?.length > 0) {
      return noteBox[currentType][0].style || "basic"
    }
    return "basic"
  })
  const [questionHTML, setQuestionHTML] = useState("")
  const [answer1HTML, setAnswer1HTML] = useState("")
  const [answer2HTML, setAnswer2HTML] = useState("")
  const [answer3HTML, setAnswer3HTML] = useState("")

  const rollBackRef = useRef<{ cid: number; nextStateBox: StateBox }[]>([])
  const [rollbackAble, setRollbackAble] = useState(false)

  type ChangeResponse = {
    nextState: State
    nextDue: Date
  }

  async function handleChange(
    res: ChangeResponse,
    note: Note & { card: Card }
  ) {
    const { nextState, nextDue } = res
    if (nextDue) {
      note.card.due = nextDue.toISOString()
    }

    const change = updateStateBox(noteBox, currentType, nextDue)
    // update state and data
    let updatedNoteBox: Array<Note & { card: Card }> = [...noteBox[currentType]]
    updatedNoteBox = updatedNoteBox.slice(1)
    updatedNoteBox = updatedNoteBox.toSorted(
      (a, b) => fixDate(a.card.due).getTime() - fixDate(b.card.due).getTime()
    )
    startTransition(() => {
      // state update is marked as a transition, a slow re-render did not freeze the user interface.
      if (nextState !== State.Review) {
        if (currentType === State.Learning) {
          setNoteBox[currentType]([...updatedNoteBox, note!])
          console.log([...updatedNoteBox, note!])
        } else {
          if (currentType === State.New || currentType === State.Review) {
            setNoteBox[currentType](updatedNoteBox)
          }
          setNoteBox[State.Learning]((pre) => [...pre, note!])
        }
      } else {
        setNoteBox[currentType](updatedNoteBox)
      }
      rollBackRef.current.push({
        cid: note.card.cid,
        nextStateBox:
          nextState === State.Relearning ? State.Learning : nextState,
      })
      if (rollBackRef.current.length > 0 && rollbackAble === false) {
        setRollbackAble(true)
      }
      console.log(
        `Change ${State[currentType]} to ${State[change]}, Card next State: ${State[nextState]},current rollback length ${rollBackRef.current.length}`
      )
      setCurrentType(change)
    })
    return true
  }

  async function handleSchedule(grade: Grade) {
    const note = noteBox[currentType][0]
    const res = await handleCardUpdate(note.cid, new Date(), grade)
    if (res) {
      handleChange(res, note)
      setOpen(false)
    }
  }

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

function RandomNewOrReviewState(noteBox: {
  [key in StateBox]: Array<Note & { card: Card }>
}) {
  if (noteBox[State.New].length === 0) {
    return State.Review
  } else if (noteBox[State.Review].length === 0) {
    return State.New
  } else {
    return Math.random() > 0.5 ? State.Review : State.New
  }
}

function updateStateBox(
  noteBox: { [key in StateBox]: Array<Note & { card: Card }> },
  currentType: StateBox,
  nextDue?: Date
) {
  let change: StateBox = State.New // default State.New
  switch (currentType) {
    case State.New:
      if (noteBox[State.Learning].length > 0) {
        change = State.Learning // new -> learning
      } else if (noteBox[State.Review].length > 0) {
        change = State.Review // new -> review
      }
      break
    case State.Learning:
      if (noteBox[State.Review].length > 0) {
        change = State.Review // learning/relearning -> review
      } else if (noteBox[State.New].length > 0) {
        change = State.New // learning/relearning -> new
      } else {
        change = State.Learning // learning/relearning -> learning/relearning
      }
      break
    case State.Review:
      if (noteBox[State.Learning].length > 0) {
        change = State.Learning // review -> learning
      } else if (noteBox[State.New].length > 0) {
        change = State.New // review -> new
      } else {
        change = State.Review // review -> review
      }
      break
  }
  change =
    change === State.Learning &&
    noteBox[State.Learning].length > 0 &&
    fixDate(noteBox[State.Learning][0].card.due).getTime() -
      new Date().getTime() >
      0
      ? RandomNewOrReviewState(noteBox)
      : change
  return change
}
