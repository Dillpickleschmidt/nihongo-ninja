import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-14/adj-and-verbs")
}, "chapter-14/adj-and-verbs-readings")
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
          deckName={
            <>
              Adjectives & Verbs <span class="text-sky-400">Readings</span>
            </>
          }
          mode="readings"
        />
      </Show>
    </>
  )
}
