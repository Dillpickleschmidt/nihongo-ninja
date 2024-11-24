export type NumberOverride = {
  number: number
  reading: string
}

// Define available sound change patterns
export type SoundChangeType =
  | "generic" // Built-in rules for つ counters (ひとつ、ふたつ、etc.)
  | "dates" // Built-in rules for dates (ついたち、ふつか、etc.)
  | "hToP" // は→ぱ, ひ→ぴ, etc.
  | "hToP/B" // は→ぱ/ば, ひ→ぴ/び, etc.
  | "p" // Direct っぴ changes (いっぴき、はっぴき)
  | "k" // Direct っか changes
  | "s" // Direct っす changes
  | "t" // Direct って changes
  | "kToG" // か→が, き→ぎ, etc.
  | "sToZ" // さ→ざ, し→じ, etc.

export type CounterPattern = {
  id: string // Unique identifier for this counter pattern
  baseReading: string // Base reading without modifications (e.g., "ひき")
  soundChangeType?: SoundChangeType // Optional sound change category
  numberOverrides?: NumberOverride[] // Optional specific number overrides
  range?: [number, number] // Optional range restriction (e.g., [1, 12] for months)
}

export interface ChapterPattern {
  chapter: number // Chapter number
  content: CounterPattern[] // List of counter patterns in the chapter
}

export interface VocabItem {
  word: string // Singular form (e.g., "fox")
  pluralWord: string // Plural form (e.g., "foxes")
  patternId: string // References CounterPattern.id
}

export type GeneratedQuestion = {
  number: number
  vocab: VocabItem
  pattern: CounterPattern
  correctReading: string
}

export interface Question {
  term: {
    reading: string
    word: string
  }
  type: string[]
  givenAnswer: string
  answers: { reading: string }[]
  correct: boolean
}

export type PracticeState = {
  currentNumber: number
  vocab: VocabItem
  pattern: CounterPattern
  answer: string
  isCorrect: boolean
  attempted: number
  correct: number
  questions: Question[]
}
