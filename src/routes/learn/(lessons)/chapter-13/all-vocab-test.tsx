import { getVocabularyByPath } from "@/data-utils/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-13/all"
const getData = cache(async () => {
  const group_1 = await getVocabularyByPath("chapter-13/nouns")
  const group_2 = await getVocabularyByPath("chapter-13/adj-and-verbs")
  const group_3 = await getVocabularyByPath("chapter-13/day-count-and-misc")
  return [...group_1, ...group_2, ...group_3]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={13} path={cacheKey} />
    </Show>
  )
}
