export type ImmersionKitResponse = {
  data: Array<{
    category_count: {
      anime: number
      drama: number
      games: number
      literature: number
      news: number
    }
    deck_count: {
      anime: Record<string, number>
      drama: Record<string, number>
      games: Record<string, number>
      literature: Record<string, number>
      news: Record<string, number>
    }
    dictionary: Array<{
      glossary_list: string[]
      headword: string
      reading: string
      sound: string
      tags: string
    }>[]
    exact_match: string
    examples: Array<{
      author_japanese: string
      category: string
      channel: string
      deck_id: number
      deck_name: string
      deck_name_japanese: string
      episode: number
      id: number
      image_url: string
      position: number
      sentence: string
      sentence_id: string
      sentence_with_furigana: string
      sound_begin: string
      sound_end: string
      sound_url: string
      tags: string[]
      timestamp: string
      translation: string
      translation_word_index: number[]
      translation_word_list: string[]
      word_index: number[]
      word_list: string[]
    }>
  }>
}
