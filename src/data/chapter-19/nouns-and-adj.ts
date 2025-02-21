import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "奥様",
    furigana: "奥様[おくさま]",
    english: ["(your/someone's) wife (polite)"],
    mnemonics: ["You know 奥さん, this can't be much harder."],
    info: [
      "A very polite way to refer to someone else's wife, often used in formal or respectful contexts.",
      "Compared to '奥さん', this term conveys a higher level of respect and is used in honorific language.",
    ],
  },
  {
    word: "お子さん",
    furigana: "お 子[こ]さん",
    english: ["(your/someone's) child (polite)"],
    mnemonics: [
      "Think of it as \"Oh, co-san,\" like you're just realizing you've got another human to look after (the son you co-habilitate with), and you're not even sure how you managed that.",
    ],
    info: [
      "A polite term for referring to someone else's child, used commonly in formal situations.",
      "Related: 'お子様' is even more formal and often used in commercial contexts like 'お子様ランチ' (a meal for children offered in restaurants).",
    ],
  },
  {
    word: "中学生",
    furigana: "中学生[ちゅうがくせい]",
    english: ["junior high school student"],
    mnemonics: [
      'They\'re stuck in the middle ("chu") of childhood and adulthood, navigating the awkward in-between.',
    ],
    info: ["小学生 -> 中学生 -> 高校生 -> 大学生 "],
  },
  {
    word: "部長",
    furigana: "部長[ぶちょう]",
    english: ["department manager"],
    mnemonics: [
      'sounds like "Boo-cho," implying this is the manager who\'s just waiting to scare the shit out of you with some last-minute work.',
    ],
    info: [
      "Part of a corporate hierarchy: 係長 (section chief) < 課長 (section manager) < 部長 (department manager) < 専務 (managing director) < 社長 (company president).",
    ],
  },
  {
    word: "出張",
    furigana: "出張[しゅっちょう]",
    english: ["business trip"],
    mnemonics: [
      '"Shush-yo-mouth," because you\'re so sick of the office noise, you volunteer for every business trip just to get some bloody peace and quiet.',
    ],
  },
  {
    word: "敬語",
    furigana: "敬語[けいご]",
    english: ["honorific language"],
    mnemonics: [
      '"Kay-go," suggesting that using honorific language is just you telling someone to go away in a very polite manner (it\'s definetly broader than that, though).',
    ],
    info: [
      "Honorific language in Japanese used to show respect.",
      "敬語 has multiple levels.",
      "Some Japanese people refer to「敬語」as simply meaning です・ます style instead of casual. Though it really encompasses more than that.",
      "Even native Japanese speakers often struggle with the rules of high-level 敬語. They never really have to use it until they enter the workplace. However, it's still useful to be able to understand it when spoken to you.",
    ],
  },
  {
    word: "こちら",
    furigana: "こちら",
    english: ["this way (polite)"],
  },
  {
    word: "どちら",
    furigana: "どちら",
    english: ["where (polite)"],
  },
  {
    word: "お礼",
    furigana: "お 礼[れい]",
    english: ["expression of gratitude"],
    mnemonics: [
      '"Oh, ray," because thanking someone feels like you\'re just shining a light on the fact you now owe them one.',
    ],
  },
  {
    word: "種類",
    furigana: "種類[しゅるい]",
    english: ["a kind", "a sort", "a type"],
    mnemonics: [
      '"Shu-ruin," because deciding on one type from so many feels like it might just ruin your day with indecision.',
    ],
    info: ["You can't use it for people (i.e. a type of person)."],
    example_sentences: [
      {
        japanese:
          "彼女は新しいレシピのために、いろいろな種類のチーズを買いました。",
        english: "She bought various kinds of cheese for her new recipe.",
      },
      {
        japanese: "どんな種類の保険に入ったらいいでしょうか。",
        english: "What kind of insurance should I get?",
      },
    ],
  },
  {
    word: "話",
    furigana: "話[はなし]",
    english: ["talk", "story"],
    mnemonics: ["Feels like we learned this already..."],
  },
  {
    word: "悩み",
    furigana: "悩[なや]み",
    english: ["worry"],
    mnemonics: [
      '"Nah-yami," because your worries are just another "Nah" in the long list of things you\'d rather not deal with.',
    ],
    info: [
      "Refers to something that troubles or worries you.",
      "Related verb: '悩む' means 'to be troubled' or 'to worry about something.'",
    ],
  },
  {
    word: "間違い",
    furigana: "間違[まちが]い",
    english: ["mistake"],
    mnemonics: [
      '"Ma-chi-guy," because every time you make a mistake, it feels like there\'s another guy in the room, laughing at you.',
    ],
    info: [
      "A mistake or an error.",
      "Related verbs: '間違う' (to make a mistake, casual) and '間違える' (to make a mistake, more neutral/formal).",
    ],
    example_sentences: [
      {
        japanese:
          "先生は生徒のプレゼンテーション中に多くの間違いを見つけました。",
        english:
          "The teacher found many mistakes during the student's presentation.",
      },
    ],
  },
  {
    word: "性格",
    furigana: "性格[せいかく]",
    english: ["personality"],
    mnemonics: ["It has 生 (せい) in it."],
  },
  {
    word: "怠け者",
    furigana: "怠[なま]け 者[もの]",
    english: ["lazy person"],
    mnemonics: ["〜者 = 人, a type of person."],
    info: [
      '者 is in 医者 (doctor, aka "medicine person"), 若者(young person), 悪者(vilan aka "bad person"), etc.',
    ],
  },
  {
    word: "恥ずかしがり屋",
    furigana: "恥[は]ずかしがり 屋[や]",
    english: ["shy person"],
    mnemonics: [
      '"Haze-kash-ga-ri-ya," like being shy is just existing in a haze, where eye contact is the enemy.',
    ],
    info: [
      "〜屋 can refer to stores: 本屋, 花屋, etc.",
      "〜屋 can also refer to people: 泣き虫屋 (a crybaby), 食いしん坊屋 (a glutton), おしゃべり屋 (a talkative person or chatterbox), etc..",
    ],
  },
  {
    word: "仲がいい",
    furigana: "仲[なか]がいい",
    english: ["be on good/close terms", "to get along well"],
    mnemonics: [
      "\"Naka-ga-ii (good).\" If you're both good people on the inside (中 が いい), you're probably going to get along well.",
    ],
    info: ["Opposite would be 仲が悪い"],
  },
  {
    word: "真面目",
    furigana: "真面目[まじめ]",
    english: ["serious", "sober", "diligent"],
    mnemonics: [
      '"The Major of Seriousness," like they\'ve been awarded the medal of honor for never cracking a smile at anything remotely fun.',
    ],
    info: ["な-adjective"],
  },
]

export default vocabItems
