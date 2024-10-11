import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { createEffect, createResource, createSignal, Show } from "solid-js"
import { stripFurigana } from "@/util/vocabDataTransformer"

export default function page() {
  const [processedData, setProcessedData] = createSignal<RichVocabItem[]>()
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-0/hiragana"),
  )
  createEffect(() => data() && setProcessedData(stripFurigana(data()!)))

  return (
    <>
      <Show when={processedData()} fallback={<h1>Loading...</h1>}>
        <PracticeModePage data={processedData()!} deckName="Hiragana" />
      </Show>
    </>
  )
}
