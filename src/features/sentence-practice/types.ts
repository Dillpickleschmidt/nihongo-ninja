export interface Answer {
  segments: string[] // Now just array of strings with readings in brackets
  notes?: string
  isVariation?: boolean // For filtering kana variations (not hardcoded variations in json data)
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
