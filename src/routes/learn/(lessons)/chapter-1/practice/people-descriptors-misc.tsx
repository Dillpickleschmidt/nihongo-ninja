import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"

export default function Page() {
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-1/people-descriptors-misc"),
  )

  return (
    <Show when={data()} fallback={<h1>Loading...</h1>}>
      <PracticeModePage
        data={data()!}
        deckName="People, Descriptors, Misc"
        mode="kana"
      />
    </Show>
  )
}
