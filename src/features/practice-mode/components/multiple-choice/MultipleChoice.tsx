import { createEffect, createMemo, createSignal, For, onMount } from "solid-js"
import {
  handleMultipleChoiceSelection,
  presentMultipleChoiceOptions,
} from "./multiple-choice"
import { Button } from "@/components/ui/button"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Card } from "@/types/vocab"
import { cn } from "@/libs/cn"

type MultipleChoiceProps = {
  data: Card[]
  shuffleInput?: boolean
}

type ButtonState = {
  isSelected: boolean
  isCorrect: boolean
  isAnswered: boolean
}

export default function MultipleChoice(props: MultipleChoiceProps) {
  const context = usePracticeModeContext()

  const [buttonStates, setButtonStates] = createSignal<ButtonState[]>([])

  const [isTouchDevice, setIsTouchDevice] = createSignal(false)

  onMount(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  })

  const choices = createMemo(() =>
    presentMultipleChoiceOptions(
      props.data,
      props.shuffleInput ?? true,
      context.currentCardIndex(),
    ),
  )

  createEffect(() => {
    context.setCorrectEntry(choices().correctOption)
    setButtonStates(
      choices().options.map(() => ({
        isSelected: false,
        isCorrect: false,
        isAnswered: false,
      })),
    )
  })

  const handleSelection = (option: Card, index: number) => {
    const selectedAnswer = getFirstEnabledAnswer(option)
    if (selectedAnswer) {
      const isCorrect = handleMultipleChoiceSelection(choices(), selectedAnswer)
      context.setIsAnswerCorrect(isCorrect)
      context.setHasUserAnswered(true)

      setButtonStates((prevStates) =>
        prevStates.map((state, i) => ({
          ...state,
          isSelected: i === index,
          isCorrect: i === index && isCorrect,
          isAnswered: true,
        })),
      )

      // If the answer is incorrect, highlight the correct answer
      if (!isCorrect) {
        const correctIndex = choices().options.findIndex(
          (opt) => opt.key === choices().correctOption.key,
        )
        if (correctIndex !== -1) {
          setButtonStates((prevStates) => {
            const newStates = [...prevStates]
            newStates[correctIndex] = {
              ...newStates[correctIndex],
              isCorrect: true,
              isAnswered: true,
            }
            return newStates
          })
        }
      }
    }
  }

  const getFirstEnabledAnswer = (card: Card): string | undefined => {
    const enabledCategory = card.answerCategories.find((category) =>
      context.enabledAnswerCategories().includes(category.category),
    )
    return enabledCategory?.answers[0]
  }

  const getButtonClasses = (
    isAnswered: boolean,
    isCorrect: boolean,
    isSelected: boolean,
  ) => {
    return cn(
      "disabled:opacity-60 font-light bg-background",
      isAnswered &&
        isCorrect &&
        "disabled:opacity-100 bg-green-500 text-white font-semibold",
      isAnswered &&
        isSelected &&
        !isCorrect &&
        "disabled:opacity-100 bg-red-500 text-white",
    )
  }

  return (
    <div>
      <ul class="mx-16 mb-6 mt-32 grid grid-cols-1 gap-[.875rem] lg:grid-cols-2">
        <For each={choices().options}>
          {(option, index) => {
            const enabledAnswers = createMemo(() =>
              option.answerCategories
                .filter((category) =>
                  context.enabledAnswerCategories().includes(category.category),
                )
                .flatMap((category) => category.answers),
            )

            const buttonState = () =>
              buttonStates()[index()] || {
                isSelected: false,
                isCorrect: false,
                isAnswered: false,
              }

            return (
              <Button
                variant="outline"
                {...(isTouchDevice()
                  ? {
                      onPointerDown: () => handleSelection(option, index()),
                    }
                  : {
                      onClick: () => handleSelection(option, index()),
                    })}
                disabled={context.hasUserAnswered()}
                class={cn(
                  getButtonClasses(
                    buttonState().isAnswered,
                    buttonState().isCorrect,
                    buttonState().isSelected,
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
