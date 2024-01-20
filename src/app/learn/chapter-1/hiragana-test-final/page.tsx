import KanaQuiz from "@/app/components/kanaQuizPage"
import { allKana } from "@/app/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return <KanaQuiz kana={allKana} nextLesson="/learn/chapter-1/vocab" />
}
