import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "うれしい",
    furigana: "うれしい",
    english: ["glad"],
    info: [
      "Expresses temporary, reactional emotion",
      "Used for immediate happiness in response to events",
    ],
    example_sentences: [
      {
        japanese: "プレゼントをもらってうれしい",
        english: "I'm happy to receive this present",
      },
    ],
    category: "i-adjective",
  },
  {
    word: "悲しい",
    furigana: "悲[かな]しい",
    english: ["sad"],
    mnemonics: ["Notice 心 (heart) radical at the bottom"],
    category: "i-adjective",
  },
  {
    word: "厳しい",
    furigana: "厳[きび]しい",
    english: ["strict"],
    info: ["Opposite of 優しい (やさしい -> kind, gentle)"],
    category: "i-adjective",
  },
  {
    word: "気分が悪い",
    furigana: "気分[きぶん]が 悪[わる]い",
    english: ["to feel sick"],
    category: "i-adjective",
  },
  {
    word: "辛い",
    furigana: "辛[から]い",
    english: ["hot and spicy", "salty"],
    category: "i-adjective",
  },
  {
    word: "すごい",
    furigana: "すごい",
    english: ["incredible", "awesome"],
    category: "i-adjective",
  },
  {
    word: "近い",
    furigana: "近[ちか]い",
    english: ["close", "near"],
    info: [
      '近く can be used as a noun meaning "vicinity" or "neighborhood"',
      "近い uses に particle: AはBに近い",
      "近く uses の particle: Aの近く (in the vicinity of A)",
    ],
    example_sentences: [
      {
        japanese: "私の家は駅に近いです。",
        english: "My house is close to the station.",
      },
      {
        japanese: "駅の近くに公園があります。",
        english: "There is a park near the station.",
      },
    ],
    category: "i-adjective",
  },
  {
    word: "いろいろ",
    furigana: "いろいろ",
    english: ["various", "different kinds of"],
    category: "na-adjective",
  },
  {
    word: "幸せ",
    furigana: "幸[しあわ]せ",
    english: ["happy (lasting happiness)"],
    info: ["Used for long lasting happiness (as opposed to うれしい)"],
    category: "na-adjective",
  },
  {
    word: "だめ",
    furigana: "だめ",
    english: ["no good"],
    category: "na-adjective",
  },
  {
    word: "直す",
    furigana: "直す[なおす]",
    english: ["to fix", "to repair", "to correct"],
    info: [
      "It's commonly used for repairing objects, correcting mistakes, or fixing problems.",
      "You might see this in a Japanese class telling you to correct your mistakes.",
    ],
    example_sentences: [
      {
        japanese: "答えを見て、赤ペンで直して次の日のクラスで出す。",
        english:
          "Look at the answers, correct them with a red pen, and turn them in for the next day's class.",
      },
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    category: "ichidan-v",
  },
  {
    word: "編む",
    furigana: "編[あ]む",
    english: ["to knit"],
    mnemonics: ["Contains 糸 (thread)"],
    particles: [
      {
        particle: "を",
      },
    ],
    category: "ichidan-v",
  },
  {
    word: "頑張る",
    furigana: "頑張[がんば]る",
    english: ["to do one's best", "to try hard", "to try one's best"],
    category: "ichidan-v",
  },
  {
    word: "泣く",
    furigana: "泣[な]く",
    english: ["to cry"],
    mnemonics: ["Contains 氵 (water drops)"],
    category: "ichidan-v",
  },
  {
    word: "磨く",
    furigana: "磨[みが]く",
    english: ["to brush (teeth)", "to polish"],
    particles: [
      {
        particle: "を",
      },
    ],
    category: "ichidan-v",
  },
  {
    word: "約束を守る",
    furigana: "約束[やくそく]を 守[まも]る",
    english: ["to keep a promise"],
    category: "ichidan-v",
  },
  {
    word: "感動する",
    furigana: "感動[かんどう]する",
    english: ["to be moved (emotionally)", "to be touched (emotionally)"],
    mnemonics: ["Notice 心 (heart) radical at the bottom"],
    info: [
      "Often used with the particle に",
      'Basic structure: [Source of emotion] に 感動する "[Subject] is moved by [source of emotion]"',
    ],
    example_sentences: [
      {
        japanese: "美しい景色に感動しました。",
        english: "I was moved by the beautiful scenery.",
      },
    ],
    particles: [
      {
        particle: "に",
      },
    ],
    category: "irr-v",
  },
]

export default vocabItems
