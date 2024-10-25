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
    <div class="mt-[-4.1rem] flex min-h-screen w-full justify-center sm:mt-0 sm:min-h-full sm:pb-12">
      <div class="w-full max-w-[1000px] bg-card pt-60 sm:mx-2 sm:mt-28 sm:rounded-3xl sm:border-2 sm:border-dashed sm:border-card-foreground sm:pb-24 sm:pt-32 md:mx-12 lg:py-32">
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
