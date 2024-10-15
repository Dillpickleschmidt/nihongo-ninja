import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Show } from "solid-js"

const cacheKey = "chapter-15/all"
const getData = cache(async () => {
  const nouns_1 = await getVocabularyByPath("chapter-15/nouns")
  const nouns_2 = await getVocabularyByPath("chapter-15/nouns")
  const godan_and_ichidan_v = await getVocabularyByPath(
    "chapter-15/adj-and-verbs",
  )
  const irr_v_adv_misc = await getVocabularyByPath("chapter-15/irr-v-adv-misc")
  return [...nouns_1, ...nouns_2, ...godan_and_ichidan_v, ...irr_v_adv_misc]
}, cacheKey)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <Show when={data()}>
      <VocabTest data={data()!} chapter={15} />
    </Show>
  )
}
