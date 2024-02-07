import KanaQuiz from "@/components/kana-quiz/KanaQuizPage"
import { mainKana } from "@/components/kana-quiz/kana-data"

export default function HiraganaTest1() {
  return <KanaQuiz kana={mainKana} nextLesson="/learn/chapter-1/lesson-3" />
}
