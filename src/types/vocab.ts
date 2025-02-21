// types/vocab.ts
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

export type VocabRawItem = {
  word: string
  furigana: string
  english: string[]
  info?: string[]
  mnemonics?: string[]
  example_sentences?: ExampleSentence[]
  videos?: Video[] | null
  particles?: Particle[]
  overwrite_word?: string // for exact matching in immersion kit
  extra?: any
}

export type VocabItem = VocabRawItem & {
  chapter?: number | null
  category?: string | null
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
  mnemonics?: string[]
  order: number
  cardStyle: "multiple-choice" | "write" | "done"
  wrongAnswerCount: number
  exampleSentences?: ExampleSentence[] | null
  info?: string[]
  category?: string | null
  videos?: Video[] | null
  particles?: Particle[]
}

export type AnswerCategory = {
  answers: string[]
  category: string
}
