import KanaQuiz from "@/app/components/kanaQuizPage"
import { yoon } from "@/app/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={yoon} nextLesson="/learn/chapter-1/lesson-5" />
}
