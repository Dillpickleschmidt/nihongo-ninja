import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "行く",
    furigana: "行[い]く",
    english: ["to go"],
    info: [
      "行く is often used with the particles に or へ to indicate a destination.",
      "It's a very commonly used verb in Japanese.",
    ],
    particles: [
      {
        label: "destination",
        particle: "に",
      },
      {
        label: "destination",
        particle: "へ",
      },
    ],
    example_sentences: [
      { japanese: "学校に行く", english: "I go to school" },
      { japanese: "東京へ行く", english: "I go to Tokyo" },
    ],
  },
  {
    word: "来る",
    furigana: "来[く]る",
    english: ["to come"],
    info: [
      "Is used when someone or something is moving towards the speaker's location or a place associated with the speaker.",
      "来る implies movement towards the speaker, while 帰る means 'to return' or 'go back' to a point of origin.",
      "来る is often used from the receiver's perspective, 帰る from the returner's perspective (or from someone else recounting it).",
    ],
    particles: [
      {
        label: "destination",
        particle: "に",
      },
      {
        label: "destination",
        particle: "へ",
      },
    ],
    example_sentences: [
      {
        japanese: "田中さんは明日ここに来ますか。",
        english: "Will Tanaka be here tomorrow?",
      },
    ],
  },
  {
    word: "帰る",
    furigana: "帰[かえ]る",
    english: ["to go back", "to return"],
    info: [
      "Primarily used for people returning to a base location.",
      "Cannot be used for inanimate objects or animals.",
      "Most commonly used for returning home, but can also be used for returning to school, work, or other regular places.",
      "Is used with に・へ to indicate the destination.",
    ],
    particles: [
      {
        label: "destination",
        particle: "に",
      },
      {
        label: "destination",
        particle: "へ",
      },
    ],
    example_sentences: [
      {
        japanese: "明日、田中さんは日本に帰ります。",
        english: "Tanaka will return to Japan tomorrow.",
      },
    ],
  },
  {
    word: "聞く",
    furigana: "聞[き]く",
    english: ["to listen", "to hear", "to ask"],
    info: [
      "聞く (kiku) is a versatile verb with three main meanings. It is paired with objects using the を particle.",
      "'To listen to' or 'to hear,' - 音楽を聞く (to listen to music).",
      "To ask - 先生に質問を聞く (to ask the teacher a question).",
      "(Not covered in Nihongo Ninja) - 'To understand' or 'to follow,' often in its potential form 聞こえる (kikoeru) - よく聞こえない (I can't hear/understand well). This is a bit advanced so just focus on the other 2 meanings for now.",
      "Context and particle usage help determine the intended meaning.",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "話す",
    furigana: "話[はな]す",
    english: ["to speak", "to talk"],
    info: [
      "Is used for the act of speaking or talking. When referring to speaking a language, it can be used with either を or で, with a slight difference in nuance:",
      "1. [Language]を話す: Emphasizes the ability to speak a language. E.g., 日本語を話す (Nihongo wo hanasu) - to be able to speak Japanese.",
      "2. [Language]で話す: Focuses on the act of speaking using a particular language. E.g., 英語で話す (Eigo de hanasu) - to speak in English.",
    ],
    particles: [
      {
        label: "language",
        particle: "を",
      },
      {
        label: "language",
        particle: "で",
      },
    ],
  },
  {
    word: "見る",
    furigana: "見[み]る",
    english: ["to see", "to look at", "to watch"],
    info: [
      "見る (miru) is a versatile verb that can mean 'to see,' 'to look at,', 'to watch,' or 'to examine' depending on context. It's paired with the を particle for the object being seen/watched.",
      "1. To see (perceive with eyes): 鳥を見ました (tori wo mimashita) - I saw a bird",
      "2. To look at (direct gaze at): 写真を見る (shashin wo miru) - to look at a photo",
      "3. To watch (view for a duration): テレビを見る (terebi wo miru) - to watch TV",
      "4. To examine/check: 成績を見る (seiseki wo miru) - to check grades",
      "The specific meaning is often clear from context and the object being viewed.",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "読む",
    furigana: "読[よ]む",
    english: ["to read"],
    info: [
      "Typically used with the を particle to indicate what is being read.",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      { japanese: "本を読む。", english: "I read books." },
      {
        japanese: "毎晩、本を読みます。",
        english: "I read a book every night.",
      },
    ],
  },
  {
    word: "起きる",
    furigana: "起[お]きる",
    english: ["to wake up", "to get up"],
    info: [
      "Encompasses both the act of waking up and getting up, which are often seen as a single process in Japanese.",
      "Unlike English, which distinguishes between 'waking up' (becoming conscious) and 'getting up' (physically rising from bed), Japanese typically doesn't separate these concepts.",
    ],
  },
  {
    word: "寝る",
    furigana: "寝[ね]る",
    english: ["to sleep", "to go to sleep", "to go to bed"],
    info: [
      "Like 起きる, Japanese doesn't typically distinguish between 'sleeping' and 'going to bed' in everyday language. The context usually clarifies the specific meaning.",
      "If there's a need to explicitly say 'go to bed' without implying sleep, you might use ベッドに入る (beddo ni hairu) or 布団に入る (futon ni hairu), literally 'to enter the bed/futon'.",
    ],
  },
  {
    word: "食べる",
    furigana: "食[た]べる",
    english: ["to eat"],
    info: [
      "Typically used with the を particle to indicate what is being eaten.",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "飲む",
    furigana: "飲[の]む",
    english: ["to drink"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "する",
    furigana: "する",
    english: ["to do"],
    info: [
      "する is one of the most frequently used and versatile verbs in Japanese. Its importance stems from two main factors:",
      '1. Basic meaning: It translates to "do", covering a wide range of actions.',
      "2. Forming compound verbs: It combines with nouns to create verb phrases, e.g., 勉強する (benkyō suru) - to study, 電話する (denwa suru) - to make a phone call.",
      "These two functions make する essential for constructing a wide variety of Japanese sentences.",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "勉強する",
    furigana: "勉強[べんきょう]する",
    english: ["to study"],
    info: ["Combines 勉強 (study) with する (to do) to mean 'to study.'"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "いい",
    furigana: "いい",
    english: ["good", "fine", "okay"],
    info: [
      'いい is the colloquial form of 良い (よい), both meaning "good."',
      "You'll use いい for basic present tense usage, but you'll use 良い later for more advanced grammar and conjugations.",
    ],
  },
  {
    word: "早い",
    furigana: "早[はや]い",
    english: ["early"],
    info: [
      "早い (hayai) primarily means 'early', but it can also mean 'fast' in some contexts.",
      "1. When referring to time or schedule, it means 'early': 早い時間 (hayai jikan) - early time",
      "2. It can mean 'fast' for some actions: 仕事が早い (shigoto ga hayai) - fast at work",
      "3. For speed, especially of physical objects, 速い (hayai) is more commonly used.",
      "4. Both 早い and 速い are pronounced 'hayai', but have different kanji and nuances.",
      "5. 早い tends to imply 'quickness' or 'promptness', while 速い focuses on 'velocity' or 'speed'.",
    ],
  },
]

export default vocabItems
