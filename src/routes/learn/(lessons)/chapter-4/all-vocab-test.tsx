import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-4/all"
const getData = cache(async () => {
  const nouns_1 = await getVocabularyByPath("chapter-4/nouns-1")
  const nouns_2 = await getVocabularyByPath("chapter-4/nouns-2")
  const verbs_adv_misc = await getVocabularyByPath("chapter-4/verbs-adv-misc")
  const location_words = await getVocabularyByPath("chapter-4/location-words")
  return [...nouns_1, ...nouns_2, ...verbs_adv_misc, ...location_words]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={4} />
    </Show>
  )
}