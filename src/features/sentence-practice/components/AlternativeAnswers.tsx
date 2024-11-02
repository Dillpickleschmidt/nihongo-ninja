import { Component, For } from "solid-js"
import { HighlightedText } from "./HighlightedText"
import { AnswerMatch } from "../answerChecker"
import { extractText } from "../utils/textExtractor"

interface Props {
  matches: AnswerMatch[]
  userInput: string
  currentAnswerIndex: number
}

export const AlternativeAnswers: Component<Props> = (props) => {
  const alternatives = () => {
    return props.matches
      .filter((_, index) => index !== props.currentAnswerIndex)
      .slice(0, 5)
  }

  return (
    <div class="space-y-2">
      <h3 class="font-bold text-neutral-500">Alternative Answers:</h3>
      <div class="space-y-3">
        <For each={alternatives()}>
          {(match) => (
            <div class="rounded border bg-card p-2">
              <div class="mb-1 text-sm text-neutral-600">
                Similarity: {(match.similarity * 100).toFixed(1)}%
              </div>
              <HighlightedText
                text={match.answer.segments.map(extractText).join("")}
                errors={match.answerErrors}
                highlightClass="dark:bg-amber-500 bg-amber-400 text-black font-medium dark:saturate-[85%]"
              />
              {match.answer.notes && (
                <div class="mt-1 text-sm text-neutral-500">
                  Note: {match.answer.notes}
                </div>
              )}
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
