import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "アニメ",
    furigana: "アニメ",
    english: ["animation"],
  },
  {
    word: "小説",
    furigana: "小説[しょうせつ]",
    english: ["novel"],
    mnemonics: [
      "It has 説 from 説明 (even pronounced the same [せつ])",
      "It has 言 as a radical",
    ],
  },
  {
    word: "趣味",
    furigana: "趣味[しゅみ]",
    english: ["hobby", "pastime"],
    mnemonics: ["It has 味 from 興味 (even pronounced the same [み])"],
  },
  {
    word: "月",
    furigana: "月[つき]",
    english: ["moon"],
  },
  {
    word: "宇宙人",
    furigana: "宇宙人[うちゅうじん]",
    english: ["space alien"],
  },
  {
    word: "扇子",
    furigana: "扇子[せんす]",
    english: ["(hand) fan"],
  },
  {
    word: "スニーカー",
    furigana: "スニーカー",
    english: ["sneakers"],
  },
  {
    word: "ヘッドホン",
    furigana: "ヘッドホン",
    english: ["headphones"],
  },
  {
    word: "おにぎり",
    furigana: "おにぎり",
    english: ["rice ball"],
  },
  {
    word: "動物",
    furigana: "動物[どうぶつ]",
    english: ["animal"],
  },
  {
    word: "あちら",
    furigana: "あちら",
    english: ["that way (polite)"],
  },
  {
    word: "係りの者",
    furigana: "係[かか]りの 者[もの]",
    english: ["our person in charge"],
    info: [
      '係の者 ↓ - "Our person in charge" (humble)',
      '係の方（かた） ↑ - "Person in charge" (honorific)',
      '係の人 - "Person in charge" (neutral, used when speaking within the same company/group)',
    ],
  },
  {
    word: "お宅",
    furigana: "お 宅[たく]",
    english: ["(someone's) home", "(someone's) house"],
    info: [
      'The word "オタク" (otaku) is derived from this word.',
      "Refers to the listener's home (not the speaker's).",
    ],
  },
  {
    word: "～屋",
    furigana: "～ 屋[や]",
    english: ["...shop"],
  },
  {
    word: "支店",
    furigana: "支店[してん]",
    english: ["branch office"],
  },
  {
    word: "ドイツ",
    furigana: "ドイツ",
    english: ["Germany"],
  },
  {
    word: "信号",
    furigana: "信号[しんごう]",
    english: ["traffic light"],
  },
  {
    word: "角",
    furigana: "角[かど]",
    english: ["corner"],
  },
  {
    word: "字",
    furigana: "字[じ]",
    english: ["letter", "character"],
    example_sentences: [
      {
        japanese: "字がきれいですね。 ",
        english: "Your handwriting is beautiful.",
      },
      {
        japanese: "250 字以内で書いてください。 ",
        english: "Please write within 250 characters.",
      },
    ],
  },
  {
    word: "音",
    furigana: "音[おと]",
    english: ["sound"],
  },
]

export default vocabItems
