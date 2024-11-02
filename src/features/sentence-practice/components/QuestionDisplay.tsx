import { Component } from "solid-js"
import { PracticeQuestion } from "../types"

interface Props {
  question: PracticeQuestion
}

export const QuestionDisplay: Component<Props> = (props) => {
  return (
    <div class="space-y-2">
      <h2 class="text-xl font-bold">Translate to Japanese:</h2>
      <p class="text-xl">{props.question.english}</p>
      {props.question.hint && (
        <p class="text-base text-neutral-500">Hint: {props.question.hint}</p>
      )}
    </div>
  )
}
