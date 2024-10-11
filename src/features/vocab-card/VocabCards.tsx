import { For, createSignal } from "solid-js"
import VocabCard from "./VocabCardOrig"
import type { RichVocabItem } from "@/types/vocab"

type VocabCardsProps = {
  data: RichVocabItem[]
  countOffset?: number
  noFurigana?: boolean
}

export default function VocabCards(props: VocabCardsProps) {
  const [activeVideoIndex, setActiveVideoIndex] = createSignal<number | null>(
    null,
  )

  return (
    <div class="m-6 space-y-6">
      <For each={props.data}>
        {(item, index) => (
          <VocabCard
            item={item}
            index={index()}
            countOffset={props.countOffset}
            light={(index() + 1) % 2 === 0}
            noFurigana={props.noFurigana}
            activeVideoIndex={activeVideoIndex()}
            setActiveVideoIndex={setActiveVideoIndex}
          />
        )}
      </For>
    </div>
  )
}
