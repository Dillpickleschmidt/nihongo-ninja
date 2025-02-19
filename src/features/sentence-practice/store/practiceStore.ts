// store/practiceStore.ts
import { createStore } from "solid-js/store"
import type { PracticeState } from "./types"
import { PracticeService } from "../core/PracticeService"
import type { FileLoader } from "./fileLoader"
import type { Difficulty } from "./types"

const initialState: PracticeState = {
  questions: [],
  rawQuestions: [],
  currentQuestionIndex: 0,
  currentInput: "",
  showResult: false,
  isLoading: true,
  error: null,
  path: null,
  showFurigana: true,
  difficulty: "easy",
  inputs: [],
  inputResults: [],
}

export function createPracticeStore(fileLoader: FileLoader) {
  const [store, setStore] = createStore(initialState)
  const practiceService = new PracticeService()

  return {
    store,
    setStore,
    actions: {
      checkAnswer: () => {
        const currentQuestion = store.questions[store.currentQuestionIndex]
        if (!currentQuestion) return

        const result = practiceService.checkAnswer(
          store.currentInput,
          currentQuestion,
        )
        setStore({
          showResult: true,
          checkResult: result,
        })
        return result
      },
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
      updateInput: (value: string) => {
        setStore("currentInput", value)
        // If we've already shown a result, keep checking on each change
        if (store.showResult) {
          const currentQuestion = store.questions[store.currentQuestionIndex]
          if (!currentQuestion) return

          const result = practiceService.checkAnswer(value, currentQuestion)
          setStore("checkResult", result)
        }
      },
      loadQuestions: async (path: string) => {
        setStore("path", path)
        setStore("currentQuestionIndex", 0)
        setStore("currentInput", "")
        setStore("showResult", false)
        setStore("isLoading", true)
        setStore("error", null)

        try {
          const rawQuestions = await fileLoader.loadQuestionFile(path)
          setStore("rawQuestions", rawQuestions)
          const processedQuestions =
            practiceService.prepareQuestions(rawQuestions)
          setStore("questions", processedQuestions)
          setStore("isLoading", false)
        } catch (e) {
          setStore("error", e instanceof Error ? e.message : "Unknown error")
          setStore("questions", [])
          setStore("isLoading", false)
        }
      },
      setDifficulty: (difficulty: Difficulty) => {
        setStore("difficulty", difficulty)
      },
      updateBlankInput: (index: number, value: string) => {
        setStore("inputs", (inputs) => {
          const newInputs = [...inputs]
          newInputs[index] = value
          return newInputs
        })
      },
      resetInputs: () => {
        setStore("inputs", [])
      },
    },
  }
}
