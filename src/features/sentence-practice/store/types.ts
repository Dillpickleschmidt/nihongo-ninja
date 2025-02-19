// store/types.ts
import type {
  PracticeQuestion,
  CheckResult,
  ErrorRange,
} from "../core/answer-processing/types"
import type { UnprocessedQuestion } from "../core/conjugation/types"

export type Difficulty = "easy" | "hard"

export type PracticeState = {
  questions: PracticeQuestion[]
  rawQuestions: UnprocessedQuestion[]
  currentQuestionIndex: number
  inputs: AnswerInputs
  showResult: boolean
  isLoading: boolean
  error: string | null
  path: string | null
  showFurigana: boolean
  difficulty: Difficulty
  checkResult?: CheckResult
}

export type AnswerInputs = {
  single?: string // For hard mode
  blanks?: string[] // For easy mode
}
