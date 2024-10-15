import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-14/all"
const getData = cache(async () => {
  const nouns_1 = await getVocabularyByPath("chapter-14/nouns-1")
  const nouns_2 = await getVocabularyByPath("chapter-14/nouns-2")
  const adj_and_verbs = await getVocabularyByPath("chapter-14/adj-and-verbs")
  const counters_adv_misc = await getVocabularyByPath(
    "chapter-14/counters-adv-misc",
  )
  return [...nouns_1, ...nouns_2, ...adj_and_verbs, ...counters_adv_misc]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={14} />
    </Show>
  )
}
