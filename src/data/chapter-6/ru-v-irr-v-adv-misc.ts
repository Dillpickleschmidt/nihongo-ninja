import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "開ける",
    furigana: "開[あ]ける",
    english: ["to open (something)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "閉める",
    furigana: "閉[し]める",
    english: ["to close (something)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "教える",
    furigana: "教[おし]える",
    english: ["to teach", "to instruct"],
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
    extra: "https://www.youtube.com/shorts/klpjUeSRMTA?feature=share",
  },
  {
    word: "忘れる",
    furigana: "忘[わす]れる",
    english: ["to forget", "to leave behind"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "降りる",
    furigana: "降[お]りる",
    english: ["to get off"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "借りる",
    furigana: "借[か]りる",
    english: ["to borrow"],
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
    word: "シャワーをあびる",
    furigana: "シャワーをあびる",
    english: ["to take a shower"],
  },
  {
    word: "つける",
    furigana: "つける",
    english: ["to turn on"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "電話をする",
    furigana: "電[でん]話[わ]をする",
    english: ["to call"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "連れてくる",
    furigana: "連[つ]れてくる",
    english: ["to bring (a person)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "持ってくる",
    furigana: "持[も]ってくる",
    english: ["to bring (a thing)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "後で",
    furigana: "後[あと]で",
    english: ["later on"],
  },
  {
    word: "すぐ",
    furigana: "すぐ",
    english: ["right away"],
  },
  {
    word: "ゆっくり",
    furigana: "ゆっくり",
    english: ["slowly", "leisurely", "unhurriedly"],
  },
  {
    word: "結構です",
    furigana: "結[けっ]構[こう]です",
    english: ["That would be fine.", "That wouldn't be necessary."],
  },
  {
    word: "本当ですか",
    furigana: "本[ほん]当[とう]ですか",
    english: ["Really?"],
  },
]

export default vocabItems
