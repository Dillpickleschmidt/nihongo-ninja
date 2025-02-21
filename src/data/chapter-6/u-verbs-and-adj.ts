import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "大変",
    furigana: "大[たい]変[へん]",
    english: ["tough (situation)"],
    info: ["な-adjective"],
  },
  {
    word: "遊ぶ",
    furigana: "遊[あそ]ぶ",
    english: ["to play", "to spend time pleasantly"],
  },
  {
    word: "急ぐ",
    furigana: "急[いそ]ぐ",
    english: ["to hurry"],
    extra: "https://www.youtube.com/shorts/aRglfgR9BdE?feature=share",
  },
  {
    word: "返す",
    furigana: "返[かえ]す",
    english: ["to return (a thing)"],
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
    word: "消す",
    furigana: "消[け]す",
    english: ["to turn off", "to erase"],
    particles: [
      {
        particle: "を",
      },
    ],
    extra: "https://www.youtube.com/shorts/4tK6erFxdnE?feature=share",
  },
  {
    word: "死ぬ",
    furigana: "死[し]ぬ",
    english: ["to die"],
  },
  {
    word: "座る",
    furigana: "座[すわ]る",
    english: ["to sit down"],
    particles: [
      {
        label: "seat",
        particle: "に",
      },
    ],
  },
  {
    word: "立つ",
    furigana: "立[た]つ",
    english: ["to stand up"],
  },
  {
    word: "たばこを吸う",
    furigana: "たばこを 吸[す]う",
    english: ["to smoke"],
  },
  {
    word: "使う",
    furigana: "使[つか]う",
    english: ["to use"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "手伝う",
    furigana: "手[て]伝[つだ]う",
    english: ["to assist"],
    particles: [
      {
        label: "person/task",
        particle: "を",
      },
    ],
  },
  {
    word: "入る",
    furigana: "入[はい]る",
    english: ["to enter"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "持つ",
    furigana: "持[も]つ",
    english: ["to carry", "to hold"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "休む",
    furigana: "休[やす]む",
    english: ["to be absent (from ...)", "to rest"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
]

export default vocabItems
