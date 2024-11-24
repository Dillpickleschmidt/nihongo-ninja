import { CounterPattern, VocabItem } from "../types"

type QuestionDisplayProps = {
  number: number
  pattern: CounterPattern
  vocab: VocabItem
}

export default function QuestionDisplay(props: QuestionDisplayProps) {
  return (
    <div class="space-y-2 text-center">
      <div class="text-4xl font-bold">
        {props.number}{" "}
        <span class="text-muted-foreground">
          {props.number === 1 ? props.vocab.word : props.vocab.pluralWord}
        </span>
      </div>
    </div>
  )
}
