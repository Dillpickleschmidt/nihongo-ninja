import { Card, RichVocabItem } from "@/types/vocab"
import { PracticeModeContextProvider } from "./context/PracticeModeContext"
import PracticeMode from "./PracticeMode"
import { convertVocabItemsToFlashcards } from "@/util/vocabDataTransformer"

type PracticeModePageProps = {
  data: RichVocabItem[]
  deckName: string
}

export default function PracticeModePage(props: PracticeModePageProps) {
  // Convert vocab entries to cards
  const convertedData = convertVocabItemsToFlashcards(props.data) as Card[]

  return (
    <PracticeModeContextProvider>
      <PracticeMode deckName={props.deckName} data={convertedData} />
    </PracticeModeContextProvider>
  )
}
