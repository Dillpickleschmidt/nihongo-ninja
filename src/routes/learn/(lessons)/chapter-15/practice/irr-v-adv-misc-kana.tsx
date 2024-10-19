import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-15/irr-v-adv-misc")
}, "chapter-15/irr-v-adv-misc-kana")
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
              Irregular Verbs, Adverbs, and Misc.{" "}
              <span class="mx-2 text-orange-400">Kana</span>
            </>
          }
          mode="kana"
        />
      </Show>
    </>
  )
}
