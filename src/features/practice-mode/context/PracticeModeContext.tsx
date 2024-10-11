import { createContext, useContext, createSignal, JSX } from "solid-js"
import { Card } from "@/types/vocab"

type PageOptions = "start" | "practice" | "review" | "finished"

type PracticeModeContextType = {
  isAnswerCorrect: () => boolean
  setIsAnswerCorrect: (value: boolean) => void
  hasUserAnswered: () => boolean
  setHasUserAnswered: (value: boolean) => void
  correctEntry: () => Card | undefined
  setCorrectEntry: (value: Card | undefined) => void
  enabledAnswerCategories: () => string[]
  setEnabledAnswerCategories: (value: string[]) => void
  currentCardIndex: () => number
  setCurrentCardIndex: (value: number) => void
  data: () => Card[]
  setData: (value: Card[]) => void
  currentPage: () => PageOptions
  setCurrentPage: (value: PageOptions) => void
  recentlySeenCards: () => Card[] | null
  setRecentlySeenCards: (value: Card[] | null) => void
}

const PracticeModeContext = createContext<PracticeModeContextType>()

export function PracticeModeContextProvider(props: { children: JSX.Element }) {
  const [isAnswerCorrect, setIsAnswerCorrect] = createSignal(false)
  const [hasUserAnswered, setHasUserAnswered] = createSignal(false)
  const [correctEntry, setCorrectEntry] = createSignal<Card | undefined>()
  const [enabledAnswerCategories, setEnabledAnswerCategories] = createSignal<
    string[]
  >([])
  const [currentCardIndex, setCurrentCardIndex] = createSignal(0)
  const [data, setData] = createSignal<Card[]>([])
  const [currentPage, setCurrentPage] = createSignal<PageOptions>("start")
  const [recentlySeenCards, setRecentlySeenCards] = createSignal<Card[] | null>(
    [],
  )

  const contextValue: PracticeModeContextType = {
    isAnswerCorrect,
    setIsAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
    correctEntry,
    setCorrectEntry,
    enabledAnswerCategories,
    setEnabledAnswerCategories,
    currentCardIndex,
    setCurrentCardIndex,
    data,
    setData,
    currentPage,
    setCurrentPage,
    recentlySeenCards,
    setRecentlySeenCards,
  }

  return (
    <PracticeModeContext.Provider value={contextValue}>
      {props.children}
    </PracticeModeContext.Provider>
  )
}

export function usePracticeModeContext() {
  const context = useContext(PracticeModeContext)
  if (!context) {
    throw new Error(
      "usePracticeModeContext must be used within a PracticeModeContextProvider",
    )
  }
  return context
}
