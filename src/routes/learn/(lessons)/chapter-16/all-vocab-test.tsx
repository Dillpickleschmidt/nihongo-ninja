import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-16/all"
const getData = cache(async () => {
  const nouns = await getVocabularyByPath("chapter-16/nouns")
  const adj_and_u_v = await getVocabularyByPath("chapter-16/adj-and-u-v")
  const adv_and_misc = await getVocabularyByPath("chapter-16/adv-and-misc")
  const ru_and_irr_v = await getVocabularyByPath("chapter-16/ru-and-irr-v")
  return [...nouns, ...adj_and_u_v, ...adv_and_misc, ...ru_and_irr_v]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={16} />
    </Show>
  )
}
