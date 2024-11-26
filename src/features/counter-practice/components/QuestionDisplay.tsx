// QuestionDisplay.tsx
import { CounterPattern, VocabItem } from "../types"

type QuestionDisplayProps = {
  number: number
  pattern: CounterPattern
  vocab: VocabItem
}

export default function QuestionDisplay(props: QuestionDisplayProps) {
  return (
    <div class="space-y-2 text-center">
      <h1 class="text-4xl lg:text-5xl">
        <span class="font-bold text-orange-400">{props.number}</span>{" "}
        <span class="text-3xl font-semibold text-primary lg:text-4xl">
          ({props.number === 1 ? props.vocab.word : props.vocab.pluralWord})
        </span>
      </h1>
    </div>
  )
}
