import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "危ない",
    furigana: "危[あぶ]ない",
    english: ["dangerous"],
  },
  {
    word: "うらやましい",
    furigana: "うらやましい",
    english: ["envious"],
  },
  {
    word: "少ない",
    furigana: "少[すく]ない",
    english: ["a little", "a few"],
    info: [
      "Opposite: 多い",
      "Related: 少し",
      "Usage notes:",
      "❌多い人 ⭕️多くの人 ⭕️人が多い",
      "❌少ない人 ⭕️人が少ない",
    ],
  },
  {
    word: "都合が悪い",
    furigana: "都合[つごう]が 悪[わる]い",
    english: ["inconvenient", "to have a scheduling conflict"],
  },
  {
    word: "強い",
    furigana: "強[つよ]い",
    english: ["strong"],
    info: ["Opposite: 弱い", "Related: 勉強 - makes you strong and powerful!"],
  },
  {
    word: "最悪",
    furigana: "最悪[さいあく]",
    english: ["the worst"],
    example_sentences: [
      {
        japanese: "最悪なパターン",
        english: "Worst pattern/scenario",
      },
    ],
  },
  {
    word: "ずいぶん",
    furigana: "ずいぶん",
    english: ["very"],
    info: [
      "Implies something exceeds expectations or normal standards",
      "Often carries a nuance of surprise or being impressed",
      "Can have either positive or negative connotations depending on context",
      "More subjective and emotional than とても",
      "Often used when there's a notable change or difference from a previous state",
    ],
    example_sentences: [
      {
        japanese: "ずいぶん痩せましたね。",
        english:
          "You've lost quite a lot of weight! (implying more than expected)",
      },
      {
        japanese: "最近、ずいぶん寒くなってきた。",
        english:
          "It's gotten considerably colder lately. (noting a significant change)",
      },
    ],
  },
  {
    word: "例えば",
    furigana: "例[たと]えば",
    english: ["for example"],
  },
  {
    word: "～に比べて",
    furigana: "に 比[くら]べて",
    english: ["compared with..."],
  },
  {
    word: "～によると",
    furigana: "によると",
    english: ["according to..."],
  },
  {
    word: "前",
    furigana: "前[まえ]",
    english: ["before..."],
  },
  {
    word: "やっぱり",
    furigana: "やっぱり",
    english: ["after all"],
    info: ["Formal version: やはり"],
  },
  {
    word: "～かな（あ）",
    furigana: "かな（あ）",
    english: ["I wonder... (casual)"],
    info: ["Casual expression used for wondering or uncertainty"],
  },
  {
    word: "そうか",
    furigana: "そうか",
    english: ["I see. (casual)"],
    info: ["Casual expression of understanding"],
  },
  {
    word: "おめでとうございます",
    furigana: "おめでとうございます",
    english: ["Congratulations!"],
    info: ["Polite congratulatory expression"],
  },
]

export default vocabItems
