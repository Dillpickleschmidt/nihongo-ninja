import { Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

const path = "chapter-14/nouns-1"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <>
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Nouns 1
      </h1>
      <Show when={data()}>
        <VocabCard4NoBG data={data()!} index={0} />
        <VocabCard4NoBG data={data()!} index={4} />
        <VocabCard4NoBG data={data()!} index={8} />
        <VocabCard4NoBG data={data()!} index={12} />
        <VocabCard4NoBG data={data()!} index={16} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-14/practice/nouns-1-readings">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
