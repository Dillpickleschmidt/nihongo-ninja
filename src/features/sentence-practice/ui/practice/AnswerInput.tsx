// ui/practice/AnswerInput.tsx
import { Button } from "@/components/ui/button"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { usePracticeStore } from "../../store/PracticeContext"
import PracticeInput from "./PracticeInput"

export default function AnswerInput() {
  const { store, actions } = usePracticeStore()
  const isLastQuestion =
    store.currentQuestionIndex === store.questions.length - 1

  const isAnswerCorrect = () => store.showResult && store.checkResult?.isCorrect

  const handleMainButton = () => {
    if (isAnswerCorrect()) {
      actions.nextQuestion()
    } else {
      actions.checkAnswer()
    }
  }

  return (
    <div class="space-y-4">
      <div>
        <PracticeInput
          value={store.inputs.single || ""}
          onInput={(value) => actions.updateInput(value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleMainButton()
            }
          }}
          autofocus
          class="w-full py-6 text-2xl"
          placeholder="Type your answer in Japanese..."
        />
        <p class="pt-1 text-sm text-muted-foreground">*use caps for katakana</p>
      </div>
      <Button
        onClick={handleMainButton}
        class={`${isAnswerCorrect() ? "bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600" : "bg-amber-400 dark:bg-amber-500 dark:saturate-[85%]"} w-full py-3 text-sm text-black lg:text-base`}
      >
        {isAnswerCorrect()
          ? isLastQuestion
            ? "Finish"
            : "Next Question"
          : "Check Answer"}
      </Button>
    </div>
  )
}
