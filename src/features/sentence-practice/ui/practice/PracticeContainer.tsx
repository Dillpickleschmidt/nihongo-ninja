// ui/practice/PracticeContainer.tsx
import { Show, createEffect } from "solid-js"
import { PracticeProvider, usePracticeStore } from "../../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import AnswerInput from "./AnswerInput"
import ProgressDisplay from "./ProgressDisplay"
import ResultDisplay from "./ResultDisplay"

interface PracticeContainerProps {
  path: string
}

function PracticeContent(props: PracticeContainerProps) {
  const { store, actions } = usePracticeStore()

  createEffect(() => {
    if (props.path !== store.path) {
      actions.loadQuestions(props.path)
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
