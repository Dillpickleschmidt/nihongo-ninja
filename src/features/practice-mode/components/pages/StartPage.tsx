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
      <div class="fixed bottom-0 z-50 my-6 flex w-full justify-center">
        <Button
          onClick={() => context.setStore("currentPage", "practice")}
          size="lg"
          class="w-[480px] bg-orange-500"
        >
          Start Learning!
        </Button>
      </div>
      <div class="w-full pb-10 pt-24">
        <div class="relative lg:mx-48 2xl:mx-96">
          <h1 class="text-center text-5xl font-semibold">
            Practice {props.deckName}
          </h1>
          <div class="absolute bottom-0 right-4">
            <DeckSettingsDialog>
              <Button variant="ghost">
                <Settings class="h-7 w-7" />
              </Button>
            </DeckSettingsDialog>
          </div>
        </div>
      </div>
      <div class="pb-28 lg:mx-48 2xl:mx-96">
        <div>
          <For each={sortedData()}>
            {(entry, index) => (
              <div class="m-2 min-w-[450px] rounded-xl bg-card p-6 shadow-md">
                <p class="text-2xl font-bold text-orange-500 text-primary">
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
                      <p class="my-2 italic text-muted-foreground">
                        {categoryObj.category}:
                      </p>
                      <For each={categoryObj.answers}>
                        {(answer: string, j) => (
                          <p class="text-xl font-bold text-primary">
                            {categoryObj.category === "Kana" ? (
                              <span class="font-japanese text-2xl">
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
