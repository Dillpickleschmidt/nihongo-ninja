import KanaQuiz from "@/components/kana-quiz/KanaQuizPage"
import { yoon } from "@/components/kana-quiz/kana-data"

export default function HiraganaTest1() {
  return <KanaQuiz kana={yoon} nextLesson="/learn/chapter-1/lesson-5" />
}
