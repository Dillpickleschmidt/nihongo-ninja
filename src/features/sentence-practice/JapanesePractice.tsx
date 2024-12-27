// JapanesePractice.tsx
import { Show, createEffect } from "solid-js"
import PromptDisplay from "./components/PromptDisplay"
import AnswerInput from "./components/AnswerInput"
import HighlightedText from "./components/HighlightedText"
import AlternativeAnswers from "./components/AlternativeAnswers"
import { removeFurigana } from "./utils/textExtractor"
import ProgressDisplay from "./components/ProgressDisplay"
import { useSentencePractice } from "./context/SentencePracticeContext"
import { createAnswerVariations } from "./createAnswerVariations"
import { PracticeQuestion } from "./types"

const questionModules = import.meta.glob<{
  default: PracticeQuestion[]
}>("./data/**/*.json", { eager: true })

type JapanesePracticeProps = {
  path: string
}

export default function JapanesePractice(props: JapanesePracticeProps) {
  const { store, setStore, result } = useSentencePractice()

  createEffect(() => {
    if (props.path !== store.path) {
      setStore("path", props.path)
      setStore("currentQuestionIndex", 0)
      setStore("currentInput", "")
      setStore("showResult", false)
      setStore("isLoading", true)
      setStore("error", null)

      try {
        const filePath = `./data/${props.path}.json`
        if (filePath in questionModules) {
          const originalQuestions = questionModules[filePath].default
          const questionsWithVariations =
            createAnswerVariations(originalQuestions)
          setStore("questions", questionsWithVariations)
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

  return (
    <div class="mx-auto max-w-2xl space-y-4 px-4 pb-32 pt-12 lg:pt-24">
      <Show when={!store.isLoading} fallback={<div>Loading questions...</div>}>
        <Show
          when={store.questions[store.currentQuestionIndex]}
          fallback={<div>No questions available for {props.path}</div>}
        >
          <PromptDisplay
            question={store.questions[store.currentQuestionIndex]!}
          />
          <AnswerInput />
          <ProgressDisplay
            attempted={store.currentQuestionIndex + 1}
            total={store.questions.length}
          />
          <Show when={store.showResult && result()}>
            <div class="space-y-4">
              <div class="space-y-1">
                <div class="font-bold">Your answer:</div>
                <div class="flex w-full items-center">
                  <div
                    class={`w-full rounded border-2 p-2 text-xl ${result()!.isCorrect && "border-green-500/75 bg-green-500/15"}`}
                  >
                    <HighlightedText
                      text={store.currentInput}
                      errors={result()!.userErrors}
                      highlightClass="bg-red-400 dark:bg-red-500 text-black font-medium"
                    />
                  </div>
                  <Show when={!result()!.isCorrect}>
                    <div class="w-12 text-center text-4xl font-bold text-red-500">
                      &times;
                    </div>
                  </Show>
                  <Show when={result()!.isCorrect}>
                    <div class="w-12 text-center text-3xl font-bold text-green-500">
                      &check;
                    </div>
                  </Show>
                </div>
              </div>

              <Show when={result()!.isCorrect && result()!.bestMatch.notes}>
                <div class="mt-1 text-sm text-green-700">
                  Note: {result()!.bestMatch.notes}
                </div>
              </Show>

              <Show when={!result()!.isCorrect}>
                <div class="space-y-1">
                  <div class="font-bold">Correct answer:</div>
                  <div
                    class={`rounded border text-xl ${store.showFurigana ? "px-2 pb-1 pt-3" : "p-2"}`}
                  >
                    <HighlightedText
                      text={
                        store.showFurigana
                          ? result()!.bestMatch.segments.join(" ")
                          : result()!
                              .bestMatch.segments.map(removeFurigana)
                              .join("")
                      }
                      errors={result()!.answerErrors}
                      highlightClass="bg-green-500 text-black font-medium"
                      furiganaSize="1rem"
                    />
                  </div>
                </div>
              </Show>

              <Show when={result()!.allMatches.length > 1}>
                <AlternativeAnswers
                  matches={result()!.allMatches}
                  userInput={store.currentInput}
                  currentAnswerIndex={0}
                />
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
