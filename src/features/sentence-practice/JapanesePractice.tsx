import { createMemo, Show, createEffect, createSignal } from "solid-js"
import PromptDisplay from "./components/PromptDisplay"
import AnswerInput from "./components/AnswerInput"
import HighlightedText from "./components/HighlightedText"
import { FeedbackDisplay } from "./components/FeedbackDisplay"
import { generateFeedback } from "./utils/feedback"
import { checkAnswer } from "./answerChecker"
import { useSentencePractice } from "./context/SentencePracticeContext"
import { PracticeQuestion } from "./types"
import { AlternativeAnswers } from "./components/AlternativeAnswers"
import { removeFurigana } from "./utils/textExtractor"
import { Button } from "@/components/ui/button"
import { createAnswerVariations } from "./utils/answerVariations"

const questionModules = import.meta.glob<{
  default: PracticeQuestion[]
}>("./data/**/*.json", { eager: true })

type JapanesePracticeProps = {
  path: string
}

export default function JapanesePractice(props: JapanesePracticeProps) {
  const { store, setStore } = useSentencePractice()
  const [showFurigana, setShowFurigana] = createSignal(true)

  // Updates when input or current question changes
  const result = createMemo(() => {
    const currentQuestion = store.questions[store.currentQuestionIndex]
    return currentQuestion
      ? checkAnswer(store.currentInput, currentQuestion)
      : null
  })

  createEffect(() => {
    if (props.path !== store.path) {
      setStore("path", props.path)

      try {
        const filePath = `./data/${props.path}.json`
        if (filePath in questionModules) {
          const originalQuestions = questionModules[filePath].default
          const questionsWithVariations =
            createAnswerVariations(originalQuestions)
          console.log(questionsWithVariations[0])
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

  const handleNext = () => {
    // Go to next question
    if (store.currentQuestionIndex < store.questions.length - 1) {
      setStore("currentQuestionIndex", (i) => i + 1)
      setStore("showResult", false)
      setStore("currentInput", "")
    }
  }

  return (
    <div class="mx-auto max-w-2xl space-y-4 px-4 pb-32 pt-12">
      <Show when={!store.isLoading} fallback={<div>Loading questions...</div>}>
        <Show
          when={store.questions[store.currentQuestionIndex]} // Question is loaded
          fallback={<div>No questions available for {props.path}</div>}
        >
          <div class="-mb-2 text-base text-neutral-500">
            Question {store.currentQuestionIndex + 1} of{" "}
            {store.questions.length}
          </div>
          <PromptDisplay
            question={store.questions[store.currentQuestionIndex]!}
          />
          <AnswerInput
            value={store.currentInput}
            onInput={(value) => setStore("currentInput", value)}
            onCheckAnswer={() => setStore("showResult", true)}
            onReset={() => {
              setStore("currentInput", "")
              setStore("showResult", false)
            }}
            furiganaEnabled={showFurigana}
            onToggleFurigana={() => setShowFurigana((prev) => !prev)}
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

              <Show when={result()!.isCorrect}>
                {/* <div class="rounded bg-green-50 p-3 dark:bg-green-50/10">
                  <div class="font-bold text-green-800 dark:text-green-600">
                    Correct! ✨
                  </div> */}
                {result()!.bestMatch.notes && (
                  <div class="mt-1 text-sm text-green-700">
                    Note: {result()!.bestMatch.notes}
                  </div>
                )}
                {/* </div> */}
              </Show>

              <Show when={!result()!.isCorrect}>
                <div class="space-y-1">
                  <div class="font-bold">Correct answer:</div>
                  <div
                    class={`rounded border text-xl ${showFurigana() ? "px-2 pb-1 pt-3" : "p-2"}`}
                  >
                    <HighlightedText
                      text={
                        showFurigana()
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
                <Button
                  onClick={handleNext}
                  size="lg"
                  class="bg-green-400 px-5 text-base font-normal text-black hover:bg-green-600 dark:bg-green-500"
                >
                  Next Question
                </Button>
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
