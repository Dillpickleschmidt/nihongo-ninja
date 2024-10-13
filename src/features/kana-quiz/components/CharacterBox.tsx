import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { JSX } from "solid-js"

type CharacterBoxProps = {
  character: string
  userInput: string
  onInputChange: (newUserInput: string) => void
  disabled: boolean
  class?: string
  inputTextColor?: string
  innerBorderColor?: string
}

// Boxes with characters in them
export default function CharacterBox(props: CharacterBoxProps) {
  const handleInputChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    event,
  ) => {
    props.onInputChange(event.currentTarget.value)
  }

  return (
    <div
      class={`relative flex h-48 justify-center rounded-[12px] bg-card text-3xl shadow-lg ${props.class}`}
    >
      <div class="mt-6 font-japanese text-5xl">{props.character}</div>
      <div
        class={`absolute bottom-0 mb-6 ${props.inputTextColor || "text-red-400"}`}
      >
        <TextFieldRoot>
          <TextField
            type="text"
            class={`h-14 w-28 border-2 bg-[#191919] bg-opacity-0 ${props.innerBorderColor || "border-[#aaaaaa]"} rounded-xl border-dashed text-center text-3xl`}
            value={props.userInput}
            onInput={handleInputChange}
            disabled={props.disabled}
          />
        </TextFieldRoot>
      </div>
    </div>
  )
}
