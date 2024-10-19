import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-14/counters-adv-misc")
}, "chapter-14/counters-adv-misc-readings")
export const route = {
  preload: () => getData(),
}
export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <>
      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <PracticeMode
          data={data()!}
          deckName={
            <>
              Counters, Adverbs, and Misc.{" "}
              <span class="text-sky-400">Readings</span>
            </>
          }
          mode="readings"
        />
      </Show>
    </>
  )
}
