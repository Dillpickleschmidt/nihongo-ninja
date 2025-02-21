import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "汚い",
    furigana: "汚[きたな]い",
    english: ["dirty"],
    mnemonics: [
      "汚 (kitana) has the water radical (氵), implying unclean water",
    ],
    example_sentences: [
      {
        japanese: "この服は汚いので、洗濯しましょう。",
        english: "These clothes are dirty, so let's wash them.",
      },
    ],
  },
  {
    word: "起こす",
    furigana: "起[お]こす",
    english: ["to wake (someone) up"],
    mnemonics: [
      "起 (o) means 'wake up', こす (kosu) sounds like 'coax' - coaxing someone to wake up",
    ],
    info: [
      "Transitive verb (V.T.)",
      "Compare with intransitive verb (V.I.) 起きる (to wake up)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "朝、弟を起こします。",
        english: "I wake up my younger brother in the morning.",
      },
    ],
  },
  {
    word: "おごる",
    furigana: "おごる",
    english: ["to treat (someone) to a meal"],
    mnemonics: [
      "Sounds like 'o-go-ru', which could remind you of 'go out' for a meal",
    ],
    info: [
      "Common mistake: ❌️晩ごはんを買ってあげる (Don't use 買う when treating someone)",
    ],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "meal",
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "友達に昼ごはんをおごりました。",
        english: "I treated my friend to lunch.",
      },
    ],
  },
  {
    word: "笑う",
    furigana: "笑[わら]う",
    english: ["to laugh"],
    mnemonics: ["笑 (wara) looks like a person laughing with their mouth open"],
    info: [
      "Different types of laughter:",
      "アハハと笑う (to laugh 'ahaha')",
      "ガハハと笑う (to burst into laughter)",
      "ウフフと笑う (to giggle)",
      "エヘヘと笑う (embarrassed grin)",
      "ニコニコ笑う (to smile)",
      "ニコッと笑う (to grin)",
      "クスッと笑う (to chuckle)",
    ],
    example_sentences: [
      {
        japanese: "面白い話を聞いて、みんなが笑いました。",
        english: "Everyone laughed after hearing the funny story.",
      },
    ],
  },
  {
    word: "落ち込む",
    furigana: "落[お]ち 込[こ]む",
    english: ["to get depressed"],
    mnemonics: [
      "落ち (ochi) means 'fall', 込む (komu) means 'go into' - falling into a low mood",
    ],
    info: [
      "落ち込む means 'to GET depressed'",
      "落ち込んでいる means 'to be depressed' (ongoing state)",
    ],
    example_sentences: [
      {
        japanese: "試験に失敗して、落ち込んでいます。",
        english: "I'm feeling depressed because I failed the exam.",
      },
    ],
  },
  {
    word: "困る",
    furigana: "困[こま]る",
    english: ["to have difficulty", "to have troubles"],
    mnemonics: [
      "困 (koma) looks like a box (囗) with a tree (木) inside - being trapped in a difficult situation",
    ],
    example_sentences: [
      {
        japanese: "お金がなくて困っています。",
        english: "I'm having difficulty because I don't have money.",
      },
    ],
  },
  {
    word: "出す",
    furigana: "出[だ]す",
    english: ["to take (something) out", "to hand in (something)"],
    mnemonics: [
      "出 (da) looks like a mountain with something coming out of it",
    ],
    info: [
      "Common uses: 宿題を出す (to hand in homework), ごみを出す (to take out the garbage)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "かばんから本を出しました。",
        english: "I took out a book from my bag.",
      },
    ],
  },
  {
    word: "直す",
    furigana: "直[なお]す",
    english: ["to correct", "to fix"],
    mnemonics: [
      "直 (nao) means 'straight/direct' - making something right again",
    ],
    info: [
      "Common uses: 宿題を直す (to correct homework), 家具を直す (to fix furniture)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "先生が宿題の間違いを直してくれました。",
        english: "The teacher corrected the mistakes in my homework.",
      },
    ],
  },
  {
    word: "見つかる",
    furigana: "見[み]つかる",
    english: ["to be found"],
    mnemonics: [
      "見 (mi) means 'see', つかる (tsukaru) sounds like 'tsukamu' (grasp) - seeing and grasping something",
    ],
    info: [
      "Intransitive verb (V.I.)",
      "Related: 見つける (V.T., to find, item-focused), 探す (V.T., to search, action-focused)",
    ],
    particles: [
      {
        particle: "が",
      },
    ],
    example_sentences: [
      {
        japanese: "なくした財布が見つかりました。",
        english: "The wallet I lost was found.",
      },
      {
        japanese:
          "私はずっと仕事を探していた。そして、やっと仕事が見つかった！",
        english:
          "I had been looking for a job for a long time. Finally, I found one!",
      },
    ],
  },
  {
    word: "訳す",
    furigana: "訳[やく]す",
    english: ["to translate"],
    mnemonics: [
      "訳 (yaku) means 'translate/meaning', す (su) is a verb ending",
    ],
    info: [
      "Kanji breakdown: 言 (say) + 尺 (measure) - measuring what is said in another language",
    ],
    particles: [
      {
        label: "source",
        particle: "を",
      },
      {
        label: "target",
        particle: "に",
      },
    ],
    example_sentences: [
      {
        japanese: "この文章を日本語から英語に訳しました。",
        english: "I translated this text from Japanese to English.",
      },
    ],
  },
  {
    word: "貸す",
    furigana: "貸[か]す",
    english: ["to lend", "to loan"],
    mnemonics: [
      "貸 (ka) has the money radical (貝), implying lending money or valuables",
    ],
    info: ["Opposite: 借りる (to borrow)"],
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
        japanese: "友達に本を貸しました。",
        english: "I lent a book to my friend.",
      },
    ],
  },
  {
    word: "連れていく",
    furigana: "連[つ]れていく",
    english: ["to take (someone) to (a place)"],
    mnemonics: ["連 (tsu) means 'take along', いく (iku) means 'go'"],
    info: ["Opposite: 連れてくる (to bring someone)"],
    particles: [
      {
        label: "person",
        particle: "を",
      },
      {
        label: "place",
        particle: "に",
      },
    ],
    example_sentences: [
      {
        japanese: "子供を動物園に連れていきます。",
        english: "I'm taking the children to the zoo.",
      },
    ],
  },
  {
    word: "道に迷う",
    furigana: "道[みち]に 迷[まよ]う",
    english: ["to become lost", "to lose one's way"],
    mnemonics: ["道 (michi) means 'road', 迷う (mayou) means 'to be lost'"],
    example_sentences: [
      {
        japanese: "新しい町で道に迷いました。",
        english: "I got lost in the new town.",
      },
    ],
  },
  {
    word: "迎えに行く",
    furigana: "迎[むか]えに 行[い]く",
    english: ["to go pick up"],
    mnemonics: ["迎え (mukae) means 'to meet/greet', 行く (iku) means 'to go'"],
    info: ["Opposite: 迎えに来る (to come pick up)"],
    particles: [
      {
        label: "place",
        particle: "まで",
      },
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
        japanese: "駅まで友達を迎えに行きます。",
        english: "I'm going to the station to pick up my friend.",
      },
      {
        japanese: "子どもを学校まで車で迎えに行く",
        english: "to go pick up the child at school by car",
      },
    ],
  },
]

export default vocabItems
