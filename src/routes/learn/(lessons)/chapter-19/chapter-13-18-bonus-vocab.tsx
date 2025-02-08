import { getVocabularyByPath } from "@/data-utils/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-19/chapter-13-18-bonus-vocab"
const getData = cache(async () => {
  const group_1 = await getVocabularyByPath(
    "chapter-19/chapter-13-18-bonus-vocab",
  )
  return [...group_1]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest
        data={data()!}
        chapter={18}
        title="Chapter 13-18 Bonus Vocab"
        path={cacheKey}
      />
    </Show>
  )
}
