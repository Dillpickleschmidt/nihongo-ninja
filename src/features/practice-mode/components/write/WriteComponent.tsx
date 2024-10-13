import { createEffect, createMemo, createSignal, onMount } from "solid-js"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { handleWrittenAnswer, presentWriteOptions } from "./write"
import { Button } from "@/components/ui/button"
import { Card } from "@/types/vocab"
import {
  TextField,
  TextFieldDescription,
  TextFieldRoot,
} from "@/components/ui/textfield"

type WriteComponentProps = {
  data: Card[]
  shuffleInput?: boolean
}

export default function WriteComponent(props: WriteComponentProps) {
  const context = usePracticeModeContext()

  const correctEntry = createMemo(() =>
    presentWriteOptions(
      props.data,
      props.shuffleInput ?? true,
      context.currentCardIndex(),
    ),
  )
  const [userAnswer, setUserAnswer] = createSignal("")
  let inputRef: HTMLInputElement | undefined

  createEffect(() => {
    context.setCorrectEntry(correctEntry())
    setUserAnswer("")
  })

  createEffect(() => {
    if (!context.hasUserAnswered() && inputRef) {
      inputRef.focus()
    }
  })

  const handleInput = (answer: string) => {
    context.setIsAnswerCorrect(
      handleWrittenAnswer(
        answer,
        correctEntry(),
        context.enabledAnswerCategories(),
      ),
    )
    context.setHasUserAnswered(true)

    const enabledAnswers = correctEntry()
      .answerCategories.filter((category) =>
        context.enabledAnswerCategories().includes(category.category),
      )
      .flatMap((category) => category.answers)

    console.log("User answer: ", answer)
    console.log("Correct answer: ", enabledAnswers.join(", "))
  }

  return (
    <div class="mx-40 mt-28">
      <TextFieldRoot class="w-full max-w-xs">
        <TextField
          type="text"
          ref={inputRef}
          value={userAnswer()}
          onInput={(e) => setUserAnswer(e.currentTarget.value)}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === "Enter" && !context.hasUserAnswered()) {
              e.preventDefault()
              handleInput(userAnswer())
            }
          }}
          autofocus
          disabled={context.hasUserAnswered()}
          class={`${
            context.hasUserAnswered() &&
            (context.isAnswerCorrect() ? "text-green-500" : "text-red-500")
          } font-bold opacity-100 xl:!text-lg`}
        />
        {!context.hasUserAnswered() && (
          <TextFieldDescription>Type your answer.</TextFieldDescription>
        )}
      </TextFieldRoot>
      <Button
        onClick={() => handleInput(userAnswer())}
        disabled={context.hasUserAnswered()}
        class="my-2 disabled:opacity-90"
      >
        Submit
      </Button>
    </div>
  )
}
