import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "赤ちゃん",
    furigana: "赤[あか]ちゃん",
    english: ["baby"],
    example_sentences: [
      {
        japanese: "赤ちゃんができる",
        english: "to conceive a baby",
      },
    ],
    extra: "https://www.youtube.com/shorts/6ReYOm1nHe0?feature=share",
  },
  {
    word: "お客さん",
    furigana: "お 客[きゃく]さん",
    english: ["guest", "visitor", "client", "customer"],
    info: [
      "客 (きゃく) is the blunt, descriptive version of お客さん",
      "お客様 (おきゃくさま) is the polite version",
    ],
  },
  {
    word: "首相",
    furigana: "首相[しゅしょう]",
    english: ["prime minister"],
    info: ["Also known as 総理大臣（そうりだいじん）"],
  },
  {
    word: "サラリーマン",
    furigana: "サラリーマン",
    english: ["salaryman", "office worker"],
  },
  {
    word: "給料",
    furigana: "給料[きゅうりょう]",
    english: ["salary"],
    info: [
      "The 料 in 給料 is also used in 授業料（じゅぎょうりょう）-> tuition",
    ],
  },
  {
    word: "残業",
    furigana: "残業[ざんぎょう]",
    english: ["overtime work"],
    info: ['Literally means "work that remains"'],
  },
  {
    word: "パンダ",
    furigana: "パンダ",
    english: ["panda"],
  },
  {
    word: "コンタクト",
    furigana: "コンタクト",
    english: ["contact lenses"],
    info: ["Often specified as コンタクトレンズ"],
  },
  {
    word: "ひげ",
    furigana: "ひげ",
    english: ["beard"],
  },
  {
    word: "ブーツ",
    furigana: "ブーツ",
    english: ["boots"],
  },
  {
    word: "かぎ",
    furigana: "かぎ",
    english: ["lock", "key"],
  },
  {
    word: "宝くじ",
    furigana: "宝[たから]くじ",
    english: ["lottery"],
    info: ["宝 means treasure"],
  },
  {
    word: "紙",
    furigana: "紙[かみ]",
    english: ["paper"],
    info: [
      "Found in 折り紙（おりがみ）(origami)",
      "折る means to fold or to break sticks into pieces",
    ],
    extra: "https://www.youtube.com/shorts/weH2wf4Rba4?feature=share",
  },
  {
    word: "スプーン",
    furigana: "スプーン",
    english: ["spoon"],
  },
]

export default vocabItems
