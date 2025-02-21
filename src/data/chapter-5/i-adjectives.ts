import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "新しい",
    furigana: "新[あたら]しい",
    english: ["new"],
  },
  {
    word: "古い",
    furigana: "古[ふる]い",
    english: ["old (object)"],
    info: [
      "Used to describe objects that are old or outdated.",
      "Cannot be used to describe people or animals. For such cases, use '年を取った' (としをとった) for an elderly person or '若くない' (わかくない) for not young.",
      "Incorrect usage: お父さんは古いです。→ お父さんは若(わか)くありません。(“わかい” = young)",
      "Correct usage: 古い本 (old book).",
    ],
    example_sentences: [
      {
        japanese: "この本は古いです。",
        english: "This book is old.",
      },
      {
        japanese: "古い家に住んでいます。",
        english: "I live in an old house.",
      },
    ],
  },
  {
    word: "暑い",
    furigana: "暑[あつ]い",
    english: ["hot (weather)"],
    info: [
      "Used to describe hot weather or atmospheric conditions.",
      "Incorrect usage: 暑い飲み物 (hot drink) - '暑い' should be replaced with '熱い' (listed below).",
      "Correct usage: 暑い天気 (hot weather).",
    ],
    example_sentences: [
      {
        japanese: "今日の天気はとても暑いです。",
        english: "Today's weather is very hot.",
      },
      {
        japanese: "夏はいつも暑いですね。",
        english: "Summer is always hot, isn't it?",
      },
    ],
  },
  {
    word: "寒い",
    furigana: "寒[さむ]い",
    english: ["cold (weather)"],
    info: [
      "Used to describe cold weather or atmospheric conditions.",
      "Incorrect usage: 寒い水 (cold water) - '寒い' should be replaced with '冷たい' (listed below).",
      "Correct usage: 寒い朝 (cold morning).",
    ],
    example_sentences: [
      {
        japanese: "冬の朝は寒いですね。",
        english: "Winter mornings are cold, aren't they?",
      },
      {
        japanese: "今日は寒いです。",
        english: "Today is cold.",
      },
    ],
  },
  {
    word: "熱い",
    furigana: "熱[あつ]い",
    english: ["hot (object)"],
    info: [
      "Used to describe objects or substances that are hot to the touch.",
      "Incorrect usage: 熱い天気 (hot weather) - '熱い' should be replaced with '暑い'.",
      "Correct usage: 熱い飲み物 (hot drink).",
    ],
    example_sentences: [
      {
        japanese: "熱いコーヒーをのみます。",
        english: "I drink hot coffee.",
      },
      {
        japanese: "このお茶はとても熱いです。",
        english: "This tea is very hot.",
      },
    ],
  },
  {
    word: "冷たい",
    furigana: "冷[つめ]たい",
    english: ["cold (object)"],
    info: [
      "Used to describe objects or substances that are cold to the touch.",
      "Incorrect usage: 冷たい天気 (cold weather) - '冷たい' should be replaced with '寒い'.",
      "Correct usage: 冷たい水 (cold water).",
    ],
    example_sentences: [
      {
        japanese: "冷たい水をください。",
        english: "Please give me cold water.",
      },
      {
        japanese: "このジュースは冷たいです。",
        english: "This juice is cold.",
      },
    ],
  },
  {
    word: "忙しい",
    furigana: "忙[いそが]しい",
    english: ["busy (people/days)"],
  },
  {
    word: "大きい",
    furigana: "大[おお]きい",
    english: ["large"],
  },
  {
    word: "小さい",
    furigana: "小[ちい]さい",
    english: ["small"],
  },
  {
    word: "面白い",
    furigana: "面[おも]白[しろ]い",
    english: ["interesting", "funny"],
  },
  {
    word: "つまらない",
    furigana: "つまらない",
    english: ["boring"],
  },
  {
    word: "やさしい",
    furigana: "やさしい",
    english: ["kind (person)", "easy (problem)"],
  },
  {
    word: "難しい",
    furigana: "難[むずか]しい",
    english: ["difficult"],
  },
  {
    word: "かっこいい",
    furigana: "かっこいい",
    english: ["good-looking", "cool"],
    info: ["conjugates like いい"],
  },
  {
    word: "怖い",
    furigana: "怖[こわ]い",
    english: ["frightening"],
  },
  {
    word: "楽しい",
    furigana: "楽[たの]しい",
    english: ["fun"],
  },
  {
    word: "安い",
    furigana: "安[やす]い",
    english: ["cheap", "inexpensive"],
  },
]

export default vocabItems
