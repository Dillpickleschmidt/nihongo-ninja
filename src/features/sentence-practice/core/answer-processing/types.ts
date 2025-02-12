// core/answer-processing/types.ts
export type Answer = {
  segments: string[] // Array of strings with readings in brackets
  notes?: string
  isVariation?: boolean
  originalPoliteForm?: boolean
}

export type PracticeQuestion = {
  english: string
  hint?: string
  answers: Answer[]
}

export type ErrorRange = {
  start: number
  end: number
}

export type CheckResult = {
  isCorrect: boolean
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
  bestMatch: Answer
  allMatches: AnswerMatch[]
}

export type AnswerMatch = {
  answer: Answer
  similarity: number
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
}
