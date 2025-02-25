import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "駅員",
    furigana: "駅[えき]員[いん]",
    english: ["station attendant"],
    mnemonics: ["駅 (eki) means 'station', 員 (in) means 'member/staff'"],
    info: [
      "Related words: 会社員 (company employee), 図書館員 (librarian), 会員 (member), 教員 (teacher)",
      "The suffix 員 (-in) is used for various professions or roles",
    ],
    example_sentences: [
      {
        japanese: "駅員さんに道を聞きました。",
        english: "I asked the station attendant for directions.",
      },
    ],
  },
  {
    word: "親",
    furigana: "親[おや]",
    english: ["parent"],
    mnemonics: [
      "Looks like a person (亻) under a tree (木), like a parent protecting a child",
    ],
    info: [
      "Related words: 父親 (ちちおや, father), 母親 (ははおや, mother)",
      "両親 (りょうしん) means 'both parents'",
    ],
    example_sentences: [
      {
        japanese: "私の親は先生です。",
        english: "My parents are teachers.",
      },
    ],
  },
  {
    word: "親せき",
    furigana: "親[しん]せき",
    english: ["relatives"],
    mnemonics: [
      "親 (shin) means 'parent', せき (seki) is related to 席 (seat), like family members sharing a seat",
    ],
    info: [
      "Can also be written as 親戚 (しんせき)",
      "Both kanji and hiragana versions are acceptable",
    ],
    example_sentences: [
      {
        japanese: "親せきが家に来ました。",
        english: "My relatives came to our house.",
      },
    ],
  },
  {
    word: "ごみ",
    furigana: "ごみ",
    english: ["garbage"],
    mnemonics: ["Sounds like 'gomi', which is close to 'gooey mess'"],
    info: [
      "Can also be written as ゴミ in katakana",
      "Kanji (塵) exists but is rarely used",
    ],
    example_sentences: [
      {
        japanese: "ごみを捨てましょう。",
        english: "Let's throw away the garbage.",
      },
    ],
  },
  {
    word: "砂糖",
    furigana: "砂糖[さとう]",
    english: ["sugar"],
    mnemonics: [
      "砂 (sa) means 'sand', 糖 (tou) means 'sugar' - sugar looks like sand",
    ],
    info: [
      "Don't confuse with the surname 佐藤 (also さとう but with different pitch accent)",
      "さとう (sugar) vs さとう (Satō, surname)",
    ],
    example_sentences: [
      {
        japanese: "コーヒーに砂糖を入れますか。",
        english: "Do you put sugar in your coffee?",
      },
    ],
  },
  {
    word: "大きさ",
    furigana: "大[おお]きさ",
    english: ["size"],
    mnemonics: ["大 (oo) means 'big', きさ (-kisa) is a noun-forming suffix"],
    info: [
      "Similar noun formations: 大きい→大きさ, 広い→広さ, 長い→長さ, 辛い→辛さ",
      "Adjective + さ creates a noun meaning the quality or state of that adjective",
    ],
    example_sentences: [
      {
        japanese: "この靴の大きさは合っていますか。",
        english: "Does the size of these shoes fit?",
      },
    ],
  },
  {
    word: "道",
    furigana: "道[みち]",
    english: ["way", "road", "directions"],
    mnemonics: ["Looks like a person (亻) walking on a path (⻌)"],
    info: [
      "Can be used literally (physical road) or figuratively (way of doing something)",
    ],
    example_sentences: [
      {
        japanese: "駅への道を教えてください。",
        english: "Please tell me the way to the station.",
      },
    ],
  },
  {
    word: "期末試験",
    furigana: "期末[きまつ]試験[しけん]",
    english: ["final examination"],
    mnemonics: [
      "期末 (kimatsu) means 'end of term', 試験 (shiken) means 'test'",
    ],
    info: [
      "Related terms: 一学期 (first semester), 二学期 (second semester), 先学期 (previous semester)",
      "末 means 'end of ~', e.g., 年末 (year-end)",
    ],
    example_sentences: [
      {
        japanese: "来週は期末試験です。",
        english: "Next week is the final examination.",
      },
    ],
  },
  {
    word: "研究",
    furigana: "研究[けんきゅう]",
    english: ["research"],
    mnemonics: [
      "研 (ken) means 'polish/study', 究 (kyuu) means 'investigate thoroughly'",
    ],
    info: ["Can be used in compound words, e.g., アジア研究 (Asian Studies)"],
    example_sentences: [
      {
        japanese: "大学で日本語の研究をしています。",
        english: "I'm doing research on Japanese at university.",
      },
    ],
  },
  {
    word: "大学院",
    furigana: "大学院[だいがくいん]",
    english: ["graduate school"],
    mnemonics: ["大学 (daigaku) means 'university', 院 (in) means 'institute'"],
    info: ["院 is also used in other words like 病院 (hospital)"],
    example_sentences: [
      {
        japanese: "来年、大学院に行きたいです。",
        english: "I want to go to graduate school next year.",
      },
    ],
  },
  {
    word: "奨学金",
    furigana: "奨学金[しょうがくきん]",
    english: ["scholarship"],
    mnemonics: [
      "奨 (shou) means 'encourage', 学 (gaku) means 'study', 金 (kin) means 'money'",
    ],
    info: [
      "学 is used in words related to education: 学生 (student), 大学 (university)",
      "金 means money or gold",
    ],
    example_sentences: [
      {
        japanese: "奨学金を申し込みました。",
        english: "I applied for a scholarship.",
      },
    ],
  },
  {
    word: "推薦状",
    furigana: "推薦状[すいせんじょう]",
    english: ["letter of recommendation"],
    mnemonics: [
      "推薦 (suisen) means 'recommendation', 状 (jou) means 'letter'",
    ],
    info: ["Common mistake: ❌️すいせんじょ, Correct: ⭕️すいせんじょう"],
    example_sentences: [
      {
        japanese: "先生に推薦状を書いてもらいました。",
        english: "I had my teacher write a letter of recommendation for me.",
      },
    ],
  },
  {
    word: "台風",
    furigana: "台風[たいふう]",
    english: ["typhoon"],
    mnemonics: [
      "台 (tai) means 'pedestal', 風 (fuu) means 'wind' - a powerful wind that can topple things",
    ],
    info: ["Common mistake: ❌️たいふん, Correct: ⭕️たいふう"],
    example_sentences: [
      {
        japanese: "台風が来るので、外出しないでください。",
        english: "A typhoon is coming, so please don't go out.",
      },
    ],
  },
  {
    word: "文化",
    furigana: "文化[ぶんか]",
    english: ["culture"],
    mnemonics: [
      "文 (bun) means 'writing', 化 (ka) means 'change/transform' - culture is shaped by written traditions",
    ],
    example_sentences: [
      {
        japanese: "日本の文化に興味があります。",
        english: "I'm interested in Japanese culture.",
      },
    ],
  },
  {
    word: "返事",
    furigana: "返事[へんじ]",
    english: ["reply"],
    mnemonics: [
      "返 (hen) means 'return', 事 (ji) means 'matter/thing' - returning a response",
    ],
    info: [
      "Can be used with お as お返事 for politeness",
      "Common phrases: お返事、ありがとうございます (Thank you for your reply), 返事がきた (I got a reply)",
    ],
    example_sentences: [
      {
        japanese: "メールの返事を書きました。",
        english: "I wrote a reply to the email.",
      },
    ],
  },
  {
    word: "日",
    furigana: "日[ひ]",
    english: ["day", "date"],
    mnemonics: ["Looks like a sun with a line through it, representing a day"],
    info: [
      "Does not stand alone, usually used in compounds or with counters",
      "Common mistake: ❌️にち when reading date questions",
      "Correct usage: ＿＿＿＿＿＿＿＿日はいつですか。(When is ________?)",
    ],
    example_sentences: [
      {
        japanese: "今日はいい日ですね。",
        english: "It's a nice day today, isn't it?",
      },
    ],
  },
]

export default vocabItems
