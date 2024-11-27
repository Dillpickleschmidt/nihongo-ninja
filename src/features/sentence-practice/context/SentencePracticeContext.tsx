// SentencePracticeContext.tsx
import { PracticeQuestion } from "../types"
import { createContext, JSX, useContext } from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import { checkAnswer } from "../answerChecker"

type StoreState = {
  questions: PracticeQuestion[]
  currentQuestionIndex: number
  isLoading: boolean
  error: string | null
  showResult: boolean
  currentInput: string
  path: string | null
  showFurigana: boolean
}

const initialState: StoreState = {
  questions: [],
  currentQuestionIndex: 0,
  isLoading: true,
  error: null,
  showResult: false,
  currentInput: "",
  path: null,
  showFurigana: true,
}

type ContextState = {
  store: StoreState
  setStore: SetStoreFunction<StoreState>
  actions: {
    checkAnswer: () => void
    nextQuestion: () => void
    resetInput: () => void
    toggleFurigana: () => void
    updateInput: (value: string) => void
  }
  result: () => ReturnType<typeof checkAnswer> | null
}

const SentencePracticeContext = createContext<ContextState>()

export function SentencePracticeProvider(props: { children: JSX.Element }) {
  const [store, setStore] = createStore(initialState)

  const result = () => {
    const currentQuestion = store.questions[store.currentQuestionIndex]
    return currentQuestion
      ? checkAnswer(store.currentInput, currentQuestion)
      : null
  }

  const actions = {
    checkAnswer: () => setStore("showResult", true),
    nextQuestion: () => {
      if (store.currentQuestionIndex < store.questions.length - 1) {
        setStore("currentQuestionIndex", (i) => i + 1)
        setStore("showResult", false)
        setStore("currentInput", "")
      }
    },
    resetInput: () => {
      setStore("currentInput", "")
      setStore("showResult", false)
    },
    toggleFurigana: () => setStore("showFurigana", (prev) => !prev),
    updateInput: (value: string) => setStore("currentInput", value),
  }

  return (
    <SentencePracticeContext.Provider
      value={{ store, setStore, actions, result }}
    >
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
