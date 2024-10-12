import { For, createSignal } from "solid-js"
import VocabCardSingle from "./single/VocabCardSingle"
import type { RichVocabItem } from "@/types/vocab"

type VocabCardsProps = {
  data: RichVocabItem[]
  countOffset?: number
  noFurigana?: boolean
}

export default function VocabCards(props: VocabCardsProps) {
  return (
    <div class="m-6 space-y-6">
      <For each={props.data}>
        {(item, index) => <VocabCardSingle data={props.data} index={index()} />}
      </For>
    </div>
  )
}
