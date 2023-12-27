import KanaQuiz from "@/app/components/kanaQuizPage"
import { mainKana } from "@/app/components/character-quiz-boxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={mainKana} nextLesson="/learn/chapter-1/lesson-3" />
}
