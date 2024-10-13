import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { getVocabularyByPath } from "@/db/statements"
import { createResource, Show } from "solid-js"
import { RichVocabItem } from "@/types/vocab"

export default function page() {
  const path = "chapter-2/katakana"
  const [katakana] = createResource(async () => {
    const rawData = await getVocabularyByPath(path)
    return rawData.map((item) => ({
      hiragana: item.word,
      romaji: item.english,
    }))
  })
  // transform data to kana: { hiragana: string; romaji: string[] }[]

  return (
    <Show when={katakana()}>
      <KanaQuiz
        kana={katakana()!}
        nextLesson="/learn/chapter-2/katakana-words-worksheet"
        title="Katakana Quiz"
      />
    </Show>
  )
}
