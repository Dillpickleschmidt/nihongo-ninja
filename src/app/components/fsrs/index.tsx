"use client"
import { useCardContext } from "@/context/CardContext"
import { Question as DefaultQuestion, Answer as DefaultAnswer } from "./Default"
import { Card, Note } from "@/lib/supabase/index"
import { DetailedAnswer } from "./DetailedAnswer"

export function Question({ open, note }: { open: boolean; note: SourceNote }) {
  switch (note.source) {
    case "lingq": // lingq is a placeholder for now
      return // returns nothing right now
    default:
      return <DefaultQuestion note={note} />
  }
}

export function Answer({ open, note }: { open: boolean; note: SourceNote }) {
  switch (note.source) {
    case "detailed":
      return <DetailedAnswer open={open} note={note} />
    default:
      return <DefaultAnswer open={open} note={note} />
  }
}

export function QACard() {
  const { open, currentType, noteBox } = useCardContext()
  const note = noteBox[currentType][0]
  if (!note) {
    return null
  }
  return (
    <>
      <Question open={open} note={note} />
      <Answer open={open} note={note} />
    </>
  )
}
export type SourceNote = Note & { card: Card }
