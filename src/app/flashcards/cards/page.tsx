import { getNotes } from "@/components/fsrs/actions/notes"
import { Card, Note } from "@/lib/supabase/index"
import {
  getUserID,
  readRedirectUserSession,
} from "@/lib/supabase/user-session/userSession"
import { date_scheduler, State } from "ts-fsrs"
import { getTodayLearnedNewCardCount } from "@/components/fsrs/actions/logs"
import Finish from "./components/Finish"

async function getData() {
  await readRedirectUserSession()
  const user_id = await getUserID()

  let now = new Date()
  // If current hour is before 4 AM, adjust 'now' to be one day earlier
  if (now.getHours() < 4) {
    now = date_scheduler(now, -1, true)
  }
  // Set start of day to 4 AM
  const startOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    4,
    0,
    0,
    0
  )
  // ** Every time the card is fetched (every time show answer is clicked), it calls updateSchedule, which calls updateCard, which adds records to revlog
  const { todayCount, limit } = await getTodayLearnedNewCardCount(
    user_id,
    startOfDay
  )

  const states = [State.New, State.Learning, State.Relearning, State.Review]
  const noteBox = states.map(async (state) => {
    return getNotes({
      user_id: user_id,
      state: state,
      due: startOfDay.toISOString(), // Convert startOfDay to string
      takeLimit:
        state === State.New ? Math.max(0, limit - todayCount) : undefined, // If state is New, take the max of 0 and limit-startOfDay. If state is not New, take all notes.
    })
  })
  const noteBox0 = await Promise.all(noteBox)
  return {
    user_id: user_id,
    now,
    todayCount,
    noteBox0: noteBox0,
  }
}

export default async function Page() {
  const { noteBox0 } = await getData()
  const noteBox = noteBox0
    .filter((noteBox) => noteBox !== null) // Filter out null values
    .map((noteBox) =>
      noteBox ? noteBox.sort(() => Math.random() - Math.random()) : []
    ) // Randomize the order of the notes

  const isFinish = noteBox.every((notes) => notes.length === 0)
  return isFinish ? (
    <Finish />
  ) : (
    <div className="flex justify-center flex-col py-8">
      {/* <CardClient noteBox={noteBox} /> */}
      Placeholder
    </div>
  )
}
