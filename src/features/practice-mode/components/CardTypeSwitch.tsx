import { createMemo, Switch, Match } from "solid-js"
import MultipleChoice from "./multiple-choice/MultipleChoice"
import WriteComponent from "./write/WriteComponent"
import { usePracticeModeContext } from "../context/PracticeModeContext"
import type { Card } from "@/types/vocab"

type CardTypeSwitchProps = {
  data: Card[]
}

export default function CardTypeSwitch(props: CardTypeSwitchProps) {
  const context = usePracticeModeContext()

  const currentCard = createMemo(() => props.data[context.currentCardIndex()])

  return (
    <div class="w-full">
      <h2 class="mx-12 text-center font-japanese text-6xl">
        {context.correctEntry()?.key}
      </h2>
      <Switch
        fallback={
          <div>
            <h2>No questions</h2>
          </div>
        }
      >
        <Match when={currentCard()?.cardStyle === "multiple-choice"}>
          <MultipleChoice data={props.data} shuffleInput={false} />
        </Match>
        <Match when={currentCard()?.cardStyle === "write"}>
          <WriteComponent data={props.data} shuffleInput={false} />
        </Match>
      </Switch>
    </div>
  )
}
