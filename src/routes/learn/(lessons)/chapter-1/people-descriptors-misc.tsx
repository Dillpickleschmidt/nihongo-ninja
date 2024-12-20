import { createResource, Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

export default function page() {
  const path = "chapter-1/people-descriptors-misc"
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath(path),
  )
  const jpdbIds = [
    [1387990, 406160283],
    [1202150, 4220409974],
    [1294940, 1962749405],
    [1531710, 3511332528],
    [1270910, 2787959195],
    [1540170, 3768385324],
    [1443840, 3633371468],
    [1482290, 1083903618],
    [1005340, 1964648434],
    [1577100, 1737572525],
    [1010080, 3189537382],
    [1339260, 1294214972],
    [1311110, 1819875830],
    [2022640, 1829320985],
    [1000430, 3702174873],
    [1464700, 3034679503],
    [2837492, 2915909738],
    [1464530, 3361009543],
    [1366410, 1736745155],
  ]

  return (
    <>
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        People, Descriptors, & Misc
      </h1>
      <Show when={data()}>
        <VocabCardPair data={data()!} index={0} />
        <VocabCardSingle data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={3} />
        <VocabCardSingle data={data()!} index={5} />
        <VocabCardPairNoBG data={data()!} index={6} />
        <VocabCardPairNoBG data={data()!} index={8} />
        <VocabCardPair data={data()!} index={10} />
        <VocabCardPairNoBG data={data()!} index={12} />
        <VocabCardPairNoBG data={data()!} index={14} />
        <VocabCardPair data={data()!} index={16} />
        <VocabCardSingle data={data()!} index={18} />
        <VocabCardPairNoBG data={data()!} index={19} single />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/practice/people-descriptors-misc">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
