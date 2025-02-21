import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "けんかする",
    furigana: "",
    english: ["to have a fight", "to quarrel"],
  },
  {
    word: "紹介する",
    furigana: "紹[しょう]介[かい]する",
    english: ["to introduce"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "person",
        particle: "を",
      },
    ],
  },
  {
    word: "ダイエットする",
    furigana: "",
    english: ["to go on a diet"],
  },
  {
    word: "遅刻する",
    furigana: "遅[ち]刻[こく]する",
    english: ["to be late (for an appointment)"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "留学する",
    furigana: "留[りゅう]学[がく]する",
    english: ["to study abroad"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
    ],
  },
  {
    word: "出身",
    furigana: "出[しゅっ]身[しん]",
    english: ["coming from"],
    particles: [
      {
        label: "place",
        particle: "の",
      },
    ],
  },
  {
    word: "久しぶり",
    furigana: "久[ひさ]しぶり",
    english: ["it has been a long time"],
  },
  {
    word: "まあまあ",
    furigana: "",
    english: ["okay", "so-so"],
  },
  {
    word: "もっと",
    furigana: "",
    english: ["more"],
  },
  {
    word: "後",
    furigana: "後[あと]",
    english: ["after (an event)"],
    particles: [
      {
        label: "event",
        particle: "の",
      },
    ],
  },
  {
    word: "そして",
    furigana: "",
    english: ["and then"],
  },
  {
    word: "～だけ",
    furigana: "",
    english: ["just...", "only..."],
  },
  {
    word: "点",
    furigana: "点[てん]",
    english: ["...points"],
    info: ["Counter for points"],
  },
  {
    word: "どちらでもいい",
    furigana: "どちらでもいい",
    english: ["Both are fine."],
  },
]

export default vocabItems
