// types.ts
export type Answer = {
  segments: string[] // Now just array of strings with readings in brackets
  notes?: string
  isVariation?: boolean // For filtering kana variations (not hardcoded variations in json data)
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
}

export type ConjugatedWord = {
  word: string
  pos: string
  polarity: "positive" | "negative"
  tense: "past" | "non-past"
}

export type ConjugationOptions = {
  polite?: boolean
  negative?: boolean
  past?: boolean
}
