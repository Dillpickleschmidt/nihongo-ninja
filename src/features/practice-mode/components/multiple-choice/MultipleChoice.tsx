import { createEffect, createMemo, createSignal, For, onMount } from "solid-js"
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
      <ul class="mx-16 mb-6 mt-32 grid grid-cols-1 gap-[.875rem] lg:grid-cols-2">
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
                  "min-h-20 w-full justify-start rounded-xl py-4 text-start font-japanese text-xl shadow-md duration-75 ease-in-out hover:scale-[98.5%]",
                )}
              >
                {enabledAnswers().join(", ")}
              </Button>
            )
          }}
        </For>
      </ul>
    </div>
  )
}
