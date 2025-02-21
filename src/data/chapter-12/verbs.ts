import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "歩く",
    furigana: "歩[ある]く",
    english: ["to walk"],
  },
  {
    word: "風邪をひく",
    furigana: "風邪[かぜ]をひく",
    english: ["to catch a cold"],
  },
  {
    word: "熱がある",
    furigana: "熱[ねつ]がある",
    english: ["to have a fever"],
  },
  {
    word: "のどが渇く",
    furigana: "のどが渇[かわ]く",
    english: ["to become thirsty"],
  },
  {
    word: "払う",
    furigana: "払[はら]う",
    english: ["to pay"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "なくす",
    furigana: "",
    english: ["to lose"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "興味がある",
    furigana: "興味[きょうみ]がある",
    english: ["to be interested (in ...)"],
    particles: [
      {
        label: "topic",
        particle: "に",
      },
    ],
  },
  {
    word: "せきが出る",
    furigana: "せきが出[で]る",
    english: ["to cough"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "別れる",
    furigana: "別[わか]れる",
    english: ["to break up", "to separate"],
    particles: [
      {
        label: "person",
        particle: "と",
      },
    ],
  },
  {
    word: "緊張する",
    furigana: "緊[きん]張[ちょう]する",
    english: ["to get nervous"],
  },
  {
    word: "心配する",
    furigana: "心[しん]配[ぱい]する",
    english: ["to worry"],
  },
]

export default vocabItems
