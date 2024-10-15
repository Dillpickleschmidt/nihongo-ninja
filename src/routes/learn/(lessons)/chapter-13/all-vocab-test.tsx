import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const path = "chapter-13/adj-and-verbs"
const getData = cache(async () => {
  const nouns = await getVocabularyByPath("chapter-13/nouns")
  const adj_and_verbs = await getVocabularyByPath("chapter-13/adj-and-verbs")
  const day_count_and_misc = await getVocabularyByPath(
    "chapter-13/day-count-and-misc",
  )
  return [...nouns, ...adj_and_verbs, ...day_count_and_misc]
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={13} />
    </Show>
  )
}
