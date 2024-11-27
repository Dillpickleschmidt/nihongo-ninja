// SettingsPage.tsx
import { createSignal } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxItem,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
} from "@/components/ui/combobox"
import { getAvailableChapters } from "../../utils/dataLoader"
import StandardBackground from "@/components/StandardBackground"
import PatternsPreview from "../PatternsPreview"
import ChapterSelector from "../ChapterSelector"

type SettingsPageProps = {
  onStartPractice: (chapters: number[]) => void
}

export default function SettingsPage(props: SettingsPageProps) {
  const availableChapters = getAvailableChapters()
  const [selectedChapter, setSelectedChapter] = createSignal(1)
  const [openChapter, setOpenChapter] = createSignal<number | null>(null)
  const [practiceMode, setPracticeMode] = createSignal<
    "Cumulative Chapters" | "Only Selected Chapter"
  >("Cumulative Chapters")

  const handleStartPractice = () => {
    const chapters =
      practiceMode() === "Cumulative Chapters"
        ? availableChapters.filter((chapter) => chapter <= selectedChapter())
        : [selectedChapter()]
    props.onStartPractice(chapters)
  }

  return (
    <>
      <StandardBackground />
      <div class="relative min-h-screen w-full max-w-5xl bg-background sm:mt-6 sm:rounded-t-xl">
        <header class="container flex h-32 flex-col items-center justify-center rounded-b-xl border bg-emerald-400 saturate-[75%] backdrop-blur-sm sm:rounded-xl">
          <h1 class="text-4xl font-bold tracking-tight text-black">
            Counter Practice
          </h1>
        </header>

        <h2 class="px-6 pt-6 text-center text-muted-foreground">
          Practice using Japanese counters with different types of words
        </h2>

        <main class="space-y-8 px-8 pb-24 pt-8">
          <section class="relative rounded-xl border bg-card">
            <div class="right-6 top-6 md:absolute">
              <Combobox
                defaultValue="Cumulative Chapters"
                value={practiceMode()}
                onChange={setPracticeMode}
                options={["Cumulative Chapters", "Only Selected Chapter"]}
                itemComponent={(props) => (
                  <ComboboxItem item={props.item} class="hover:cursor-pointer">
                    <div>{props.item.textValue}</div>
                  </ComboboxItem>
                )}
              >
                <ComboboxTrigger>
                  <ComboboxInput class="hover:cursor-pointer" />
                </ComboboxTrigger>
                <ComboboxContent />
              </Combobox>
            </div>

            <div class="space-y-6 p-6">
              <h2 class="text-center text-2xl font-bold text-emerald-300">
                Select Chapters
              </h2>
              <ChapterSelector
                availableChapters={availableChapters}
                selectedChapter={selectedChapter()}
                onSelect={(value) => {
                  setSelectedChapter(parseInt(value))
                  setOpenChapter(null)
                }}
              />
            </div>
          </section>

          <PatternsPreview
            availableChapters={availableChapters}
            openChapter={openChapter()}
            onOpenChange={setOpenChapter}
            isCumulative={practiceMode() === "Cumulative Chapters"}
          />

          <div class="fixed bottom-0 left-0 right-0 pb-6 pt-4">
            <div class="mx-auto max-w-4xl px-6">
              <Button
                onClick={handleStartPractice}
                size="lg"
                class="w-full rounded-lg bg-emerald-400 py-3 text-xl font-bold text-black shadow-lg hover:bg-emerald-300 disabled:opacity-50"
                disabled={!selectedChapter()}
              >
                Start Practice
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
