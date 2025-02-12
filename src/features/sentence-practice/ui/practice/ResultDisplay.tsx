import { Show, createSignal } from "solid-js"
import { usePracticeStore } from "../../store/PracticeContext"
import FuriganaText from "../common/FuriganaText"
import type { CheckResult } from "../../core/answer-processing/types"
import AlternativeAnswers from "./AlternativeAnswers"
import "@/app.css"

export default function ResultDisplay() {
  const [currentAnswerIndex, setCurrentAnswerIndex] = createSignal(0)
  const { store } = usePracticeStore()

  return (
    <>
      {/* Inline style for <rt> elements */}
      <style>
        {`
          .highlight rt {
            color: hsl(var(--primary));
          }
        `}
      </style>

      <Show when={store.checkResult} keyed>
        {(checkResult: CheckResult) => (
          <div class="space-y-4">
            {/* User's Answer Section */}
            <div class="space-y-1">
              <div class="font-bold">Your answer:</div>
              <div class="flex w-full items-center">
                <div
                  class={`w-full rounded border-2 p-2 text-xl ${
                    checkResult.isCorrect
                      ? "border-green-500/75 bg-green-500/15"
                      : ""
                  }`}
                >
                  <FuriganaText
                    text={store.currentInput}
                    errors={checkResult.userErrors}
                    highlightClass="rounded bg-red-400 dark:bg-red-500 text-black font-medium highlight"
                  />
                </div>
                <Show
                  when={checkResult.isCorrect}
                  fallback={
                    <div class="w-12 text-center text-4xl font-bold text-red-500">
                      ×
                    </div>
                  }
                >
                  <div class="w-12 text-center text-3xl font-bold text-green-500">
                    ✓
                  </div>
                </Show>
              </div>
            </div>

            {/* Correct Answer Section */}
            <Show when={!checkResult.isCorrect}>
              <div class="space-y-1">
                <div class="font-bold">Correct answer:</div>
                <div
                  class={`rounded border text-xl ${
                    store.showFurigana ? "px-2 pb-1 pt-3" : "p-2"
                  }`}
                >
                  <FuriganaText
                    text={
                      store.showFurigana
                        ? checkResult.bestMatch.segments.join(" ")
                        : checkResult.bestMatch.segments.join("")
                    }
                    errors={checkResult.answerErrors}
                    highlightClass="rounded bg-green-500 text-black font-medium highlight"
                  />
                </div>
              </div>
            </Show>

            {/* Alternative Answers Section */}
            <Show when={checkResult.allMatches.length > 1}>
              <AlternativeAnswers
                allMatches={checkResult.allMatches}
                currentAnswerIndex={currentAnswerIndex()}
                showFurigana={store.showFurigana}
                bestMatchPoliteForm={
                  checkResult.bestMatch.originalPoliteForm ?? false
                }
              />
            </Show>
          </div>
        )}
      </Show>
    </>
  )
}
