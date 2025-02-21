import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "差し上げる",
    furigana: "差[さ]し 上[あ]げる",
    english: ["humble expression for あげる"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "thing",
        particle: "を",
      },
    ],
  },
  {
    word: "聞こえる",
    furigana: "聞[き]こえる",
    english: ["to be audible"],
    particles: [
      {
        label: "thing",
        particle: "が",
      },
    ],
  },
  {
    word: "伝える",
    furigana: "伝[つた]える",
    english: ["to convey a message"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "message",
        particle: "を",
      },
    ],
  },
  {
    word: "待たせる",
    furigana: "待[ま]たせる",
    english: ["to keep (someone) waiting"],
    particles: [
      {
        label: "person",
        particle: "を",
      },
    ],
  },
  {
    word: "続ける",
    furigana: "続[つづ]ける",
    english: ["to continue"],
    particles: [
      {
        label: "thing",
        particle: "を",
      },
    ],
  },
  {
    word: "交換する",
    furigana: "交換[こうかん]する",
    english: ["to exchange"],
    particles: [
      {
        label: "X",
        particle: "と",
      },
      {
        label: "Y",
        particle: "を",
      },
    ],
  },
  {
    word: "返品する",
    furigana: "返品[へんぴん]する",
    english: ["to return (merchandise)"],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "生活する",
    furigana: "生活[せいかつ]する",
    english: ["to lead a life"],
  },
  {
    word: "～階",
    furigana: "～ 階[かい]",
    english: ["...th floor"],
  },
  {
    word: "一階",
    furigana: "一階[いっかい]",
    english: ["first floor"],
  },
  {
    word: "～みたいなX",
    furigana: "～みたいなX",
    english: ["X like..."],
    overwrite_word: "みたいな",
  },
  {
    word: "また",
    furigana: "また",
    english: ["again"],
  },
  {
    word: "では",
    furigana: "では",
    english: ["well then (polite)"],
    info: ["The colloqual form of this is しゃあ"],
    overwrite_word: "では",
  },
  {
    word: "できれば",
    furigana: "できれば",
    english: ["if possible"],
  },
  {
    word: "誠に",
    furigana: "誠[まこと]に",
    english: ["really (very polite)"],
    info: [
      "Same meaning as 本当に but is extremely polite and is often used with customer service.",
    ],
  },
  {
    word: "よろしかったら",
    furigana: "よろしかったら",
    english: ["if it is okay (polite)"],
    info: [
      "Polite version of よかったら",
      "It has the same meaning as よろしければ, but よろしかったら sounds a bit bit old/classic, so it might be a little more formal.",
      "いい→よろしい→よろしく which is part of よろしくお願いします",
    ],
  },
  {
    word: "かしこまりました",
    furigana: "かしこまりました",
    english: ["Certainly."],
    info: ["extemely polite, usually used in customer service"],
  },
  {
    word: "失礼しました",
    furigana: "失礼[しつれい]しました",
    english: ["I'm very sorry."],
  },
  {
    word: "申し訳ありません",
    furigana: "申[もう]し 訳[わけ]ありません",
    english: ["You have my apologies. (polite)"],
    info: ["You can think of this like an extra polite version of すみません"],
  },
]

export default vocabItems
