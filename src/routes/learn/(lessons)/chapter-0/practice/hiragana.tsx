import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"

export default function page() {
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-0/hiragana", true),
  )

  return (
    <>
      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <PracticeMode data={data()!} deckName="Hiragana" mode="readings" />
      </Show>
    </>
  )
}
