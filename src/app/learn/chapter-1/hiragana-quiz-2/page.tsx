import KanaQuiz from "@/components/kanaQuizPage"
import { dakuten } from "@/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={dakuten} nextLesson="/learn/chapter-1/lesson-4" />
}
