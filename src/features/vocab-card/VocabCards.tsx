import { For, createSignal } from "solid-js"
import VocabCardSingle from "./single/VocabCardSingle"
import type { RichVocabItem } from "@/types/vocab"
import VocabText from "./components/VocabText"

type VocabCardsProps = {
  data: RichVocabItem[]
  countOffset?: number
  noFurigana?: boolean
}

export default function VocabCards(props: VocabCardsProps) {
  return (
    <div class="">
      <For each={props.data}>
        {(item, index) => (
          <div class="h-full px-6 py-3">
            <div
              class={`relative rounded-[30px] text-black shadow-md dark:shadow-lg dark:shadow-black ${
                (index() + 1) % 2 === 0 ? "bg-[#f7f0dd]" : "bg-[#f7e2c4]"
              }`}
            >
              <VocabText data={props.data} index={index()} />
            </div>
          </div>
        )}
      </For>
    </div>
  )
}
