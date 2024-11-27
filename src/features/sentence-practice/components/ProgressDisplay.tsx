// ProgressDisplay.tsx
import { createMemo } from "solid-js"

type ProgressDisplayProps = {
  attempted: number
  total: number
}

export default function ProgressDisplay(props: ProgressDisplayProps) {
  const progress = createMemo(() => (props.attempted / props.total) * 100)

  return (
    <div class="pt-2">
      <div class="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question: {props.attempted}/{props.total}
        </span>
      </div>
      <div class="mt-2 h-2 overflow-hidden rounded-full bg-muted">
        <div
          class="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progress()}%` }}
        />
      </div>
    </div>
  )
}
