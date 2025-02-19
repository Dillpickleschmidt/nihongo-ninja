// ui/practice/PracticeContainer.tsx
import { Show, createEffect } from "solid-js"
import { PracticeProvider, usePracticeStore } from "../../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import AnswerInput from "./AnswerInput"
import ProgressDisplay from "./ProgressDisplay"
import ResultDisplay from "./ResultDisplay"
import DifficultySelector from "./DifficultySelector"
import { ConjugatableSegment } from "../../core/conjugation/types"
import FillInBlankInput from "./FillInBlankInput"

interface PracticeContainerProps {
  path: string
}

function formatSentenceWithBlanks(segments: ConjugatableSegment[]): string {
  return segments
    .map((segment) => {
      if (typeof segment === "string") {
        return segment
      }

      if ("blank" in segment && segment.blank) {
        if (typeof segment.word === "string") {
          return `(${segment.word})`.replace(/\[.*?\]/g, "")
        } else {
          return `(${segment.word.word})`.replace(/\[.*?\]/g, "")
        }
      }

      if ("word" in segment) {
        return segment.word
      }

      return ""
    })
    .join("")
}

function PracticeContent(props: PracticeContainerProps) {
  const { store, actions } = usePracticeStore()

  createEffect(() => {
    if (props.path !== store.path) {
      actions.loadQuestions(props.path)
    }
  })

  createEffect(() => {
    const currentQuestion = store.rawQuestions[store.currentQuestionIndex]
    if (currentQuestion && store.difficulty === "easy") {
      console.log(
        "Full sentence with blanks:",
        formatSentenceWithBlanks(currentQuestion.answers[0].segments),
      )
    }
  })

  return (
    <div class="mx-auto max-w-2xl space-y-4 px-4 pb-32 pt-12 lg:pt-24">
      <DifficultySelector class="flex justify-end" />
      <Show when={!store.isLoading} fallback={<div>Loading questions...</div>}>
        <Show
          when={store.questions[store.currentQuestionIndex]}
          fallback={<div>No questions available for {props.path}</div>}
        >
          <PromptDisplay
            question={store.questions[store.currentQuestionIndex]!}
          />

          <Show when={store.difficulty === "easy"} fallback={<AnswerInput />}>
            <FillInBlankInput
              segments={
                store.rawQuestions[store.currentQuestionIndex]!.answers[0]
                  .segments
              }
            />
          </Show>
          <ProgressDisplay
            attempted={store.currentQuestionIndex + 1}
            total={store.questions.length}
          />
          <Show when={store.showResult}>
            <ResultDisplay />
          </Show>
        </Show>
      </Show>

      <Show when={store.error}>
        <div class="text-red-600">Error loading questions: {store.error}</div>
      </Show>
    </div>
  )
}

export default function PracticeContainer(props: PracticeContainerProps) {
  return (
    <PracticeProvider>
      <PracticeContent {...props} />
    </PracticeProvider>
  )
}
