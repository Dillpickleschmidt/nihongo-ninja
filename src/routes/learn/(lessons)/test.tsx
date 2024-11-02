import { SentencePracticeProvider } from "@/features/sentence-practice/context/SentencePracticeContext"
import JapanesePractice from "@/features/sentence-practice/JapanesePractice"

export default function test() {
  return (
    <div>
      <SentencePracticeProvider>
        <JapanesePractice path="chapter-1/x-wa-y-desu" />
      </SentencePracticeProvider>
    </div>
  )
}
