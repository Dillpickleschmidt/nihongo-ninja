// store/practiceStore.ts
import { createStore } from "solid-js/store"
import type { PracticeState, AnswerInputs } from "./types"
import { PracticeService } from "../core/PracticeService"
import type { FileLoader } from "./fileLoader"
import type { Difficulty } from "./types"

const initialState: PracticeState = {
  questions: [],
  rawQuestions: [],
  currentQuestionIndex: 0,
  inputs: {
    single: "",
    blanks: [],
  },
  showResult: false,
  isLoading: true,
  error: null,
  path: null,
  showFurigana: true,
  difficulty: "easy",
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

        const filledInputs = practiceService.fillBlankInputs(
          store.inputs,
          currentQuestion,
        )

        const result = practiceService.checkAnswer(
          filledInputs,
          currentQuestion,
        )
        console.log("Check result in practiceStore:", result)
        setStore("showResult", true)
        setStore("checkResult", result)
        console.log("Check result:", result)
        return result
      },
      updateInput: (value: string, index?: number) => {
        if (store.difficulty === "easy" && typeof index === "number") {
          setStore("inputs", "blanks", (blanks = []) => {
            const newBlanks = [...blanks]
            newBlanks[index] = value
            console.log("New blanks:", newBlanks)
            return newBlanks
          })
        } else {
          setStore("inputs", "single", value)
        }

        if (store.showResult) {
          const currentQuestion = store.questions[store.currentQuestionIndex]
          if (currentQuestion) {
            const filledInputs = practiceService.fillBlankInputs(
              store.inputs,
              currentQuestion,
            )

            const result = practiceService.checkAnswer(
              filledInputs,
              currentQuestion,
            )
            setStore("checkResult", result)
          }
        }
      },
      nextQuestion: () => {
        if (store.currentQuestionIndex < store.questions.length - 1) {
          setStore({
            currentQuestionIndex: store.currentQuestionIndex + 1,
            showResult: false,
            inputs: { single: "", blanks: [] },
          })
        }
      },
      resetInput: () => {
        setStore(
          "inputs",
          store.difficulty === "easy" ? { blanks: [] } : { single: "" },
        )
        setStore("showResult", false)
      },
      toggleFurigana: () => setStore("showFurigana", (prev) => !prev),
      loadQuestions: async (path: string) => {
        setStore({
          path,
          currentQuestionIndex: 0,
          inputs: { single: "", blanks: [] },
          showResult: false,
          isLoading: true,
          error: null,
        })

        try {
          const rawQuestions = await fileLoader.loadQuestionFile(path)
          const processedQuestions =
            practiceService.prepareQuestions(rawQuestions)
          setStore({
            rawQuestions,
            questions: processedQuestions,
            isLoading: false,
          })
        } catch (e) {
          setStore({
            error: e instanceof Error ? e.message : "Unknown error",
            questions: [],
            rawQuestions: [],
            isLoading: false,
          })
        }
      },
      setDifficulty: (difficulty: Difficulty) => {
        setStore({
          difficulty,
          inputs: difficulty === "easy" ? { blanks: [] } : { single: "" },
          showResult: false,
        })
      },
    },
  }
}
