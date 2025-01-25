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
  const path = "chapter-1/countries-time"
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath(path),
  )
  const jpdbIds = [
    [1269060, 2805783274],
    [1288850, 1736536790],
    [1478750, 1713267335],
    [1424270, 3611455887],
    [1576100, 1925836304],
    [1268990, 2809757434],
    [2612170, 1169415654],
    [1021160, 3864140793],
    [1216170, 2955086449],
    [1582710, 2798898833],
  ]

  return (
    <>
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Countries & Time
      </h1>
      <Show when={data()}>
        <VocabCardSingle data={data()!} index={0} />
        <VocabCardPairNoBG data={data()!} index={1} />
        <VocabCardPairNoBG data={data()!} index={3} />
        <VocabCardPairNoBG data={data()!} index={5} />
        <VocabCardPair data={data()!} index={7} />
        <VocabCard4NoBG data={data()!} index={9} />
        <VocabCard4NoBG data={data()!} index={13} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/practice/countries-time">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
