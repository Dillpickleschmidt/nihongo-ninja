// CounterPractice.tsx
import { createSignal, Switch, Match } from "solid-js"
import { PracticeState } from "./types"
import SettingsPage from "./components/pages/SettingsPage"
import PracticePage from "./components/pages/PracticePage"
import SummaryPage from "./components/pages/SummaryPage"

type Page = "settings" | "practice" | "summary"

export default function CounterPractice() {
  const [currentPage, setCurrentPage] = createSignal<Page>("settings")
  const [selectedChapters, setSelectedChapters] = createSignal<number[]>([])
  const [practiceState, setPracticeState] = createSignal<PracticeState | null>(
    null,
  )

  const navigateToPractice = (chapters: number[]) => {
    setSelectedChapters(chapters)
    setCurrentPage("practice")
  }

  const navigateToSettings = () => setCurrentPage("settings")

  const navigateToSummary = (state: PracticeState) => {
    setPracticeState(state)
    setCurrentPage("summary")
  }

  return (
    <div class="flex w-full flex-col items-center">
      <Switch>
        <Match when={currentPage() === "settings"}>
          <SettingsPage onStartPractice={navigateToPractice} />
        </Match>
        <Match when={currentPage() === "practice"}>
          <div class="pt-8 xl:pt-32">
            <PracticePage
              selectedChapters={selectedChapters()}
              onComplete={navigateToSummary}
              onReturn={navigateToSettings}
            />
          </div>
        </Match>
        <Match when={currentPage() === "summary"}>
          <SummaryPage
            state={practiceState()!}
            onRestart={() => navigateToPractice(selectedChapters())}
            onReturn={navigateToSettings}
          />
        </Match>
      </Switch>
    </div>
  )
}
