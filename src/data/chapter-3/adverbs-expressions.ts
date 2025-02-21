import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "あまり",
    furigana: "あまり",
    english: ["not very", "not much"],
    info: [
      'Always used with a negative verb (e.g. あまりわかりません。-> lit. "I don\'t know not much" instead of "I don\'t know much.")',
      "Indicates that something doesn't happen or exist to a large degree",
    ],
    example_sentences: [
      {
        japanese: "あまり日本語が話せません。",
        english: "I can't speak much Japanese.",
      },
      {
        japanese: "その映画はあまり面白くない。",
        english: "That movie is not very interesting.",
      },
    ],
  },
  {
    word: "全然",
    furigana: "全然[ぜんぜん]",
    english: ["not at all", "absolutely not"],
    info: [
      "Typically used with a negative verb, just like あまり",
      "Very strong negation",
      "In casual speech, it might be used with positive verbs and adjectives to mean 'totally'",
    ],
    example_sentences: [
      { japanese: "全然わかりません。", english: "I have no idea." },
      { japanese: "全然大丈夫です。", english: "It's totally fine." },
    ],
  },
  {
    word: "たいてい",
    furigana: "たいてい",
    english: ["usually", "mostly", "generally"],
    info: [
      "Used to describe habitual actions or general states",
      "Can be used at the beginning or in the middle of a sentence",
    ],
    example_sentences: [
      {
        japanese: "たいてい7時に起きます。",
        english: "I usually wake up at 7 o'clock.",
      },
      {
        japanese: "週末はたいてい家にいます。",
        english: "I usually stay at home on weekends.",
      },
    ],
  },
  {
    word: "ちょっと",
    furigana: "ちょっと",
    english: ["a little", "somewhat", "just a moment"],
    info: [
      "Very versatile word with multiple uses",
      "Can soften requests or refusals",
      "Can mean 'a little difficult' or 'not very good' when used with negative nuance",
      'It\'s very unsocial to refuse invidations by just saying "no" in Japan. Instead, you should say "ちょっと..." to soften the refusal. -> "Today\'s a bit..." You don\'t need finish the sentence, just leave it at "ちょっと...".',
    ],
    example_sentences: [
      {
        japanese: "はい、ちょっとだけください。",
        english: "Yes, just a little please.",
      },
      {
        japanese: "あ、今日はちょっと...",
        english: "Ah, today is a bit...",
      },
      {
        japanese: "すみません、ちょっといいですか。",
        english:
          "Excuse me, can I talk to you for a moment? (implying a short moment or period of time to talk)",
      },
      {
        japanese: "ちょっと待ってください。",
        english: "Please wait a minute.",
      },
    ],
  },
  {
    word: "大丈夫",
    furigana: "大丈夫[だいじょうぶ]",
    english: ["okay", "fine", "all right", "safe"],
    info: [
      "Can be used as a question to ask if something is okay",
      "Also used to reassure someone that everything is fine",
      "Is often used as a polite refusal",
      "Can be used as an adjective or adverb",
    ],
    example_sentences: [
      { japanese: "大丈夫ですか。", english: "Are you okay?" },
      { japanese: "はい、大丈夫です。", english: "Yes, I'm alright." },
    ],
  },
  {
    word: "時々",
    furigana: "時々[ときどき]",
    english: ["sometimes", "occasionally"],
    info: [
      "Indicates that an action occurs occasionally but not regularly",
      "Can be used at the beginning or in the middle of a sentence",
    ],
    example_sentences: [
      {
        japanese: "時々映画を見に行きます。",
        english: "I sometimes go to the movies.",
      },
    ],
  },
  {
    word: "よく",
    furigana: "よく",
    english: ["often", "frequently", "much", "well"],
    info: [
      "Used to describe actions that occur frequently",
      "Can also mean 'well' when used to describe how something is done",
      "Often used at the beginning of a sentence",
    ],
    example_sentences: [
      {
        japanese: "よく図書館で勉強します。",
        english: "I often study at the library.",
      },
    ],
  },
  {
    word: "そうですね",
    furigana: "そうですね",
    english: ["That's right", "Let me see", "I agree"],
    info: [
      "Used to show agreement or to acknowledge what someone has said",
      "Can be softened to そうですねぇ for a more thoughtful tone",
      "Very common in conversation",
    ],
    example_sentences: [
      {
        japanese: "A: 日本語は難しいですね。 B: そうですね。",
        english: "A: Japanese is difficult. B: Yes, it is.",
      },
    ],
  },
  {
    word: "どうですか",
    furigana: "どうですか",
    english: ["How about...", "How is...", "What do you think?"],
    info: [
      "Used to ask for an opinion or impression",
      "Can be used about objects, situations, or experiences",
      "Often used in sales or when offering something",
    ],
    example_sentences: [
      {
        japanese: "この料理はどうですか。",
        english: "How about this dish?",
      },
    ],
  },
  {
    word: "ええ",
    furigana: "ええ",
    english: ["Yes", "Yeah"],
    info: [
      "A casual way to say 'yes' or to show agreement",
      "Often used in conversation, especially by women",
      "Can be elongated (ええぇ) for emphasis or to show hesitation",
    ],
    example_sentences: [
      {
        japanese: "A: 映画を見に行きませんか。 B: ええ、行きましょう。",
        english: "A: Shall we go see a movie? B: Yes, let's go.",
      },
      { japanese: "ええ、そうですね。", english: "Yes, that's right." },
    ],
  },
]

export default vocabItems
