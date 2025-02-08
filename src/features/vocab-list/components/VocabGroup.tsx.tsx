// VocabGroup.tsx
import { createResource } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"
import { addKanaAndRuby } from "@/util/vocabDataTransformer"
import VocabTable from "./VocabTable"

interface VocabGroupProps {
  path: string
}

export default function VocabGroup(props: VocabGroupProps) {
  const [data] = createResource(async () => {
    const rawData = await getVocabularyByPath(props.path)
    return addKanaAndRuby(rawData, "", true)
  })

  return <VocabTable data={data} />
}
