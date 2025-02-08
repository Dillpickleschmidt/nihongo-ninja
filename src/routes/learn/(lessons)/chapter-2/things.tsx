import { createResource, Show } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

export default function page() {
  const path = "chapter-2/things"
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath(path),
  )
  const jpdbIds = [
    [1318290, 281437092],
    [1208910, 2654167550],
    [1296970, 1730259556],
    [1301940, 1711082330],
    [1362360, 4130076302],
    [1246700, 2653988765],
    [1316140, 2250684554],
    [1522150, 1953828425],
    [1519170, 2609029115],
  ]

  return (
    <>
      <div class="flex flex-col items-center">
        <div class="mx-4 max-w-[1300px] md:mx-8">
          <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
            Things
          </h1>
          <p class="px-8 pb-6 pt-12 text-2xl">
            We're providing the kanji here just to familiarize you with how it
            looks. You won't need to memorize the kanji until Chapter 3. For
            now, just focus on the hiragana.
          </p>
        </div>
      </div>
      <Show when={data()}>
        <VocabCardPairNoBG data={data()!} index={0} />
        <VocabCardPairNoBG data={data()!} index={2} />
        <VocabCardSingle data={data()!} index={4} />
        <VocabCardPairNoBG data={data()!} index={5} />
        <VocabCardPairNoBG data={data()!} index={7} />
        <VocabCardPair data={data()!} index={9} />
        <VocabCardPairNoBG data={data()!} index={11} />
        <VocabCardSingle data={data()!} index={13} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-2/practice/things">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
