import { Show } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

const path = "chapter-3/chapter-1-kanji-part-3"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())
  const jpdbIds = [[1318290, 281437092]]

  return (
    <>
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Chapter 1 Part 3 Kanji
      </h1>
      <Show when={data()}>
        <VocabCardPair data={data()!} index={0} />
        <VocabCardPairNoBG data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={4} />
        <VocabCardPair data={data()!} index={6} />
        <VocabCardPairNoBG data={data()!} index={8} />
        <VocabCardSingle data={data()!} index={10} />
        <VocabCardPair data={data()!} index={11} />
        <VocabCardPairNoBG data={data()!} index={13} />
        <VocabCardSingle data={data()!} index={15} />
        <VocabCardPairNoBG data={data()!} index={16} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/practice/chapter-1-kanji-part-3">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
