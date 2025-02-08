import { createResource } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"
import { addKanaAndRuby } from "@/util/vocabDataTransformer"
import type { RichVocabItem } from "@/types/vocab"
import VocabTable from "../VocabTable"

export default function WordsThatPoint() {
  const [data] = createResource<RichVocabItem[]>(async () => {
    const rawData = await getVocabularyByPath("chapter-2/words-that-point")
    return addKanaAndRuby(rawData, "", true)
  })

  return <VocabTable data={data} />
}
