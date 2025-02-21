import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "重い",
    furigana: "重[おも]い",
    english: ["heavy", "serious (illness)"],
    mnemonics: ["The kanji is in 動く (move) and 働く (work)"],
  },
  {
    word: "軽い",
    furigana: "軽[かる]い",
    english: ["light"],
    info: [
      "Refers to physical weight or lightness of touch (ex. 軽い鞄 -> light bag)",
      "It also has figurative meanings (like saying something lightly, having a mild cold, a light punishment, etc.)",
    ],
  },
  {
    word: "不思議",
    furigana: "不思議[ふしぎ]",
    english: ["mysterious"],
  },
  {
    word: "おる",
    furigana: "おる",
    english: ["extra-modest expression for いる"],
    overwrite_word: "おる",
  },
  {
    word: "参る",
    furigana: "参[まい]る",
    english: ["extra-modest expression for 行く and 来る"],
    overwrite_word: "参ります",
  },
  {
    word: "申す",
    furigana: "申[もう]す",
    english: ["extra-modest expression for 言う"],
  },
  {
    word: "致す",
    furigana: "致[いた]す",
    english: ["extra-modest expression for する"],
  },
  {
    word: "頂く",
    furigana: "頂[いただ]く",
    english: ["extra-modest expression for 食べる and 飲む"],
  },
  {
    word: "ござる",
    furigana: "ござる",
    english: ["extra-modest expression for ある"],
    overwrite_word: "ござる",
  },
  {
    word: "～ておる",
    furigana: "～ておる",
    english: ["extra-modest expression for ～ている"],
    overwrite_word: "ております",
  },
  {
    word: "～てござる",
    furigana: "～てござる",
    english: ["extra-modest expression for です"],
    overwrite_word: "でござる",
  },
  {
    word: "頂く",
    furigana: "頂[いただ]く",
    english: ["humble expression for もらう"],
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
    word: "伺う",
    furigana: "伺[うかが]う",
    english: ["to humbly visit", "to humbly ask"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "曲がる",
    furigana: "曲[ま]がる",
    english: ["to turn (right/left)"],
    particles: [
      {
        label: "corner",
        particle: "を",
      },
      {
        label: "direction",
        particle: "に",
      },
    ],
  },
  {
    word: "戻る",
    furigana: "戻[もど]る",
    english: ["to return", "to come back"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
    ],
  },
]

export default vocabItems
