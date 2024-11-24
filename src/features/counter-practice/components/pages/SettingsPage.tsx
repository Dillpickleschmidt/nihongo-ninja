import { createSignal, onMount } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemLabel,
} from "@/components/ui/radio-group"
import { getAvailableChapters } from "../../utils/dataLoader"

type SettingsPageProps = {
  onStartPractice: (chapters: number[]) => void
}

export default function SettingsPage(props: SettingsPageProps) {
  const [availableChapters, setAvailableChapters] = createSignal<number[]>([])
  // Initialize selectedChapter with 1
  const [selectedChapter, setSelectedChapter] = createSignal<number>(1)

  onMount(() => {
    setAvailableChapters(getAvailableChapters())
  })

  function accumulateChapters(selectedChapter: number) {
    const data = availableChapters().reduce((acc, chapter) => {
      if (chapter <= selectedChapter) {
        acc.push(chapter)
      }
      return acc
    }, [] as number[])
    console.log(data)
    return data
  }

  return (
    <div class="relative min-h-screen w-full max-w-5xl bg-background sm:mt-6 sm:rounded-t-xl">
      {/* Header */}
      <header class="container flex h-32 flex-col items-center justify-center rounded-b-xl border bg-orange-500 saturate-[75%] backdrop-blur-sm sm:rounded-xl">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Counter Practice
        </h1>
      </header>

      <h2 class="px-6 pt-6 text-muted-foreground">
        Practice using Japanese counters with different types of words
      </h2>

      <main class="px-8 pb-24 pt-8">
        {/* Chapters Section */}
        <section class="space-y-6 rounded-xl border bg-card p-6">
          <h2 class="text-center text-2xl font-bold text-orange-400">
            Select Chapters
          </h2>
          <div class="space-y-4">
            <p class="italic text-muted-foreground">
              Include counters up to the specified chapter:
            </p>
            <div class="column-fill-auto max-h-[300px] columns-2 space-y-4 overflow-y-auto">
              <RadioGroup
                value={selectedChapter().toString()}
                onChange={(value) => setSelectedChapter(parseInt(value))}
              >
                {availableChapters().map((chapter) => (
                  <RadioGroupItem
                    value={chapter.toString()}
                    class="mb-2 flex break-inside-avoid items-center space-x-2"
                  >
                    <RadioGroupItemControl class="hover:cursor-pointer" />
                    <RadioGroupItemLabel class="origin-left text-lg duration-100 hover:scale-[102%] hover:cursor-pointer lg:text-[1.2rem]">
                      Chapter {chapter}
                    </RadioGroupItemLabel>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Start Button */}
        <div class="fixed bottom-0 left-0 right-0 pb-6 pt-4">
          <div class="mx-auto max-w-4xl px-6">
            <Button
              onClick={() =>
                props.onStartPractice(accumulateChapters(selectedChapter()))
              }
              size="lg"
              class="w-full rounded-lg bg-orange-500 py-3 text-xl font-bold text-white shadow-lg hover:bg-orange-600 disabled:opacity-50"
              disabled={!selectedChapter()}
            >
              Start Practice
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
