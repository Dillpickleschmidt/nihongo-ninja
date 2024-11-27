// AnswerInput.tsx
import { Button } from "@/components/ui/button"
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { useSentencePractice } from "../context/SentencePracticeContext"

export default function AnswerInput() {
  const { store, actions, result } = useSentencePractice()
  const isLastQuestion =
    store.currentQuestionIndex === store.questions.length - 1

  const handleMainButton = () => {
    if (store.showResult && result()?.isCorrect) {
      actions.nextQuestion()
    } else {
      actions.checkAnswer()
    }
  }

  return (
    <div class="space-y-4">
      <div>
        <WanakanaWrapper>
          <TextFieldRoot>
            <TextField
              type="text"
              value={store.currentInput}
              onInput={(e) => actions.updateInput(e.currentTarget.value)}
              onKeyPress={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                  handleMainButton()
                }
              }}
              autofocus
              class="w-full py-6 text-2xl"
              placeholder="Type your answer in Japanese..."
            />
          </TextFieldRoot>
        </WanakanaWrapper>
        <p class="pt-1 text-sm text-muted-foreground">*use caps for katakana</p>
      </div>
      <div class="w-full">
        <div class="space-x-2">
          <Button
            onClick={handleMainButton}
            class={`${store.showResult && result()?.isCorrect ? "bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600" : "bg-amber-400 dark:bg-amber-500 dark:saturate-[85%]"} w-full py-3 text-sm text-black lg:text-base`}
          >
            {store.showResult && result()?.isCorrect
              ? "Next Question"
              : "Check Answer"}
          </Button>
        </div>
        {/* <Checkbox
          checked={props.furiganaEnabled()}
          onChange={props.onToggleFurigana}
          class="mr-2 flex items-center space-x-2 hover:cursor-pointer"
          title={'Show furigana in the "Correct answer" field'}
        >
          <CheckboxLabel class="text-sm font-medium leading-none hover:cursor-pointer">
            Show furigana
          </CheckboxLabel>
          <CheckboxControl class="dark:data-[checked]:border-neutral-200 dark:data-[checked]:bg-neutral-200" />
        </Checkbox> */}
      </div>
    </div>
  )
}
