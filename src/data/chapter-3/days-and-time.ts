import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "明日",
    furigana: "明日[あした]",
    english: ["tomorrow"],
  },
  {
    word: "今日",
    furigana: "今日[きょう]",
    english: ["today"],
  },
  {
    word: "朝",
    furigana: "朝[あさ]",
    english: ["morning"],
  },
  {
    word: "今晩",
    furigana: "今晩[こんばん]",
    english: ["tonight"],
  },
  {
    word: "毎日",
    furigana: "毎日[まいにち]",
    english: ["every day"],
  },
  {
    word: "毎晩",
    furigana: "毎晩[まいばん]",
    english: ["every night"],
  },
  {
    word: "週末",
    furigana: "週末[しゅうまつ]",
    english: ["weekend"],
    mnemonics: [
      'In Yuki\'s office, everyone wore uncomfortable shoes all week. But come しゅうまつ (shūmatsu), there was a special tradition. "Shoo, matsu!" Yuki would announce every Friday evening, kicking off her shoes. "Shoo, matsu!" her coworkers echoed, following suit. All weekend, they\'d wiggle their toes freely, savoring the shoe-free しゅうまつ. Monday morning always came too soon. Reluctantly, they\'d slip their shoes back on, already dreaming of the next "Shoo, matsu!" weekend.',
    ],
  },
  {
    word: "日曜日",
    furigana: "日曜日[にちようび]",
    english: ["Sunday"],
    info: [
      'Literally means "Sun Day"',
      "The days are named after the Sun, Moon, and five visible planets.",
      "These celestial bodies were associated with the Five Elements theory in Chinese philosophy: Fire, Water, Wood, Metal, and Earth.",
      "The order follows the perceived speed of the celestial bodies' movement across the sky, from fastest to slowest: Sun (fastest) > Moon > Mars > Mercury > Jupiter > Venus > Saturn (slowest)",
      "In Japanese, they kept this order but used the elements' names for most days instead of the planet names, except for Sun and Moon.",
    ],
  },
  {
    word: "月曜日",
    furigana: "月曜日[げつようび]",
    english: ["Monday"],
    info: [
      'Means "Moon Day"',
      "Traditionally considered unlucky for cutting hair or nails.",
    ],
  },
  {
    word: "火曜日",
    furigana: "火曜日[かようび]",
    english: ["Tuesday"],
    info: [
      'Known as "Fire Day," it was traditionally considered good for cooking and forging',
      "Associated with fire and the planet Mars.",
    ],
  },
  {
    word: "水曜日",
    furigana: "水曜日[すいようび]",
    english: ["Wednesday"],
    mnemonics: ["Linked to water and the planet Mercury"],
  },
  {
    word: "木曜日",
    furigana: "木曜日[もくようび]",
    english: ["Thursday"],
    info: [
      "Represents trees or wood, associated with growth and the planet Jupiter",
      "Traditionally believed to be a good day for planting trees.",
    ],
  },
  {
    word: "金曜日",
    furigana: "金曜日[きんようび]",
    english: ["Friday"],
    info: ['Means "gold" or "metal" day, linked to the planet Venus'],
  },
  {
    word: "土曜日",
    furigana: "土曜日[どようび]",
    english: ["Saturday"],
    info: [
      "Represents earth and the planet Saturn",
      "Until 1876, it was the last day of the six-day work week in Japan.",
    ],
  },
  {
    word: "いつ",
    furigana: "いつ",
    english: ["when"],
    info: [
      "Used to ask about time in a general sense, whether it's a specific date, time of day, or even a vague period in the past or future",
      "You can use いつ at the beginning or in the middle of a question.",
    ],
    example_sentences: [
      {
        japanese: "いつ日本に行きますか。",
        english: "When are you going to Japan?",
      },
      {
        japanese: "田中さんはいつ帰ってくるか。",
        english: "When will Tanaka come back?",
      },
    ],
  },
  {
    word: "～ごろ",
    furigana: "～ごろ",
    english: ["at about...", "around..."],
    info: ["Used to express an approximate time."],
    example_sentences: [
      { japanese: "３時ごろ", english: "Around 3 o'clock." },
      {
        japanese: "来週の水曜日ごろ",
        english: "Around Wednesday next week.",
      },
    ],
  },
]

export default vocabItems
