import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"

export default function page() {
  const [data] = createResource<RichVocabItem[]>(
    async () =>
      await getVocabularyByPath("chapter-0/greetings-common-expressions", true),
  )

  return (
    <>
      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <PracticeModePage
          data={data()!}
          deckName="Greetings & Common Expressions"
          mode="readings"
        />
      </Show>
    </>
  )
}
