import { Card } from "@/types/vocab"
import { createContext, JSX, useContext } from "solid-js"
import { createStore } from "solid-js/store"

export type CurrentPage = "start" | "practice" | "review" | "finish"

const [practiceModeStore, setPracticeModeStore] = createStore({
  data: [] as Card[],
  activeDeck: [] as Card[],
  activeDeckSize: 0,
  cardsTakenFromDataCount: 0,
  currentCardIndex: 0,
  currentPage: "start" as CurrentPage,
  shuffleInput: true,
  recentlySeenCards: [] as Card[],
  enabledAnswerCategories: [] as string[],
  hasUserAnswered: false,
  isAnswerCorrect: false,
})

export type PracticeModeContextType = {
  store: typeof practiceModeStore
  setStore: typeof setPracticeModeStore
}

const PracticeModeContext = createContext<PracticeModeContextType>()

export function PracticeModeContextProvider(props: { children: JSX.Element }) {
  const contextValue: PracticeModeContextType = {
    store: practiceModeStore,
    setStore: setPracticeModeStore,
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
