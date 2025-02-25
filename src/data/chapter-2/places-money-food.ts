import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "コンビニ",
    furigana: "コンビニ",
    english: ["convenience store"],
    mnemonics: ["Sounds like 'convenience' in English."],
    info: [
      "Japanese コンビニ offer a variety of services beyond typical shopping, including ATM access, bill payments, ticket purchases for events and public transport, photocopying, and package delivery services (takkyubin).",
      "Many stores also provide free Wi-Fi and seating areas where customers can eat and relax.",
      "コンビニ in Japan are known for their (relatively) high-quality, fresh food options. They sell a wide array of ready-to-eat meals, including bento boxes, onigiri (rice balls), sandwiches, salads, and hot foods like fried chicken and oden.",
      "Japanese convenience stores are exceptionally clean and well-organized. Products are also meticulously arranged, making it easy for customers to find what they need.",
    ],
    example_sentences: [
      {
        japanese: "コンビニはどこですか。",
        english: "Where is the convenience store.",
      },
    ],
  },
  {
    word: "銀行",
    furigana: "銀行[ぎんこう]",
    english: ["bank"],
    mnemonics: [],
    info: [
      "銀 (gin) means 'silver' and 行 (kou) means 'going'. Silver going to the bank.",
      "Most banks in Japan operate from 9 AM to 3 PM on weekdays and are closed on weekends and national holidays.",
      "ATMs are also widely available and often offer services in multiple languages.",
    ],
    example_sentences: [
      { japanese: "銀行はどこですか。", english: "Where is the bank?" },
    ],
  },
  {
    word: "トイレ",
    furigana: "トイレ",
    english: ["toilet", "restroom", "bathroom"],
    mnemonics: ["Sounds like 'toilet' in English."],
    info: [
      "While in English we say I 'need' to go to the bathroom, Japanese speakers use the 'want' verb conjugation instead: トイレに行きたいです (toile ni ikitai desu). Saying 'need' would sound weird. You'll learn the 'want' verb conjugation in Chapter 11.",
    ],
    example_sentences: [
      {
        japanese: "トイレはどこですか。",
        english: "Where is the restroom?",
      },
    ],
  },
  {
    word: "図書館",
    furigana: "図書館[としょかん]",
    english: ["library"],
    mnemonics: [
      'Every library has a bucket/bin that you can "toss yo (としょ)" books into to be returned.',
    ],
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
    mnemonics: [
      "You been (yuubin) to the post office yet? I heard they remodeled.",
    ],
    info: [],
    example_sentences: [
      {
        japanese: "郵便局はどこですか。",
        english: "Where is the post office?",
      },
    ],
  },
  {
    word: "～円",
    furigana: "～ 円[えん]",
    english: ["...yen"],
    mnemonics: [],
    info: [
      "The yen is the official currency of Japan and is symbolized by ¥.",
      "In Japanese, yen is pronounced 'en' (えん), but it is commonly referred to as 'yen' in English.",
      "Yen coins come in denominations of 1, 5, 10, 50, 100, and 500 yen. Banknotes come in 1,000, 2,000, 5,000, and 10,000 yen.",
    ],
    example_sentences: [
      { japanese: "これは百円です。", english: "This costs 100 yen." },
    ],
  },
  {
    word: "千",
    furigana: "せん",
    english: ["thousand"],
    mnemonics: [],
    info: [],
    example_sentences: [
      {
        japanese: "この本は千円です。",
        english: "This book costs 1,000 yen.",
      },
    ],
  },
  {
    word: "～万",
    furigana: "～まん",
    english: ["ten thousand"],
    mnemonics: [],
    info: [
      "Japanese counts in units of 10,000, wheras English jumps from 1,000 to 100,000.",
    ],
    example_sentences: [
      {
        japanese: "この車は五十万円です。",
        english: "This car costs 500,000 yen (lit. 50x10,000).",
      },
    ],
  },
  {
    word: "いくら",
    furigana: "いくら",
    english: ["how much"],
    mnemonics: [
      "Imagine inflation so bad that prices are in-cu-ra-mentally (いくら) rising as you shop in the store. You can't trust the price tags anymore and you'll have to ask 'how much?' for everything.",
    ],
    info: [],
    example_sentences: [
      { japanese: "これはいくらですか。", english: "How much is this?" },
    ],
  },
  {
    word: "いらっしゃいませ",
    furigana: "いらっしゃいませ",
    english: ["welcome (to the store)"],
    mnemonics: [],
    info: [
      "いらっしゃいませ is a polite greeting used when welcoming customers into a store.",
    ],
    example_sentences: [
      {
        japanese: "いらっしゃいませ。何をお探しですか。",
        english: "Welcome. What are you looking for?",
      },
    ],
  },
  {
    word: "（～を）おねがいします",
    furigana: "（～を）おねがいします",
    english: ["Please (give me) X.", "I'd like to request X."],
    mnemonics: [],
    info: [
      "Usage: Used when politely requesting something or asking for a favor.",
      "This phrase is commonly heard in restaurants, shops, and formal situations. It conveys a high level of politeness and respect, making it suitable for professional and respectful interactions.",
      "In this context, we use the ～を(o) particle to indicate the object we're referring to",
    ],
    example_sentences: [
      { japanese: "水をおねがいします。", english: "Water, please." },
    ],
  },
  {
    word: "（～を）ください",
    furigana: "（～を）ください",
    english: ["Please give me X."],
    mnemonics: [],
    info: [
      "Usage: Used when asking for something directly.",
      "This phrase is slightly less formal than （～を）おねがいします but still polite and widely used in shops, restaurants, and casual situations.",
    ],
    example_sentences: [
      { japanese: "コーヒーをください", english: "Coffee, please." },
    ],
  },
  {
    word: "じゃあ",
    furigana: "じゃあ",
    english: ["well then..."],
    mnemonics: [],
    info: [
      "Use じゃあ to transition or conclude a conversation.",
      "Example: じゃあ、またね。-> Well then, see you later.",
    ],
    example_sentences: [
      { japanese: "じゃあ、行きましょう。", english: "Well, let's go." },
    ],
  },
  {
    word: "どうぞ",
    furigana: "どうぞ",
    english: ["please (go ahead)"],
    mnemonics: [],
    info: ["Use どうぞ to offer something or allow someone to go ahead."],
    example_sentences: [
      { japanese: "どうぞ、お入りください。", english: "Please, come in." },
    ],
  },
  {
    word: "どうも",
    furigana: "どうも",
    english: ["thanks", "hello", "sorry"],
    mnemonics: [],
    info: [
      "Use どうも in various situations to express thanks, greet, or apologize.",
    ],
    example_sentences: [
      { japanese: "どうもありがとう。", english: "Many thanks." },
    ],
  },
  {
    word: "高い",
    furigana: "高[たか]い",
    english: ["expensive", "high", "tall"],
    mnemonics: [
      "Imagine a 'taco' that's so 'expensive', it floats 'high' in the air like a celestial object.",
    ],
    info: [
      "The word can describe both physical height (e.g., 高い山, takai yama, 'a high/tall mountain') and cost (e.g., 高い本, takai hon, 'an expensive book').",
    ],
    example_sentences: [
      {
        japanese: "このメニューは高いです。",
        english: "This menu is expensive.",
      },
    ],
  },
  {
    word: "おいしい",
    furigana: "おいしい",
    english: ["delicious"],
    mnemonics: [],
    info: [
      "It is very commonly used to describe the flavor of food and beverages that one finds pleasant and enjoyable. You'll likely hear this word used a lot.",
    ],
    example_sentences: [
      {
        japanese: "この魚はおいしいです。",
        english: "This fish is delicious.",
      },
    ],
  },
  {
    word: "魚",
    furigana: "魚[さかな]",
    english: ["fish"],
    mnemonics: [
      "Ever thought about storing fish in socks? 🐟+🧦 = [Storage] ...No? Just me? Oh.",
    ],
    info: [],
    example_sentences: [{ japanese: "魚を食べます。", english: "I eat fish." }],
  },
  {
    word: "とんかつ",
    furigana: "とんかつ",
    english: ["pork cutlet"],
    mnemonics: [
      "カツ is a shortened form of 'カツレツ' (katsuretsu), which is derived from the English word 'cutlet.'",
    ],
    info: [
      "とんかつ is a Japanese dish consisting of a breaded, deep-fried pork cutlet.",
      "Ingredients: Typically made with either pork loin (ロース, rōsu) or pork fillet (ヒレ, hire), coated in panko (bread crumbs) before being deep-fried.",
      "Serving Style: Often served with shredded cabbage, rice, and miso soup. It can also be served with a thick, sweet, and savory sauce known as 'とんかつソース' (tonkatsu sauce).",
    ],
    example_sentences: [
      {
        japanese: "とんかつが好きです。",
        english: "I like tonkatsu (pork cutlet).",
      },
    ],
  },
  {
    word: "肉",
    furigana: "肉[にく]",
    english: ["meat"],
    mnemonics: [
      "Imagine a sumo wrestler saying 'need-ku' (niku) to stay strong and win his matches. 💪🍖",
    ],
    info: [],
    example_sentences: [{ japanese: "肉を食べます。", english: "I eat meat." }],
  },
  {
    word: "メニュー",
    furigana: "メニュー",
    english: ["menu"],
    mnemonics: ["Sounds like 'menu' in English."],
    info: [],
    example_sentences: [
      {
        japanese: "メニューをください。",
        english: "Can I have a menu, please?",
      },
    ],
  },
  {
    word: "野菜",
    furigana: "野菜[やさい]",
    english: ["vegetable"],
    mnemonics: [
      "It kinda souns like 'yucky' in English, if you stretch your imagination a bit (a lot?). Idk, I just don't like vegetables, okay? 😅",
    ],
    info: [],
    example_sentences: [
      { japanese: "野菜を食べます。", english: "I eat vegetables." },
    ],
  },
]

export default vocabItems
