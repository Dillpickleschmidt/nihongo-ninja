// AnswerInput.tsx
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

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
      <TextFieldRoot class="mx-auto">
        <TextField
          type="text"
          value={props.value}
          onInput={(e) => props.onInput(e.currentTarget.value)}
          onKeyPress={props.onKeyPress}
          class={`w-full rounded-lg border-2 bg-background px-4 py-7 text-xl lg:text-2xl ${
            props.isCorrect === null
              ? "border-border"
              : props.isCorrect
                ? "border-green-500/75 bg-green-500/15"
                : "border-red-500/75 bg-red-500/15"
          } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-100`}
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
