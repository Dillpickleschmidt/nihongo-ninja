// store/types.ts
import type {
  PracticeQuestion,
  CheckResult,
} from "../core/answer-processing/types"
import type { UnprocessedQuestion } from "../core/conjugation/types"

export type Difficulty = "easy" | "hard"

export type PracticeState = {
  questions: PracticeQuestion[]
  rawQuestions: UnprocessedQuestion[]
  currentQuestionIndex: number
  currentInput: string
  showResult: boolean
  isLoading: boolean
  error: string | null
  path: string | null
  showFurigana: boolean
  checkResult?: CheckResult
  difficulty: Difficulty
  inputs: string[]
  inputResults: (InputResult | undefined)[]
}

export interface InputResult {
  isCorrect: boolean
  expectedAnswer: string
}
