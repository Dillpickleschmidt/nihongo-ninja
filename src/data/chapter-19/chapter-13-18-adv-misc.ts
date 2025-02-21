import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "年上",
    furigana: "年[とし]上[うえ]",
    english: ["someone older"],
  },
  {
    word: "今年",
    furigana: "今[こ]年[とし]",
    english: ["this year"],
    extra: "https://www.youtube.com/shorts/h4QmHlCJJT4?feature=share",
  },
  {
    word: "～君",
    furigana: "～くん",
    english: ["Mr./Ms.... (casual)"],
    info: [
      "It's often attached to the names of boys or young men, typically by someone of senior status or age.",
    ],
    example_sentences: [
      {
        japanese: "毎日電車で通勤していますが、混んでいるので座れません。",
        english:
          "I commute to work by train every day, but it's so crowded I can't find a seat.",
      },
    ],
  },
  {
    word: "急に",
    furigana: "急[きゅう]に",
    english: ["suddenly"],
    info: [
      "It's used to describe actions or changes that happen unexpectedly or without warning.",
      'Often used with verbs like 変わる (kawaru, "to change"), 始まる (hajimaru, "to begin"), or 止む (yamu, "to stop").',
    ],
    example_sentences: [
      {
        japanese:
          "昨日、急に頭が痛くなって、早く帰らなければなりませんでした。",
        english:
          "Yesterday, I suddenly got a headache and had to go home early.",
      },
    ],
  },
  {
    word: "～個",
    furigana: "～ 個[こ]",
    english: ["generic counter for smaller items"],
    info: [
      "Used to count small, typically round or cube-shaped objects.",
      "Fruits (りんご3個 - ringo san-ko - 3 apples)",
      "Eggs (卵2個 - tamago ni-ko - 2 eggs)",
    ],
    example_sentences: [
      {
        japanese: "りんごを2個とみかんを3個買いました。",
        english: "I bought two apples and three oranges.",
      },
    ],
  },
  {
    word: "～冊",
    furigana: "～ 冊[さつ]",
    english: ["counter for bound volumes"],
    info: [
      "Used to count books, magazines, notebooks, and other bound printed materials.",
    ],
    example_sentences: [
      {
        japanese: "図書館で本を3冊借りました。",
        english: "I borrowed three books from the library.",
      },
    ],
  },
  {
    word: "～台",
    furigana: "～ 台[だい]",
    english: ["counter for equipment"],
    info: [
      "Used to count machines, vehicles, and large equipment.",
      "車 (kuruma - car)",
      "パソコン (pasokon - personal computer)",
      "テレビ (terebi - television)",
      "冷蔵庫 (reizouko - refrigerator)",
      "洗濯機 (sentakuki - washing machine)",
    ],
    example_sentences: [
      {
        japanese: "家族で車を2台持っています。",
        english: "My family has two cars.",
      },
    ],
  },
  {
    word: "～匹",
    furigana: "～ 匹[ひき]",
    english: ["counter for smaller animals"],
    info: [
      "Used to count small to medium-sized animals, particularly mammals and fish.",
      "It can be read as ひき (hiki), ぴき (piki), or びき (biki) depending on the number it follows.",
      "いぬ (dog)",
      "ねこ (cat)",
      "さかな (fish)",
      "うさぎ (rabbit)",
      "1匹 (いっぴき)",
      "2匹 (にひき)",
      "3匹 (さんびき)",
      "4匹 (よんひき)",
      "5匹 (ごひき)",
      "6匹 (ろっぴき)",
      "7匹 (ななひき)",
      "8匹 (はっぴき)",
      "9匹 (きゅうひき)",
      "10匹 (じゅっぴき)",
    ],
    example_sentences: [
      {
        japanese: "私の家では猫を2匹飼っています。",
        english: "I have two cats at home.",
      },
    ],
  },
  {
    word: "～本",
    furigana: "～ 本[ほん]",
    english: ["counter for long cylindrical objects"],
    info: [
      "Used to count long, cylindrical objects.",
      "Also used for abstract concepts like phone calls (でんわ1本 - one phone call) or movies (えいが3本 - three movies).",
      "Can be read as ほん (hon), ぼん (bon), or ぽん (pon) depending on the number it follows.",
      "鉛筆 (pencil)",
      "ペン (pen)",
      "傘 (umbrella)",
      "バナナ (banana)",
      "1本 (いっぽん)",
      "2本 (にほん)",
      "3本 (さんぼん)",
      "4本 (よんほん)",
      "5本 (ごほん)",
      "6本 (ろっぽん)",
      "7本 (ななほん)",
      "8本 (はっぽん)",
      "9本 (きゅうほん)",
      "10本 (じゅっぽん)",
    ],
    example_sentences: [
      {
        japanese: "鉛筆を2本買いました。",
        english: "I bought two pencils.",
      },
    ],
  },
  {
    word: "～目",
    furigana: "～ 目[め]",
    english: ["-th (counter suffix)"],
    info: ["Used to indicate ordinal numbers"],
    example_sentences: [
      {
        japanese: "二番目の信号を右に曲がってください。",
        english: "Turn right at the second traffic light.",
      },
    ],
  },
  {
    word: "一日中",
    furigana: "一日中[いちにちじゅう]",
    english: ["all day long"],
    info: ["Similar pattern: 一年中 (いちねんじゅう) - all year long"],
  },
  {
    word: "最近",
    furigana: "最近[さいきん]",
    english: ["recently"],
    mnemonics: [
      "最 means 'most' as seen in 最初 (さいしょ; the first time) and 最高 (さいこう; the best)",
    ],
  },
  {
    word: "今日中に",
    furigana: "今日中[きょうじゅう]に",
    english: ["by the end of today"],
    mnemonics: ["今日 (kyou) means 'today', 中 (juu) means 'during/within'"],
    info: [
      "～じゅう means 'all-', e.g., せかいじゅう (all around the world), いちにちじゅう (all day long)",
      "に makes the meaning of 'by'",
      "Similar expression: 今週中に出してください (Please submit it by the end of this week)",
    ],
    example_sentences: [
      {
        japanese: "この仕事を今日中に終わらせましょう。",
        english: "Let's finish this work by the end of today.",
      },
    ],
  },
  {
    word: "授業中に",
    furigana: "授業中[じゅぎょうちゅう]に",
    english: ["in class", "during class"],
    mnemonics: ["授業 (jugyou) means 'class', 中 (chuu) means 'during'"],
    info: [
      "～ちゅう means 'during'",
      "に makes the meaning of 'at one point of time during ~'",
      "Similar expressions: 運転中 (while driving), 勉強中 (while studying)",
    ],
    example_sentences: [
      {
        japanese: "授業中に携帯電話を使わないでください。",
        english: "Please don't use your mobile phone during class.",
      },
      {
        japanese: "仕事中にコンサートの予約をした。",
        english: "I made a concert reservation during work.",
      },
    ],
  },
  {
    word: "この間",
    furigana: "この 間[あいだ]",
    english: ["the other day"],
    mnemonics: ["この (kono) means 'this', 間 (aida) means 'interval/period'"],
    example_sentences: [
      {
        japanese: "この間、友達と映画を見に行きました。",
        english: "The other day, I went to see a movie with my friend.",
      },
    ],
  },
  {
    word: "実は",
    furigana: "実[じつ]は",
    english: ["actually", "in fact"],
    mnemonics: [
      "実 (jitsu) means 'truth/reality', は (wa) is a topic particle",
    ],
    example_sentences: [
      {
        japanese: "実は、私は日本に行ったことがあります。",
        english: "Actually, I have been to Japan before.",
      },
    ],
  },
  {
    word: "～以外",
    furigana: "～ 以外[いがい]",
    english: ["other than..."],
    mnemonics: ["以 (i) means 'by means of', 外 (gai) means 'outside'"],
    example_sentences: [
      {
        japanese: "田中さん以外は全員来ました。",
        english: "Everyone came except for Tanaka-san.",
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
    word: "お先に",
    furigana: "お先[さき]に",
    english: ["ahead of others", "before others", "excuse me for going first"],
    mnemonics: [
      "先 means 'ahead/before', with the polite お prefix - used when you're going ahead of others",
    ],
    info: [
      "Common phrase when leaving work before others: お先に失礼します",
      "Can also be used when going first in any situation where others will follow",
      "Shows consideration for those who are staying/remaining behind",
      "More polite than just saying 先に",
    ],
    example_sentences: [
      {
        japanese: "お先に失礼します。",
        english: "Excuse me for leaving before you. (when leaving work/school)",
      },
    ],
  },
]

export default vocabItems
