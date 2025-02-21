import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "選ぶ",
    furigana: "選[えら]ぶ",
    english: ["to choose", "to select"],
    info: ["Related word: 選挙(せんきょ) meaning election"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "お湯を沸かす",
    furigana: "お 湯[ゆ]を 沸[わ]かす",
    english: ["to boil water"],
  },
  {
    word: "髪をとかす",
    furigana: "髪[かみ]をとかす",
    english: ["to comb one's hair"],
  },
  {
    word: "ひげをそる",
    furigana: "ひげをそる",
    english: ["to shave one's beard"],
  },
  {
    word: "脱ぐ",
    furigana: "脱[ぬ]ぐ",
    english: ["to take off (clothes)"],
    info: [
      "Used in pairs with wearing verbs:",
      "シャツを着る、脱ぐ (for shirts)",
      "ブーツをはく、ブーツを脱ぐ (for boots)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "混む",
    furigana: "混[こ]む",
    english: ["to get crowded"],
    info: ["Used to describe traffic: (道が）混んでいる (there is traffic)"],
    example_sentences: [
      {
        japanese: "道が混んでいる",
        english: "There is traffic",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "宝くじに当たる",
    furigana: "宝[たから]くじに 当[あ]たる",
    english: ["to win a lottery"],
  },
  {
    word: "いれる",
    furigana: "いれる",
    english: ["to make tea, coffee, etc."],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "生まれる",
    furigana: "生[う]まれる",
    english: ["to be born"],
    info: [
      "Intransitive verb (v.i.)",
      "Related: 生む (v.t., transitive version)",
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "かぎをかける",
    furigana: "かぎをかける",
    english: ["to lock"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "足りる",
    furigana: "足[た]りる",
    english: ["to be sufficient", "to be enough"],
    example_sentences: [
      {
        japanese: "時間が足りない",
        english: "There isn't enough time",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "慣れる",
    furigana: "慣[な]れる",
    english: ["to get used to"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "お祈りする",
    furigana: "お祈[いの]りする",
    english: ["to pray"],
    info: [
      "General term for praying in any context",
      "お参（まい）りする specifically means to visit and worship at a religious site (temple/shrine)",
      "お祈りする - can be done anywhere (home, church, etc.)",
      "お参りする - involves physically going to a religious location and performing specific rituals",
    ],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "化粧する",
    furigana: "化粧[けしょう]する",
    english: ["to put makeup on", "to put on makeup"],
    mnemonics: ["化粧 from 化粧品"],
  },
  {
    word: "就職する",
    furigana: "就職[しゅうしょく]する",
    english: ["to get a full-time job"],
    info: [
      "Similar expressions:",
      "〜で働く (to work at)",
      "〜に務める (to work for/serve at)",
    ],
    particles: [
      {
        label: "company",
        particle: "に",
      },
    ],
  },
  {
    word: "離婚する",
    furigana: "離婚[りこん]する",
    english: ["to get a divorce"],
    mnemonics: ["The 婚 character is the same as in 結婚 (marriage)"],
    particles: [
      {
        label: "person",
        particle: "と",
      },
    ],
  },
]

export default vocabItems
