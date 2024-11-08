// AlternativeAnswers.tsx
import { For, createMemo } from "solid-js"
import HighlightedText from "./HighlightedText"
import { AnswerMatch } from "../answerChecker"
import { removeFurigana } from "../utils/textExtractor"
import { determinePreferredForm } from "../utils/formAnalyzer"

interface Props {
  matches: AnswerMatch[]
  userInput: string
  currentAnswerIndex: number
}

export default function AlternativeAnswers(props: Props) {
  const preferPolite = createMemo(() =>
    determinePreferredForm(
      props.matches[props.currentAnswerIndex].answer.segments,
    ),
  )

  const alternatives = createMemo(() => {
    const currentPreferPolite = preferPolite()

    return props.matches.filter(
      (match, index) =>
        index !== props.currentAnswerIndex &&
        !match.answer.isVariation &&
        determinePreferredForm(match.answer.segments) === currentPreferPolite,
    )
  })

  return (
    <div class="space-y-2">
      <h3 class="font-bold text-neutral-500">
        Alternative Answers ({preferPolite() ? "Polite Form" : "Casual Form"}):
      </h3>
      <div class="max-h-96 space-y-3 overflow-y-auto">
        <For each={alternatives()}>
          {(match) => (
            <div class="rounded-md border bg-card p-2">
              <div class="mb-1 text-sm text-neutral-600">
                Similarity: {(match.similarity * 100).toFixed(1)}%
              </div>
              <HighlightedText
                text={match.answer.segments.map(removeFurigana).join("")}
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
