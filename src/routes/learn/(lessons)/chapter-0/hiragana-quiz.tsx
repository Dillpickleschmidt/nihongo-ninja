import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { mainKana } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  return (
    <KanaQuiz
      kana={mainKana}
      nextLesson="/learn/chapter-0/dakuten-handakuten"
      title="Hiragana Quiz 1"
    />
  )
}
