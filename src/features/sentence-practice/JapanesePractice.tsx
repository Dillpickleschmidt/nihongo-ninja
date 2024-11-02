import { createMemo, Show, createEffect } from "solid-js"
import { QuestionDisplay } from "./components/QuestionDisplay"
import { AnswerInput } from "./components/AnswerInput"
import { HighlightedText } from "./components/HighlightedText"
import { FeedbackDisplay } from "./components/FeedbackDisplay"
import { checkAnswer } from "./answerChecker"
import { generateFeedback } from "./utils/feedback"
import { useSentencePractice } from "./context/SentencePracticeContext"
import { PracticeQuestion } from "./types"
import { AlternativeAnswers } from "./components/AlternativeAnswers"
import { extractText } from "./utils/textExtractor"

const questionModules = import.meta.glob<{
  default: PracticeQuestion[]
}>("./data/**/*.json", { eager: true })

type JapanesePracticeProps = {
  path: string
}

export default function JapanesePractice(props: JapanesePracticeProps) {
  const { store, setStore } = useSentencePractice()

  const result = createMemo(() => {
    const currentQuestion = store.questions[store.currentQuestionIndex]
    return currentQuestion
      ? checkAnswer(store.currentInput, currentQuestion)
      : null
  })

  createEffect(() => {
    if (props.path !== store.path) {
      setStore("isLoading", true)
      setStore("error", null)
      setStore("path", props.path)

      try {
        const filePath = `./data/${props.path}.json`
        if (filePath in questionModules) {
          setStore("questions", questionModules[filePath].default)
        } else {
          throw new Error(`File not found: ${filePath}`)
        }
      } catch (e) {
        setStore("error", e instanceof Error ? e.message : "Unknown error")
        setStore("questions", [])
      } finally {
        setStore("isLoading", false)
      }
    }
  })

  const handleNext = () => {
    if (store.currentQuestionIndex < store.questions.length - 1) {
      setStore("currentQuestionIndex", (i) => i + 1)
      setStore("showResult", false)
      setStore("currentInput", "")
    }
  }

  return (
    <div class="mx-auto max-w-2xl space-y-4 p-4">
      <Show when={!store.isLoading} fallback={<div>Loading questions...</div>}>
        <Show
          when={store.questions[store.currentQuestionIndex]}
          fallback={<div>No questions available for {props.path}</div>}
        >
          <div class="mb-4 text-base text-neutral-500">
            Question {store.currentQuestionIndex + 1} of{" "}
            {store.questions.length}
          </div>
          <QuestionDisplay
            question={store.questions[store.currentQuestionIndex]!}
          />
          <AnswerInput
            value={store.currentInput}
            onInput={(value) => setStore("currentInput", value)}
            onCheck={() => setStore("showResult", true)}
            onReset={() => {
              setStore("currentInput", "")
              setStore("showResult", false)
            }}
          />
          <Show when={store.showResult && result()}>
            <div class="space-y-4">
              <div class="space-y-1">
                <div class="font-bold">Your answer:</div>
                <div class="rounded border p-2 text-xl">
                  <HighlightedText
                    text={store.currentInput}
                    errors={result()!.userErrors}
                    highlightClass="bg-red-400 dark:bg-red-500 text-black font-medium"
                  />
                </div>
              </div>

              <Show when={result()!.isCorrect}>
                <div class="rounded bg-green-50 p-3 dark:bg-green-50/10">
                  <div class="font-bold text-green-800 dark:text-green-600">
                    Correct! ✨
                  </div>
                  {result()!.bestMatch.notes && (
                    <div class="mt-1 text-sm text-green-700">
                      Note: {result()!.bestMatch.notes}
                    </div>
                  )}
                </div>
              </Show>

              <Show when={!result()!.isCorrect}>
                <div class="space-y-1">
                  <div class="font-bold">Correct answer:</div>
                  <div class="rounded border p-2 text-xl">
                    <HighlightedText
                      text={result()!
                        .bestMatch.segments.map(extractText)
                        .join("")}
                      errors={result()!.answerErrors}
                      highlightClass="bg-green-500 text-black font-medium"
                    />
                  </div>
                </div>

                {/* <Show when={generateFeedback(result()!, store.currentInput)}>
                  {(feedback) => <FeedbackDisplay feedback={feedback()} />}
                </Show> */}
              </Show>

              <Show when={result()!.allMatches.length > 1}>
                <AlternativeAnswers
                  matches={result()!.allMatches}
                  userInput={store.currentInput}
                  currentAnswerIndex={0}
                />
              </Show>

              <Show
                when={store.currentQuestionIndex < store.questions.length - 1}
              >
                <button
                  onClick={handleNext}
                  class="rounded bg-green-400 px-4 py-2 text-white hover:bg-green-600 dark:bg-green-500"
                >
                  Next Question
                </button>
              </Show>
            </div>
          </Show>
        </Show>
      </Show>

      <Show when={store.error}>
        <div class="text-red-600">Error loading questions: {store.error}</div>
      </Show>
    </div>
  )
}
