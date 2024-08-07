"use client"

import { useState, useEffect, KeyboardEvent, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import type {
  ReviewSessionState,
  ReviewSessionActions,
} from "../hooks/useReviewSession"

type PracticePageProps = {
  sessionState: ReviewSessionState
  sessionActions: ReviewSessionActions
  onComplete: () => void
}

export default function PracticePage({
  sessionState,
  sessionActions,
  onComplete,
}: PracticePageProps) {
  const [userAnswer, setUserAnswer] = useState("")
  const [isAnswered, setIsAnswered] = useState(false)
  const nextQuestionButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (sessionState.isComplete) {
      onComplete()
    }
  }, [sessionState.isComplete, onComplete])

  useEffect(() => {
    if (!isAnswered && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isAnswered, sessionState.currentIndex])

  function handleSubmit() {
    if (!isAnswered) {
      sessionActions.submitAnswer(userAnswer)
      setIsAnswered(true)
      setTimeout(() => {
        nextQuestionButtonRef.current?.focus()
      }, 0)
    }
  }

  function handleNextQuestion() {
    sessionActions.nextQuestion()
    setUserAnswer("")
    setIsAnswered(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault()
      if (!isAnswered) {
        handleSubmit()
      } else {
        handleNextQuestion()
      }
    }
  }

  const currentQuestion = sessionActions.getCurrentQuestion()

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  const displayTerm = currentQuestion.reversed
    ? currentQuestion.answers[0]
    : currentQuestion.term

  return (
    <div className="w-screen max-w-[700px] space-y-6 px-6 sm:px-8 md:px-12">
      <h1 className="text-center font-japanese text-4xl font-medium">
        <span className="font-bold">{displayTerm.reading}</span>
        {displayTerm.word !== displayTerm.reading && ` (${displayTerm.word})`}
      </h1>

      <p className="ml-6">
        <span className="text-xl font-bold italic">Type: </span>
        <span className="ml-2 text-3xl font-medium">
          {currentQuestion.type[3] === "te-form" ? (
            <>
              <span className="font-japanese">て</span>-form
            </>
          ) : (
            currentQuestion.type.join(", ")
          )}
        </span>
      </p>

      <div className="h-28 w-full">
        {isAnswered && (
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-2">
              <p
                className={`font-medium ${currentQuestion.correct ? "text-green-500" : "text-red-500"}`}
              >
                {currentQuestion.correct ? "Correct!" : "Incorrect."}
              </p>
              {!currentQuestion.correct && (
                <p className="text-xl">Correct answer(s): </p>
              )}
            </div>
            {!currentQuestion.correct && (
              <p className="text-center font-japanese text-4xl">
                {currentQuestion.answers.map((a) => a.reading).join(", ")}
              </p>
            )}
          </div>
        )}
      </div>

      <WanakanaWrapper
        ref={inputRef}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      >
        <Input
          type="text"
          placeholder="Your answer"
          className={`py-3 text-center font-japanese text-2xl placeholder:font-inter focus-visible:ring-primary/25 disabled:opacity-100 ${
            currentQuestion.correct
              ? "bg-green-500"
              : isAnswered && "bg-red-500"
          }`}
          disabled={isAnswered}
          onKeyDown={handleKeyDown}
        />
      </WanakanaWrapper>
      <div className="mt-4 flex justify-center">
        {isAnswered ? (
          <Button
            onClick={handleNextQuestion}
            size="lg"
            className="text-base focus-visible:ring-1"
            ref={nextQuestionButtonRef}
          >
            Next Question
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            size="lg"
            className="text-base focus-visible:ring-1"
          >
            Submit
          </Button>
        )}
      </div>
      <p className="mr-4 text-right">
        Question {sessionState.currentIndex + 1} of{" "}
        {sessionState.questions.length}
      </p>
    </div>
  )
}
