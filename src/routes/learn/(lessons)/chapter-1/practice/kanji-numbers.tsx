import PracticeMode from "@/features/practice-mode/PracticeMode"
import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"

export default function page() {
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-1/kanji-numbers"),
  )

  return (
    <Show when={data()} fallback={<h1>Loading...</h1>}>
      <PracticeMode data={data()!} deckName="Kanji Numbers" mode="readings" />
    </Show>
  )
}
