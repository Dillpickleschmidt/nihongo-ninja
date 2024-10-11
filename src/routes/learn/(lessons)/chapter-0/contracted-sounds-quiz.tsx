import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { yoon } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  return (
    <KanaQuiz
      kana={yoon}
      nextLesson="/learn/chapter-0/long-vowels-double-consonants"
      title="Contracted Sounds Quiz"
    />
  )
}
