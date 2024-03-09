import { useCardContext } from "@/context/CardContext"
import { State } from "ts-fsrs"

export default function StatusBar() {
  const { noteBox, currentType } = useCardContext()

  return (
    <div className="flex justify-center gap-6">
      <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-sky-400">
        {currentType === State.New ? (
          <span className="underline underline-offset-4">
            {noteBox[State.New].length}
          </span>
        ) : (
          noteBox[State.New].length
        )}
      </div>
      <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 bg-red-500">
        {currentType === State.Learning ? (
          <span className="underline underline-offset-4">
            {noteBox[State.Learning].length}
          </span>
        ) : (
          noteBox[State.Learning].length
        )}
      </div>
      <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 bg-[#42c672]">
        {currentType === State.Review ? (
          <span className="underline underline-offset-4">
            {noteBox[State.Review].length}
          </span>
        ) : (
          noteBox[State.Review].length
        )}
      </div>
    </div>
  )
}
