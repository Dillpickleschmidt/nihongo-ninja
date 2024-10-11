import { getVocabularyByPath } from "@/db/statements"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import VocabPair from "@/features/vocab-card/pair/VocabPair"
import VocabSingle from "@/features/vocab-card/single/VocabSingle"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"

export default function test2() {
  const [data] = createResource<RichVocabItem[]>(
    async (): Promise<RichVocabItem[]> => {
      const vocabItems = await getVocabularyByPath(
        "chapter-0/greetings-common-expressions",
      )
      // Get #7 to second last item
      return vocabItems.slice(7, vocabItems.length - 1)
    },
  )
  return (
    <Show when={data()}>
      {
        <>
          <VocabSingle data={data()!} index={0} />
          <VocabSingle data={data()!} index={1} />
          <VocabCardPairNoBG data={data()!} index={2} />
          <VocabPair data={data()!} index={4} />
          <VocabSingle data={data()!} index={6} />
          <VocabPair data={data()!} index={7} />
          <VocabCardPairNoBG data={data()!} index={9} />
          <VocabCardPairNoBG data={data()!} index={11} />
        </>
      }
    </Show>
  )
}
