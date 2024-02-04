import { getNotes } from "@/lib/flashcards/note"
import { Card, Note } from "@/lib/supabase/index"
import { cache } from "react"
import CardClient from "@/app/components/fsrs/CardsClient"
import Finish from "@/app/components/fsrs/card/Finish"
import { getTodayLearnedNewCardCount } from "@/lib/flashcards/log"
import { getUserUid, checkSession } from "@/lib/actions/userSession"
import { date_scheduler, State } from "ts-fsrs"

export const dynamic = "force-dynamic"

type DataResponse = {
  uid: string
  now: Date
  todayCount: number
  noteBox0: Array<Array<Note & { card: Card }>>
}

const getData = cache(async (source?: string): Promise<DataResponse> => {
  await checkSession()
  const uid = await getUserUid()

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
  // limit is the number of NEW cards that can be learned today
  const states = [State.New, State.Learning, State.Relearning, State.Review]
  const noteBox = states.map(async (state) => {
    return getNotes({
      uid: uid,
      state: state,
      reviewDate: startOfDay.toISOString(), // Convert startOfDay to string
      takeLimit: state === State.New ? Math.max(0, limit - todayCount) : -1, // -1 means no limit
    })
  })
  const noteBox0 = await Promise.all(noteBox)
  return {
    uid: uid,
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
