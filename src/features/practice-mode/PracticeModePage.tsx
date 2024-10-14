import { Card, RichVocabItem } from "@/types/vocab"
import { PracticeModeContextProvider } from "./context/PracticeModeContext"
import PracticeMode from "./PracticeMode"
import { convertVocabItemsToFlashcards } from "@/util/vocabDataTransformer"
import { JSX } from "solid-js"

type PracticeModePageProps = {
  data: RichVocabItem[]
  deckName: string | JSX.Element
  mode: "readings" | "kana"
}

export default function PracticeModePage(props: PracticeModePageProps) {
  // Convert vocab entries to cards
  const convertedData = convertVocabItemsToFlashcards(
    props.data,
    props.mode,
  ) as Card[]

  return (
    <PracticeModeContextProvider>
      <PracticeMode deckName={props.deckName} data={convertedData} />
    </PracticeModeContextProvider>
  )
}
