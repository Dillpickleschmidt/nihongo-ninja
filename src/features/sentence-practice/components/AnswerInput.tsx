import { Button } from "@/components/ui/button"
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"

type AnswerInputProps = {
  value: string
  onInput: (value: string) => void
  onCheckAnswer: () => void
  onReset: () => void
  furiganaEnabled: () => boolean
  onToggleFurigana: () => void
}

export default function AnswerInput(props: AnswerInputProps) {
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
      <div class="flex justify-between">
        <div class="space-x-2">
          <Button
            onClick={props.onCheckAnswer}
            class="bg-sky-500 text-base hover:bg-sky-600"
          >
            Check
          </Button>
          <Button onClick={props.onReset} variant="outline" class="text-base">
            Reset
          </Button>
        </div>
        <Checkbox
          checked={props.furiganaEnabled()}
          onChange={props.onToggleFurigana}
          class="mr-2 flex items-center space-x-2 hover:cursor-pointer"
        >
          <CheckboxLabel class="text-sm font-medium leading-none hover:cursor-pointer">
            Show furigana
          </CheckboxLabel>
          <CheckboxControl />
        </Checkbox>
      </div>
    </div>
  )
}
