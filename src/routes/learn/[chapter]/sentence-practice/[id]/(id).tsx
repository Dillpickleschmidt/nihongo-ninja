// (id).tsx
import PracticeContainer from "@/features/sentence-practice/ui/practice/PracticeContainer"
import { useLocation } from "@solidjs/router"

export default function data() {
  const location = useLocation()
  const path = location.pathname
    .replace("/learn/", "")
    .replace("/sentence-practice", "")

  return <PracticeContainer path={path} />
}
