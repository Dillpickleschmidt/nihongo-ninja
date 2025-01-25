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
  const path = "chapter-1/family-school"
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath(path),
  )
  const jpdbIds = [
    [1002590, 690426107],
    [1002650, 149025526],
    [1581930, 1722154385],
    [1524590, 1717894865],
    [2261500, 3830479532],
    [1206900, 3144453909],
    [1002320, 4154471030],
    [1001830, 331667986],
    [1413240, 1100739711],
    [1389780, 2919654325],
    [1002330, 4007872180],
    [1552750, 2771263124],
    [1413260, 2796395633],
    [1283500, 2823660064],
    [1468900, 1783645507],
    [1165580, 1633027729],
    [2261490, 979215252],
    [1001990, 3743364699],
  ]

  return (
    <>
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Family & School
      </h1>
      <Show when={data()}>
        <VocabCardPair data={data()!} index={0} />
        <VocabCardPairNoBG data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={4} />
        <VocabCardPair data={data()!} index={6} />
        <VocabCardPair data={data()!} index={8} />
        <VocabCardPairNoBG data={data()!} index={10} />
        <VocabCardPairNoBG data={data()!} index={12} single />
        <VocabCard4NoBG data={data()!} index={13} />
        <VocabCardPairNoBG data={data()!} index={17} single />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/practice/family-school">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
