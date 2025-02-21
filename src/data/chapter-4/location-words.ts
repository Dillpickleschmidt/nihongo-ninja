import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "右",
    furigana: "右[みぎ]",
    english: ["right"],
    info: ["(〜の)"],
  },
  {
    word: "左",
    furigana: "左[ひだり]",
    english: ["left"],
    info: ["(〜の)"],
  },
  {
    word: "前",
    furigana: "前[まえ]",
    english: ["front"],
    info: ["(〜の)"],
  },
  {
    word: "後ろ",
    furigana: "後[うし]ろ",
    english: ["back"],
    info: ["(〜の)"],
    extra: "https://www.youtube.com/shorts/Y2NIiqe5k_w?feature=share",
  },
  {
    word: "中",
    furigana: "中[なか]",
    english: ["inside"],
    info: ["(〜の)"],
  },
  {
    word: "上",
    furigana: "上[うえ]",
    english: ["on"],
    info: ["(〜の)"],
    extra: "https://www.youtube.com/shorts/mLIh8gxqQTw?feature=share",
  },
  {
    word: "下",
    furigana: "下[した]",
    english: ["under"],
    info: ["(〜の)"],
  },
  {
    word: "近く",
    furigana: "近[ちか]く",
    english: ["near"],
    info: ["(〜の)"],
  },
  {
    word: "隣",
    furigana: "隣[となり]",
    english: ["next to"],
    info: ["(〜の)"],
  },
  {
    word: "間",
    furigana: "間[あいだ]",
    english: ["between"],
    particles: [
      {
        label: "A",
        particle: "と",
      },
      {
        label: "B",
        particle: "の",
      },
    ],
  },
]

export default vocabItems
