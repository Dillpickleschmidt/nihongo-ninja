import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "会う",
    furigana: "会[あ]う",
    english: ["to meet", "to see (a person)"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "ある",
    furigana: "ある",
    english: ["there is ..."],
    particles: [
      {
        label: "place",
        particle: "に",
      },
      {
        label: "thing",
        particle: "が",
      },
    ],
  },
  {
    word: "買う",
    furigana: "買[か]う",
    english: ["to buy"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "書く",
    furigana: "書[か]く",
    english: ["to write"],
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
    word: "撮る",
    furigana: "撮[と]る",
    english: ["to take (a picture)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "待つ",
    furigana: "待[ま]つ",
    english: ["to wait"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "分かる",
    furigana: "分[わ]かる",
    english: ["to understand"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "いる",
    furigana: "いる",
    english: ["(a person) is in...", "stays at ..."],
    particles: [
      {
        label: "place",
        particle: "に",
      },
      {
        label: "person",
        particle: "が",
      },
    ],
  },
  {
    word: "～ぐらい",
    furigana: "～ぐらい",
    english: ["about (approximate measure)"],
  },
  {
    word: "ごめんなさい",
    furigana: "ごめんなさい",
    english: ["I'm sorry."],
  },
  {
    word: "それから",
    furigana: "それから",
    english: ["and then"],
  },
  {
    word: "だから",
    furigana: "だから",
    english: ["so", "therefore"],
  },
  {
    word: "たくさん",
    furigana: "たくさん",
    english: ["many", "a lot"],
  },
  {
    word: "～と",
    furigana: "～と",
    english: ["together with (a person)"],
  },
  {
    word: "どうして",
    furigana: "どうして",
    english: ["why"],
  },
  {
    word: "一人で",
    furigana: "一人で",
    english: ["alone"],
  },
  {
    word: "もしもし",
    furigana: "もしもし",
    english: ["Hello? (used on the phone)"],
  },
]

export default vocabItems
