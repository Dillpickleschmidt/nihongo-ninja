import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-14/nouns-1")
}, "chapter-14/nouns-1-kana")
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
              Nouns 1 <span class="text-orange-400">Kana</span>
            </>
          }
          mode="kana"
        />
      </Show>
    </>
  )
}
