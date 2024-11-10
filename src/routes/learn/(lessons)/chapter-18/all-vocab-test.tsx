import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-18/all"
const getData = cache(async () => {
  const group_1 = await getVocabularyByPath("chapter-18/nouns-1")
  const group_2 = await getVocabularyByPath("chapter-18/nouns-2-and-adjectives")
  const group_3 = await getVocabularyByPath("chapter-18/u-and-irr-verbs")
  const group_4 = await getVocabularyByPath("chapter-18/ru-verbs-and-misc")
  return [...group_1, ...group_2, ...group_3, ...group_4]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={18} />
    </Show>
  )
}
