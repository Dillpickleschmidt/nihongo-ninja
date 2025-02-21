import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "～回",
    furigana: "～ 回[かい]",
    english: ["...times"],
    example_sentences: [
      {
        japanese: "一週間に三回ジムに行きます。",
        english:
          'I go to the gym three times a week. 一週間に means "in one week" or "per week"',
      },
    ],
    category: "adverbs-and-other-expressions",
  },
  {
    word: "～キロ",
    furigana: "～キロ",
    english: ["...kilometers", "...kilograms"],
    example_sentences: [
      {
        japanese: "私の家から駅まで2キロあります。",
        english: "It's 2 kilometers from my house to the station.",
      },
    ],
    category: "adverbs-and-other-expressions",
  },
  {
    word: "全部",
    furigana: "全部[ぜんぶ]",
    english: ["all"],
    info: [
      "When saying 'All XXX is ____', you cannot say 全部XXXは______",
      "Instead, say XXXは全部______ (like a quantifier)",
    ],
    example_sentences: [
      {
        japanese: "宿題を全部終わらせました。",
        english: "I finished all of my homework.",
      },
    ],
    category: "adverbs-and-other-expressions",
  },
  {
    word: "～と申します",
    furigana: "～と 申[もう]します",
    english: ["my name is..."],
    example_sentences: [
      {
        japanese: "田中と申します。よろしくお願いします。",
        english: "My name is Tanaka. Nice to meet you.",
      },
    ],
    category: "adverbs-and-other-expressions",
  },
  {
    word: "特に",
    furigana: "特[とく]に",
    english: ["especially"],
    example_sentences: [
      {
        japanese: "日本料理が好きです。特に寿司が好きです。",
        english: "I like Japanese food. I especially like sushi.",
      },
    ],
    category: "adverbs-and-other-expressions",
  },
  {
    word: "一日",
    furigana: "一日[ついたち]",
    english: ["one day", "1 day"],
    category: "day-counters",
  },
  {
    word: "二日",
    furigana: "二日[ふつか]",
    english: ["two days", "2 days"],
    category: "day-counters",
  },
  {
    word: "三日",
    furigana: "三日[みっか]",
    english: ["three days", "3 days"],
    category: "day-counters",
  },
  {
    word: "四日",
    furigana: "四日[よっか]",
    english: ["four days", "4 days"],
    category: "day-counters",
  },
  {
    word: "五日",
    furigana: "五日[いつか]",
    english: ["five days", "5 days"],
    category: "day-counters",
  },
  {
    word: "六日",
    furigana: "六日[むいか]",
    english: ["six days", "6 days"],
    category: "day-counters",
  },
  {
    word: "七日",
    furigana: "七日[なのか]",
    english: ["seven days", "7 days"],
    category: "day-counters",
  },
  {
    word: "八日",
    furigana: "八日[ようか]",
    english: ["eight days", "8 days"],
    category: "day-counters",
  },
  {
    word: "九日",
    furigana: "九日[ここのか]",
    english: ["nine days", "9 days"],
    category: "day-counters",
  },
  {
    word: "十日",
    furigana: "十日[とおか]",
    english: ["ten days", "10 days"],
    category: "day-counters",
  },
]

export default vocabItems
