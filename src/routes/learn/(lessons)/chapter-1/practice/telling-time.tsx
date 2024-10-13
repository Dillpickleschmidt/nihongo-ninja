import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"

export default function Page() {
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-1/telling-time"),
  )

  return (
    <Show when={data()} fallback={<h1>Loading...</h1>}>
      <PracticeModePage data={data()!} deckName="Telling Time" mode="kana" />
    </Show>
  )
}
