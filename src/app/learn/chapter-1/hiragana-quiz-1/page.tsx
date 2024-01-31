import KanaQuiz from "@/components/kanaQuizPage"
import { mainKana } from "@/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return (
    <>
      <KanaQuiz kana={mainKana} nextLesson="/learn/chapter-1/lesson-3" />
    </>
  )
}
