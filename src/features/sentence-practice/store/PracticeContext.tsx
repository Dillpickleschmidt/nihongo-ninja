// store/PracticeContext.tsx
import { createContext, useContext, JSX } from "solid-js"
import type { PracticeState } from "./types"
import type { SetStoreFunction } from "solid-js/store"
import type { CheckResult } from "../core/answer-processing/types"
import { createStore } from "./createStore"

interface PracticeContextValue {
  store: PracticeState
  setStore: SetStoreFunction<PracticeState>
  actions: {
    checkAnswer: () => CheckResult | undefined
    nextQuestion: () => void
    resetInput: () => void
    toggleFurigana: () => void
    updateInput: (value: string) => void
    loadQuestions: (path: string) => Promise<void>
  }
}

const PracticeContext = createContext<PracticeContextValue>()

export function PracticeProvider(props: { children: JSX.Element }) {
  const practiceStore = createStore()

  return (
    <PracticeContext.Provider value={practiceStore}>
      {props.children}
    </PracticeContext.Provider>
  )
}

export function usePracticeStore() {
  const context = useContext(PracticeContext)
  if (!context) {
    throw new Error("usePracticeStore must be used within a PracticeProvider")
  }
  return context
}
