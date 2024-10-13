import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-2/words-that-point")
}, "chapter-2/words-that-point")
export const route = {
  preload: () => getData(),
}
export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <>
      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <PracticeModePage
          data={data()!}
          deckName="Words That Point"
          mode="kana"
        />
      </Show>
    </>
  )
}
