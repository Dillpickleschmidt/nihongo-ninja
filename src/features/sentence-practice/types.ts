export interface Answer {
  segments: string[] // Now just array of strings with readings in brackets
  notes?: string
}

export interface PracticeQuestion {
  english: string
  hint?: string
  answers: Answer[]
}

export interface ErrorRange {
  start: number
  end: number
}

export interface CheckResult {
  isCorrect: boolean
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
  bestMatch: Answer
}
