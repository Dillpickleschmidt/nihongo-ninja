import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { createEffect } from "solid-js"

type AnswerInputProps = {
  value: string
  onInput: (value: string) => void
  onKeyPress: (e: KeyboardEvent) => void
  isCorrect: boolean | null
  isDisabled: boolean
  inputRef: (el: HTMLInputElement) => void
}

export default function AnswerInput(props: AnswerInputProps) {
  return (
    <WanakanaWrapper>
      <TextFieldRoot class="mx-auto max-w-xs">
        <TextField
          type="text"
          value={props.value}
          onInput={(e) => props.onInput(e.currentTarget.value)}
          onKeyPress={props.onKeyPress}
          class={`w-full py-5 text-xl ${
            props.isCorrect === null
              ? ""
              : props.isCorrect
                ? "border-green-500/75 bg-green-500/15"
                : "border-red-500/75 bg-red-500/15"
          }`}
          placeholder="Enter the reading..."
          autofocus
          autocomplete="off"
          autocapitalize="none"
          autocorrect="off"
          disabled={props.isDisabled}
          ref={props.inputRef}
        />
      </TextFieldRoot>
    </WanakanaWrapper>
  )
}
