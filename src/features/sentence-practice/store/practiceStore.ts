// store/practiceStore.ts
import { createStore } from "solid-js/store"
import type { PracticeState, AnswerInputs, Difficulty } from "./types"
import { PracticeService } from "../core/PracticeService"
import type { FileLoader } from "./fileLoader"
import type { UnprocessedQuestion } from "../core/conjugation/types"

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
  selectedDifficulty: "easy",
  effectiveDifficulty: "easy",
}

export function createPracticeStore(fileLoader: FileLoader) {
  const [store, setStore] = createStore(initialState)
  const practiceService = new PracticeService()

  function calculateEffectiveDifficulty(
    selectedDifficulty: Difficulty,
    currentQuestion?: UnprocessedQuestion,
  ): Difficulty {
    if (selectedDifficulty === "hard") return "hard"

    const hasBlankSegments = currentQuestion?.answers[0]?.segments.some(
      (segment) =>
        typeof segment === "object" && "blank" in segment && segment.blank,
    )

    return hasBlankSegments ? "easy" : "hard"
  }

  return {
    store,
    setStore,
    actions: {
      checkAnswer: () => {
        const currentQuestion = store.questions[store.currentQuestionIndex]
        if (!currentQuestion) return

        const inputs =
          store.effectiveDifficulty === "easy"
            ? practiceService.fillBlankInputs(store.inputs, currentQuestion)
            : store.inputs

        const result = practiceService.checkAnswer(inputs, currentQuestion)
        setStore("showResult", true)
        setStore("checkResult", result)
        console.log("Check result:", result)
        return result
      },
      updateInput: (value: string, index?: number) => {
        if (store.effectiveDifficulty === "easy" && typeof index === "number") {
          setStore("inputs", "blanks", (blanks = []) => {
            const newBlanks = [...blanks]
            newBlanks[index] = value
            return newBlanks
          })
        } else {
          setStore("inputs", "single", value)
        }

        if (store.showResult) {
          const currentQuestion = store.questions[store.currentQuestionIndex]
          if (currentQuestion) {
            const inputs =
              store.effectiveDifficulty === "easy"
                ? practiceService.fillBlankInputs(store.inputs, currentQuestion)
                : store.inputs

            const result = practiceService.checkAnswer(inputs, currentQuestion)
            setStore("checkResult", result)
          }
        }
      },
      setDifficulty: (difficulty: Difficulty) => {
        const currentQuestion = store.rawQuestions[store.currentQuestionIndex]
        const newEffectiveDifficulty = calculateEffectiveDifficulty(
          difficulty,
          currentQuestion,
        )

        setStore({
          selectedDifficulty: difficulty,
          effectiveDifficulty: newEffectiveDifficulty,
          inputs:
            newEffectiveDifficulty === "easy" ? { blanks: [] } : { single: "" },
          showResult: false,
        })
      },
      nextQuestion: () => {
        if (store.currentQuestionIndex < store.questions.length - 1) {
          const nextIndex = store.currentQuestionIndex + 1
          const nextQuestion = store.rawQuestions[nextIndex]

          const newEffectiveDifficulty = calculateEffectiveDifficulty(
            store.selectedDifficulty,
            nextQuestion,
          )

          setStore({
            currentQuestionIndex: nextIndex,
            effectiveDifficulty: newEffectiveDifficulty,
            showResult: false,
            inputs:
              newEffectiveDifficulty === "easy"
                ? { blanks: [] }
                : { single: "" },
          })
        }
      },
      resetInput: () => {
        setStore(
          "inputs",
          store.effectiveDifficulty === "easy"
            ? { blanks: [] }
            : { single: "" },
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

          const initialEffectiveDifficulty = calculateEffectiveDifficulty(
            store.selectedDifficulty,
            rawQuestions[0],
          )

          setStore({
            rawQuestions,
            questions: processedQuestions,
            isLoading: false,
            effectiveDifficulty: initialEffectiveDifficulty,
            inputs:
              initialEffectiveDifficulty === "easy"
                ? { blanks: [] }
                : { single: "" },
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
    },
  }
}
