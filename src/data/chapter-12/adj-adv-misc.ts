import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "狭い",
    furigana: "狭[せま]い",
    english: ["narrow", "not spacious"],
  },
  {
    word: "広い",
    furigana: "広[ひろ]い",
    english: ["spacious", "wide"],
  },
  {
    word: "悪い",
    furigana: "悪[わる]い",
    english: ["bad"],
  },
  {
    word: "痛い",
    furigana: "痛[いた]い",
    english: ["hurt", "painful"],
  },
  {
    word: "甘い",
    furigana: "甘[あま]い",
    english: ["sweet"],
  },
  {
    word: "多い",
    furigana: "多[おお]い",
    english: ["there are many..."],
  },
  {
    word: "素敵",
    furigana: "素[す]敵[てき]",
    english: ["nice"],
    info: ["な-adjective"],
  },
  {
    word: "お大事に",
    furigana: "お大[だい]事[じ]に",
    english: ["Get well soon."],
    info: ["Expression"],
  },
  {
    word: "元気がない",
    furigana: "元気[げんき]がない",
    english: ["don't look well"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "できるだけ",
    furigana: "",
    english: ["as much as possible"],
  },
  {
    word: "多分",
    furigana: "多[た]分[ぶん]",
    english: ["probably", "maybe"],
  },
  {
    word: "もうすぐ",
    furigana: "",
    english: ["very soon", "in a few moments/days"],
  },
  {
    word: "初めて",
    furigana: "初[はじ]めて",
    english: ["for the first time"],
  },
  {
    word: "二三日",
    furigana: "二[に]三[さん]日[にち]",
    english: ["for two to three days"],
  },
  {
    word: "それに",
    furigana: "",
    english: ["moreover", "besides"],
  },
  {
    word: "同じ",
    furigana: "同[おな]じ",
    english: ["same"],
  },
]

export default vocabItems
