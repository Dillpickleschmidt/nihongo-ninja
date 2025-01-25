import { Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

const path = "chapter-3/nouns"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())
  const jpdbIds = [
    [1586330, 1262547411],
    [1299400, 2373372162],
    [1270590, 1445326988],
    [1482110, 1953030635],
    [1371260, 1960654445],
    [1173720, 1890876179],
    [1002430, 3202573393],
    [1329015, 3118935943],
    [1183720, 2359051606],
    [1602340, 3156463396],
    [1191730, 1719503060],
    [1206730, 3266861604],
  ]

  return (
    <>
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Things
      </h1>
      <Show when={data()}>
        <VocabCardPair data={data()!} index={0} />
        <VocabCardPairNoBG data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={4} />
        <VocabCardPairNoBG data={data()!} index={6} />
        <VocabCardPairNoBG data={data()!} index={8} />
        <VocabCardPair data={data()!} index={10} />
        <VocabCardPair data={data()!} index={12} />
        <VocabCardPairNoBG data={data()!} index={14} />
        <VocabCardPairNoBG data={data()!} index={16} />
        <VocabCardPair data={data()!} index={18} />
        <VocabCardSingle data={data()!} index={20} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/practice/nouns-readings">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
