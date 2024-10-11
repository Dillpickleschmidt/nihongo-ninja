import { createEffect, onMount } from "solid-js"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Button } from "@/components/ui/button"
import { Card } from "@/types/vocab"
import CardTypeSwitch from "../CardTypeSwitch"
import { handleNextQuestion } from "../cardHandlers"

type PracticePageProps = {
  activeCards: Card[]
  setActiveCards: (cards: Card[]) => void
  inactiveCards: Card[]
  setInactiveCards: (cards: Card[]) => void
  unslicedData: Card[]
}

export default function PracticePage(props: PracticePageProps) {
  const context = usePracticeModeContext()
  let buttonRef: HTMLButtonElement | undefined

  createEffect(() => {
    const recentlySeenCards = context.recentlySeenCards()
    if (recentlySeenCards && recentlySeenCards.length === 7) {
      context.setCurrentPage("review")
    }
  })

  createEffect(() => {
    if (context.hasUserAnswered() && buttonRef) {
      buttonRef.focus()
    }
  })

  const handleNext = () => {
    handleNextQuestion(
      context.isAnswerCorrect(),
      props.activeCards,
      props.inactiveCards,
      context.currentCardIndex(),
      context.setCurrentCardIndex,
      context.setHasUserAnswered,
      props.setActiveCards,
      props.setInactiveCards,
      context.setCurrentPage,
      context.recentlySeenCards(),
      context.setRecentlySeenCards,
      props.unslicedData,
    )
  }

  return (
    <div class="flex min-h-full w-full justify-center">
      <div class="mx-2 mt-28 w-full max-w-[1000px] rounded-3xl border-2 border-dashed border-card-foreground bg-card pb-24 pt-32 md:mx-12 lg:py-32">
        <CardTypeSwitch data={props.activeCards} />
      </div>
      {context.hasUserAnswered() && (
        <Button
          ref={buttonRef}
          size="lg"
          onClick={handleNext}
          class="absolute bottom-12 shadow-md"
        >
          <span>Next Question {"->"}</span>
        </Button>
      )}
    </div>
  )
}
