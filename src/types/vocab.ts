export interface ExampleSentence {
  japanese: string
  english: string
}

export interface Video {
  src: string
  title: string
}

export interface VocabularyItem {
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
}

export interface RichVocabularyItem extends VocabularyItem {
  hiragana?: string[]
  rubyText?: string[]
}
