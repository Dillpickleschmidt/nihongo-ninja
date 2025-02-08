import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/data-utils/statements"
import { RichVocabItem } from "@/types/vocab"
import { Show } from "solid-js"
import { cache, createAsync } from "@solidjs/router"

const getData = cache(async () => {
  return await getVocabularyByPath("chapter-2/things")
}, "chapter-2/things")
export const route = {
  preload: () => getData(),
}
export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <>
      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <PracticeMode data={data()!} deckName="Things" mode="kana" />
      </Show>
    </>
  )
}
