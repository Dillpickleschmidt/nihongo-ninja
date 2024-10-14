import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { For } from "solid-js"

const verbs = ["行く", "飲む", "話す", "読む", "食べる", "見る"]

export default function IruEruPractice() {
  const randomizedVerbs = [...verbs].sort(() => Math.random() - 0.5)

  return (
    <div class="flex flex-col items-center text-2xl">
      <For each={randomizedVerbs}>
        {(verb, index) => (
          <div class="mb-4 flex items-center">
            <div class="w-20 font-japanese">{verb}</div>
            <div class="mr-4">{"->"}</div>
            <WanakanaWrapper>
              <TextFieldRoot class="w-48">
                <TextField type="text" class="font-japanese text-xl" />
              </TextFieldRoot>
            </WanakanaWrapper>
          </div>
        )}
      </For>
    </div>
  )
}
