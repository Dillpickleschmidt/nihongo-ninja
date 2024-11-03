import { createMemo, Switch, Match } from "solid-js"
import MultipleChoice from "./multiple-choice/MultipleChoice"
import WriteComponent from "./write/WriteComponent"
import { usePracticeModeContext } from "../context/PracticeModeContext"

export default function CardTypeSwitch() {
  const context = usePracticeModeContext()

  const currentCard = createMemo(
    () => context.store.activeDeck[context.store.currentCardIndex],
  )

  return (
    <div class="w-full">
      <h2 class="mx-12 text-center font-japanese text-5xl lg:text-6xl">
        {currentCard().key}
      </h2>
      <Switch
        fallback={
          <div>
            <h2>No questions</h2>
          </div>
        }
      >
        <Match when={currentCard().cardStyle === "multiple-choice"}>
          <MultipleChoice />
        </Match>
        <Match when={currentCard().cardStyle === "write"}>
          <WriteComponent />
        </Match>
      </Switch>
    </div>
  )
}
