// VocabCards.tsx
import { For, createSignal, onMount } from "solid-js"
import type { RichVocabItem } from "@/types/vocab"
import VocabText from "./components/VocabText"
import { getAnimeExamples } from "./lib/immersionKit"

type VocabCardsProps = {
  data: RichVocabItem[]
  countOffset?: number
  noFurigana?: boolean
}

export default function VocabCards(props: VocabCardsProps) {
  const [examples, setExamples] = createSignal<Record<number, any>>({})

  // Start loading examples after initial render
  onMount(async () => {
    for (let i = 0; i < props.data.length; i++) {
      try {
        const item = props.data[i]
        // Load each word's examples sequentially, using overwrite_word if available
        const wordExamples = await getAnimeExamples(
          item.word,
          item.overwrite_word,
        )
        // Update examples for this word
        setExamples((prev) => ({ ...prev, [i]: wordExamples }))
      } catch (error) {
        console.error(`Failed to load examples for word ${i}:`, error)
      }
    }
  })

  return (
    <div class="space-y-8 p-4">
      <For each={props.data}>
        {(item, index) => (
          <div class="h-full lg:px-6">
            <div
              class={`relative rounded-2xl text-black shadow-md ${
                (index() + 1) % 2 === 0 ? "bg-white/90" : "bg-white/95"
              }`}
            >
              <VocabText
                data={props.data}
                index={index()}
                examples={examples()[index()]}
              />
            </div>
          </div>
        )}
      </For>
    </div>
  )
}
