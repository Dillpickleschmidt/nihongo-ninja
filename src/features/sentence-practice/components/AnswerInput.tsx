import { Button } from "@/components/ui/button"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { Component } from "solid-js"

interface Props {
  value: string
  onInput: (value: string) => void
  onCheck: () => void
  onReset: () => void
}

export const AnswerInput: Component<Props> = (props) => {
  return (
    <div class="space-y-2">
      <TextFieldRoot>
        <TextField
          type="text"
          value={props.value}
          onInput={(e) => props.onInput(e.currentTarget.value)}
          class="w-full py-5 text-xl"
          placeholder="Type your answer in Japanese..."
        />
      </TextFieldRoot>
      <div class="space-x-2">
        <Button
          onClick={props.onCheck}
          class="bg-sky-500 text-base hover:bg-sky-600"
        >
          Check
        </Button>
        <Button onClick={props.onReset} variant="outline" class="text-base">
          Reset
        </Button>
      </div>
    </div>
  )
}
