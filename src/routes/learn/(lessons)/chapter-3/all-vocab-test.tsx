import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-3/all"
const getData = cache(async () => {
  const group_1 = await getVocabularyByPath("chapter-3/adverbs-expressions")
  const group_2 = await getVocabularyByPath("chapter-3/and-so-but")
  const group_3 = await getVocabularyByPath("chapter-3/chapter-1-kanji-part-1")
  const group_4 = await getVocabularyByPath("chapter-3/chapter-1-kanji-part-2")
  const group_5 = await getVocabularyByPath("chapter-3/chapter-1-kanji-part-3")
  const group_6 = await getVocabularyByPath("chapter-3/chapter-2-kanji-part-1")
  const group_7 = await getVocabularyByPath("chapter-3/days-and-time")
  const group_8 = await getVocabularyByPath("chapter-3/nouns")
  const group_9 = await getVocabularyByPath("chapter-3/verbs-and-adj")
  return [
    ...group_1,
    ...group_2,
    ...group_3,
    ...group_4,
    ...group_5,
    ...group_6,
    ...group_7,
    ...group_8,
    ...group_9,
  ]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={3} />
    </Show>
  )
}
