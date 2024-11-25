import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { PracticeState } from "../../types"

interface SummaryPageProps {
  state: PracticeState
  onRestart: () => void
  onReturn: () => void
}

export default function SummaryPage(props: SummaryPageProps) {
  const percentage = Math.round(
    (props.state.correct / props.state.attempted) * 100,
  )

  return (
    <div class="w-full max-w-md space-y-6 p-4">
      <h2 class="text-center text-2xl font-bold">Practice Complete!</h2>
      <div class="space-y-4">
        <p class="text-center text-xl">
          You got {props.state.correct} out of {props.state.attempted} correct (
          {percentage}%)
        </p>
      </div>
      <div class="space-y-4">
        <For each={props.state.questions}>
          {(question, index) => (
            <div class="relative mx-2 mb-4 flex min-w-[500px] overflow-hidden rounded-lg bg-card shadow-md xl:mx-8">
              <div class="flex-1 py-4 pl-4 pr-6">
                <p
                  class={`${!question.correct ? "text-[#ff5757]" : ""} text-xl font-bold`}
                >
                  Question {index() + 1}:{" "}
                  <span class="font-japanese">{question.word}</span>
                </p>
                <p class="text-sm italic text-card-foreground">
                  Type: {question.type.join(", ")}
                </p>
                <p class="text-lg">
                  Your answer:{" "}
                  <span class="font-japanese">{question.givenAnswer}</span>
                </p>
                <p class="text-lg">
                  Correct answer(s):{" "}
                  <span class="font-japanese">
                    {question.answers.map((a) => a.reading).join(", ")}
                  </span>
                </p>
                {!question.correct && (
                  <p class="mt-1 text-sm text-red-500">Incorrect</p>
                )}
              </div>
              <div
                class={`absolute right-0 h-full ${
                  !question.correct ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"
                }`}
              ></div>
            </div>
          )}
        </For>
      </div>
      <div class="space-y-2">
        <Button onClick={props.onRestart} class="w-full">
          Practice Again
        </Button>
        <Button onClick={props.onReturn} variant="outline" class="w-full">
          Return to Settings
        </Button>
      </div>
    </div>
  )
}
