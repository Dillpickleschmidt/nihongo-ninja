import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "集める",
    furigana: "集[あつ]める",
    english: ["to collect"],
    mnemonics: ["集 (atsu) means 'gather', める (meru) is a verb ending"],
    info: ["Transitive verb (V.T.)", "Related: 集まる (V.I., to gather)"],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "切手を集めています。",
        english: "I'm collecting stamps.",
      },
      {
        japanese: "１０時に集まってください。",
        english: "Please gather at 10 o'clock.",
      },
      {
        japanese: "私は猫が大好きで、猫のグッズを集めています。",
        english: "I love cats and collect cat goods.",
      },
    ],
  },
  {
    word: "入れる",
    furigana: "入[い]れる",
    english: ["to put (something) in"],
    mnemonics: ["入 (i) means 'enter', れる (reru) is a verb ending"],
    info: ["Transitive verb (V.T.)", "Related: 入る (V.I., to enter, はいる)"],
    particles: [
      {
        label: "thing",
        particle: "を",
      },
      {
        label: "place",
        particle: "に",
      },
    ],
    example_sentences: [
      {
        japanese: "かばんに本を入れました。",
        english: "I put the book in my bag.",
      },
    ],
  },
  {
    word: "見せる",
    furigana: "見[み]せる",
    english: ["to show"],
    mnemonics: [
      "見 (mi) means 'see', せる (seru) is a causative ending - making someone see",
    ],
    info: ["Causative form of 見る (to see)"],
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
    example_sentences: [
      {
        japanese: "友達に新しい写真を見せました。",
        english: "I showed my new photos to my friend.",
      },
    ],
  },
  {
    word: "乗り遅れる",
    furigana: "乗[の]り 遅[おく]れる",
    english: ["to miss (a train, bus, etc.)"],
    mnemonics: [
      "乗り (nori) means 'to ride', 遅れる (okureru) means 'to be late'",
    ],
    info: ["Structure: 乗り (V-stem) + 遅れる"],
    particles: [
      {
        particle: "に",
      },
    ],
    example_sentences: [
      {
        japanese: "電車に乗り遅れて、学校に遅刻しました。",
        english: "I missed the train and was late for school.",
      },
    ],
  },
  {
    word: "アイロンをかける",
    furigana: "アイロンをかける",
    english: ["to iron (clothes)"],
    mnemonics: [
      "アイロン (airon) is from English 'iron', かける (kakeru) means 'to apply'",
    ],
    info: [
      "Similar expressions: 電話をかける (to make a phone call), 時間をかける (to spend time on)",
    ],
    particles: [
      {
        particle: "に",
      },
    ],
    example_sentences: [
      {
        japanese: "シャツにアイロンをかけました。",
        english: "I ironed the shirt.",
      },
    ],
  },
  {
    word: "朝寝坊する",
    furigana: "朝寝坊[あさねぼう]する",
    english: ["to oversleep"],
    mnemonics: ["朝 (asa) means 'morning', 寝坊 (nebou) means 'sleeping in'"],
    example_sentences: [
      {
        japanese: "今朝、朝寝坊して、遅刻しました。",
        english: "I overslept this morning and was late.",
      },
    ],
  },
  {
    word: "案内する",
    furigana: "案内[あんない]する",
    english: ["to show (someone) around"],
    mnemonics: ["案内 (annai) means 'guidance', する (suru) makes it a verb"],
    info: ["Usage: 人にPlaceを案内する (to show a place to someone)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "place",
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "友達に町を案内しました。",
        english: "I showed my friend around town.",
      },
    ],
  },
  {
    word: "説明する",
    furigana: "説明[せつめい]する",
    english: ["to explain"],
    mnemonics: ["Kanji breakdown: 説 (explain) + 明 (bright, clear)"],
    info: [
      "Common mistake: ❌️説明をあげる (to give explanation) - simply use 説明した",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "先生が問題を説明しました。",
        english: "The teacher explained the problem.",
      },
    ],
  },
  {
    word: "迎えに来る",
    furigana: "迎[むか]えに 来[く]る",
    english: ["to come pick up"],
    mnemonics: [
      "迎え (mukae) means 'to meet/greet', 来る (kuru) means 'to come'",
    ],
    info: ["Opposite of 迎えに行く (to go to pick up)"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
      {
        label: "person",
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "母が学校に私を迎えに来ました。",
        english: "My mother came to school to pick me up.",
      },
    ],
  },
]

export default vocabItems
