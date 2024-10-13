import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
} from "@/components/ui/textfield"
import { For } from "solid-js"

export default function DigitsPractice() {
  const items = [
    "15",
    "37",
    "58",
    "79",
    "123",
    "256",
    "389",
    "612",
    "785",
    "941",
    "1,243",
    "2,589",
    "3,752",
    "5,981",
    "6,374",
    "8,895",
    "9,221",
    "12,345",
    "68,734",
    "95,678",
  ]

  return (
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <For each={items}>
        {(item, index) => (
          <div class="flex flex-col">
            <TextFieldRoot class="w-full max-w-xs">
              <TextFieldLabel class="mb-1 !text-center text-base">
                {item}
              </TextFieldLabel>
              <TextField type="text" />
            </TextFieldRoot>
          </div>
        )}
      </For>
    </div>
  )
}
