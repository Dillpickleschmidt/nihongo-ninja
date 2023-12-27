import KanaQuiz from "@/app/components/kanaQuizPage"
import { yoon } from "@/app/components/character-quiz-boxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={yoon} nextLesson="/learn/chapter-1/lesson-5" />
}
