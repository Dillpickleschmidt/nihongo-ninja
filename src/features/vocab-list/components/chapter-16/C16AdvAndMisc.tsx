import { createResource } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import { addKanaAndRuby } from "@/util/vocabDataTransformer"
import type { RichVocabItem } from "@/types/vocab"
import VocabTable from "../VocabTable"

export default function C16AdvAndMisc() {
  const [data] = createResource<RichVocabItem[]>(async () => {
    const rawData = await getVocabularyByPath("chapter-16/adv-and-misc")
    return addKanaAndRuby(rawData, "", true)
  })

  return <VocabTable data={data} />
}