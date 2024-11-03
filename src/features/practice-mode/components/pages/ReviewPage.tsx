import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { AnswerCategory } from "@/types/vocab"

export default function ReviewPage() {
  const context = usePracticeModeContext()

  const uniqueCards = createMemo(() => {
    return Array.from(
      new Map(
        context.store.recentlySeenCards.map((card) => [card.key, card]),
      ).values(),
    )
  })

  const handleContinue = () => {
    console.log("Clearing recently seen cards")
    context.setStore("recentlySeenCards", []) // Clear recently seen cards
    context.setStore("currentPage", "practice")
  }

  return (
    <>
      {/* Continue Button */}
      <div class="fixed bottom-0 z-50 flex w-full justify-center px-4 pb-4 lg:pb-6">
        <Button
          size="lg"
          onClick={handleContinue}
          class="w-full max-w-md bg-orange-500 font-medium text-black"
        >
          Continue
        </Button>
      </div>

      {/* Header */}
      <div class="w-full px-4 pb-8 pt-20 lg:pb-12 lg:pt-24">
        <h1 class="text-center text-3xl font-semibold lg:text-5xl">
          See the terms you practiced!
        </h1>
      </div>

      {/* Content */}
      <div class="flex justify-center pb-32 lg:pb-36">
        <div class="w-full max-w-screen-lg space-y-4 px-4">
          <For each={uniqueCards()}>
            {(card) => (
              <div class="relative overflow-hidden rounded-xl bg-card p-5 shadow-md">
                <p
                  class={`${card.wrongAnswerCount > 0 ? "text-[#ff5757]" : ""} text-xl font-bold lg:text-2xl`}
                >
                  <span class="mr-2">{card.key}</span>
                  <Show when={card.particles}>
                    <For each={card.particles}>
                      {(object, index) => (
                        <span class="text-base font-light">
                          {object.label ? (
                            <span>
                              {object.label} -{" "}
                              <span class="font-japanese">
                                {object.particle}
                              </span>
                              {index() < card.particles!.length - 1 && ", "}
                            </span>
                          ) : (
                            <span>
                              particle:{" "}
                              <span class="font-japanese">
                                {object.particle}
                              </span>
                              {index() < card.particles!.length - 1 && ", "}
                            </span>
                          )}
                        </span>
                      )}
                    </For>
                  </Show>
                </p>
                <For
                  each={card.answerCategories.filter(
                    (object) =>
                      context.store.enabledAnswerCategories.includes(
                        object.category,
                      ) && object.answers.length > 0,
                  )}
                >
                  {(object: AnswerCategory) => (
                    <div class="mt-2">
                      <p class="my-1 italic text-muted-foreground">
                        {object.category}:
                      </p>
                      <For each={object.answers}>
                        {(answer: string) => (
                          <p class="ml-4 text-lg">
                            {object.category === "Kana" ? (
                              <span class="font-japanese text-2xl font-medium">
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
                <div
                  class={`absolute right-0 top-0 h-full ${card.wrongAnswerCount > 0 ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  )
}
