import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "～君",
    furigana: "～くん",
    english: ["Mr./Ms.... (casual)"],
    info: [
      "It's often attached to the names of boys or young men, typically by someone of senior status or age.",
    ],
    example_sentences: [
      {
        japanese: "毎日電車で通勤していますが、混んでいるので座れません。",
        english:
          "I commute to work by train every day, but it's so crowded I can't find a seat.",
      },
    ],
  },
  {
    word: "～たち",
    furigana: "～たち",
    english: ["makes a noun plural"],
    info: [
      'It\'s primarily used to indicate plurality for people and sometimes animals. For example, 私たち (watashi-tachi) means "we" or "us."',
      "Unlike the plural suffix ～ら (-ra), ～たち is considered more polite and is often used in formal situations.",
    ],
    example_sentences: [
      {
        japanese:
          "友達と約束したのに、急に雨が降ってきたので、出かけるのをやめました。",
        english:
          "I had made plans to go out with my friend, but it started raining suddenly so I decided not to go.",
      },
    ],
  },
  {
    word: "こんな～",
    furigana: "こんな～",
    english: ["...like this", "this kind of..."],
    info: [
      "It's typically followed by a noun.",
      "Often carries a subjective or emotional tone, sometimes implying surprise or dissatisfaction.",
    ],
    example_sentences: [
      {
        japanese: "こんな難しい問題は初めてです。",
        english:
          "This is the first time I've come across such a difficult problem.",
      },
    ],
  },
  {
    word: "急に",
    furigana: "急[きゅう]に",
    english: ["suddenly"],
    info: [
      "It's used to describe actions or changes that happen unexpectedly or without warning.",
      'Often used with verbs like 変わる (kawaru, "to change"), 始まる (hajimaru, "to begin"), or 止む (yamu, "to stop").',
    ],
    example_sentences: [
      {
        japanese:
          "昨日、急に頭が痛くなって、早く帰らなければなりませんでした。",
        english:
          "Yesterday, I suddenly got a headache and had to go home early.",
      },
    ],
  },
  {
    word: "ちょうど",
    furigana: "ちょうど",
    english: ["exactly"],
    info: [
      'Often used to indicate an exact point in time, like ちょうど3時 (choudo san-ji, "exactly 3 o\'clock").',
      'Can mean "just like" or "exactly as" when comparing two things.',
      'Often used with いい (ii, "good") to mean "just right" or "perfect."',
    ],
    example_sentences: [
      {
        japanese:
          "バスに乗ろうと思ったら、ちょうどバスが来たので、助かりました。",
        english: "Luckily, just as I was about to catch the bus, the bus came.",
      },
    ],
  },
  {
    word: "よく",
    furigana: "よく",
    english: ["well", "often", "frequently"],
    example_sentences: [
      {
        japanese: "田中さんは英語をよく話します。",
        english: "Tanaka speaks English well.",
      },
    ],
  },
  {
    word: "さあ",
    furigana: "さあ",
    english: ["I am not sure..."],
    mnemonics: [
      'To urge or encourage action: "Come on!" or "Let\'s go!"',
      'To express uncertainty: similar to "Well..." or "Hmm..."',
      'To mark the beginning of an activity: "Now then," or "Here we go"',
    ],
    example_sentences: [
      {
        japanese: "明日の天気？さあ、分かりません。",
        english: "What's the weather going to be like tomorrow? I don't know.",
      },
      {
        japanese: "さあ、出かけましょう。",
        english: "Come on, let's go out.",
      },
    ],
  },
  {
    word: "どうしたらいい",
    furigana: "どうしたらいい",
    english: ["what should one do"],
    info: [
      "Often used when facing a problem or needing guidance.",
      "A more casual version is どうしよう.",
    ],
    example_sentences: [
      {
        japanese: "試験に落ちてしまいました。どうしたらいいですか。",
        english: "I failed the exam. What should I do?",
      },
      {
        japanese: "携帯を忘れました。どうしたらいいでしょうか。",
        english: "I forgot my cell phone. What should I do?",
      },
    ],
  },
  {
    word: "～個",
    furigana: "～ 個[こ]",
    english: ["generic counter for smaller items"],
    info: [
      "Used to count small, typically round or cube-shaped objects.",
      "Fruits (りんご3個 - ringo san-ko - 3 apples)",
      "Eggs (卵2個 - tamago ni-ko - 2 eggs)",
    ],
    example_sentences: [
      {
        japanese: "りんごを2個とみかんを3個買いました。",
        english: "I bought two apples and three oranges.",
      },
    ],
  },
  {
    word: "～冊",
    furigana: "～ 冊[さつ]",
    english: ["counter for bound volumes"],
    info: [
      "Used to count books, magazines, notebooks, and other bound printed materials.",
    ],
    example_sentences: [
      {
        japanese: "図書館で本を3冊借りました。",
        english: "I borrowed three books from the library.",
      },
    ],
  },
  {
    word: "～台",
    furigana: "～ 台[だい]",
    english: ["counter for equipment"],
    info: [
      "Used to count machines, vehicles, and large equipment.",
      "車 (kuruma - car)",
      "パソコン (pasokon - personal computer)",
      "テレビ (terebi - television)",
      "冷蔵庫 (reizouko - refrigerator)",
      "洗濯機 (sentakuki - washing machine)",
    ],
    example_sentences: [
      {
        japanese: "家族で車を2台持っています。",
        english: "My family has two cars.",
      },
    ],
  },
  {
    word: "～匹",
    furigana: "～ 匹[ひき]",
    english: ["counter for smaller animals"],
    info: [
      "Used to count small to medium-sized animals, particularly mammals and fish.",
      "It can be read as ひき (hiki), ぴき (piki), or びき (biki) depending on the number it follows.",
      "いぬ (dog)",
      "ねこ (cat)",
      "さかな (fish)",
      "うさぎ (rabbit)",
      "1匹 (いっぴき)",
      "2匹 (にひき)",
      "3匹 (さんびき)",
      "4匹 (よんひき)",
      "5匹 (ごひき)",
      "6匹 (ろっぴき)",
      "7匹 (ななひき)",
      "8匹 (はっぴき)",
      "9匹 (きゅうひき)",
      "10匹 (じゅっぴき)",
    ],
    example_sentences: [
      {
        japanese: "私の家では猫を2匹飼っています。",
        english: "I have two cats at home.",
      },
    ],
  },
  {
    word: "～本",
    furigana: "～ 本[ほん]",
    english: ["counter for long cylindrical objects"],
    info: [
      "Used to count long, cylindrical objects.",
      "Also used for abstract concepts like phone calls (でんわ1本 - one phone call) or movies (えいが3本 - three movies).",
      "Can be read as ほん (hon), ぼん (bon), or ぽん (pon) depending on the number it follows.",
      "鉛筆 (pencil)",
      "ペン (pen)",
      "傘 (umbrella)",
      "バナナ (banana)",
      "1本 (いっぽん)",
      "2本 (にほん)",
      "3本 (さんぼん)",
      "4本 (よんほん)",
      "5本 (ごほん)",
      "6本 (ろっぽん)",
      "7本 (ななほん)",
      "8本 (はっぽん)",
      "9本 (きゅうほん)",
      "10本 (じゅっぽん)",
    ],
    example_sentences: [
      {
        japanese: "鉛筆を2本買いました。",
        english: "I bought two pencils.",
      },
    ],
  },
]

export default vocabItems
