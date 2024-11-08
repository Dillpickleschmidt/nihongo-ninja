import { createSignal, Switch, Match } from "solid-js"
import SettingsPage from "./components/SettingsPage"
import PracticePage from "./components/PracticePage"
import SummaryPage from "./components/SummaryPage"
import { Button } from "@/components/ui/button"
import { ReviewSessionState } from "./utils/questionUtils"

type Page = "settings" | "practice" | "summary"

export default function ConjugationPracticePageHandler() {
  const [currentPage, setCurrentPage] = createSignal<Page>("settings")
  const [finalSessionState, setFinalSessionState] =
    createSignal<ReviewSessionState | null>(null)

  const navigateToReview = () => {
    setCurrentPage("practice")
  }
  const navigateToSettings = () => setCurrentPage("settings")
  const navigateToSummary = (state: ReviewSessionState) => {
    setFinalSessionState(state)
    setCurrentPage("summary")
  }

  return (
    <div class="flex w-full flex-col items-center">
      <Switch>
        <Match when={currentPage() === "settings"}>
          <SettingsPage onStartReview={navigateToReview} />
        </Match>
        <Match when={currentPage() === "practice"}>
          <div class="pt-16 xl:pt-32">
            <PracticePage onComplete={navigateToSummary} />
            <Button
              onClick={navigateToSettings}
              size="sm"
              variant="link"
              class="mt-4 text-base"
            >
              {"<-"} Back to Settings
            </Button>
          </div>
        </Match>
        <Match when={currentPage() === "summary"}>
          <SummaryPage
            finalState={finalSessionState()!}
            onRestartSession={navigateToReview}
            onReturnToSettings={navigateToSettings}
          />
        </Match>
      </Switch>
    </div>
  )
}
