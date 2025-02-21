import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "カーテン",
    furigana: "カーテン",
    english: ["curtain"],
  },
  {
    word: "ソファ",
    furigana: "ソファ",
    english: ["sofa"],
  },
  {
    word: "冷蔵庫",
    furigana: "冷蔵[れいぞう]庫[こ]",
    english: ["refrigerator"],
    mnemonics: ["Related to 冷たい (つめたい -> cold)"],
  },
  {
    word: "スイッチ",
    furigana: "スイッチ",
    english: ["switch"],
  },
  {
    word: "しょう油",
    furigana: "しょう 油[ゆ]",
    english: ["soy sauce"],
    mnemonics: [
      "The kanji 醤 looks like 将 (from 将来) with a difficult kanji that looks like 西 underneath",
    ],
    info: ["Often written as 醤油 in kanji"],
  },
  {
    word: "スープ",
    furigana: "スープ",
    english: ["soup"],
    info: [
      "Used only for Western-style soups",
      "For miso soup, use おみそ汁（しる）, not ミソスープ",
    ],
  },
  {
    word: "バナナ",
    furigana: "バナナ",
    english: ["banana"],
  },
  {
    word: "ポップコーン",
    furigana: "ポップコーン",
    english: ["popcorn"],
  },
  {
    word: "シャンプー",
    furigana: "シャンプー",
    english: ["shampoo"],
    info: ["Related: コンディショナー (conditioner)"],
  },
  {
    word: "ろうそく",
    furigana: "ろうそく",
    english: ["candle"],
  },
]

export default vocabItems
