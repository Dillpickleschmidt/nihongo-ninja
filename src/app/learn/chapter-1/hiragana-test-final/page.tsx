import KanaQuiz from "@/components/kanaQuizPage"
import { allKana } from "@/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={allKana} nextLesson="/learn/chapter-1/vocab" />
}
