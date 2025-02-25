import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "いらっしゃる",
    furigana: "いらっしゃる",
    english: ["honorific expression for 行く, 来る, and いる"],
    mnemonics: [
      "\"I'll-ash-you,\" because when someone important comes, you feel like you're about to get your ass handed to you with respect.",
    ],
    info: ["Honorific verb", "Used to show respect to the subject"],
  },
  {
    word: "召し上がる",
    furigana: "召[め]し 上[あ]がる",
    english: ["honorific expression for たべる and のむ"],
    mnemonics: [
      "\"Messy-agar,\" like you're elevating someone's meal to a whole new level of respect, where even the mess they made on the table is honored.",
    ],
    info: ["Honorific verb", "Used to show respect to the subject"],
  },
  {
    word: "下さる",
    furigana: "下[くだ]さる",
    english: ["honorific expression for くれる"],
    info: ["Honorific verb", "Used to show respect to the giver"],
    overwrite_word: "下さいます",
  },
  {
    word: "なさる",
    furigana: "なさる",
    english: ["honorific expression for する"],
    info: ["Honorific verb", "Used to show respect to the subject"],
    overwrite_word: "なさいます",
  },
  {
    word: "お休みになる",
    furigana: "お 休[やす]みになる",
    english: ["honorific expression for ねる"],
    mnemonics: [
      '"I become sleep", because honorifics make everything sound more important.',
    ],
    info: ["Honorific verb", "Used to show respect to the subject"],
  },
  {
    word: "ご覧になる",
    furigana: "ご 覧[らん]になる",
    english: ["honorific expression for みる"],
    info: ["Honorific verb", "Used to show respect to the subject"],
  },
  {
    word: "おっしゃる",
    furigana: "おっしゃる",
    english: ["honorific expression for いう"],
    mnemonics: [
      "\"Oh-shar-you,\" because when they speak, it's like they're sharing wisdom so profound, you feel like you should be taking notes.",
    ],
    info: ["Honorific verb", "Used to show respect to the subject"],
  },
  {
    word: "～ていらっしゃる",
    furigana: "～ていらっしゃる",
    english: ["honorific expression for ～ている"],
    info: ["Honorific verb", "Used to show respect to the subject"],
  },
  {
    word: "送る",
    furigana: "送[おく]る",
    english: ["to walk/drive (someone)", "to escort (a person somewhere)"],
    info: ["Used when accompanying someone to their destination."],
    example_sentences: [
      {
        japanese: "友達を駅まで送りました。",
        english: "I walked my friend to the station.",
      },
      {
        japanese: "駅まで送って行くよ。",
        english: "I'll walk you to the station.",
      },
    ],
    particles: [
      {
        label: "person",
        particle: "を",
      },
      {
        label: "place",
        particle: "まで",
      },
    ],
  },
  {
    word: "怒る",
    furigana: "怒[おこ]る",
    english: ["to get angry"],
    mnemonics: [
      "\"Oh-corrupt,\" because when they get angry, it's like corruption spreading, but you're more worried about getting caught in the blast radius.",
    ],
    info: ['Don\'t say "怒るになる"'],
  },
  {
    word: "決まる",
    furigana: "決[き]まる",
    english: ["to be decided"],
    mnemonics: [
      "You know 決める, right? Well, I've already determined that you can interpret this.",
    ],
    info: [
      "Intransitive verb",
      "Japanese people often use 決まる instead of 決める to be a little less direct, even though it's typically translated to English as (someone) decided (not passive voice).",
      'Imagine a waiter coming up to you at a restaurant and saying, "Has the customer decided?" instead of "Did you decide?" It\'s a little more polite and indirect.',
    ],
    example_sentences: [
      {
        japanese: "専攻はまだ決まっていません",
        english: "I haven't decided on my major yet.",
      },
      {
        japanese: "ご注文はお決まりでしょうか。",
        english: "Have you decided on your order?",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "知り合う",
    furigana: "知[し]り 合[あ]う",
    english: ["to get acquainted with"],
    info: [],
    particles: [
      {
        particle: "と",
      },
    ],
  },
  {
    word: "呼ぶ",
    furigana: "呼[よ]ぶ",
    english: ["to call (someone's name)", "to invite"],
    info: [
      "Used when calling someone by name or inviting them to an event.",
      "For more formal invitations, use 招待する (shōtai). Ex. ジョン・シナを誕生日パーティーに招待した (I invited John Cena to my birthday party).",
    ],
    example_sentences: [
      {
        japanese: "えっと、何と呼んだらいいですか。",
        english: "Um, what should I address you as?",
      },
      {
        japanese: "ジェイミーと呼んでください。",
        english: "Please call me Jamie.",
      },
      {
        japanese: "パーティーに友達を呼んだ。",
        english: "I invited friends to the party.",
      },
    ],
    particles: [
      { label: "person", particle: "を" },
      { label: "event", particle: "に" },
    ],
  },
  {
    word: "引っ越す",
    furigana: "引[ひ]っ 越[こ]す",
    english: ["to move (to another place to live)"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "寄る",
    furigana: "寄[よ]る",
    english: ["to stop by"],
    mnemonics: [
      'Could be misinterpreted as "night" (with incorrect pitch accent), which is also the time that you stop by the fridge for a midnight snack.',
    ],
    info: [
      "The pitch accent is different than 夜:",
      "寄る -> (よ↓る↑), 夜 -> (よ↑る↓)",
    ],
    particles: [
      {
        label: "place",
        particle: "に",
      },
    ],
  },
  {
    word: "遅れる",
    furigana: "遅[おく]れる",
    english: ["to be late", "to delay"],
    info: [
      "Intransitive verb",
      "遅れる indicates being late or delayed for something specific (e.g., an event, meeting, train).",
      "Ex. 電車に遅れて、会議に間に合わなかった。 (I was late for the train and couldn't make it to the meeting on time.)",
      "遅くなる describes a general state of lateness without necessarily specifying what.",
      "Ex. 宿題が多すぎて、寝るのが遅くなった。 (I had too much homework, so I ended up going to bed late.) (me in Japanese class .·°՞(≧□≦)՞°·.)",
    ],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "かける",
    furigana: "かける",
    english: ["to sit down"],
    info: [
      "かける is typically used for sitting on chairs, benches, or edges in a casual manner, implying a lighter, more temporary action.",
      "Ex. 椅子にかけてお待ちください。(Please sit on the chair and wait.)",
      "座る is used for sitting on the floor, chairs, or traditional Japanese seating, often implying a more deliberate action of sitting down.",
      "Ex. 畳の上に座ってください。(Please sit on the tatami mat.)",
      'Essentially, your ass is often lower and more grounded with 座る than かける, which is why you\'ll use it for more traditional Japanese seating, as well as telling your dog to "sit" (followed by the obligatory "good boy").',
    ],
  },
  {
    word: "もてる",
    furigana: "もてる",
    english: ["to be popular (in terms of romantic interest)"],
    particles: [
      {
        label: "people",
        particle: "に",
      },
    ],
    overwrite_word: "モテる",
  },
  {
    word: "晴れる",
    furigana: "晴[は]れる",
    english: ["to become sunny", "to clear up"],
    info: [
      'Don\'t say "晴れるになる"',
      "Also has some figurative meanings like to clear one's name / to remove doubts",
    ],
  },
]

export default vocabItems
