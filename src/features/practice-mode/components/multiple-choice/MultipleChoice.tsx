import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import { presentMultipleChoiceOptions } from "../multiple-choice/multiple-choice"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { cn } from "@/libs/cn"
import { createStore } from "solid-js/store"

type ButtonState = {
  isSelected: boolean
  isCorrect: boolean
}

export default function MultipleChoice() {
  const context = usePracticeModeContext()

  const [buttonStore, setButtonStore] = createStore<ButtonState[]>([
    { isSelected: false, isCorrect: false },
    { isSelected: false, isCorrect: false },
    { isSelected: false, isCorrect: false },
    { isSelected: false, isCorrect: false },
  ])
  const [isTouchDevice, setIsTouchDevice] = createSignal(false)

  onMount(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)

    // Add keyboard listener
    const handleKeyPress = (e: KeyboardEvent) => {
      if (context.store.hasUserAnswered) return

      // Check if the pressed key is a number between 1-4
      const num = parseInt(e.key)
      if (num >= 1 && num <= choices().options.length) {
        handleSelection(num - 1) // subtract 1 because array is 0-based
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    // Cleanup function to remove event listener
    onCleanup(() => {
      window.removeEventListener("keydown", handleKeyPress)
    })
  })

  const choices = createMemo(() =>
    presentMultipleChoiceOptions(
      context.store.activeDeck,
      context.store.currentCardIndex,
    ),
  )

  createEffect(() => {
    setButtonStore(
      choices().options.map(() => ({ isSelected: false, isCorrect: false })),
    )
  })

  const handleSelection = (selectionIndex: number) => {
    const { correctOption } = choices()
    const correctIndex = choices().options.indexOf(correctOption)

    context.setStore("hasUserAnswered", true)
    context.setStore("isAnswerCorrect", selectionIndex === correctIndex)

    setButtonStore(
      buttonStore.map((state, index) => ({
        isSelected: index === selectionIndex,
        isCorrect: index === correctIndex,
      })),
    )
  }

  const getButtonClasses = (isSelected: boolean, isCorrect: boolean) => {
    if (isCorrect)
      return "disabled:opacity-100 bg-green-500 text-white font-semibold"
    if (isSelected) return "disabled:opacity-100 bg-red-500 text-white"
    return "bg-background opacity-60"
  }

  return (
    <div>
      <ul class="mb-6 grid grid-cols-1 gap-[.875rem] px-4 lg:grid-cols-2 lg:px-16">
        <For each={choices().options}>
          {(option, index) => {
            const enabledAnswers = createMemo(() =>
              option.answerCategories
                .filter((object) =>
                  context.store.enabledAnswerCategories.includes(
                    object.category,
                  ),
                )
                .flatMap((category) => category.answers),
            )

            return (
              <Button
                variant="outline"
                {...(isTouchDevice()
                  ? { onPointerDown: () => handleSelection(index()) }
                  : { onClick: () => handleSelection(index()) })}
                disabled={context.store.hasUserAnswered}
                class={cn(
                  context.store.hasUserAnswered &&
                    getButtonClasses(
                      buttonStore[index()].isSelected,
                      buttonStore[index()].isCorrect,
                    ),
                  "min-h-20 w-full flex-col items-start justify-center rounded-xl py-4 text-start font-japanese text-xl shadow-md duration-75 ease-in-out hover:scale-[98.5%]",
                )}
              >
                {enabledAnswers().join(", ")}
                <Show when={option.particles}>
                  <For each={option.particles}>
                    {(object) => (
                      <div class="text-base font-light">
                        {object.label ? (
                          <span>
                            {object.label} -{" "}
                            <span class="font-japanese">{object.particle}</span>
                          </span>
                        ) : (
                          <span>
                            particle:{" "}
                            <span class="font-japanese">{object.particle}</span>
                          </span>
                        )}
                      </div>
                    )}
                  </For>
                </Show>
              </Button>
            )
          }}
        </For>
      </ul>
    </div>
  )
}
