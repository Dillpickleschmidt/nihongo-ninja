import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "うそをつく",
    furigana: "",
    english: ["to tell a lie"],
  },
  {
    word: "おなかがすく",
    furigana: "",
    english: ["to become hungry"],
  },
  {
    word: "飼う",
    furigana: "飼[か]う",
    english: ["to own (a pet)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "サボる",
    furigana: "",
    english: ["to cut (classes)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "取る",
    furigana: "取[と]る",
    english: ["to take (a class)", "to get (a grade)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "習う",
    furigana: "習[なら]う",
    english: ["to learn"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "登る",
    furigana: "登[のぼ]る",
    english: ["to climb"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
    ],
  },
  {
    word: "走る",
    furigana: "走[はし]る",
    english: ["to run"],
  },
  {
    word: "疲れる",
    furigana: "疲[つか]れる",
    english: ["to get tired"],
  },
  {
    word: "やめる",
    furigana: "",
    english: ["to quit"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
]

export default vocabItems
