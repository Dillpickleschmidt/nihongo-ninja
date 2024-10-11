import { createContext, useContext, createSignal } from "solid-js"
import { QuizItem } from "@/types/video-quiz"

type VideoQuizContextProps = {
  children: any
}

type VideoQuizContextType = {
  correctEntry: () => QuizItem | undefined
  setCorrectEntry: (entry: QuizItem | undefined) => void
  isAnswerCorrect: () => boolean
  setIsAnswerCorrect: (isCorrect: boolean) => void
  hasUserAnswered: () => boolean
  setHasUserAnswered: (hasAnswered: boolean) => void
}

const VideoQuizContext = createContext<VideoQuizContextType>()

export function VideoQuizProvider(props: VideoQuizContextProps) {
  const [correctEntry, setCorrectEntry] = createSignal<QuizItem>()
  const [isAnswerCorrect, setIsAnswerCorrect] = createSignal(false)
  const [hasUserAnswered, setHasUserAnswered] = createSignal(false)

  return (
    <VideoQuizContext.Provider
      value={{
        correctEntry,
        setCorrectEntry,
        isAnswerCorrect,
        setIsAnswerCorrect,
        hasUserAnswered,
        setHasUserAnswered,
      }}
    >
      {props.children}
    </VideoQuizContext.Provider>
  )
}

export function useVideoQuizContext() {
  const context = useContext(VideoQuizContext)
  if (!context) {
    throw new Error(
      "useVideoQuizContext must be used within a VideoQuizProvider",
    )
  }
  return context
}
