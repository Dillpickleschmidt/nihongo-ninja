"use client"
import { useEffect, useState, useRef } from "react"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { Button } from "@/components/ui/button"
import { Card } from "@/types"
import CardTypeSwitch from "../CardTypeSwitch"
import { handleNextQuestion } from "../cardHandlers"
import ContentBox from "@/features/content-box/ContentBox"

type PracticePageProps = {
  activeCards: Card[]
  setActiveCards: (cards: Card[]) => void
  inactiveCards: Card[]
  setInactiveCards: (cards: Card[]) => void
  unslicedData: Card[]
}

export default function PracticePage({
  activeCards,
  setActiveCards,
  inactiveCards,
  setInactiveCards,
  unslicedData,
}: PracticePageProps) {
  const {
    isAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
    currentCardIndex,
    setCurrentCardIndex,
    setCurrentPage,
    recentlySeenCards,
    setRecentlySeenCards,
  } = usePracticeModeContext()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (recentlySeenCards && Object.keys(recentlySeenCards).length === 7) {
      setCurrentPage("review")
    }
  }, [recentlySeenCards, setCurrentPage])

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [hasUserAnswered])

  return (
    <ContentBox
      variant="xl"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={2}
      nextPageLink=""
      showProgressBar={false}
      nextButton=""
    >
      <div className="flex min-h-full w-full justify-center">
        <div className="mx-2 mt-28 w-full max-w-[1000px] rounded-3xl border-2 border-dashed border-card-foreground bg-card pb-24 pt-32 md:mx-12 lg:py-32">
          <CardTypeSwitch data={activeCards} />
        </div>
        {hasUserAnswered && (
          <Button
            ref={buttonRef}
            size="lg"
            onClick={() =>
              handleNextQuestion(
                isAnswerCorrect,
                activeCards,
                inactiveCards,
                currentCardIndex,
                setCurrentCardIndex,
                setHasUserAnswered,
                setActiveCards,
                setInactiveCards,
                setCurrentPage,
                recentlySeenCards,
                setRecentlySeenCards,
                unslicedData,
              )
            }
            className="absolute bottom-12 shadow-md"
          >
            <span>Next Question {"->"}</span>
          </Button>
        )}
      </div>
    </ContentBox>
  )
}
