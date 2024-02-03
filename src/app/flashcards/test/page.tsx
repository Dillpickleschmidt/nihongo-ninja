import { getNotes } from "@/lib/flashcards/note"
import { Card, Note, State } from "@/lib/supabase/types"
import { cache } from "react"
import CardClient from "@/app/components/fsrs/CardsClient"
import Finish from "@/app/components/fsrs/card/Finish"
import { getTodayLearnedNewCardCount } from "@/lib/log"
import readUserSession from "@/lib/actions/readUserSession"
import { redirect } from "next/navigation"
import { date_scheduler } from "ts-fsrs"

export const dynamic = "force-dynamic"

type DataResponse = {
  uid: number
  now: Date
  todayCount: number
  noteBox0: Array<Array<Note & { card: Card }>>
}

const getData = cache(async (source?: string): Promise<DataResponse> => {
  const { data } = await readUserSession()
  if (!data.session) {
    return redirect("/auth")
  }
  const uid = Number(session.user!!.id)
  let now = new Date()
  if (now.getHours() < 4) {
    now = date_scheduler(now, -1, true)
  }
  const startOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    4,
    0,
    0,
    0
  )
  const { todayCount, limit } = await getTodayLearnedNewCardCount(
    uid,
    startOfDay
  )
  const states = [State.New, State.Learning, State.Relearning, State.Review]
  const noteBox = states.map((state) =>
    getNotes({
      uid: uid,
      take: state === State.New ? Math.max(0, limit - todayCount) : undefined,
      query: {
        card: {
          state,
          due: state === State.Review ? { lte: startOfDay } : undefined,
        },
        source: {
          equals: source,
        },
      },
    })
  )
  const noteBox0 = await Promise.all(noteBox)
  return {
    uid,
    now,
    todayCount,
    noteBox0: noteBox0,
  }
})

export default async function Page({
  searchParams,
}: {
  searchParams: { source?: string }
}) {
  const { noteBox0 } = await getData(searchParams.source)
  const noteBox = noteBox0.map((noteBox) =>
    noteBox.sort(() => Math.random() - Math.random())
  )
  const isFinish = noteBox.every((notes) => notes.length === 0)
  return isFinish ? (
    <Finish />
  ) : (
    <div className="flex justify-center flex-col py-8">
      <CardClient noteBox={noteBox} />
    </div>
  )
}
