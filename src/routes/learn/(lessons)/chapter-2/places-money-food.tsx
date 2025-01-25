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
  const path = "chapter-2/places-money-food"
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath(path),
  )
  const jpdbIds = [
    [1537370, 4252604492],
    [1578010, 2645011235],
    [1283190, 3064717489],
    [1243490, 2169005455],
    [1370420, 966089194],
    [1175570, 1711941020],
    [1463520, 2780378450],
    [1542430, 731068579],
  ]

  return (
    <>
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Places, Money, & Food
      </h1>
      <p class="mx-16">
        We're providing the kanji here just to familiarize you with how it
        looks. You won't need to memorize the kanji until Chapter 3. For now,
        just focus on the hiragana.
      </p>
      <Show when={data()}>
        <VocabCardPairNoBG data={data()!} index={0} />
        <VocabCardSingle data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={3} />
        <VocabCardSingle data={data()!} index={5} />
        <VocabCardPair data={data()!} index={6} />
        <VocabCardPairNoBG data={data()!} index={8} />
        <VocabCardPairNoBG data={data()!} index={10} />
        <VocabCardSingle data={data()!} index={14} />
        <VocabCardPair data={data()!} index={15} />
        <VocabCardPair data={data()!} index={17} />
        <VocabCard4NoBG data={data()!} index={19} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-2/practice/places-money-food">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
