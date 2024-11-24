type ProgressDisplayProps = {
  attempted: number
  correct: number
}

export default function ProgressDisplay(props: ProgressDisplayProps) {
  return (
    <div class="text-center">
      Progress: {props.attempted}/10 (Correct: {props.correct})
    </div>
  )
}
