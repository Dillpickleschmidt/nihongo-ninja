import KanaQuiz from "@/app/components/kanaQuizPage"
import { allKana } from "@/app/components/character-quiz-boxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={allKana} nextLesson="/learn/chapter-1/lesson-6" />
}
