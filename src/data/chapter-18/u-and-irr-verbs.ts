import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "開く",
    furigana: "開[あ]く",
    english: ["(something) opens"],
    info: [
      "Intransitive verb (v.i.)",
      "Transitive pair: 開ける(あける)",
      "Used with が particle",
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "閉まる",
    furigana: "閉[し]まる",
    english: ["(something) closes"],
    mnemonics: ["Both 開 and 閉 characters contain 門 (gate)"],
    info: ["Intransitive verb (v.i.)", "Transitive pair: 閉める(しめる)"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "謝る",
    furigana: "謝[あやま]る",
    english: ["to apologize"],
    mnemonics: ["Contains the radical 言 (word)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
    extra: "https://www.youtube.com/watch?v=gaUSJUu7YS0",
  },
  {
    word: "押す",
    furigana: "押[お]す",
    english: ["to push", "to press"],
    mnemonics: ["Contains the radical 手 (hand)"],
    info: [
      "Basic physical action of pushing/pressing",
      "Used for buttons, doorbells, keypads",
      "Can be combined with various particles:",
      "- を押す: direct pushing of an object",
      "- に押す: pushing against something",
    ],
    example_sentences: [
      {
        japanese: "エレベーターのボタンを押してください。",
        english: "Please press the elevator button.",
      },
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "落とす",
    furigana: "落[お]とす",
    english: ["to drop (something)"],
    info: ["Transitive pair of 落ちる"],
    particles: [
      {
        particle: "を",
      },
    ],
    extra: "https://www.youtube.com/shorts/haH1t2v5_BM?feature=share",
  },
  {
    word: "お湯が沸く",
    furigana: "お 湯[ゆ]が 沸[わ]く",
    english: ["water boils"],
  },
  {
    word: "転ぶ",
    furigana: "転[ころ]ぶ",
    english: ["to fall down"],
    mnemonics: ["Same 転 as in 自転車 meaning 'to roll'"],
  },
  {
    word: "壊す",
    furigana: "壊[こわ]す",
    english: ["to break (something)"],
    info: ["Transitive pair of 壊れる"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "咲く",
    furigana: "咲[さ]く",
    english: ["to bloom"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "助かる",
    furigana: "助[たす]かる",
    english: ["to be saved", "to be helped"],
    info: [
      "Common phrase: (〜さんのおかげで)助かりました",
      "Note: Used for thanking outsiders, not family/superiors",
      "Transitive pair: 助ける",
    ],
  },
  {
    word: "頼む",
    furigana: "頼[たの]む",
    english: ["to ask (a favor)", "to request"],
    info: ["Related noun: 頼み (request, favor)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        particle: "を",
      },
    ],
  },
  {
    word: "つく",
    furigana: "つく",
    english: ["(something) turns on"],
    info: ["Used for lights, gas, etc."],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "汚す",
    furigana: "汚[よご]す",
    english: ["to make dirty"],
    info: ["Transitive pair of 汚れる", "Related: 汚い(きたない)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "注文する",
    furigana: "注文[ちゅうもん]する",
    english: ["to place an order"],
    mnemonics: ["Uses same 注 as in 注意する"],
    info: ["Can be used both for online shopping and in-store orders"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
]

export default vocabItems
