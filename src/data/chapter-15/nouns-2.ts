import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "教室",
    furigana: "教室[きょうしつ]",
    english: ["classroom"],
    mnemonics: [
      "教 (kyou) means 'teach', and 室 (shitsu) means 'room' (which you've seen in words like 部屋)",
    ],
    videos: [
      {
        src: "15Q8tfXTbCcyQyRcIKNIwEXpa0uQL6UpI",
        title: "Parasyte -the maxim- S01E09",
      },
    ],
  },
  {
    word: "建物",
    furigana: "建物[たてもの]",
    english: ["building"],
    mnemonics: ["建 (tate) means 'build', and 物 (mono) means 'thing'"],
    info: [
      "This word can refer to any type of building, from houses to skyscrapers.",
    ],
    example_sentences: [
      {
        japanese: "東京には高い建物がたくさんあります。",
        english: "There are many tall buildings in Tokyo.",
      },
    ],
  },
  {
    word: "プール",
    furigana: "プール",
    english: ["swimming pool"],
    example_sentences: [
      {
        japanese: "夏休みにプールへ行きました。",
        english: "I went to the swimming pool during summer vacation.",
      },
    ],
  },
  {
    word: "映画館",
    furigana: "映画館[えいがかん]",
    english: ["movie theater"],
    mnemonics: [
      "映画 (eiga) means 'movie', and 館 (kan) means 'building' or 'hall'",
    ],
    example_sentences: [
      {
        japanese: "週末に友達と映画館で新作映画を見ました。",
        english:
          "I watched a new movie with my friends at the movie theater on the weekend.",
      },
    ],
  },
  {
    word: "旅館",
    furigana: "旅館[りょかん]",
    english: ["Japanese inn"],
    mnemonics: [
      "旅 (ryo) means 'travel', and 館 (kan) means 'building' or 'hall'",
    ],
    info: [
      "Ryokan are traditional Japanese inns that typically feature tatami-matted rooms, communal baths, and other public areas where visitors may wear yukata and talk with the owner.",
      "Many ryokan are known for their cuisine, featuring local and seasonal specialties.",
    ],
    example_sentences: [
      {
        japanese: "温泉地で有名な旅館に泊まりました。",
        english: "I stayed at a famous ryokan in a hot spring area.",
      },
    ],
    videos: [
      {
        src: "1DYGRmHQh_CTDIJo0vxKqhh038b4NrDIA",
        title: "Haikyu!! S04E09",
      },
    ],
  },
  {
    word: "庭",
    furigana: "庭[にわ]",
    english: ["garden"],
    example_sentences: [
      {
        japanese: "祖父は毎日庭の手入れをしています。",
        english: "My grandfather takes care of the garden every day.",
      },
    ],
    videos: [
      {
        src: "13PLn4wxaxZHfdj12XG-HSnI8ykDGhLOV",
        title: "Spy x Family S01E05",
      },
    ],
  },
  {
    word: "ボランティア",
    furigana: "ボランティア",
    english: ["volunteer"],
    info: [
      "This loanword can be used as both a noun (a volunteer) and a verb (to volunteer).",
    ],
    example_sentences: [
      {
        japanese: "週末にボランティアで公園の掃除をしました。",
        english: "I volunteered to clean the park over the weekend.",
      },
    ],
  },
  {
    word: "活動",
    furigana: "活動[かつどう]",
    english: ["activity"],
    mnemonics: [
      "活 (katsu) means 'activity', and 動 (dou) means 'move' (which you've already seen in words like 動物 (とうぶつ - animal)",
    ],
    info: [
      "This word can refer to various types of activities, from club activities at school to social or political activities.",
      "It's often used in compound words, like 課外活動 (extracurricular activities) or 経済活動 (economic activities).",
    ],
    videos: [
      {
        src: "1OvTUeWM1xABUGfYnp5Gd_83Qz_XSWjXh",
        title: "My Hero Academia S01E02",
      },
    ],
  },
  {
    word: "経験",
    furigana: "経験[けいけん]",
    english: ["experience"],
    mnemonics: [
      "経 (けい) means 'to pass through' and 験 (けん) means 'test' or 'trial'",
    ],
    info: [
      "This word can refer to both general life experiences and specific work experiences.",
      "In job applications, 経験者 (keiken-sha) refers to someone with relevant experience.",
    ],
  },
  {
    word: "習慣",
    furigana: "習慣[しゅうかん]",
    english: ["custom"],
    mnemonics: [
      "習 (shuu) means 'learn', and 慣 (kan) means 'become accustomed to'",
    ],
    info: [
      "This word can refer to personal habits as well as cultural customs.",
    ],
    example_sentences: [
      {
        japanese: "毎朝ジョギングをするのが私の習慣です。",
        english: "It's my habit to go jogging every morning.",
      },
    ],
    videos: [
      {
        src: "1p8KCZk4Zlsd-Ahbd-xlFpwyV990cEMLq",
        title: "86 - Eighty Six S01E13",
      },
    ],
  },
  {
    word: "締め切り",
    furigana: "締[し]め 切[き]り",
    english: ["deadline"],
    mnemonics: [
      "締め (shime) means 'tighten' or 'close', and 切り (kiri) means 'cut' - imagine the deadline cutting off time",
    ],
    info: [
      "This word is used in various contexts, from school assignments to work projects.",
      "Missing a deadline is often expressed as 締め切りに間に合わない (shimekiri ni maniawanai).",
    ],
    example_sentences: [
      {
        japanese: "レポートの締め切りは来週の金曜日です。",
        english: "The deadline for the report is next Friday.",
      },
    ],
  },
  {
    word: "予定",
    furigana: "予定[よてい]",
    english: ["schedule", "plan"],
    mnemonics: [
      "You've already seen 予 (よ - 'beforehand') in words like 予約 - reservation",
    ],
    info: [
      "This word can refer to both personal plans and official schedules.",
      "Dont use 作る to describe making plans -> 予定を立てる = make plans   instead of   X予定を作る.",
    ],
    example_sentences: [
      {
        japanese: "明日の予定は何ですか。",
        english: "What are your plans for tomorrow?",
      },
    ],
    videos: [
      {
        src: "1P2jr6-q4puQqp7cK9fxjwKwk3QpEJuEQ",
        title: "Inuyasha S01E20",
      },
    ],
  },
  {
    word: "卒業式",
    furigana: "卒業式[そつぎょうしき]",
    english: ["graduation ceremony"],
    mnemonics: [
      "卒業 (sotsugyou) means 'graduation', and 式 (shiki) means 'ceremony'",
    ],
    info: [
      "You can also say 卒業する to mean 'to graduate', however, you must use ～を instead of ～から when describing where you're graduating from.",
    ],
    example_sentences: [
      {
        japanese: "来月、大学の卒業式があります。",
        english: "Next month, there's a university graduation ceremony.",
      },
    ],
  },
  {
    word: "結婚式",
    furigana: "結婚式[けっこんしき]",
    english: ["wedding"],
    mnemonics: [
      "結婚 (kekkon) means 'marriage', and 式 (shiki) means 'ceremony'",
    ],
    info: [
      "Japanese weddings can be either traditional Shinto ceremonies or Western-style ceremonies.",
    ],
  },
]

export default vocabItems
