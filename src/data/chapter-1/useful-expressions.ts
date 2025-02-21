import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "わかりましたか。",
    furigana: "わかりましたか",
    english: ["Do you understand?"],
    info: [
      "Use this phrase to confirm if someone understands what you have explained.",
      "It is often used by teachers or in any instructional context.",
      "The particle 'か' at the end of the sentence turns it into a question (more on this later).",
    ],
  },
  {
    word: "わかりました。",
    furigana: "わかりました",
    english: ["I understand.", "I understood."],
    info: [
      "This phrase is used to confirm that you have understood something.",
      "It can also mean that you have understood a past situation, depending on the context.",
    ],
  },
  {
    word: "わかりません。",
    furigana: "わかりません",
    english: ["I don't understand.", "I don't know."],
    info: [
      "Use this phrase to indicate that you do not know/understand something.",
    ],
  },
  {
    word: "ゆっくりいってください。",
    furigana: "ゆっくりいってください",
    english: ["Please say it slowly."],
    info: [
      "Use this phrase to ask someone to speak more slowly.",
      "Helpful in situations where you are trying to catch every word.",
    ],
  },
  {
    word: "もういちどいってください。",
    furigana: "もういちどいってください",
    english: ["Please say it again."],
    info: [
      "Use this phrase to ask someone to repeat what they said.",
      "Very useful in conversation practice or when you missed part of what was said.",
    ],
  },
  {
    word: "ちょっとまってください。",
    furigana: "ちょっとまってください",
    english: ["Please wait for a while."],
    info: [
      "Use this phrase to ask someone to wait.",
      "'ちょっと' means 'a little' and 'まってください' means 'please wait'.",
      "Common in everyday conversation when you need a moment.",
    ],
  },
  {
    word: "きいてください。",
    furigana: "きいてください",
    english: ["Please listen.", "Please ask."],
    info: [
      "Depending on the context, 'きいてください' can mean 'please listen' or 'please ask'.",
      "Common in classroom settings or when giving instructions.",
    ],
  },
  {
    word: "１０ぺージをみてください。",
    furigana: "じゅっぺーじをみてください",
    english: ["Please look at page 10."],
    info: [
      "This phrase is used to direct someone to look at a specific page in a book.",
      "'ぺージ' (pēji)—means 'page' and 'みてください' means 'please look'.",
    ],
  },
  {
    word: "はじめまして。",
    furigana: "はじめまして",
    english: ["How do you do.", "Nice to meet you."],
    info: [
      "A standard greeting when meeting someone for the first time.",
      "It is often followed by introducing oneself.",
    ],
  },
  {
    word: "[your name]です。",
    furigana: "(your_name)です",
    english: ["I am [your name]."],
    info: [
      "This is the standard way to introduce yourself by stating your name.",
      "'です' is a polite way to end a sentence.",
    ],
  },
  {
    word: "しゅっしんは[your hometown]です。",
    furigana: "しゅっしんは(your_hometown)です",
    english: ["I came from [your hometown]."],
    info: [
      "Use this phrase to tell someone where you are from.",
      "'しゅっしん' means 'hometown' or 'place of origin'.",
    ],
  },
  {
    word: "どうぞよろしくおねがいします。",
    furigana: "どうぞよろしくおねがいします",
    english: ["Very pleased to meet you."],
    info: [
      "A polite phrase used at the end of an introduction.",
      "It expresses a desire to have a good relationship or to be in good terms.",
    ],
  },
  {
    word: "おなまえは？",
    furigana: "おなまえは",
    english: ["What is your name?"],
    info: [
      "Use this phrase to ask someone their name.",
      "'お' is a polite prefix, 'なまえ' means 'name', and 'は' is a topic marker (more on this later).",
    ],
  },
  {
    word: "あのう、すみません。",
    furigana: "あのう、すみません",
    english: ["Ummm, excuse me"],
    info: [
      "Use this phrase to politely get someone's attention.",
      "'あのう' is a filler word similar to 'um' or 'uh' in English.",
    ],
  },
  {
    word: "しつもんがあります。",
    furigana: "しつもんがあります",
    english: ["I have a question."],
    info: [
      "Use this phrase to indicate that you have a question.",
      "'しつもん' means 'question', and 'あります' means 'there is' or 'I have'.",
    ],
  },
  {
    word: "もういちどおねがいします。",
    furigana: "もういちどおねがいします",
    english: ["One more time, please."],
    info: [
      "A polite way to ask someone to repeat something.",
      "'もういちど' means 'once more' and 'おねがいします' is a polite request.",
    ],
  },
  {
    word: "もうちょっとゆっくりおねがいします。",
    furigana: "もうちょっとゆっくりおねがいします",
    english: ["A little slower, please."],
    info: [
      "Use this phrase to ask someone to speak a little slower.",
      "'もうちょっと' means 'a little more', 'ゆっくり' means 'slowly', and 'おねがいします' is a polite request.",
    ],
  },
  {
    word: "どうもありがとうございます。",
    furigana: "どうもありがとうございます",
    english: ["Thank you very much."],
    info: [
      "A very polite and formal way to say thank you.",
      "'どうも' adds emphasis, making it stronger than just 'ありがとうございます'.",
    ],
  },
  {
    word: "しつれいします。",
    furigana: "しつれいします",
    english: ["Excuse me", "Please excuse my interrupting you"],
    info: [
      "Use this phrase to excuse yourself or to politely interrupt someone.",
      "'しつれい' means 'rudeness' and 'します' means 'to do', so it literally means 'I am being rude'.",
    ],
  },
  {
    word: "かいてください。",
    furigana: "かいてください",
    english: ["Please write."],
    info: [
      "Use this phrase to ask someone to write something.",
      "'かいて' is the te-form of 'かく' (to write) and 'ください' is a polite request.",
    ],
  },
  {
    word: "すみませんが、えいごでいいですか。",
    furigana: "すみませんが、えいごでいいですか",
    english: ["Excuse me but is English okay?"],
    info: [
      "Use this phrase to ask if it is okay to speak in English.",
      "'すみませんが' means 'excuse me but', 'えいご' means 'English', and 'でいいですか' means 'is it okay?'.",
    ],
  },
]

export default vocabItems
