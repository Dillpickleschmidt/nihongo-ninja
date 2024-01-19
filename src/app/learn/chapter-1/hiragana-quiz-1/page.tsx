import KanaQuiz from "@/app/components/kanaQuizPage"
import { mainKana } from "@/app/components/CharacterQuizBoxes"

export default function HiraganaTest1() {
  return (
    <>
      <KanaQuiz kana={mainKana} nextLesson="/learn/chapter-1/lesson-3" />
    </>
  )
}
