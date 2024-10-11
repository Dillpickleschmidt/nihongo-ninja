import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { AnswerCategory } from "@/types/vocab"
import ContentBox from "@/components/ContentBox"

export default function ReviewPage() {
  const context = usePracticeModeContext()

  const uniqueCards = createMemo(() => {
    if (!context.recentlySeenCards()) return []
    return Array.from(
      new Map(
        context.recentlySeenCards()!.map((card) => [card.key, card]),
      ).values(),
    )
  })

  const handleContinue = () => {
    console.log("Clearing recently seen cards")
    context.setRecentlySeenCards(null)
    context.setCurrentPage("practice")
  }

  return (
    <Show when={context.recentlySeenCards()}>
      <>
        {/* <ContentBox nextButtonText="" nextButtonLink=""> */}
        <div class="fixed bottom-0 z-50 my-6 flex w-full justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            class="w-[480px] bg-orange-500"
          >
            Continue
          </Button>
        </div>
        <div class="w-full pb-10 pt-24">
          <h1 class="text-center text-5xl font-semibold">
            See the terms you practiced!
          </h1>
        </div>
        <div class="pb-28 lg:mx-48 2xl:mx-96">
          <For each={uniqueCards()}>
            {(card) => (
              <div class="relative mx-2 mb-4 flex min-w-[500px] overflow-hidden rounded-lg bg-card shadow-md xl:mx-8">
                <div class="flex-1 py-4 pl-4 pr-6">
                  <p
                    class={`${card.wrongAnswerCount > 0 ? "text-[#ff5757]" : ""} text-xl font-bold`}
                  >
                    {card.key}
                  </p>
                  <For
                    each={card.answerCategories.filter(
                      (category) =>
                        context
                          .enabledAnswerCategories()
                          .includes(category.category) &&
                        category.answers.length > 0,
                    )}
                  >
                    {(categoryObj: AnswerCategory) => (
                      <div class="mt-2">
                        <p class="my-1 italic text-muted-foreground">
                          {categoryObj.category}:
                        </p>
                        <For each={categoryObj.answers}>
                          {(answer: string) => (
                            <p class="ml-4 text-xl">
                              {categoryObj.category === "Kana" ? (
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
                </div>
                <div
                  class={`absolute right-0 h-full ${card.wrongAnswerCount > 0 ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
                />
              </div>
            )}
          </For>
        </div>
        {/* </ContentBox> */}
      </>
    </Show>
  )
}
