import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "欲しい",
    furigana: "欲[ほ]しい",
    english: ["to want"],
    info: [
      "「〜てほしい」はひらがなで書く (write ～てほしい in hiragana)",
      '欲しい means "to want" or "to desire" (for objects or things)',
      "It's an i-adjective in Japanese",
      "Used to express a desire for something tangible, like objects or possessions",
      "欲しい is used for objects or things, たい is used for actions or verbs (wanting to do something)",
      "Like 好き, you cannot directly state what others want, you can only infer or guess what they desire, or quote them saying so",
      "弟は新しいゲームを欲しいです。- This is not correct.",
      "弟は新しいゲームを欲しそうです。- This is fine.",
      "弟は新しいゲームを欲しがっています。- This is also fine.",
      "弟は新しいゲームを欲しいと思います。- This is also fine.",
      "弟は新しいゲームを欲しいと言いました。- This is also fine.",
    ],
    example_sentences: [
      {
        japanese: "新しい携帯電話が欲しいです。",
        english: "I want a new cell phone.",
      },
    ],
    category: "i-adj",
    particles: [
      {
        label: "thing",
        particle: "が",
      },
    ],
  },
  {
    word: "おしゃれ",
    furigana: "おしゃれ",
    english: ["fashionable", "stylish"],
    info: ["In casual speech, it's sometimes shortened to just シャレ"],
    example_sentences: [
      {
        japanese: "東京にはおしゃれな場所がたくさんあります。",
        english: "",
      },
    ],
    category: "na-adj",
  },
  {
    word: "けち",
    furigana: "けち",
    english: ["stingy", "cheap"],
    category: "na-adj",
  },
  {
    word: "送る",
    furigana: "送[おく]る",
    english: ["to send"],
    info: ["おくる can be written in either hiragana or kanji"],
    category: "ichidan-v",
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "thing",
        particle: "を",
      },
    ],
  },
  {
    word: "似合う",
    furigana: "似合[にあ]う",
    english: ["to look good (on somebody)", "to suit"],
    info: [
      "Structure: 人(に)物(が)似合う - The thing (が) suits the person (に)",
    ],
    category: "ichidan-v",
    particles: [
      {
        label: "thing",
        particle: "が",
      },
    ],
  },
  {
    word: "あきらめる",
    furigana: "あきらめる",
    english: ["to give up"],
    category: "godan-v",
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "あげる",
    furigana: "あげる",
    english: ["to give (to others)"],
    info: [
      "Used for happy occasions like giving presents",
      "Not used for homework (× 宿題をあげる)",
    ],
    example_sentences: [
      {
        japanese: "友達にプレゼントをあげました。",
        english: "I gave a present to my friend.",
      },
    ],
    category: "godan-v",
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "thing",
        particle: "を",
      },
    ],
  },
  {
    word: "くれる",
    furigana: "くれる",
    english: ["to give (me)"],
    info: [
      "Used for happy occasions like giving presents",
      "Only used for physical objects (物だけ)",
    ],
    category: "godan-v",
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "thing",
        particle: "を",
      },
    ],
  },
  {
    word: "できる",
    furigana: "できる",
    english: ["to come into existence", "to be made"],
    info: ["1. Potential form of する", "2. To come into existence/be made"],
    example_sentences: [
      {
        japanese: "友達ができる",
        english: "to make friends",
      },
      {
        japanese: "赤ちゃんができる",
        english: "to conceive a baby",
      },
    ],
    category: "godan-v",
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "相談する",
    furigana: "相談[そうだん]する",
    english: ["to consult"],
    mnemonics: [
      'When you consult with someone, you ask them questions. When you learn something new, you say "そうか". That sounds a bit like そうだん, right?',
    ],
    category: "irr-v",
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "注意する",
    furigana: "注意[ちゅうい]する",
    english: ["to give warning", "to watch out"],
    mnemonics: ['Han Solo says, "Chewie, watch out!"'],
    example_sentences: [
      {
        japanese: "先生は学生にうるさいと注意しました。",
        english: "The teacher warned the students that they were being noisy.",
      },
      {
        japanese: "道路で注意してください。",
        english: "Please be careful on the road.",
      },
      {
        japanese: "熊に注意してください。",
        english: "Be careful of bears.",
      },
    ],
    category: "irr-v",
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "プロポーズする",
    furigana: "プロポーズする",
    english: ["to propose marriage"],
    category: "irr-v",
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
]

export default vocabItems
