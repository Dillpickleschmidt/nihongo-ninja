// ui/practice/FillInBlankInput.tsx
import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import type { ConjugatableSegment } from "../../core/conjugation/types"
import { usePracticeStore } from "../../store/PracticeContext"
import { TextProcessor } from "../../core/text/TextProcessor"
import PracticeInput from "./PracticeInput"

interface FillInBlankInputProps {
  segments: ConjugatableSegment[]
}

const textProcessor = new TextProcessor()

export default function FillInBlankInput(props: FillInBlankInputProps) {
  const { store, actions } = usePracticeStore()
  const isLastQuestion =
    store.currentQuestionIndex === store.questions.length - 1
  const isAnswerCorrect = () => store.showResult && store.checkResult?.isCorrect

  const handleMainButton = () => {
    if (isAnswerCorrect()) {
      actions.nextQuestion()
    } else {
      actions.checkAnswer()
    }
  }

  const displaySegments = textProcessor.processSegmentsForDisplay(
    props.segments,
  )

  return (
    <div class="space-y-4">
      <div class="text-2xl">
        <For each={displaySegments}>
          {(segment, index) => (
            <>
              {segment.isBlank ? (
                <div class="inline-block">
                  <PracticeInput
                    value={store.inputs.blanks?.[index()] || ""}
                    onInput={(value) => actions.updateInput(value, index())}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleMainButton()
                      }
                    }}
                    class="mx-1 w-32 text-center text-2xl placeholder:text-muted-foreground/35"
                    autofocus={index() === 0}
                    placeholder="答え"
                  />
                </div>
              ) : (
                <span>{segment.text}</span>
              )}
            </>
          )}
        </For>
        <p class="pt-1 text-sm text-muted-foreground">*use caps for katakana</p>
      </div>
      <Button
        onClick={handleMainButton}
        class={`${isAnswerCorrect() ? "bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600" : "bg-amber-400 dark:bg-amber-500 dark:saturate-[85%]"} w-full py-3 text-sm text-black lg:text-base`}
      >
        {isAnswerCorrect()
          ? isLastQuestion
            ? "Finish"
            : "Next Question"
          : "Check Answer"}
      </Button>
    </div>
  )
}
