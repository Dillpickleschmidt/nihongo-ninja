import KanaQuiz from "@/components/kana-quiz/KanaQuizPage"
import { dakuten } from "@/components/kana-quiz/kana-data"

export default function HiraganaTest1() {
  return <KanaQuiz kana={dakuten} nextLesson="/learn/chapter-1/lesson-4" />
}
