// ui/practice/PracticeInput.tsx
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import type { JSX } from "solid-js"

interface PracticeInputProps {
  value: string
  onInput: (value: string) => void
  onKeyPress?: (e: KeyboardEvent) => void
  autofocus?: boolean
  class?: string
  placeholder?: string
}

export default function PracticeInput(props: PracticeInputProps) {
  return (
    <WanakanaWrapper>
      <TextFieldRoot>
        <TextField
          type="text"
          value={props.value}
          onInput={(e) => props.onInput(e.currentTarget.value)}
          onKeyPress={props.onKeyPress}
          autofocus={props.autofocus}
          class={props.class}
          placeholder={props.placeholder}
        />
      </TextFieldRoot>
    </WanakanaWrapper>
  )
}
