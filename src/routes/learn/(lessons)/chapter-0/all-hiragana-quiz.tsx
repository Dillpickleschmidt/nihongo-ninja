import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { mainKana } from "@/features/kana-quiz/data/kana-data"
import { tenten } from "@/features/kana-quiz/data/kana-data"
import { yoon } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  const data = [...mainKana, ...tenten, ...yoon]

  return (
    <KanaQuiz
      kana={data}
      nextLesson="/learn/chapter-0/punctuation-misc"
      title="All Hiragana Quiz"
    />
  )
}
