// PracticeModeContext.tsx
import { Card } from "@/types/vocab"
import { createContext, JSX, useContext } from "solid-js"
import { createStore } from "solid-js/store"

export type CurrentPage = "start" | "practice" | "review" | "finish"

export const initialState = {
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
  practiceMode: "readings" as "readings" | "kana",
}

export function PracticeModeContextProvider(props: { children: JSX.Element }) {
  const [practiceModeStore, setPracticeModeStore] = createStore({
    ...initialState,
  })

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

export type PracticeModeContextType = {
  store: typeof initialState
  setStore: (path: string | Partial<typeof initialState>, value?: any) => void
}

const PracticeModeContext = createContext<PracticeModeContextType>()

export function usePracticeModeContext() {
  const context = useContext(PracticeModeContext)
  if (!context) {
    throw new Error(
      "usePracticeModeContext must be used within a PracticeModeContextProvider",
    )
  }
  return context
}
