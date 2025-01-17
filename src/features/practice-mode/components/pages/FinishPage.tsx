import { For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { A } from "@solidjs/router"

export default function FinishPage() {
  const context = usePracticeModeContext()

  return (
    <>
      {/* Return Button */}
      <div class="fixed bottom-0 z-50 flex w-full justify-center px-4 pb-4 lg:pb-6">
        <A href="/learn">
          <Button size="lg" class="w-full max-w-md bg-orange-500 text-white">
            Return
          </Button>
        </A>
      </div>

      {/* Header */}
      <div class="w-full px-4 pb-8 pt-20 lg:pb-12 lg:pt-24">
        <h1 class="text-center text-3xl font-semibold lg:text-5xl">
          You've finished this deck!
        </h1>
        <div class="mt-2 text-center text-4xl">🎉</div>
      </div>

      {/* Content */}
      <div class="flex justify-center pb-32 lg:pb-36">
        <div class="w-full max-w-screen-lg space-y-4 px-4">
          <For each={context.store.data}>
            {(entry) => (
              <div class="relative overflow-hidden rounded-xl bg-card p-5 shadow-md">
                <p class="text-2xl font-bold text-orange-500 lg:text-3xl">
                  <span class="mr-2">{entry.key}</span>
                  <Show when={entry.particles}>
                    <For each={entry.particles}>
                      {(object, index) => (
                        <span class="text-base font-light">
                          {object.label ? (
                            <span>
                              {object.label} -{" "}
                              <span class="font-japanese">
                                {object.particle}
                              </span>
                              {index() < entry.particles!.length - 1 && ", "}
                            </span>
                          ) : (
                            <span>
                              particle:{" "}
                              <span class="font-japanese">
                                {object.particle}
                              </span>
                              {index() < entry.particles!.length - 1 && ", "}
                            </span>
                          )}
                        </span>
                      )}
                    </For>
                  </Show>
                </p>
                <For
                  each={entry.answerCategories.filter(
                    (category) =>
                      context.store.enabledAnswerCategories.includes(
                        category.category,
                      ) && category.answers.length > 0,
                  )}
                >
                  {(categoryObj) => (
                    <div class="mt-2">
                      <p class="my-1 italic text-muted-foreground">
                        {categoryObj.category}:
                      </p>
                      <For each={categoryObj.answers}>
                        {(answer: string) => (
                          <p class="ml-4 text-lg font-bold text-primary">
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
                {entry.wrongAnswerCount > 0 && (
                  <p class="mt-2 text-red-500">
                    You missed this question {entry.wrongAnswerCount} times
                  </p>
                )}
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  )
}
