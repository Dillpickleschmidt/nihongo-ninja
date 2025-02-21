import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "今日中に",
    furigana: "今日中[きょうじゅう]に",
    english: ["by the end of today"],
    mnemonics: ["今日 (kyou) means 'today', 中 (juu) means 'during/within'"],
    info: [
      "～じゅう means 'all-', e.g., せかいじゅう (all around the world), いちにちじゅう (all day long)",
      "に makes the meaning of 'by'",
      "Similar expression: 今週中に出してください (Please submit it by the end of this week)",
    ],
    example_sentences: [
      {
        japanese: "この仕事を今日中に終わらせましょう。",
        english: "Let's finish this work by the end of today.",
      },
    ],
  },
  {
    word: "授業中に",
    furigana: "授業中[じゅぎょうちゅう]に",
    english: ["in class", "during class"],
    mnemonics: ["授業 (jugyou) means 'class', 中 (chuu) means 'during'"],
    info: [
      "～ちゅう means 'during'",
      "に makes the meaning of 'at one point of time during ~'",
      "Similar expressions: 運転中 (while driving), 勉強中 (while studying)",
    ],
    example_sentences: [
      {
        japanese: "授業中に携帯電話を使わないでください。",
        english: "Please don't use your mobile phone during class.",
      },
      {
        japanese: "仕事中にコンサートの予約をした。",
        english: "I made a concert reservation during work.",
      },
    ],
  },
  {
    word: "この間",
    furigana: "この 間[あいだ]",
    english: ["the other day"],
    mnemonics: ["この (kono) means 'this', 間 (aida) means 'interval/period'"],
    example_sentences: [
      {
        japanese: "この間、友達と映画を見に行きました。",
        english: "The other day, I went to see a movie with my friend.",
      },
    ],
  },
  {
    word: "これから",
    furigana: "これから",
    english: ["from now on"],
    mnemonics: ["これ (kore) means 'this', から (kara) means 'from'"],
    example_sentences: [
      {
        japanese: "これから毎日運動します。",
        english: "From now on, I'll exercise every day.",
      },
    ],
  },
  {
    word: "このぐらい",
    furigana: "このぐらい",
    english: ["about this much"],
    mnemonics: [
      "この (kono) means 'this', ぐらい (gurai) indicates approximation",
    ],
    info: ["（＝これぐらい/このくらい/これくらい）"],
    example_sentences: [
      {
        japanese: "砂糖はこのぐらい入れてください。",
        english: "Please add about this much sugar.",
      },
    ],
  },
  {
    word: "自分で",
    furigana: "自分[じぶん]で",
    english: ["(do something) by oneself"],
    mnemonics: [
      "自分 (jibun) means 'oneself', で (de) is a particle indicating means",
    ],
    info: [
      "Means 'by oneself, without other people's help'",
      "Contrast with 一人で (by oneself, alone, with no one else)",
      "自分で: 自分でやってみる (try doing it by oneself), 自分で料理を作る (cook by oneself)",
      "一人で: 一人で学校に行く (go to school alone), 一人でご飯を食べる (eat alone)",
      "Incorrect usage: ❌️自分で学校に行く, ❌️自分でご飯を食べる",
    ],
    example_sentences: [
      {
        japanese: "この問題は自分で解決しました。",
        english: "I solved this problem by myself.",
      },
    ],
  },
  {
    word: "ほかの",
    furigana: "ほかの",
    english: ["other"],
    mnemonics: [
      "ほか (hoka) means 'other/another', の (no) is a possessive particle",
    ],
    info: [
      "Used as 'ほかのNoun' (other Noun)",
      "Related: 他に (hoka ni) + Verb: 他にやってみたいことはありますか。(Is there anything else you want to try?)",
    ],
    example_sentences: [
      {
        japanese: "ほかの方法を考えましょう。",
        english: "Let's think of other methods.",
      },
    ],
  },
  {
    word: "ええと",
    furigana: "ええと",
    english: ["well...", "let me see..."],
    mnemonics: ["Sounds like 'eh' - a sound people make when thinking"],
    info: ["Used as a filler word when thinking or hesitating"],
    example_sentences: [
      {
        japanese: "ええと、答えは…7だと思います。",
        english: "Well... I think the answer is 7.",
      },
    ],
  },
  {
    word: "実は",
    furigana: "実[じつ]は",
    english: ["actually", "in fact"],
    mnemonics: [
      "実 (jitsu) means 'truth/reality', は (wa) is a topic particle",
    ],
    example_sentences: [
      {
        japanese: "実は、私は日本に行ったことがあります。",
        english: "Actually, I have been to Japan before.",
      },
    ],
  },
  {
    word: "～以外",
    furigana: "～ 以外[いがい]",
    english: ["other than..."],
    mnemonics: ["以 (i) means 'by means of', 外 (gai) means 'outside'"],
    example_sentences: [
      {
        japanese: "田中さん以外は全員来ました。",
        english: "Everyone came except for Tanaka-san.",
      },
    ],
  },
  {
    word: "ごめん",
    furigana: "ごめん",
    english: ["I'm sorry. (casual)"],
    mnemonics: ["Shortened form of ごめんなさい (gomen nasai)"],
    info: ["Casual apology, used among friends or in informal situations"],
    example_sentences: [
      {
        japanese: "ごめん、遅れてしまって。",
        english: "Sorry, I'm late.",
      },
    ],
  },
  {
    word: "失礼します",
    furigana: "失礼[しつれい]します",
    english: ["Excuse me.", "Sorry to interrupt you."],
    mnemonics: [
      "失礼 (shitsurei) means 'rudeness', します (shimasu) makes it a polite expression",
    ],
    info: [
      "Polite expression used when interrupting someone or entering/leaving a room",
    ],
    example_sentences: [
      {
        japanese: "失礼します。部長はいらっしゃいますか。",
        english: "Excuse me. Is the department manager in?",
      },
    ],
  },
]

export default vocabItems
