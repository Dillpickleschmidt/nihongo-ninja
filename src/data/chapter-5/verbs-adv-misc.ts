import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "泳ぐ",
    furigana: "泳[およ]ぐ",
    english: ["to swim"],
  },
  {
    word: "聞く",
    furigana: "聞[き]く",
    english: ["to ask"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "乗る",
    furigana: "乗[の]る",
    english: ["to ride", "to board"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "やる",
    furigana: "やる",
    english: ["to do", "to perform"],
    info: ["(less formal)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "出かける",
    furigana: "出[で]かける",
    english: ["to go out"],
  },
  {
    word: "一緒に",
    furigana: "一[いっ]緒[しょ]に",
    english: ["together"],
  },
  {
    word: "すごく",
    furigana: "すごく",
    english: ["extremely"],
  },
  {
    word: "大丈夫",
    furigana: "大[だい]丈[じょう]夫[ぶ]",
    english: ["It's okay.", "Not to worry.", "Everything is under control."],
  },
  {
    word: "とても",
    furigana: "とても",
    english: ["very"],
  },
  {
    word: "どんな",
    furigana: "どんな",
    english: ["what kind of ..."],
  },
  {
    word: "〜枚",
    furigana: "〜 枚[まい]",
    english: ["[counter for flat objects]"],
  },
]

export default vocabItems
