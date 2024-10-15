import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-14/counters-adv-misc")
}, "chapter-14/counters-adv-misc-kana")
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
              Counters, Adverbs, and Misc.{" "}
              <span class="mx-2 text-orange-400">Kana</span>
            </>
          }
          mode="kana"
        />
      </Show>
    </>
  )
}
