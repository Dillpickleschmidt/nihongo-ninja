import { createEffect } from "solid-js"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Button } from "@/components/ui/button"
import CardTypeSwitch from "../CardTypeSwitch"
import { handleNextQuestion } from "../../cardHandlers"

export default function PracticePage() {
  const context = usePracticeModeContext()
  let buttonRef: HTMLButtonElement | undefined

  createEffect(() => {
    const recentlySeenCards = context.store.recentlySeenCards
    if (recentlySeenCards.length === 7) {
      context.setStore("currentPage", "review")
    }
  })

  createEffect(() => {
    if (context.store.hasUserAnswered && buttonRef) {
      buttonRef.focus()
    }
  })

  return (
    <div class="flex min-h-full w-full justify-center">
      <div class="mx-2 mt-28 w-full max-w-[1000px] rounded-3xl border-2 border-dashed border-card-foreground bg-card pb-24 pt-32 md:mx-12 lg:py-32">
        <CardTypeSwitch />
      </div>
      {context.store.hasUserAnswered && (
        <Button
          ref={buttonRef}
          size="lg"
          onClick={() => handleNextQuestion(context)}
          class="absolute bottom-12 shadow-md"
        >
          <span>Next Question {"->"}</span>
        </Button>
      )}
    </div>
  )
}
