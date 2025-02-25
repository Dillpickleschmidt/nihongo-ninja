import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "マフラー",
    furigana: "マフラー",
    english: ["scarf", "winter scarf"],
    mnemonics: [
      "It's a loanword from English \"muffler,\" but in Japanese, it's most commonly used to mean scarf.",
    ],
    example_sentences: [
      {
        japanese:
          "進撃の巨人(Attack on Titan)でミカサはいつも赤いマフラーをしています。",
        english: "In Attack on Titan, Mikasa always wears a red scarf.",
      },
    ],
  },
  {
    word: "指輪",
    furigana: "指輪[ゆびわ]",
    english: ["ring"],
    mnemonics: [
      '指 (yubi) means "finger," and 輪 (wa) means "ring" or "circle"',
    ],
    example_sentences: [
      {
        japanese:
          "ロード・オブ・ザ・リングでフロドは魔法の指輪を持っています。",
        english: "In The Lord of the Rings, Frodo carries a magic ring.",
      },
    ],
  },
  {
    word: "鉛筆",
    furigana: "鉛筆[えんぴつ]",
    english: ["pencil"],
    mnemonics: ['Sounds like "a pencil."'],
  },
  {
    word: "ぬいぐるみ",
    furigana: "ぬいぐるみ",
    english: ["stuffed animal"],
    videos: [
      {
        src: "1L0jm2Ymn85lFWSJ4EUbTci4rGqyEwZGW",
        title: "Vivy S01E04",
      },
    ],
  },
  {
    word: "漫画",
    furigana: "漫画[まんが]",
    english: ["manga", "comic book"],
  },
  {
    word: "化粧品",
    furigana: "化粧品[けしょうひん]",
    english: ["cosmetics"],
    mnemonics: [
      "化粧品 refers to cosmetics or makeup products used to enhance or alter a person's appearance.",
      "In Japan, the cosmetics industry is very large and advanced, with many popular domestic and international brands.",
    ],
    example_sentences: [
      {
        japanese:
          "化粧品の広告を見た弟は、リップスティックをアイスクリームと間違えました。「食べたい！」と言って、母に止められました。",
        english:
          'My little brother saw a cosmetic advertisement and mistook the lipstick for ice cream. He said, "I want to eat it!" but my mother had to stop him.',
      },
    ],
    videos: [
      {
        src: "1CY_9LwAwCP4q9g50gntxDOu4OD3jxW4S",
        title: "The Unwanted Undead Adventurer S01E01",
      },
    ],
  },
  {
    word: "ラジオ",
    furigana: "ラジオ",
    english: ["radio"],
    mnemonics: ['Sounds like "radio."'],
  },
  {
    word: "お皿",
    furigana: "お 皿[さら]",
    english: ["plate", "dish"],
  },
  {
    word: "お返し",
    furigana: "お 返[かえ]し",
    english: ["return (as a token of gratitude)"],
    videos: [
      {
        src: "1PvrvqqNdI1KOKsyNJxCWxYj3g4142v6F",
        title: "Sword Art Online S01E09",
      },
    ],
  },
  {
    word: "履歴書",
    furigana: "履歴書[りれきしょ]",
    english: ["resume", "résumé"],
    info: [
      "Many Japanese companies still expect handwritten 履歴書 in the modern day, though this is changing in some industries.",
      "especially due to changes brought on by the COVID-19 pandemic.",
    ],
    videos: [
      {
        src: "1sb9jfg5Kx7qrqHCB53FmfVKnM01Cf_ia",
        title: "No Longer Allowed in Another World S01E04",
      },
    ],
  },
  {
    word: "クリスマス",
    furigana: "クリスマス",
    english: ["Christmas"],
    mnemonics: ['It\'s begginning to look a lot like "Christmas!"'],
  },
  {
    word: "バレンタインデー",
    furigana: "バレンタインデー",
    english: ["Valentine's Day"],
    mnemonics: ["Sounds like Valentine's Day."],
    info: [
      "In Japan, the customs for Valentine's Day and White Day are quite unique.",
      "On Valentine's Day, Girls and women typically give chocolates to boys and men.",
      "On White day, one month later, boys and men who received chocolates on Valentine's Day are expected to return the favor.",
      "This custom was started as a marketing campaign by confectionery companies in Japan, but it has become a well-established cultural practice.",
    ],
  },
  {
    word: "ホワイトデー",
    furigana: "ホワイトデー",
    english: ["White Day"],
    info: [
      "White Day is celebrated annually on March 14, one month after Valentine's Day, when people give reciprocal gifts to those who gave them gifts on Valentine's Day.",
      "Common gifts include marshmallows, white chocolate, cookies, jewelry, or other white-colored presents.",
    ],
    example_sentences: [
      {
        japanese: "ホワイトデーに、彼女にお返しのチョコレートをあげました。",
        english: "On White Day, I gave my girlfriend chocolate in return.",
      },
    ],
  },
]

export default vocabItems
