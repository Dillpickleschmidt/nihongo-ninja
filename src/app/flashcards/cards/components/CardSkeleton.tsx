import CardsRemaining from "./CardsRemaining"
import DifficultyButtons from "./DifficultyButtons"

export default function CardSkeleton() {
  return (
    <div className="flex flex-col gap-6 mt-2">
      <CardsRemaining />
      <DifficultyButtons />
    </div>
  )
}
