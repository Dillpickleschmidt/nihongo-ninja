"use client"

import Button from "@/components/Button"
import { useCardContext } from "@/context/CardContext"
import { useCallback, useEffect } from "react"
import { Grade, Grades, Rating, show_diff_message } from "ts-fsrs"

export default function ShowAnswerButton() {
  const { open, currentType, setOpen, schedule, noteBox, handleSchedule } =
    useCardContext()

  const handleKeyPress = useCallback(
    async (event: React.KeyboardEvent<HTMLElement>) => {
      // Call updateCalc here
      if (!open && event.code === "Space") {
        setOpen(true)
      } else if (open) {
        switch (event.key) {
          case "1":
          case "2":
          case "3":
          case "4":
            await handleSchedule(Number(event.key) as Grade)
            break
        }
      }

      // if ((event.ctrlKey || event.metaKey) && event.key === "z") {
      //   await handleRollBack()
      // }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [open]
  )
  useEffect(() => {
    // attach the event listener
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress(event as unknown as React.KeyboardEvent<HTMLElement>)
    }
    document.addEventListener("keydown", handleKeyDown)

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyPress])

  const note = noteBox[currentType][0]
  if (!note) return null
  const color = ["bg-red-500", "bg-yellow-400", "bg-sky-400", "bg-[#42c672]"]

  console.log("schedule", schedule)

  return !open ? (
    <button
      className="btn mt-4 tooltip tooltip-bottom"
      onClick={() => {
        setOpen(true)
      }}
      data-tip="Press Space to show answer"
    >
      show answer
    </button>
  ) : (
    schedule && (
      <div className="flex justify-center pt-6">
        {Grades.map((grade: Grade) =>
          show_diff_message(
            schedule[grade].card.due,
            schedule[grade].card.last_review as Date,
            true
          )
        ).map((time: string, index: number) => (
          <Button
            key={Rating[(index + 1) as Grade]}
            variant="card"
            className={`text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold ${color[index]}`}
            onClick={async (e) => await handleSchedule((index + 1) as Grade)}
            data-tip={time}
          >
            <div className="flex flex-row items-center">
              Test
              <span>{Rating[(index + 1) as Grade]}</span>
              <span className="hidden sm:inline">
                <kbd className={`kbd kbd-sm dark:text-black dark:bg-slate-200`}>
                  {index + 1}
                </kbd>
              </span>
            </div>
          </Button>
        ))}
      </div>
    )
  )

  return (
    <div className="flex justify-center gap-6">
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold"
      >
        <div className="flex flex-row items-center">
          Again
          <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
            1
          </span>
        </div>
      </Button>
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold"
      >
        Hard
        <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-55 rounded-md inline-flex items-center justify-center text-sm">
          2
        </span>
      </Button>
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold"
      >
        Good
        <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-45 rounded-md inline-flex items-center justify-center text-sm">
          3
        </span>
      </Button>
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold"
      >
        Easy
        <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
          4
        </span>
      </Button>
    </div>
  )
}
