import { createMemo, Switch, Match, Show } from "solid-js"
import MultipleChoice from "./multiple-choice/MultipleChoice"
import WriteComponent from "./write/WriteComponent"
import { usePracticeModeContext } from "../context/PracticeModeContext"

export default function CardTypeSwitch() {
  const context = usePracticeModeContext()

  const currentCard = () =>
    context.store.activeDeck[context.store.currentCardIndex]
  const hasUserAnswered = () => context.store.hasUserAnswered
  const isUserAnswerCorrect = () => context.store.isAnswerCorrect
  const hasMnemonic = () => {
    const card = currentCard()
    return card && card.mnemonics && card.mnemonics.length > 0
  }

  return (
    <div class="w-full">
      <Show
        fallback={
          <h2 class="mx-12 flex h-48 flex-col justify-center text-center font-japanese text-5xl lg:text-6xl">
            {currentCard()?.key}
          </h2>
        }
        when={hasUserAnswered() && !isUserAnswerCorrect() && hasMnemonic()}
      >
        <div class="flex h-48 flex-col justify-center">
          <h2 class="mx-12 text-center font-japanese text-5xl lg:text-6xl">
            {currentCard()?.key}
          </h2>
          <div class="mb-4 max-h-32 overflow-y-auto px-3 pt-3">
            <h3 class="">
              <span
                class={`font-bold ${context.store.practiceMode === "readings" ? "text-sky-400" : "text-orange-400"}`}
              >
                Mnemonic:{" "}
              </span>
              {/* Might need to loop in the future */}
              {currentCard()?.mnemonics?.[0]}{" "}
              {/* Using optional chaining and assuming we want the first mnemonic */}
            </h3>
          </div>
        </div>
      </Show>
      <Switch
        fallback={
          <div>
            <h2>No questions</h2>
          </div>
        }
      >
        <Match when={currentCard()?.cardStyle === "multiple-choice"}>
          <MultipleChoice />
        </Match>
        <Match when={currentCard()?.cardStyle === "write"}>
          <WriteComponent />
        </Match>
      </Switch>
    </div>
  )
}
