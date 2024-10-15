import { createSignal, createEffect, onMount, Show, For } from "solid-js"
import { createStore } from "solid-js/store"
import { Button } from "@/components/ui/button"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { checkAnswer, Question } from "../utils/questionUtils"
import { generateQuestions } from "../utils/questionGenerator"
import { useSettingsContext } from "../context/SettingsContext"

type PracticePageProps = {
  onComplete: (finalState: ReviewSessionState) => void
}

type ReviewSessionState = {
  questions: Question[]
  currentIndex: number
  score: number
  isComplete: boolean
}

export default function PracticePage({ onComplete }: PracticePageProps) {
  const { settings } = useSettingsContext()
  const [sessionState, setSessionState] = createStore<ReviewSessionState>({
    questions: [],
    currentIndex: 0,
    score: 0,
    isComplete: false,
  })
  const [userAnswer, setUserAnswer] = createSignal("")
  const [isAnswered, setIsAnswered] = createSignal(false)

  let nextQuestionButtonRef: HTMLButtonElement | undefined
  let inputRef: HTMLInputElement | undefined

  const currentQuestion = () =>
    sessionState.questions[sessionState.currentIndex]

  // Focus the "Next Question" button after submission
  createEffect(() => {
    if (isAnswered() && nextQuestionButtonRef) {
      console.log("Focusing next question button")
      nextQuestionButtonRef.focus()
    }
  })

  createEffect(() => {
    if (sessionState.isComplete) {
      onComplete(sessionState)
    }
  })

  onMount(() => {
    startSession()
  })

  function startSession() {
    const questions = generateQuestions(settings())
    setSessionState({
      questions,
      currentIndex: 0,
      score: 0,
      isComplete: false,
    })
  }

  function handleSubmit() {
    if (!isAnswered()) {
      const question = currentQuestion()
      if (question) {
        const checkedQuestion = checkAnswer(question, userAnswer())
        setSessionState("questions", sessionState.currentIndex, checkedQuestion)
        setSessionState(
          "score",
          (score) => score + (checkedQuestion.correct ? 1 : 0),
        )
      }
      setIsAnswered(true)
    }
  }

  function handleNextQuestion() {
    const nextIndex = sessionState.currentIndex + 1
    const isComplete = nextIndex >= sessionState.questions.length
    setSessionState("currentIndex", nextIndex)
    setSessionState("isComplete", isComplete)
    setUserAnswer("")
    setIsAnswered(false)
    inputRef?.focus()
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault()
      isAnswered() ? handleNextQuestion() : handleSubmit()
    }
  }

  return (
    <div class="w-full max-w-[700px] space-y-6 px-6 sm:px-8 md:px-12">
      <Show when={currentQuestion()}>
        {(question) => (
          <>
            <h1 class="text-center font-japanese text-4xl font-medium">
              <span class="font-bold">{question().term.reading}</span>
              {question().term.word !== question().term.reading &&
                ` (${question().term.word})`}
            </h1>
            <p class="ml-6">
              <span class="text-xl font-bold italic">Type: </span>
              <span class="ml-2 text-3xl font-medium">
                {question().type[3] === "te-form" ? (
                  <>
                    <span class="font-japanese">て</span>-form
                  </>
                ) : (
                  question().type.join(", ")
                )}
              </span>
            </p>
            <div class="h-28 w-full">
              {isAnswered() && (
                <div class="flex h-full flex-col justify-between">
                  <div class="space-y-2">
                    <p
                      class={`font-medium ${question().correct ? "text-green-500" : "text-red-500"}`}
                    >
                      {question().correct ? "Correct!" : "Incorrect."}
                    </p>
                    {!question().correct && (
                      <>
                        <p class="text-xl">Correct answer(s): </p>
                        <p class="text-center font-japanese text-4xl">
                          <For each={question().answers}>
                            {(answer) => <span>{answer.reading}</span>}
                          </For>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <WanakanaWrapper>
              <TextFieldRoot>
                <TextField
                  ref={inputRef}
                  type="text"
                  placeholder="Your answer"
                  value={userAnswer()}
                  onInput={(e: InputEvent) =>
                    setUserAnswer((e.target as HTMLInputElement).value)
                  }
                  disabled={isAnswered()}
                  onKeyDown={handleKeyDown}
                  class={`py-3 text-center font-japanese text-2xl placeholder:font-inter focus-visible:ring-primary/25 disabled:opacity-100 ${
                    question().correct
                      ? "bg-green-500"
                      : isAnswered() && "bg-red-500"
                  }`}
                />
              </TextFieldRoot>
            </WanakanaWrapper>
            <div class="mt-4 flex justify-center">
              <Button
                onClick={isAnswered() ? handleNextQuestion : handleSubmit}
                size="lg"
                class="text-base"
                ref={nextQuestionButtonRef}
              >
                {isAnswered() ? "Next Question" : "Submit"}
              </Button>
            </div>
            <p class="mr-4 text-right">
              Question {sessionState.currentIndex + 1} of{" "}
              {sessionState.questions.length}
            </p>
          </>
        )}
      </Show>
    </div>
  )
}
