import { PracticeQuestion } from "../types"

type PromptDisplayProps = {
  question: PracticeQuestion
}

export default function PromptDisplay(props: PromptDisplayProps) {
  return (
    <div class="space-y-2">
      {/* <h2 class="text-xl font-bold">Translate to Japanese:</h2> */}
      <p class="text-xl font-semibold">{props.question.english}</p>
      {props.question.hint && (
        <p class="text-base text-neutral-500">Hint: {props.question.hint}</p>
      )}
    </div>
  )
}
