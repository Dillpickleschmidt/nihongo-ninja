import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-20/all"
const getData = cache(async () => {
  const group_1 = await getVocabularyByPath("chapter-20/nouns")
  const group_2 = await getVocabularyByPath("chapter-20/adj-u-v")
  const group_3 = await getVocabularyByPath("chapter-20/ru-v-irr-v-adv-misc")
  return [...group_1, ...group_2, ...group_3]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={20} path={cacheKey} />
    </Show>
  )
}
