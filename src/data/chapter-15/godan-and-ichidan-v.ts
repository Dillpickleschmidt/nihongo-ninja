import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "売る",
    furigana: "売[う]る",
    english: ["to sell"],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "下ろす",
    furigana: "下[お]ろす",
    english: ["to withdraw (money)", "to unload"],
    info: ["Can also be used with 荷物を下ろす (to unload luggage)"],
    example_sentences: [
      {
        japanese: "お金を下ろす",
        english: "To withdraw money (literally, unloading money)",
      },
    ],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "描く",
    furigana: "描[えが]く",
    english: ["to draw", "to paint"],
    example_sentences: [
      {
        japanese: "彼女は絵を描くのが上手です。",
        english: "She is good at drawing pictures.",
      },
    ],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "探す",
    furigana: "探[さが]す",
    english: ["to look for"],
    info: [
      "Action focused",
      "Refers to the act of searching for something. It implies that the object or information you are looking for has not yet been found.",
      "見つける -> to find X item (item focused)",
      "見つける focuses on the result of the search, indicating that the object is known",
    ],
    example_sentences: [
      {
        japanese: "新しい仕事を探している",
        english: "I'm looking for a new job",
      },
    ],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "誘う",
    furigana: "誘[さそ]う",
    english: ["to invite"],
    info: ["Structure: 人をopportunityに誘う"],
    example_sentences: [
      {
        japanese: "大学で知り合った友達を家に誘う",
        english: "Invite a friend you met at university over to your house",
      },
    ],
    particles: [
      {
        label: "person",
        particle: "を",
      },
    ],
  },
  {
    word: "しゃべる",
    furigana: "しゃべる",
    english: ["to chat"],
    info: [
      "Another deceptive う verb that ends in eru! It's one of those few exception う verbs.",
      "It conjugates as しゃべります, しゃべって (NOT しゃべます)",
    ],
  },
  {
    word: "付き合う",
    furigana: "付[つ]き 合[あ]う",
    english: ["to date (someone)", "to keep company"],
    info: [
      "Structure: Aさんは/がBさんと付き合っている -> Aさん and Bさん are dating (refers to a committed relationship)",
      "デートする is used for individual dating events, whether or not the people involved are in a serious relationship",
    ],
    particles: [
      {
        label: "person",
        particle: "と",
      },
      {
        label: "purpose",
        particle: "に",
      },
    ],
  },
  {
    word: "着く",
    furigana: "着[つ]く",
    english: ["to arrive"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
    ],
  },
  {
    word: "保険に入る",
    furigana: "保険[ほけん]に 入[はい]る",
    english: ["to buy insurance", "to get insurance"],
    mnemonics: ["保 (ほ) means 'to protect' and 険 (けん) means 'danger'"],
    info: ["Used for getting insurance against thefts, accidents, etc."],
  },
  {
    word: "気をつける",
    furigana: "気[き]をつける",
    english: ["to be cautious", "to be careful"],
    info: ["Equivalent to 〜に注意する"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "調べる",
    furigana: "調[しら]べる",
    english: ["to look into (a matter)", "to examine"],
    example_sentences: [
      {
        japanese: "分からない言葉は辞書で調べます。",
        english: "I look up words I don't understand in the dictionary.",
      },
    ],
    particles: [
      {
        label: "matter",
        particle: "を",
      },
    ],
  },
  {
    word: "見える",
    furigana: "見[み]える",
    english: ["to be visible"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
]

export default vocabItems
