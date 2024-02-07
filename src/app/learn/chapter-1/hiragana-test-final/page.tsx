import KanaQuiz from "@/components/kana-quiz/KanaQuizPage"
import { allKana } from "@/components/kana-quiz/CharacterBox"

export default function HiraganaTest1() {
  return <KanaQuiz kana={allKana} nextLesson="/learn/chapter-1/vocab" />
}
