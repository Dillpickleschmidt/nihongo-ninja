import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "タオル",
    furigana: "タオル",
    english: ["towel"],
  },
  {
    word: "スカート",
    furigana: "スカート",
    english: ["skirt"],
  },
  {
    word: "日記",
    furigana: "日記[にっき]",
    english: ["diary"],
    mnemonics: ["日 means 'daily', 記 means 'to note'"],
  },
  {
    word: "携帯",
    furigana: "携帯[けいたい]",
    english: ["cell phone"],
    info: ["More commonly written as ケータイ or スマホ"],
  },
  {
    word: "桜",
    furigana: "桜[さくら]",
    english: ["cherry blossom"],
  },
  {
    word: "虫",
    furigana: "虫[むし]",
    english: ["insect", "bug", "worm"],
    info: [
      "Used for both insects and worms",
      "Related word: 虫歯(むしば) - cavity/tooth decay",
    ],
  },
  {
    word: "家賃",
    furigana: "家賃[やちん]",
    english: ["rent"],
    mnemonics: ["家 is house, 賃 is money/fee"],
    info: ["家賃 - money paid for a house"],
  },
  {
    word: "外",
    furigana: "外[そと]",
    english: ["outside"],
    info: ["Opposite: 中(なか) meaning inside"],
  },
  {
    word: "後",
    furigana: "後[あと]",
    english: ["after", "later"],
    info: [
      "Related terms:",
      "後ろ(うしろ) - behind",
      "一ヶ月後(いっかげつご) - one month later",
      "一年後(いちねんご) - one year later",
    ],
  },
  {
    word: "夕方",
    furigana: "夕方[ゆうがた]",
    english: ["evening"],
    info: ["Related words:", "夕日(ゆうひ) - sunset", "夕食 - early dinner"],
  },
  {
    word: "明るい",
    furigana: "明[あか]るい",
    english: ["bright", "cheerful"],
    info: [
      "Used for both lighting and personality traits",
      "Opposite: 暗い (くらい -> dark)",
    ],
    example_sentences: [
      {
        japanese: "A: 山田さんのへやは電気がなくても明るいですね。",
        english: "A: Yamada-san's room is bright even without lights.",
      },
      {
        japanese:
          "B: ええ。山田さんの性格も明るいし、よく笑うから、クラスのみんなが好きですよ。",
        english:
          "B: Yes. Yamada-san has a cheerful personality too, and since he laughs a lot, everyone in class likes him.",
      },
    ],
  },
  {
    word: "暗い",
    furigana: "暗[くら]い",
    english: ["dark"],
    info: ["Opposite of 明るい"],
  },
  {
    word: "恥ずかしい",
    furigana: "恥[は]ずかしい",
    english: ["embarrassing", "to feel embarrassed"],
  },
  {
    word: "大切",
    furigana: "大切[たいせつ]",
    english: ["important", "precious"],
  },
  {
    word: "不安",
    furigana: "不安[ふあん]",
    english: ["anxious", "worried"],
    info: ["Opposite: 安心(あんしん)な - relieved, assured"],
  },
  {
    word: "無理",
    furigana: "無理[むり]",
    english: ["impossible"],
    mnemonics: ["無(む) = not existing, 理(り) = reason"],
    example_sentences: [
      {
        japanese: "A: 今晩、映画を見に行きませんか。",
        english: "A: Would you like to go see a movie tonight?",
      },
      {
        japanese: "B: すみません。今晩は宿題がたくさんありますから、無理です。",
        english:
          "B: I'm sorry. I have a lot of homework tonight, so it's impossible.",
      },
      {
        japanese: "A: じゃあ、明日は？",
        english: "A: Then how about tomorrow?",
      },
      {
        japanese: "B: はい、明日なら大丈夫です。",
        english: "B: Yes, tomorrow would be fine.",
      },
    ],
  },
]

export default vocabItems
