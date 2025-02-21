import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "暖かい",
    furigana: "暖[あたた]かい",
    english: ["warm"],
  },
  {
    word: "涼しい",
    furigana: "涼[すず]しい",
    english: ["cool (weather - not used for things)"],
  },
  {
    word: "冷たい",
    furigana: "冷[つめ]たい",
    english: ["cold (things/people)"],
  },
  {
    word: "遅い",
    furigana: "遅[おそ]い",
    english: ["slow", "late"],
  },
  {
    word: "眠い",
    furigana: "眠[ねむ]い",
    english: ["sleepy"],
  },
  {
    word: "簡単",
    furigana: "簡[かん]単[たん]",
    english: ["easy", "simple"],
    info: ["な-adjective"],
  },
  {
    word: "かかる",
    furigana: "",
    english: ["to take (amount of time/money)"],
    info: ["Doesn't need a particle."],
  },
  {
    word: "泊まる",
    furigana: "泊[と]まる",
    english: ["to stay (at a hotel, etc.)"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "なる",
    furigana: "",
    english: ["to become"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "決める",
    furigana: "決[き]める",
    english: ["to decide"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "ごろごろする",
    furigana: "",
    english: ["to chill out at home", "to stay home and do nothing"],
  },
  {
    word: "旅行する",
    furigana: "旅行[りょこう]する",
    english: ["to travel"],
  },
  {
    word: "練習する",
    furigana: "練習[れんしゅう]する",
    english: ["to practice"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
]

export default vocabItems
