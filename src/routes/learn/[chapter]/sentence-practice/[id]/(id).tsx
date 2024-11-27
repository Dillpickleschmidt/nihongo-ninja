import { SentencePracticeProvider } from "@/features/sentence-practice/context/SentencePracticeContext"
import JapanesePractice from "@/features/sentence-practice/JapanesePractice"
import { useLocation } from "@solidjs/router"

export default function data() {
  const location = useLocation()
  const path = location.pathname
    .replace("/learn/", "")
    .replace("/sentence-practice", "")

  return (
    <SentencePracticeProvider>
      <JapanesePractice path={path} />
    </SentencePracticeProvider>
  )
}
