// import getFormattedDate from "@/lib/format"
// import { getNotesOrdered } from "@/lib/flashcards/note"
import Link from "next/link"
import React, { cache } from "react"
import { Card, Note } from "@/lib/supabase"
import { State } from "ts-fsrs"
import Menu from "@/components/fsrs/menu"
import { getUserUid } from "@/lib/supabase/user-session/userSession"

// const getData = cache(async (start: number, searchWord: string) => {
//   console.log("cache miss:" + start)
//   const uid = await getUserUid()
//   const subNotes: { [key: string]: Array<Note> } = {}
//   var newCnt = 0
//   var learningCnt = 0
//   var reviewCnt = 0

//   const notes = await getNotesOrdered({
//     uid: uid,
//     takeLimit: start === 0 ? -1 : start,
//     query: { question: { contains: searchWord } },
//     order: { card: { due: "desc" } },
//   })
//   notes.forEach((note: Note) => {
//     if (note.answer.length > 0) {
//       const category = note.question.substring(0, 1).toUpperCase()
//       if (!subNotes[category]) {
//         subNotes[category] = []
//       }
//       subNotes[category].push(note)
//     } else {
//       if (!subNotes["#"]) {
//         subNotes["#"] = []
//       }
//       subNotes["#"].push(note)
//     }
//     switch (note.cid.state) {
//       case State.New:
//         newCnt++
//         break
//       case State.Learning:
//       case State.Relearning:
//         learningCnt++
//         break
//       case State.Review:
//         reviewCnt++
//         break
//     }
//   })
//   return {
//     subNotes,
//     newCnt,
//     learningCnt,
//     reviewCnt,
//   }
// })

export default async function Page({
  searchParams,
}: {
  searchParams: { take: string; s: string }
}) {
  const take = searchParams["take"] ? Number(searchParams["take"]) : 0
  const searchWord = searchParams["s"] ? searchParams["s"] : ""
  // const { subNotes, newCnt, learningCnt, reviewCnt } = await getData(
  //   take,
  //   searchWord
  // )

  return (
    <div className="bg-base-200 h-screen">
      <div className="w-full sm:flex sm:flex-wrap sm:justify-center bg-base-200">
        {/* <div className="menu-title flex justify-start text-lg">
          Notes {`New:${newCnt},Learning:${learningCnt},Review:${reviewCnt}`}
        </div> */}
        <Menu />
        {/* <div className="w-full sm:flex sm:flex-wrap sm:justify-center ">
          <ul className="menu bg-base-200 rounded-box w-full sm:w-1/2">
            {Object.keys(subNotes)
              .sort()
              .map((key: string, index: number) => (
                <li key={key}>
                  <details
                    open={
                      index == 0 || (searchWord !== null && searchWord !== "")
                    }
                  >
                    <summary className="text-lg">{key}</summary>
                    <ul>
                      {subNotes[key].map((note) => (
                        <li key={note.nid}>
                          <Link href={`/note/${note.nid}`} legacyBehavior>
                            <div className="w-full">
                              <div className="text-lg">{note.question}</div>
                              <div className="text-sm">
                                {`(${note.cid.state})next:${getFormattedDate(
                                  new Date(note.cid!.due)
                                )}`}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
          </ul>
        </div> */}
      </div>
    </div>
  )
}
