import { createResource } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import { addKanaAndRuby } from "@/util/vocabDataTransformer"
import type { RichVocabItem } from "@/types/vocab"
import VocabTable from "../VocabTable"

export default function AndSoBut() {
  const [data] = createResource<RichVocabItem[]>(async () => {
    const rawData = await getVocabularyByPath("chapter-3/and-so-but")
    return addKanaAndRuby(rawData, "", true)
  })

  return <VocabTable data={data} />
}
