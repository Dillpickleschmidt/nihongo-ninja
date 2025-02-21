import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "落ちる",
    furigana: "落[お]ちる",
    english: ["(something) falls", "(something) drops"],
    info: ["Intransitive pair of 落とす"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "片付ける",
    furigana: "片付[かたづ]ける",
    english: ["to tidy up"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "考える",
    furigana: "考[かんが]える",
    english: ["to think (about)", "to consider"],
    extra: "https://www.youtube.com/shorts/FJQvqStv9bM?feature=share",
  },
  {
    word: "消える",
    furigana: "消[き]える",
    english: [
      "(something) goes off",
      "(something) disappears",
      "(a light) goes out",
    ],
    info: ["Intransitive verb (v.i.)", "Transitive pair: 消す(けす)"],
    example_sentences: [
      {
        japanese:
          "このコンピューター、消しても消えない〜！！困ったなあ。壊れちゃったのかな。",
        english:
          "This computer won't turn off even when I try to shut it down! What a problem. I wonder if it's broken.",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "壊れる",
    furigana: "壊[こわ]れる",
    english: [
      "(something) breaks",
      "(something) is broken",
      "to become broken",
    ],
    info: ["Intransitive pair of 壊す"],
    particles: [
      {
        particle: "が",
      },
    ],
    extra: "https://www.youtube.com/shorts/ckNa3IG0DkU?feature=share",
  },
  {
    word: "汚れる",
    furigana: "汚[よご]れる",
    english: ["to become dirty"],
    info: ["Intransitive pair of 汚す"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "今すぐ",
    furigana: "今[いま]すぐ",
    english: ["right away"],
    info: [
      "Levels of immediacy:",
      "今すぐ (right away) -> すぐ(に) (very soon) -> もうすぐ (shortly)",
    ],
  },
  {
    word: "〜までに",
    furigana: "〜までに",
    english: ["by (time/date)"],
    info: [
      "Different from まで (until):",
      "月曜日までに - by Monday (deadline/point in time)",
      "月曜日まで - until Monday (continuation)",
    ],
  },
  {
    word: "本当に",
    furigana: "本当[ほんとう]に",
    english: ["really"],
    example_sentences: [
      {
        japanese: "本当？「本当に」はもう習ったと思っていたのですが",
        english: 'Really? I thought we already learned "really"',
      },
    ],
  },
  {
    word: "まず",
    furigana: "まず",
    english: ["first of all"],
    info: ["Same meaning as 最初に"],
  },
  {
    word: "おかげで",
    furigana: "おかげで",
    english: ["thanks to..."],
    particles: [
      {
        particle: "の",
      },
    ],
  },
  {
    word: "どうしよう",
    furigana: "どうしよう",
    english: ["What should I/we do?"],
  },
  {
    word: "〜（ん）だろう",
    furigana: "〜（ん）だろう",
    english: ["short form of 〜（ん）でしょう"],
  },
  {
    word: "お先に失礼します",
    furigana: "お先[さき]に失礼[しつれい]します",
    english: ["See you.", "Excuse me for leaving before you"],
    info: [
      "Used when leaving work/school before others",
      'Literally: "I\'m rude by leaving first"',
    ],
  },
  {
    word: "お疲れ様（でした）",
    furigana: "お疲[つか]れ様[さま]（でした）",
    english: ["Good work", "You must be tired after working so hard."],
    info: ["Used as greeting between friends and coworkers after work/tasks"],
  },
]

export default vocabItems
