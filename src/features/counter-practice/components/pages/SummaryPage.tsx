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
    <>
      {/* Return Buttons */}
      <div class="fixed bottom-0 z-50 flex w-full justify-center gap-2 px-4 pb-4 lg:pb-6">
        <Button
          onClick={props.onReturn}
          variant="outline"
          size="lg"
          class="w-full max-w-[200px]"
        >
          Return to Settings
        </Button>
        <Button
          onClick={props.onRestart}
          size="lg"
          class="w-full max-w-[200px] bg-orange-500 text-white"
        >
          Practice Again
        </Button>
      </div>

      {/* Header */}
      <div class="w-full px-4 pb-8 pt-20 lg:pb-12 lg:pt-24">
        <h1 class="text-center text-3xl font-semibold lg:text-5xl">
          Practice Complete!
        </h1>
        <p class="mt-4 text-center text-xl">
          You got {props.state.correct} out of {props.state.attempted} correct (
          {percentage}%)
        </p>
        <div class="mt-2 text-center text-4xl">
          {percentage >= 80 ? "🎉" : "💪"}
        </div>
      </div>

      <div class="flex w-full justify-center pb-32 lg:pb-36">
        <div class="w-full max-w-5xl space-y-4 px-4">
          <For each={props.state.questions}>
            {(question, index) => (
              <div class="relative mx-2 mb-4 flex overflow-hidden rounded-lg bg-card shadow-md xl:mx-8">
                <div class="flex-1 py-4 pl-4 pr-6">
                  <p
                    class={`${!question.correct ? "text-[#ff5757]" : ""} text-xl font-bold`}
                  >
                    Question {index() + 1}:{" "}
                    <span class="font-japanese">{question.word}</span>
                  </p>
                  <p class="text-lg text-muted-foreground">
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
                    !question.correct
                      ? "w-4 bg-red-500"
                      : "w-2 bg-emerald-500/50"
                  }`}
                ></div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  )
}
