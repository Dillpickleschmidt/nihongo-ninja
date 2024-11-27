import { For, JSX, createMemo } from "solid-js"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-solid"
import DeckSettingsDialog from "../DeckSettingsDialog"

type StartPageProps = {
  deckName: string | JSX.Element
}

export default function StartPage(props: StartPageProps) {
  const context = usePracticeModeContext()

  // Sort data based on the order property
  const sortedData = createMemo(() =>
    [...context.store.data].sort((a, b) => a.order - b.order),
  )

  return (
    <>
      {/* Start Button */}
      <div class="fixed bottom-0 z-50 flex w-full justify-center px-4 pb-4 lg:pb-6">
        <Button
          onClick={() => context.setStore("currentPage", "practice")}
          size="lg"
          class="w-full max-w-md bg-orange-500 font-medium text-black hover:bg-orange-600"
        >
          Start Learning!
        </Button>
      </div>

      {/* Header */}
      <div class="w-full px-4 pb-8 pt-20 lg:pb-12 lg:pt-24">
        <div class="relative mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <h1 class="text-3xl font-semibold lg:text-5xl">
            Practice {props.deckName}
          </h1>
          <div class="absolute right-4 top-0">
            <DeckSettingsDialog>
              <Button variant="ghost">
                <Settings class="h-7 w-7" />
              </Button>
            </DeckSettingsDialog>
          </div>
        </div>
      </div>

      {/* Content */}
      <div class="flex justify-center pb-32 lg:pb-36">
        <div class="w-full max-w-screen-lg space-y-2 px-4">
          <For each={sortedData()}>
            {(entry, index) => (
              <div class="rounded-xl bg-card p-6 shadow-md">
                <p class="text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
                  {entry.key}
                </p>
                <For
                  each={entry.answerCategories.filter(
                    (category) =>
                      context.store.enabledAnswerCategories.includes(
                        category.category,
                      ) && category.answers.length > 0,
                  )}
                >
                  {(categoryObj, i) => (
                    <div>
                      <p class="my-2 text-sm italic text-muted-foreground lg:text-base">
                        {categoryObj.category}:
                      </p>
                      <For each={categoryObj.answers}>
                        {(answer: string, j) => (
                          <p class="text-lg font-bold text-primary lg:text-xl">
                            {categoryObj.category === "Kana" ? (
                              <span class="font-japanese text-xl lg:text-2xl">
                                {answer}
                              </span>
                            ) : (
                              answer
                            )}
                          </p>
                        )}
                      </For>
                    </div>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  )
}
