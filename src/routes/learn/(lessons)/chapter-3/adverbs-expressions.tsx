import { Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

const path = "chapter-3/adverbs-expressions"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())
  const jpdbIds = [
    [1584930, 3980647874],
    [2008670, 474705737],
    [1395620, 4289485632],
    [1605870, 2194932429],
    [1001140, 100459985],
    [1598680, 1553763224],
    [1414580, 1406264136],
    [1008910, 157196650],
  ]

  return (
    <>
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Adverbs & Expressions
      </h1>
      <Show when={data()}>
        <VocabCardPairNoBG data={data()!} index={0} />
        <VocabCardPair data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={4} single />
        <VocabCardPairNoBG data={data()!} index={5} />
        <VocabCardPair data={data()!} index={7} />
        <VocabCardPairNoBG data={data()!} index={8} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/practice/adverbs-expressions-readings">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
