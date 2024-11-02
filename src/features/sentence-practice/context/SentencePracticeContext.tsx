import { PracticeQuestion } from "../types"
import { createContext, JSX, useContext } from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"

type StoreState = {
  questions: PracticeQuestion[]
  currentQuestionIndex: number
  isLoading: boolean
  error: string | null
  showResult: boolean
  currentInput: string
  path: string | null
}

const initialState: StoreState = {
  questions: [],
  currentQuestionIndex: 0,
  isLoading: false,
  error: null,
  showResult: false,
  currentInput: "",
  path: null,
}

type ContextState = {
  store: StoreState
  setStore: SetStoreFunction<StoreState>
}

const SentencePracticeContext = createContext<ContextState>()

export function SentencePracticeProvider(props: { children: JSX.Element }) {
  const [store, setStore] = createStore(initialState)

  return (
    <SentencePracticeContext.Provider value={{ store, setStore }}>
      {props.children}
    </SentencePracticeContext.Provider>
  )
}

export function useSentencePractice() {
  const context = useContext(SentencePracticeContext)
  if (!context) {
    throw new Error(
      "useSentencePractice must be used within a SentencePracticeProvider",
    )
  }
  return context
}
