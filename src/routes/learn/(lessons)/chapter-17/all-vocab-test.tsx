import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-17/all"
const getData = cache(async () => {
  const group_1 = await getVocabularyByPath("chapter-17/nouns-1")
  const group_2 = await getVocabularyByPath("chapter-17/nouns-2")
  const group_3 = await getVocabularyByPath("chapter-17/verbs")
  const group_4 = await getVocabularyByPath("chapter-17/adj-adv-misc")
  return [...group_1, ...group_2, ...group_3, ...group_4]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={17} path={cacheKey} />
    </Show>
  )
}
