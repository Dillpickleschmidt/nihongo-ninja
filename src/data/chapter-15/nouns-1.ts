import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "外国人",
    furigana: "外国人[がいこくじん]",
    english: ["foreigner"],
    mnemonics: [
      "外 (gai) means 'outside', 国 (koku) means 'country', and 人 (jin) means 'person'",
    ],
    example_sentences: [
      {
        japanese: "日本には多くの外国人が住んでいます。",
        english: "Many foreigners live in Japan.",
      },
    ],
    videos: [
      {
        src: "1irwarln0848xmJNqm9pv6CpI432A-Uuo",
        title: "Combatants Will Be Dispatched S01E01",
      },
    ],
  },
  {
    word: "そば",
    furigana: "そば",
    english: ["soba", "Japanese buckwheat noodles"],
    mnemonics: ["Think of the 'so' in 'noodle soup' and 'ba' in 'buckwheat'"],
    info: [
      "Soba noodles are a staple in Japanese cuisine, often served either hot in a soup or chilled with a dipping sauce.",
      "The kanji for そば is 蕎麦, but it's usually written in hiragana.",
    ],
    example_sentences: [
      {
        japanese: "寒い日には温かいそばが美味しいです。",
        english: "Hot soba is delicious on a cold day.",
      },
    ],
    videos: [
      {
        src: "1HMRWCzgpyXYavqaldvgyF8MDF-FgFJ2d",
        title: "Golden Kamuy S01E04",
      },
    ],
  },
  {
    word: "絵",
    furigana: "絵[え]",
    english: ["painting", "picture", "drawing"],
    mnemonics: [
      "Consists of kanji for 'thread' and 'meet,' think of a paintbrush meeting the woven canvas (made of thread).",
    ],
    info: [
      "This word can refer to any kind of pictorial representation, from fine art to children's drawings.",
    ],
    example_sentences: [
      {
        japanese: "彼女は絵を描くのが上手です。",
        english: "She is good at drawing pictures.",
      },
    ],
    videos: [
      {
        src: "1u5KjknZpd_Ezya-zs1oml2v_LMNQ54X6",
        title: "Golden Kamuy S02E26_OAD",
      },
    ],
  },
  {
    word: "地図",
    furigana: "地図[ちず]",
    english: ["map"],
    mnemonics: [
      "地 (chi) means 'earth', and 図 (zu) means 'diagram' - A map is really just a diagram of a section of Earth.",
    ],
    info: [
      "This word can refer to any type of map, from a world map to a subway map.",
      "In the age of smartphones, physical maps are less common, but the word is still used for digital maps as well.",
    ],
    videos: [
      {
        src: "1_wJwIDdEI5vY-WJXeiZFAZMs_Ku9c_VT",
        title: "Reborn as a Vending Machine S01E08",
      },
    ],
  },
  {
    word: "辞書",
    furigana: "辞書[じしょ]",
    english: ["dictionary"],
    mnemonics: ["辞 (ji) means 'word' and 書 (sho) means 'write'"],
    info: ["This word can refer to both physical and digital dictionaries."],
    example_sentences: [
      {
        japanese: "分からない言葉は辞書で調べます。",
        english: "I look up words I don't understand in the dictionary.",
      },
    ],
  },
  {
    word: "家具",
    furigana: "家具[かぐ]",
    english: ["furniture"],
    mnemonics: [
      "家 (ka) means 'house', and 具 (gu) means 'tool' or 'equipment'",
    ],
    info: [
      "This word refers to any kind of furniture used in a home or office.",
      "Large furniture stores like IKEA are called 家具店 (kaguten) in Japanese.",
    ],
    videos: [
      {
        src: "1TOExs5CMuReLOlQ31JuNRuLVDWvebfQv",
        title: "Spy x Family S01E05 + S01E06",
      },
    ],
  },
  {
    word: "電池",
    furigana: "電池[でんち]",
    english: ["battery"],
    example_sentences: [
      {
        japanese: "リモコンの電池が切れたので、新しいのを買いに行きました。",
        english:
          "The remote control's batteries died, so I went to buy new ones.",
      },
    ],
    videos: [
      {
        src: "1hcXowoNiE28wagI--qA-FI4BwJFPo2QY",
        title: "Days with My Stepsister S01E06",
      },
    ],
  },
  {
    word: "ジャケット",
    furigana: "ジャケット",
    english: ["jacket"],
    example_sentences: [
      {
        japanese: "寒くなってきたので、ジャケットを着ました。",
        english: "It's getting cold, so I put on a jacket.",
      },
    ],
  },
  {
    word: "ペット",
    furigana: "ペット",
    english: ["pet"],
    example_sentences: [
      {
        japanese: "私のペットは3歳の猫です。",
        english: "My pet is a 3-year-old cat.",
      },
    ],
  },
  {
    word: "割引券",
    furigana: "割引券[わりびきけん]",
    english: ["discount coupon"],
    info: [
      "This term is used for various types of discount coupons, from those found in magazines to digital coupons used in online shopping.",
      "In casual speech, people might just say クーポン (kuupon), which is a loanword from English.",
    ],
    videos: [
      {
        src: "151X-wce85Q9k4dJT4E90oi1bS-ZfM5kP",
        title: "Konosuba S02E01",
      },
    ],
  },
  {
    word: "インターネット",
    furigana: "インターネット",
    english: ["internet"],
  },
  {
    word: "ネット",
    furigana: "ネット",
    english: ["internet"],
    example_sentences: [
      {
        japanese: "ネットで買い物をするのが好きです。",
        english: "I like shopping on the internet.",
      },
    ],
  },
  {
    word: "地震",
    furigana: "地震[じしん]",
    english: ["earthquake"],
    mnemonics: [
      "地 (ji) means 'earth' and 震 (shin) means 'shake' - Earth shake.",
    ],
    info: [
      "Japan is located in a seismically active area, so this word is unfortunately quite common.",
      "There are different scales to measure earthquakes in Japan, including the shindo (震度) scale, which measures the intensity of shaking at a specific location.",
    ],
    example_sentences: [
      {
        japanese: "昨日、小さな地震がありました。",
        english: "There was a small earthquake yesterday.",
      },
    ],
    videos: [
      {
        src: "1Je6CK0hXD2pbuHt3XQKLhv-fFVjCwHOt",
        title: "Combatants Will Be Dispatched S02E09",
      },
    ],
  },
  {
    word: "保険",
    furigana: "保険[ほけん]",
    english: ["insurance"],
    mnemonics: ["保 (ho) means 'protect' and 険 (ken) means 'danger'"],
    info: [
      "This word covers all types of insurance, including health insurance, life insurance, and property insurance.",
      "In Japan, everyone is required to have health insurance, either through their employer or through the national health insurance system.",
      "保険に入る -> to get insurance (e.g., against thefts or accidents)",
    ],
    example_sentences: [
      {
        japanese: "こんなことならもうちょい手厚い保険に入っとくんだったな。",
        english:
          "If I'd known this was going to happen, I would've enrolled in a jucier life insurance package.",
      },
    ],
    videos: [
      {
        src: "1yYkxXICC4T-hUIS4EX7j07iu2ad4gIK5",
        title: "Solo Leveling S01E02",
      },
    ],
  },
  {
    word: "税金",
    furigana: "税金[ぜいきん]",
    english: ["tax"],
    mnemonics: [
      "Contains 金 (きん -> money) and 兄 (older brother) with horns. Think of sitting in a tree with a pair of binoculars, observing your evil older brother extorting others for money from afar.",
    ],
    info: [
      "This word refers to any kind of tax, including income tax, sales tax, and property tax.",
      "Japan has a consumption tax (消費税, shouhizei) which is similar to sales tax or VAT in other countries.",
      "税金を払う -> to pay taxes",
    ],
    example_sentences: [
      {
        japanese: "来月は税金を払わなければなりません。",
        english: "I have to pay taxes next month.",
      },
    ],
    videos: [
      {
        src: "12bFi5LvKOazhekgd3RmSvxvpoBG6Tk7b",
        title: "Campfire Cooking in Another World S01E02",
      },
    ],
  },
]

export default vocabItems
