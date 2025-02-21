import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "お湯",
    furigana: "お 湯[ゆ]",
    english: ["hot water"],
    info: ["Do not say 熱い水 for hot water"],
  },
  {
    word: "電子レンジ",
    furigana: "電子[でんし]レンジ",
    english: ["microwave oven"],
  },
  {
    word: "ヒーター",
    furigana: "ヒーター",
    english: ["heater"],
  },
  {
    word: "ニュース",
    furigana: "ニュース",
    english: ["news"],
    info: ["Correct spelling is ニュース, not ニューズ"],
  },
  {
    word: "火事",
    furigana: "火事[かじ]",
    english: ["fire"],
  },
  {
    word: "旅行会社",
    furigana: "旅行[りょこう]会社[がいしゃ]",
    english: ["travel agency"],
  },
  {
    word: "ショッピングモール",
    furigana: "ショッピングモール",
    english: ["shopping mall"],
  },
  {
    word: "寮",
    furigana: "寮[りょう]",
    english: ["dormitory"],
  },
  {
    word: "違い",
    furigana: "違[ちが]い",
    english: ["difference"],
    info: [
      "Related verb: 違う (to be different)",
      "Do not say 違いです",
      "Compare with: どう違うと思いますか。-> How do you think it's different?",
    ],
    example_sentences: [
      {
        japanese: "どんな違いがあると思いますか。",
        english: "What differences do you think there are?",
      },
    ],
  },
  {
    word: "秘密",
    furigana: "秘密[ひみつ]",
    english: ["secret"],
    info: ["Common phrase: 秘密を守る (keep the secret)"],
  },
  {
    word: "準備",
    furigana: "準備[じゅんび]",
    english: ["preparation"],
  },
  {
    word: "自分",
    furigana: "自分[じぶん]",
    english: ["oneself"],
    extra: "https://www.youtube.com/shorts/eXkAkRhyGVw?feature=share",
  },
]

export default vocabItems
