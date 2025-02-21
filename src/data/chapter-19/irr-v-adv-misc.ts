import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "ごちそうする",
    furigana: "ごちそうする",
    english: ["to treat/invite (someone) to a meal"],
    info: [
      "A polite expression for treating someone to a meal.",
      "Different from 'おごる', which is casual and often used among friends.",
    ],
    particles: [
      { label: "person", particle: "に" },
      { label: "meal", particle: "を" },
    ],
  },
  {
    word: "遠慮する",
    furigana: "遠慮[えんりょ]する",
    english: [
      "to hold back",
      "to refrain from",
      "to hold back for the time being",
    ],
    info: ["To restrain oneself out of consideration for others."],
    example_sentences: [
      {
        japanese: "遠慮しないで、どうぞ食べてください。",
        english: "Please don't hold back, go ahead and eat.",
      },
    ],
  },
  {
    word: "招待する",
    furigana: "招待[しょうたい]する",
    english: ["to invite someone (to an event/a place)"],
    particles: [
      {
        label: "person",
        particle: "を",
      },
      {
        label: "event/place",
        particle: "に",
      },
    ],
  },
  {
    word: "話をする",
    furigana: "話[はなし]をする",
    english: ["to have a talk"],
    example_sentences: [
      {
        japanese:
          "彼は夜遅くまで彼女とビールを飲みながら、人生の話をするのが大好きです。",
        english:
          "He loves to have talks about life with her while drinking beer late into the night.",
      },
      {
        japanese:
          "友達と喧嘩してしまったので、明日落ち着いて話をするつもりです。",
        english:
          "I got into a fight with my friend, so I plan to have a talk calmly tomorrow.",
      },
    ],
  },
  {
    word: "おととい",
    furigana: "おととい",
    english: ["the day before yesterday"],
  },
  {
    word: "毎朝",
    furigana: "毎朝[まいあさ]",
    english: ["every morning"],
    mnemonics: ["You know 毎, you know 朝. Use that big brain of yours."],
  },
  {
    word: "それで",
    furigana: "それで",
    english: ["then", "therefore"],
  },
  {
    word: "なぜ",
    furigana: "なぜ",
    english: ["why"],
    info: [
      "なぜ - Used to ask for logical or factual reasons, often in formal or intellectual contexts.",
      "Ex. なぜ彼が選ばれたのか、説明してください。-> Please explain why he was chosen (選ばれた -> passive conjigation from Ch. 21).",
      "どうして - Used in daily conversation to ask for reasons, often with a tone of curiosity or emotion.",
      "Ex. どうしてそんなに悲しそうなの？ -> Why do you look so sad?",
    ],
  },
  {
    word: "本当は",
    furigana: "本当[ほんとう]は",
    english: ["in fact", "originally"],
    info: [
      "本当は - Used to convey what's genuinely true, often contrasting with outward appearances or expectations.",
      "Ex. 本当は試験を受けたくなかった。-> To be honest, I didn’t want to take the exam. (受ける -> to take [an exam])",
      "実は - Used to disclose a fact or detail that might be unexpected or previously unknown.",
      "Ex. 実は、彼はプロのピアニストなんです。-> Actually, he's a professional pianist.",
    ],
    overwrite_word: "本当は",
  },
  {
    word: "まだ",
    furigana: "まだ",
    english: ["still"],
    mnemonics: ["Haven't we learned this already?"],
  },
  {
    word: "少々",
    furigana: "少々[しょうしょう]",
    english: ["a few seconds"],
    mnemonics: [
      '"Show-show," because even a few seconds feels like a mini-show of patience.',
    ],
    info: [
      "Fun fact: 々 is a kanji that repeats the previous kanji.",
      "少々 also means 'a little bit'.",
    ],
  },
  {
    word: "～名様",
    furigana: "～ 名様[めいさま]",
    english: ["party of... people"],
    mnemonics: [
      '"May-sam," like you\'re announcing how many people are in your party, "May I present, Sam, and his friends."',
    ],
  },
  {
    word: "ようこそ",
    furigana: "ようこそ",
    english: ["Welcome."],
    info: [
      'It\'s not "よこそ." Try to be grand and say it with a flourish: "Yoookoso!"',
    ],
  },
  {
    word: "よろしくお伝えください",
    furigana: "よろしくお 伝[つた]えください",
    english: ["Please give my best regards (to...)."],
    particles: [
      {
        particle: "に",
      },
    ],
  },
]

export default vocabItems
