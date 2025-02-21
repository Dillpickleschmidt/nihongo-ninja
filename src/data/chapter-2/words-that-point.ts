import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "これ",
    furigana: "これ",
    english: ["this one"],
    info: [
      "Use これ when the object is close to you, the speaker.",
      "Situation: When you are holding a pen and showing it to someone next to you.",
    ],
    example_sentences: [
      { japanese: "これはペンです。", english: "This is a pen." },
    ],
  },
  {
    word: "それ",
    furigana: "それ",
    english: ["that one"],
    info: [
      "Use それ when the object is close to the listener.",
      "Situation: When the pen is near the person you are speaking to.",
    ],
    example_sentences: [
      { japanese: "それはペンです。", english: "That is a pen." },
    ],
  },
  {
    word: "あれ",
    furigana: "あれ",
    english: ["that one (over there)"],
    info: [
      "Use あれ when the object is far from both the speaker and the listener.",
      "Situation: When the pen is on a table across the room from both you and the listener.",
    ],
    example_sentences: [
      {
        japanese: "あれはペンです。",
        english: "That (over there) is a pen.",
      },
    ],
  },
  {
    word: "どれ",
    furigana: "どれ",
    english: ["which one"],
    info: [
      "Use どれ to ask about which object among several choices.",
      "Situation: When there are several items on a table, and you want to know which one is the pen.",
    ],
    example_sentences: [
      { japanese: "どれがペンですか。", english: "Which is a pen?" },
    ],
  },
  {
    word: "この",
    furigana: "この",
    english: ["this..."],
    info: [
      "Use この to specify an object close to you along with its noun.",
      "Situation: When you are holding a blue pen and describing it.",
    ],
    example_sentences: [
      { japanese: "このペンは青いです。", english: "That pen is blue." },
    ],
  },
  {
    word: "その",
    furigana: "その",
    english: ["that..."],
    info: [
      "Use その to specify an object close to the listener along with its noun.",
      "Situation: When the blue pen is near the listener, and you are describing it.",
    ],
    example_sentences: [
      { japanese: "そのペンは青いです。", english: "That pen is blue." },
    ],
  },
  {
    word: "あの",
    furigana: "あの",
    english: ["that... (over there)"],
    info: [
      "Use あの to specify an object far from both you and the listener along with its noun.",
      "Situation: When the blue pen is across the room from both you and the listener.",
    ],
    example_sentences: [
      {
        japanese: "あのペンは青いです。",
        english: "That pen (over there) is blue.",
      },
    ],
  },
  {
    word: "どの",
    furigana: "どの",
    english: ["which..."],
    info: [
      "Use どの to ask about which specific object among several choices.",
      "Situation: When there are several pens, and you want to know which one is blue.",
    ],
    example_sentences: [
      { japanese: "どのペンが青いですか。", english: "Which pen is blue?" },
    ],
  },
  {
    word: "ここ",
    furigana: "ここ",
    english: ["here"],
    info: [
      "Use ここ to indicate a place close to you, the speaker.",
      "Situation: Walking into a new room while giving a tour.",
    ],
    example_sentences: [
      { japanese: "ここはオフィスです。", english: "This is the office." },
    ],
  },
  {
    word: "そこ",
    furigana: "そこ",
    english: ["there"],
    info: [
      "Use そこ to indicate a place close to the listener.",
      "Situation: When the office is near the listener.",
    ],
    example_sentences: [
      { japanese: "そこはオフィスです。", english: "That's an office." },
    ],
  },
  {
    word: "あそこ",
    furigana: "あそこ",
    english: ["over there"],
    info: [
      "Use あそこ to indicate a place far from both you and the listener.",
      "Situation: When the office is far from both you and the listener.",
    ],
    example_sentences: [
      {
        japanese: "あそこはオフィスです。",
        english: "That (over there) is the office.",
      },
    ],
  },
  {
    word: "どこ",
    furigana: "どこ",
    english: ["where"],
    info: [
      "Use どこ to ask about the location of a place.",
      "Situation: When you want to know the location of the office.",
    ],
    example_sentences: [
      {
        japanese: "オフィスはどこですか。",
        english: "Where is your office?",
      },
    ],
    extra: "https://www.youtube.com/shorts/xyC8k7WeXHs?feature=share",
  },
  {
    word: "こちら",
    furigana: "こちら",
    english: ["this way/person"],
    info: [
      "Use こちら for polite introductions or indicating direction close to you.",
      "Situation: When introducing Mr. Tanaka who is near you.",
    ],
    example_sentences: [
      { japanese: "こちらは田中さんです。", english: "This is Tanaka-san." },
    ],
  },
  {
    word: "そちら",
    furigana: "そちら",
    english: ["that way/person"],
    info: [
      "Use そちら for polite introductions or indicating direction close to the listener.",
      "Situation: When asking about Mr. Yamada who is near the listener.",
    ],
    example_sentences: [
      {
        japanese: "そちらは山田さんですか。",
        english: "Is that Yamada-san?",
      },
    ],
  },
  {
    word: "あちら",
    furigana: "あちら",
    english: ["that way/person (over there)"],
    info: [
      "Use あちら for polite introductions or indicating direction far from both the speaker and the listener.",
      "Situation: When referring to someone or something far from both you and the listener.",
    ],
    example_sentences: [
      {
        japanese: "あちらは部長です。",
        english: "That's the department head (over there).",
      },
    ],
  },
  {
    word: "どちら",
    furigana: "どちら",
    english: ["which way/person"],
    info: [
      "Use どちら for polite questions about people or directions.",
      "Situation: When asking politely about someone's identity or direction.",
    ],
    example_sentences: [
      { japanese: "どちら様ですか。", english: "Who is this?" },
    ],
  },
  {
    word: "誰",
    furigana: "だれ",
    english: ["who"],
    example_sentences: [
      {
        japanese: "あの学生は誰ですか。",
        english: "Who is that student (over there)?",
      },
    ],
    extra: "https://www.youtube.com/shorts/MqgSCiOzOO0?feature=share",
  },
]

export default vocabItems
