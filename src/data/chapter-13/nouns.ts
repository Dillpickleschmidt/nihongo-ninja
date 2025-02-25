import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "大人",
    furigana: "大人[おとな]",
    english: ["adult"],
    mnemonics: ["Big (大) person (人) = adult"],
  },
  {
    word: "弁護士",
    furigana: "弁護士[べんごし]",
    english: ["lawyer"],
    info: [
      "It refers to legal professionals who represent clients in court and provide legal advice.",
      'The term combines "弁護" (defense) and "士" (professional).',
    ],
  },
  {
    word: "私",
    furigana: "私[わたくし]",
    english: ["I (formal)"],
    info: [
      "Usage: Very formal, gender-neutral. (Note: Both わたし and わたくし use the same kanji, 私)",
      "Context: Used in highly formal situations, such as official speeches, ceremonies, or when speaking to someone of significantly higher status.",
    ],
  },
  {
    word: "カレー",
    furigana: "カレー",
    english: ["curry"],
    mnemonics: ["Sounds just like the English word."],
    info: [
      "Milder and sweeter than Indian or Thai curry",
      "カレーライス (curry rice) is considered a national dish",
      "Introduced to Japan by the British Navy in late 19th century",
    ],
  },
  {
    word: "紅茶",
    furigana: "紅茶[こうちゃ]",
    english: ["black tea"],
    info: [
      "Literally means 'red tea' in Japanese, referring to the reddish color of black tea",
      "Introduced to Japan in the 17th century by Dutch traders",
      "Often served with milk and sugar, unlike traditional Japanese green tea",
    ],
  },
  {
    word: "着物",
    furigana: "着物[きもの]",
    english: ["kimono", "Japanese traditional dress"],
    mnemonics: [
      "Wear (着) + thing (物) = kimono",
      "Similar pattern to: 飲み物、食べ物、乗り物",
    ],
    info: [
      "Evolved from the Chinese hanfu during the Heian period (794-1185)",
      "Became the main form of dress for all classes in Japan during the Edo period (1603-1867)",
    ],
  },
  {
    word: "セーター",
    furigana: "セーター",
    english: ["sweater"],
    mnemonics: ["Sounds just like the English word."],
  },
  {
    word: "楽器",
    furigana: "楽器[がっき]",
    english: ["musical instrument"],
    info: [
      "音楽に使うもの - Things used for music",
      "Uses the same 楽 kanji as in 音楽",
    ],
    example_sentences: [
      {
        japanese: "子どものころ、楽器を３つ練習しました。",
        english: "When I was a child, I practiced three musical instruments.",
      },
    ],
  },
  {
    word: "空手",
    furigana: "空手[からて]",
    english: ["karate"],
    mnemonics: ["Empty (空) + hand (手) = karate"],
  },
  {
    word: "ゴルフ",
    furigana: "ゴルフ",
    english: ["golf"],
    mnemonics: ["Sounds just like the English word."],
  },
  {
    word: "バイク",
    furigana: "バイク",
    english: ["motorcycle"],
    info: ["In Japan, it typically refers to motorcycles, not bicycles"],
  },
  {
    word: "象",
    furigana: "象[ぞう]",
    english: ["elephant"],
    info: [
      "There's a famous saying in Japan: '象牙の塔' (zōge no tō), meaning 'ivory tower', which uses the kanji for elephant",
      '"To live or be in an ivory tower is not to know about or to want to avoid the ordinary and unpleasant things that happen in people\'s lives" (Cambridge)',
    ],
  },
  {
    word: "体",
    furigana: "体[からだ]",
    english: ["body"],
    info: [
      "Used in many compound words related to health and physical condition",
      "In traditional Japanese medicine, the body is seen as a microcosm of the universe",
      "The concept of 体 extends beyond just the physical body in Japanese culture",
    ],
  },
  {
    word: "外国語",
    furigana: "外国語[がいこくご]",
    english: ["foreign language"],
    mnemonics: [
      "Outside (外) + country (国) + language (語) = foreign language",
    ],
  },
  {
    word: "言葉",
    furigana: "言葉[ことば]",
    english: ["language", "word", "speech"],
    mnemonics: ["Contains 言 from 言う (to say)"],
    info: [
      "Can refer to a single word, a phrase, or an entire language",
      "Often used to discuss manner of speaking or choice of words",
    ],
  },
  {
    word: "文法",
    furigana: "文法[ぶんぽう]",
    english: ["grammar"],
    mnemonics: ["Sentence (文) + method (法) = grammar"],
  },
  {
    word: "アプリ",
    furigana: "アプリ",
    english: ["application", "app"],
    info: [
      "Shortened from アプリケーション (application)",
      "Usually refers to smartphone or computer applications",
    ],
  },
  {
    word: "アパート",
    furigana: "アパート",
    english: ["apartment", "smaller apartment building"],
    mnemonics: ["Sounds just like the English word."],
  },
  {
    word: "マンション",
    furigana: "マンション",
    english: ["larger apartment building", "condominium"],
    info: [
      "Loan word from English 'mansion'",
      "In Japan, refers to larger, more modern apartment buildings or condominiums",
      "Usually considered more upscale than アパート",
    ],
  },
  {
    word: "空港",
    furigana: "空港[くうこう]",
    english: ["airport"],
    mnemonics: ["空 sky + 港 port = skyport/airport"],
  },
  {
    word: "店",
    furigana: "店[みせ]",
    english: ["shop", "store"],
    info: [
      "General term for any kind of shop or store",
      "Often used in compound words to specify type of store",
    ],
  },
  {
    word: "物価",
    furigana: "物価[ぶっか]",
    english: ["consumer prices", "cost of living"],
    info: ["prices of commodities, prices in general, cost-of-living"],
  },
  {
    word: "広告",
    furigana: "広告[こうこく]",
    english: ["advertisement"],
    mnemonics: ["Wide (広) + inform (告) = advertisement"],
  },
  {
    word: "募集",
    furigana: "募集[ぼしゅう]",
    english: ["recruitment"],
  },
  {
    word: "約束",
    furigana: "約束[やくそく]",
    english: ["promise", "appointment"],
  },
  {
    word: "経験",
    furigana: "経験[けいけん]",
    english: ["experience"],
    example_sentences: [
      {
        japanese: "結婚のご経験はありますか？",
        english: "Have you ever been married before?",
      },
    ],
  },
]

export default vocabItems
