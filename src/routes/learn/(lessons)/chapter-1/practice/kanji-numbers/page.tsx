import PracticeModePage from "@/features/practice-mode/PracticeModePage"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import {
  enhanceVocabWithKanaAndRuby,
  stripFurigana,
} from "@/features/vocab-data-parsers"

export default async function page() {
  const data = await fetchVocabularyByPath("chapter-1/kanji-numbers")
  const processedData = stripFurigana(enhanceVocabWithKanaAndRuby(data))

  return <PracticeModePage data={processedData} deckName="Kanji Numbers" />
}
