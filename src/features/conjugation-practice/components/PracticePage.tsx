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
    <div class="mx-auto px-6 sm:min-w-[600px]">
      <Show when={currentQuestion()}>
        {(question) => (
          <div class="space-y-8">
            <section class="rounded-xl border bg-card p-6 sm:p-8">
              <div class="space-y-6">
                <h1 class="text-center font-japanese text-4xl font-medium">
                  <span class="font-bold">{question().term.reading}</span>
                  {question().term.word !== question().term.reading &&
                    ` (${question().term.word})`}
                </h1>

                <div class="rounded-lg border bg-background/50 p-4">
                  <p class="text-center">
                    <span class="text-xl font-bold italic">Type: </span>
                    <span class="ml-2 text-2xl font-medium">
                      {question().type[3] === "te-form" ? (
                        <>
                          <span class="font-japanese">て</span>-form
                        </>
                      ) : (
                        question().type.join(", ")
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </section>

            <section class="rounded-xl border bg-card p-6 sm:p-8">
              <div class="mb-6 min-h-[7rem]">
                {isAnswered() && (
                  <div class="space-y-0">
                    <p
                      class={`font-medium ${
                        question().correct ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {question().correct ? "Correct!" : "Incorrect."}
                    </p>
                    {!question().correct && (
                      <>
                        <p class="pb-3 text-xl">Correct answer(s):</p>
                        <p class="text-center font-japanese text-4xl">
                          <For each={question().answers}>
                            {(answer) => <span>{answer.reading}</span>}
                          </For>
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div class="space-y-4">
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
                      class={`h-12 py-4 text-center font-japanese text-3xl placeholder:font-inter focus-visible:ring-primary/25 disabled:opacity-100 ${
                        question().correct
                          ? "bg-green-500"
                          : isAnswered() && "bg-red-500"
                      }`}
                    />
                  </TextFieldRoot>
                </WanakanaWrapper>

                <div class="flex justify-center">
                  <Button
                    onClick={isAnswered() ? handleNextQuestion : handleSubmit}
                    size="lg"
                    class="w-full rounded-lg bg-white/10 py-3 text-xl font-bold text-primary backdrop-blur-sm hover:bg-white/20"
                    ref={nextQuestionButtonRef}
                  >
                    {isAnswered() ? "Next Question" : "Submit"}
                  </Button>
                </div>
              </div>
            </section>

            <p class="text-right text-base text-muted-foreground">
              Question {sessionState.currentIndex + 1} of{" "}
              {sessionState.questions.length}
            </p>
          </div>
        )}
      </Show>
    </div>
  )
}
