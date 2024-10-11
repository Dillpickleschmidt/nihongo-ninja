import type { RichVocabularyItem } from "@/types/vocab"
import { createEffect, createSignal, For, Show } from "solid-js"
import { VideoButton } from "../VideoButton"
import VocabText from "../components/VocabText"

type VocabCard4NoBGProps = {
  data: RichVocabularyItem[]
  index: number
}

export default function VocabCard4NoBG(props: VocabCard4NoBGProps) {
  const cardOne = props.data[props.index]
  const cardTwo = props.data[props.index + 1]
  const cardThree = props.data[props.index + 2]
  const cardFour = props.data[props.index + 3]

  return (
    <div>
      <div class="m-6 justify-center space-y-6 xl:flex xl:space-y-0">
        <Show when={cardOne}>
          <div class="border-t-2 border-card-foreground xl:w-1/4 xl:border-transparent">
            <VocabText data={props.data} index={props.index} />
          </div>
        </Show>
        <Show when={cardTwo}>
          <div class="border-t-2 border-card-foreground xl:w-1/4 xl:border-transparent">
            <VocabText data={props.data} index={props.index + 1} />
          </div>
        </Show>
        <Show when={cardThree}>
          <div class="border-t-2 border-card-foreground bg-card xl:w-1/4 xl:border-transparent">
            <VocabText data={props.data} index={props.index + 2} />
          </div>
        </Show>
        <Show when={cardFour}>
          <div class="border-t-2 border-card-foreground xl:w-1/4 xl:border-transparent">
            <VocabText data={props.data} index={props.index + 3} />
          </div>
        </Show>
      </div>
    </div>
  )
}
