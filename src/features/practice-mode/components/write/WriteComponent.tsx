import { createEffect, createMemo, createSignal, onMount } from "solid-js"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { handleWrittenAnswer } from "./write"
import { Button } from "@/components/ui/button"
import { Card } from "@/types/vocab"
import {
  TextField,
  TextFieldDescription,
  TextFieldRoot,
} from "@/components/ui/textfield"

export default function WriteComponent() {
  const [userAnswer, setUserAnswer] = createSignal("")
  let inputRef: HTMLInputElement | undefined

  const context = usePracticeModeContext()

  const correctEntry = createMemo(
    () => context.store.activeDeck[context.store.currentCardIndex],
  )
  createEffect(() => {
    if (!context.store.hasUserAnswered && inputRef) {
      inputRef.focus()
      setUserAnswer("")
    }
  })

  function handleSubmit() {
    context.setStore("hasUserAnswered", true)
    const isAnswerCorrect = handleWrittenAnswer(
      userAnswer(),
      correctEntry(),
      context.store.enabledAnswerCategories,
    )
    context.setStore("isAnswerCorrect", isAnswerCorrect)
    // console.log("User answer: ", answer)
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
            if (e.key === "Enter" && !context.store.hasUserAnswered) {
              e.preventDefault()
              handleSubmit()
            }
          }}
          autofocus
          disabled={context.store.hasUserAnswered}
          class={`${
            context.store.hasUserAnswered &&
            (context.store.isAnswerCorrect ? "text-green-500" : "text-red-500")
          } font-bold opacity-100 xl:!text-lg`}
        />
        {!context.store.hasUserAnswered && (
          <TextFieldDescription>Type your answer.</TextFieldDescription>
        )}
      </TextFieldRoot>
      <Button
        onClick={() => handleSubmit()}
        disabled={context.store.hasUserAnswered}
        class="my-2 disabled:opacity-90"
      >
        Submit
      </Button>
    </div>
  )
}
