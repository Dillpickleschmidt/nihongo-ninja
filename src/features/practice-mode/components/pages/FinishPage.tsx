import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import ContentBox from "@/components/ContentBox"
import { A } from "@solidjs/router"

export default function FinishPage() {
  const context = usePracticeModeContext()

  return (
    <>
      {/* <ContentBox nextButtonText="" nextButtonLink=""> */}
      <div class="fixed bottom-0 z-50 my-6 flex w-full justify-center">
        <A href="/learn">
          <Button size="lg" class="mb-4 mt-2 w-40 bg-orange-500">
            Return
          </Button>
        </A>
      </div>
      <div class="w-full pb-10 pt-24">
        <h1 class="text-center text-5xl font-semibold">
          You've finished this deck!
        </h1>
        <div class="mt-2 text-4xl">🎉</div>
      </div>
      <div class="pb-28 lg:mx-48 2xl:mx-96">
        <For each={context.data()}>
          {(entry) => (
            <div class="my-2 rounded-xl bg-card p-6 shadow-md">
              <p class="text-2xl font-bold !text-orange-500 text-primary">
                {entry.key}
              </p>
              <For
                each={entry.answerCategories.filter(
                  (category) =>
                    context
                      .enabledAnswerCategories()
                      .includes(category.category) &&
                    category.answers.length > 0,
                )}
              >
                {(categoryObj) => (
                  <div>
                    <p class="my-1 italic text-muted-foreground">
                      {categoryObj.category}:
                    </p>
                    <For each={categoryObj.answers}>
                      {(answer: string) => (
                        <p class="text-xl font-bold text-primary">
                          {categoryObj.category === "Kana" ? (
                            <span class="font-japanese text-2xl">{answer}</span>
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
                <p class="text-red-500">
                  You missed this question {entry.wrongAnswerCount} times
                </p>
              )}
            </div>
          )}
        </For>
      </div>
      {/* </ContentBox> */}
    </>
  )
}
