import { Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"
import VocabCards from "@/features/vocab-card/VocabCards"
import ContentBox from "@/components/ContentBox"

const path = "chapter-4/location-words"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <ContentBox
      nextButtonLink="/learn/chapter-4/practice/location-words-readings"
      nextButtonText="Next Lesson ->"
    >
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Location Words
      </h1>
      <Show when={data()}>
        <VocabCards data={data()!} />
      </Show>
      <div class="pb-32" />
    </ContentBox>
  )
}
