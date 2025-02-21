import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "踊る",
    furigana: "踊[おど]る",
    english: ["to dance"],
  },
  {
    word: "終わる",
    furigana: "終[お]わる",
    english: ["(something) ends"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "薬を飲む",
    furigana: "薬[くすり]を飲[の]む",
    english: ["to take medicine"],
  },
  {
    word: "人気がある",
    furigana: "人気[にんき]がある",
    english: ["to be popular"],
  },
  {
    word: "始まる",
    furigana: "始[はじ]まる",
    english: ["(something) begins"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "弾く",
    furigana: "弾[ひ]く",
    english: ["to play (a string instrument or piano)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "もらう",
    furigana: "",
    english: ["to get (from somebody)"],
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
    word: "覚える",
    furigana: "覚[おぼ]える",
    english: ["to memorize"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "出る",
    furigana: "出[で]る",
    english: ["to appear", "to attend", "to exit"],
    particles: [
      {
        label: "event",
        particle: "に",
      },
      {
        label: "place",
        particle: "を",
      },
    ],
  },
  {
    word: "運動する",
    furigana: "運動[うんどう]する",
    english: ["to do physical exercises"],
  },
  {
    word: "散歩する",
    furigana: "散歩[さんぽ]する",
    english: ["to take a walk"],
  },
]

export default vocabItems
