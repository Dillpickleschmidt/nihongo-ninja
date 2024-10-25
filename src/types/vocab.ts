export type ExampleSentence = {
  japanese: string
  english: string
}

export type Video = {
  src: string
  title: string
}

export type Particle = {
  label?: string
  particle: string
}

export type VocabItem = {
  id: number
  created_at: string
  path: string
  word: string
  furigana: string[]
  english: string[]
  chapter: number | null
  example_sentences: ExampleSentence[] | null
  info: string[]
  mnemonics: string[]
  category: string | null
  videos: Video[] | null
  particles?: Particle[]
}

export type RichVocabItem = VocabItem & {
  hiragana?: string[]
  rubyText?: string[]
}

export type Card = {
  key: string
  answerCategories: {
    category: string
    answers: string[]
  }[]
  mnemonics: string[]
  order: number
  cardStyle: "multiple-choice" | "write" | "done"
  wrongAnswerCount: number
  exampleSentences: ExampleSentence[] | null
  info: string[]
  category: string | null
  videos: Video[] | null
  particles?: Particle[]
}

export type AnswerCategory = {
  answers: string[]
  category: string
}
