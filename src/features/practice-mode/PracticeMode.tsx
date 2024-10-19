import { Card, RichVocabItem } from "@/types/vocab"
import { PracticeModeContextProvider } from "./context/PracticeModeContext"
import PracticeModeComponent from "./PracticeModeComponent"
import { convertVocabItemsToFlashcards } from "@/util/vocabDataTransformer"
import { JSX } from "solid-js"

type PracticeModeProps = {
  data: RichVocabItem[]
  deckName: string | JSX.Element
  mode: "readings" | "kana"
}

export default function PracticeMode(props: PracticeModeProps) {
  // Convert vocab entries to cards
  const convertedData = convertVocabItemsToFlashcards(
    props.data,
    props.mode,
  ) as Card[]

  return (
    <PracticeModeContextProvider>
      <PracticeModeComponent deckName={props.deckName} data={convertedData} />
    </PracticeModeContextProvider>
  )
}
