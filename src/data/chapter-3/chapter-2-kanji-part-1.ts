import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "傘",
    furigana: "傘[かさ]",
    english: ["umbrella"],
    info: [
      "Umbrella stands are frequently found outside shops, restaurants, schools, and offices in Japan. Visitors are expected to leave their umbrellas in the stand before entering the building.",
      "While Japan has very low overall crime rates, the theft of umbrellas is surprisingly common.",
      'People often "borrow" an umbrella from these stands if caught in unexpected rain. Due to the high risk of unintentional "borrowing," many people personalize their umbrellas to make them easily identifiable.',
    ],
  },
  {
    word: "鞄",
    furigana: "鞄[かばん]",
    english: ["bag"],
    mnemonics: [
      'Think of the loud "kabang" every time you hear someone\'s bag flop over at the airport terminal.',
    ],
  },
  {
    word: "靴",
    furigana: "靴[くつ]",
    english: ["shoes"],
    mnemonics: [
      'Think of putting your "ku" (cool) shoes on your feet, making sure they "tsu" (suit) you well.',
    ],
    info: [
      "It is customary to remove shoes before entering homes, schools, traditional inns (りょかん), and some restaurants.",
      "In schools, students have designated shoe lockers called げたばこ, where they store their outdoor shoes and change into indoor shoes upon entering the building.",
      "The entrance area in Japanese homes, known as the genkan, is specifically designed for removing and storing shoes.",
    ],
  },
  {
    word: "財布",
    furigana: "財布[さいふ]",
    english: ["wallet"],
    mnemonics: [
      "My wallet always feels like it's being siphoned empty. (˃̣̣̥⌓˂̣̣̥⋆)",
    ],
  },
  {
    word: "自転車",
    furigana: "自転車[じてんしゃ]",
    english: ["bicycle"],
    info: [
      "Japan features multi-story automated bicycle parking systems that can store hundreds of bicycles underground, helping to keep streets organized and showcasing Japan's innovative approach to urban planning.",
      "Mamachari bicycles are a staple of everyday life in Japan. These sturdy, practical bikes are equipped with baskets, child seats, and sometimes electric assistance, making them perfect for families and everyday use.",
      "Japan has a significantly lower rate of bicycle theft compared to many other large countries. This is due to the country's low crime rate, strict laws, and the fact that bicycles are often parked in designated areas.",
    ],
  },
  {
    word: "新聞",
    furigana: "新聞[しんぶん]",
    english: ["newspaper"],
    info: [
      "Newspapers in Japan are still widely read, with morning and evening editions available.",
    ],
  },
  {
    word: "時計",
    furigana: "時計[とけい]",
    english: ["watch", "clock"],
    info: [
      "Punctuality is highly valued in Japan, making watches and clocks important accessories.",
    ],
  },
  {
    word: "帽子",
    furigana: "帽子[ぼうし]",
    english: ["hat", "cap"],
    mnemonics: ['Imagine a "bou"tique "shi"pping hats to fashion lovers.'],
  },
  {
    word: "本",
    furigana: "本[ほん]",
    english: ["book"],
    info: [
      "Most traditional Japanese books, including novels and manga (comics), are read from right to left and from back to front. This means that what Western readers would consider the back cover is actually the front cover in Japan.",
      "Text is often written in vertical columns, with each column read from top to bottom. The columns are arranged from right to left across the page.",
    ],
  },
  {
    word: "銀行",
    furigana: "銀行[ぎんこう]",
    english: ["bank"],
    mnemonics: [
      '銀 (gin) means "silver" and 行 (kou) means "going". Silver going to the bank.',
    ],
    info: [
      "Most banks in Japan operate from 9 AM to 3 PM on weekdays and are closed on weekends and national holidays.",
      "ATMs are also widely available and often offer services in multiple languages.",
    ],
    example_sentences: [
      { japanese: "銀行はどこですか。", english: "Where is the bank?" },
    ],
  },
  {
    word: "図書館",
    furigana: "図書館[としょかん]",
    english: ["library"],
    info: [
      "Libraries in Japan are typically very quiet, with strict rules about noise to maintain an environment conducive to reading and studying.",
      "Japan also has specialized libraries, such as manga libraries, which house extensive collections of manga (Japanese comics) for enthusiasts and researchers.",
    ],
    example_sentences: [
      { japanese: "図書館はどこですか。", english: "Where is the library?" },
    ],
  },
  {
    word: "郵便局",
    furigana: "郵便局[ゆうびんきょく]",
    english: ["post office"],
    mnemonics: ["You been (yuubin) to the post office yet?"],
    example_sentences: [
      {
        japanese: "郵便局はどこですか。",
        english: "Where is the post office?",
      },
    ],
  },
  {
    word: "千",
    furigana: "千[せん]",
    english: ["thousand"],
    example_sentences: [
      {
        japanese: "この本は千円です。",
        english: "This book costs 1,000 yen.",
      },
    ],
  },
  {
    word: "万",
    furigana: "万[まん]",
    english: ["ten thousand"],
    example_sentences: [
      {
        japanese: "この車は五十万円です。",
        english: "This car costs 500,000 yen.",
      },
    ],
  },
  {
    word: "円",
    furigana: "円[えん]",
    english: ["yen"],
    info: [
      "The yen is the official currency of Japan and is symbolized by ¥.",
      'In Japanese, yen is pronounced "en" (えん), but it is commonly referred to as "yen" in English.',
      "Yen coins come in denominations of 1, 5, 10, 50, 100, and 500 yen. Banknotes come in 1,000, 2,000, 5,000, and 10,000 yen.",
    ],
    example_sentences: [
      { japanese: "これは百円です。", english: "This costs 100 yen." },
    ],
  },
  {
    word: "高い",
    furigana: "高[たか]い",
    english: ["expensive", "high", "tall"],
    mnemonics: [
      'Imagine a "taco" that\'s so "expensive", it floats "high" in the air like a celestial object.',
    ],
    info: [
      'The word can describe both physical height (e.g., 高い山, takai yama, "a high/tall mountain") and cost (e.g., 高い本, takai hon, "an expensive book").',
    ],
    example_sentences: [
      {
        japanese: "このメニューは高いです。",
        english: "This menu is expensive.",
      },
    ],
  },
  {
    word: "肉",
    furigana: "肉[にく]",
    english: ["meat"],
    mnemonics: [
      'Imagine a sumo wrestler saying "need-ku" (niku) to stay strong and win his matches. 💪🍖',
    ],
    example_sentences: [{ japanese: "肉を食べます。", english: "I eat meat." }],
  },
  {
    word: "魚",
    furigana: "魚[さかな]",
    english: ["fish"],
    mnemonics: [
      "Ever thought about storing fish in socks? 🐟+🧦 = [Storage] ...No? Just me? Oh.",
    ],
    example_sentences: [{ japanese: "魚を食べます。", english: "I eat fish." }],
  },
  {
    word: "野菜",
    furigana: "野菜[やさい]",
    english: ["vegetable"],
    mnemonics: [
      'It kinda sounds like "yucky" in English, if you stretch your imagination a bit (a lot?). Idk, I just don\'t like vegetables, okay? 😅',
    ],
    example_sentences: [
      { japanese: "野菜を食べます。", english: "I eat vegetables." },
    ],
  },
]

export default vocabItems
