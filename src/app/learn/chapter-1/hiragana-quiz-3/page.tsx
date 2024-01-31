import KanaQuiz from "@/components/kanaQuizPage"
import { yoon } from "@/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={yoon} nextLesson="/learn/chapter-1/lesson-5" />
}
