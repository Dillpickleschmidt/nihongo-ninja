import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "する",
    furigana: "する",
    english: ["to decide on (an item)"],
    info: [
      "Structure: 〜にする",
      "This is the easiest way to order food or make a choice",
    ],
    example_sentences: [
      {
        japanese: "私はおすしにします。",
        english: "I'll have sushi.",
      },
      {
        japanese: "今日はトンカツにします。",
        english: "I'll have tonkatsu today.",
      },
    ],
    particles: [
      {
        label: "item",
        particle: "に",
      },
    ],
  },
  {
    word: "観光する",
    furigana: "観光[かんこう]する",
    english: ["to do sightseeing"],
    mnemonics: ["Contains 見 - meaning 'to see'"],
  },
  {
    word: "予約する",
    furigana: "予約[よやく]する",
    english: ["to reserve", "to make a reservation", "to book an appointment"],
    mnemonics: [
      "予 (よ) means 'beforehand,' 約 (やく) means 'promise' (same as in 約束)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "参加する",
    furigana: "参加[さんか]する",
    english: ["to participate"],
    mnemonics: [
      "参: Consists of the radicals 人 (person) + 大 (big) + 小 (small). Think of 'all kinds of people, big and small, participating together.'",
      "加: The hiragana か and katakana カ were derived from this kanji",
      "To see how other hiragana were derived, check out https://www.reddit.com/r/LearnJapanese/comments/9vwxhn/hiragana_chart_showing_the_kanji_they_came_from/",
    ],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "卒業する",
    furigana: "卒業[そつぎょう]する",
    english: ["to graduate (from...)"],
    mnemonics: ["業 is the same kanji as in 授業 (じゅぎょう; class)"],
    info: [
      "You must use ～を instead of ～から when describing where you're graduating from",
      "Can be used with 式 (しき) to form 卒業式 (graduation ceremony)",
    ],
    particles: [
      {
        label: "school",
        particle: "を",
      },
    ],
  },
  {
    word: "発表する",
    furigana: "発表[はっぴょう]する",
    english: ["to make a presentation", "to make public"],
  },
  {
    word: "～けど",
    furigana: "～けど",
    english: ["..., but", "..., so"],
  },
  {
    word: "～目",
    furigana: "～ 目[め]",
    english: ["-th (counter suffix)"],
    info: ["Used to indicate ordinal numbers"],
    example_sentences: [
      {
        japanese: "二番目の信号を右に曲がってください。",
        english: "Turn right at the second traffic light.",
      },
    ],
  },
  {
    word: "一日中",
    furigana: "一日中[いちにちじゅう]",
    english: ["all day long"],
    mnemonics: [],
    info: ["Similar pattern: 一年中 (いちねんじゅう) - all year long"],
  },
  {
    word: "最近",
    furigana: "最近[さいきん]",
    english: ["recently"],
    mnemonics: [
      "最 means 'most' as seen in 最初 (さいしょ; the first time) and 最高 (さいこう; the best)",
    ],
  },
  {
    word: "もう一度",
    furigana: "もう 一度[いちど]",
    english: ["one more time"],
    info: [
      "In fast speech, もう sounds like もいちど, but it should be written もう一度 or もう１回",
    ],
  },
  {
    word: "楽しみです",
    furigana: "楽[たの]しみです",
    english: ["cannot wait", "to look forward to it"],
  },
]

export default vocabItems
