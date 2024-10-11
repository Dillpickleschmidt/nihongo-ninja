import { getVocabularyByPath } from "@/db/statements"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import type { RichVocabularyItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import VocabPair from "@/features/vocab-card/pair/VocabPair"
import VocabSingle from "@/features/vocab-card/single/VocabSingle"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"

export default function test2() {
  const [data] = createResource<RichVocabularyItem[]>(
    async () => await getVocabularyByPath("chapter-14/nouns-1"),
  )
  return (
    <Show when={data()}>
      {
        <>
          <VocabCardPairNoBG data={data()!} index={0} />
          <VocabSingle data={data()!} index={2} />
          <VocabCardPairNoBG data={data()!} index={3} />
          <VocabPair data={data()!} index={5} />
          <VocabCardPairNoBG data={data()!} index={7} single />
          <VocabCardPairNoBG data={data()!} index={8} />
          <VocabCard4NoBG data={data()!} index={10} />
        </>
      }
    </Show>
  )
}
