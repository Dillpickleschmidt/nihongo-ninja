// types.ts
export type Answer = {
  segments: string[] // Now just array of strings with readings in brackets
  notes?: string
  isVariation?: boolean // For filtering kana variations (not hardcoded variations in json data)
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
}

type WordForms =
  | "normal"
  | "te-form"
  | "tari-form"
  | "tai-form"
  | "tai-adv-form"
  | "potential"
  | "potential-adv-form"
  | "volitional"
  | "imperative"
  | "conditional"
  | "passive"
  | "causative"
  | "causativePassive"

export type ConjugatedWord = {
  word: string
  pos: string
  form: WordForms
  polarity: "positive" | "negative"
  tense: "past" | "non-past"
}

export type ConjugationOverrides = {
  form?: WordForms
  polite?: boolean
  negative?: boolean
  past?: boolean
}
