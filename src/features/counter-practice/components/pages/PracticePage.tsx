import { createSignal, onMount } from "solid-js"
import { Button } from "@/components/ui/button"
import { generateQuestion } from "../../utils/counterUtils"
import {
  CounterPattern,
  GeneratedQuestion,
  PracticeState,
  VocabItem,
  ChapterPattern,
  SoundChangeType,
  Question,
} from "../../types"
import QuestionDisplay from "../QuestionDisplay"
import AnswerInput from "../AnswerInput"
import ProgressDisplay from "../ProgressDisplay"

// Helper function to derive reading from word
const deriveReading = (word: string): string => {
  // Implement your logic to derive reading from word
  // For example, you might use a dictionary or some other method
  return word // Placeholder: replace with actual logic
}

type PracticePageProps = {
  selectedChapters: number[]
  onComplete: (state: PracticeState) => void
  onReturn: () => void
}

export default function PracticePage(props: PracticePageProps) {
  const [patterns, setPatterns] = createSignal<CounterPattern[]>([])
  const [vocab, setVocab] = createSignal<VocabItem[]>([])
  const [currentQuestion, setCurrentQuestion] =
    createSignal<GeneratedQuestion | null>(null)
  const [answer, setAnswer] = createSignal("")
  const [attempted, setAttempted] = createSignal(0)
  const [correct, setCorrect] = createSignal(0)
  const [questions, setQuestions] = createSignal<Question[]>([])
  const [result, setResult] = createSignal<{
    isCorrect: boolean
    showHint: boolean
    showCorrectReading: boolean
  } | null>(null)
  const [isInputDisabled, setIsInputDisabled] = createSignal(false)
  const [firstAttempt, setFirstAttempt] = createSignal(true)
  let timeoutId: NodeJS.Timeout | null = null
  let inputRef: HTMLInputElement | null = null

  onMount(async () => {
    // Load counter patterns from the selected chapters
    const allPatternsData = await import("../../data/counter-patterns.json")

    // Clean up soundChangeType values during mapping
    const mappedData: ChapterPattern[] = allPatternsData.default.map(
      (chapter) => ({
        chapter: chapter.chapter,
        content: chapter.content.map((pattern) => ({
          ...pattern,
          soundChangeType: [
            "generic",
            "dates",
            "hToP",
            "hToP/B",
            "p",
            "k",
            "s",
            "t",
            "kToG",
            "sToZ",
          ].includes(pattern.soundChangeType as string)
            ? (pattern.soundChangeType as SoundChangeType) // Valid value
            : undefined, // Invalid values are coerced to undefined
        })),
      }),
    )

    const selectedPatterns = mappedData
      .filter((chapter) => props.selectedChapters.includes(chapter.chapter))
      .flatMap((chapter) => chapter.content)

    // Load all vocab
    const vocabData = await import("../../data/vocab.json")

    // Only keep vocab that matches the selected patterns
    const patternIds = new Set(selectedPatterns.map((p) => p.id))
    const filteredVocab = vocabData.default.filter((v) =>
      patternIds.has(v.patternId),
    )

    setPatterns(selectedPatterns)
    setVocab(filteredVocab)
    generateNewQuestion()
  })

  const generateNewQuestion = () => {
    const question = generateQuestion(patterns(), vocab())
    setCurrentQuestion(question)
    setAnswer("")
    setResult(null)
    setIsInputDisabled(false)
    setFirstAttempt(true)
    if (inputRef) {
      inputRef.focus()
    }
  }

  const handleNextQuestion = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    setResult(null)
    generateNewQuestion()
  }

  const checkAnswer = () => {
    if (!currentQuestion()) return

    const isCorrect = answer() === currentQuestion()!.correctReading
    const currentResult = result()

    const newQuestion: Question = {
      term: {
        reading: deriveReading(currentQuestion()!.vocab.word),
        word: currentQuestion()!.vocab.word,
      },
      type: [currentQuestion()!.pattern.id],
      givenAnswer: answer(),
      answers: [{ reading: currentQuestion()!.correctReading }],
      correct: isCorrect,
    }

    setQuestions((qs) => [...qs, newQuestion])

    if (isCorrect) {
      if (firstAttempt()) {
        setCorrect((c) => c + 1)
      }
      setAttempted((a) => a + 1)
      setResult({ isCorrect: true, showHint: false, showCorrectReading: false })
      setIsInputDisabled(true)
      timeoutId = setTimeout(handleNextQuestion, 1000) // Delay before moving to the next question
    } else {
      setFirstAttempt(false)
      if (currentResult?.showHint) {
        setResult({
          isCorrect: false,
          showHint: true,
          showCorrectReading: true,
        })
      } else {
        setResult({
          isCorrect: false,
          showHint: true,
          showCorrectReading: false,
        })
      }
    }

    if (attempted() >= 9) {
      props.onComplete({
        currentNumber: currentQuestion()!.number,
        vocab: currentQuestion()!.vocab,
        pattern: currentQuestion()!.pattern,
        answer: answer(),
        isCorrect,
        attempted: attempted() + 1,
        correct: correct(),
        questions: questions(),
      })
    }
  }

  return (
    <div class="w-full max-w-md space-y-6 p-4">
      {currentQuestion() && (
        <>
          <QuestionDisplay
            number={currentQuestion()!.number}
            pattern={currentQuestion()!.pattern}
            vocab={currentQuestion()!.vocab}
          />
          <div class="space-y-4">
            <AnswerInput
              value={answer()}
              onInput={setAnswer}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (isInputDisabled()) {
                    handleNextQuestion()
                  } else {
                    checkAnswer()
                  }
                }
              }}
              isCorrect={result()?.isCorrect ?? null}
              isDisabled={isInputDisabled()}
              inputRef={(el) => (inputRef = el)}
            />
            {result()?.showHint && !result()?.showCorrectReading && (
              <div class="text-center text-sm text-neutral-500">
                Counter ID: {currentQuestion()!.pattern.id}
              </div>
            )}
            {result()?.showCorrectReading && (
              <div class="text-center text-sm text-red-500">
                Correct answer: {currentQuestion()!.correctReading}
              </div>
            )}
            <Button
              onClick={() => {
                if (isInputDisabled()) {
                  handleNextQuestion()
                } else {
                  checkAnswer()
                }
              }}
              class="w-full"
            >
              {result()?.isCorrect ? "Next Question" : "Check Answer"}
            </Button>
          </div>
          <ProgressDisplay attempted={attempted()} correct={correct()} />
        </>
      )}
      <Button
        onClick={props.onReturn}
        variant="outline"
        size="sm"
        class="w-full"
      >
        Return to Settings
      </Button>
    </div>
  )
}
