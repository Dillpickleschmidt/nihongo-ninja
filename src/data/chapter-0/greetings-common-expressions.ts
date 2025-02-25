import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "おはようございます",
    furigana: "おはようございます",
    english: ["Good Morning"],
    info: [
      "This is a polite way to say good morning and is typically used until late morning.",
      "Drop 'ございます' for a more casual version, just 'おはよう (Ohayou)'.",
      "The casual version, 'おはよう' is often used among friends, family, or colleagues you're familiar with.",
      "The polite form 'おはようございます' is suitable for more formal situations or when addressing someone you don't know well.",
      "It's a common greeting in schools, workplaces, or when doing morning activities.",
      "As a rule of thumb, drop ございます when you're on a first-name basis with someone (friends and family).",
      "If you refer to that person as Mr./Ms., use the longer ございます version.",
    ],
    videos: [
      {
        src: "1PwDIljuuJrp38AX6GYfdSE4D1EjEJelp",
        title: "The Apothecary Diaries S01E05",
      },
    ],
  },
  {
    word: "こんにちは",
    furigana: "こんにちは",
    english: ["Good Afternoon", "Hello"],
    info: [
      "This is the most versatile and common greeting in Japanese.",
      "It's used from late morning (around 11 am) until early evening (around 5-6 pm).",
      "It's akin to saying 'Good afternoon' or a general 'Hello' in English.",
      "You'll hear this greeting in a wide range of settings, from casual encounters to more formal situations.",
      "It's a safe, go-to greeting for most daytime interactions.",
    ],
    videos: [
      {
        src: "1mXOwoTHKtAa1y39Y-NzO2DD9nvsBAsPv",
        title: "Inuyasha S01E21",
      },
    ],
  },
  {
    word: "こんばんは",
    furigana: "こんばんは",
    english: ["Good Evening"],
    info: [
      "Used in the evening, starting around dusk.",
      "It's a polite greeting that's appropriate in both casual and formal situations.",
      "Whether you're entering a restaurant in the evening, meeting someone for a night event, or just greeting your neighbor, 'こんばんは' is the suitable choice.",
    ],
    videos: [
      {
        src: "1L17K1H7rPYukpcy9cbvDx2BiV6bwjF_5",
        title: "7th Time Loop S01E09",
      },
    ],
  },
  {
    word: "じゃあね",
    furigana: "じゃあね",
    english: ["See you", "Bye"],
    info: [
      "This phrase is casual and friendly, often used among friends, family, or close colleagues.",
      "It's equivalent to saying 'See you', 'Bye', or 'Catch you later' in English.",
      "It implies an informal and easy-going parting, often when you expect to see the person again soon.",
      "It's perfect for everyday casual farewells, like when leaving a café after meeting a friend or saying goodbye at the end of a school or work day.",
    ],
    videos: [
      {
        src: "1ADuG9poyR3SkM7HtWpqHRdnDvub_05Uw",
        title: "Hunter x Hunter S01E33",
      },
    ],
    overwrite_word: "じゃあね",
  },
  {
    word: "またね",
    furigana: "またね",
    english: ["See you later"],
    info: [
      "This phrase is also casual and conveys a similar sense as 'じゃあね (Jaa ne)'.",
      "It's used in situations where you are expecting to see or speak to the person again in the future.",
      "It's warm and friendly, suitable for parting with friends or colleagues in a casual setting.",
    ],
    videos: [
      {
        src: "1PvXfbCp7Z1c5caQAwpu5C8IbevlCnRHb",
        title: "The Aristocrat's Otherworldly Adventure S01E07",
      },
    ],
    overwrite_word: "またね",
  },
  {
    word: "ありがとうございます",
    furigana: "ありがとうございます",
    english: ["Thank you"],
    info: [
      "Polite way to say thank you.",
      'If you\'re going for casual, drop ございます and just say "ありがとう" (it\'s like "thank you" vs. "thanks").',
    ],
    videos: [],
  },
  {
    word: "さようなら",
    furigana: "さようなら",
    english: ["Goodbye (for a long time)"],
    info: [
      "This is a formal and somewhat solemn way of saying goodbye, often used when you won't see someone for a while.",
      "さようなら is when the speaker does not expect to see the person spoken to before he/she turns a new page in his/her life—a long time.",
      "Therefore, it's not commonly used in daily casual conversation.",
      "In more everyday casual settings, phrases like 'じゃあね (Jaa ne)' or 'またね (Mata ne)' are used among friends or colleagues, with more sophisticated expressions used in the workplace that we'll explore later.",
    ],
    videos: [
      {
        src: "1czOn4SrM-aA2dOAWmMoze-rnG8lZA9vv",
        title: "Inuyasha S01E31",
      },
    ],
  },
  {
    word: "すみません",
    furigana: "すみません",
    english: ["Excuse Me"],
    info: [
      "'Sumimasen' is primarily used as a polite way to say 'excuse me' or 'I'm sorry.'",
      "It's a way to acknowledge an inconvenience you might have caused someone or to politely get someone's attention.",
      "This expression is a versatile and essential part of the Japanese language, often used in various contexts.",
      "It also highlights some of the major differences between Japanese and Western cultures, so let's break down its uses and nuances.",
    ],
    videos: [
      {
        src: "1EzV37Mb-dWVLvKOiQ8LsxiiLTrCIyzZi",
        title: "Demon Slayer S05E06",
      },
    ],
  },
  {
    word: "いいえ",
    furigana: "いいえ",
    english: ["No"],
    info: [
      "It's like saying 'No, thank you,' or 'Don't mention it' without making the other party feel obligated.",
      "It's the kind of 'No' that comes with a bow and a smile.",
      "Picture yourself at a sushi bar: if the chef asks if you want more wasabi and you're already breathing fire, a gentle 'いいえ' is your go-to.",
      "In Japanese, where the art of being polite is pretty much a national sport, 'いいえ' is your essential tool for saying 'No' without any of the harshness.",
    ],
    videos: [
      {
        src: "1uMfMQ62c6C8FH-7EcvL0JxqcVFwUPZ_i",
        title: "Vivy S01E09",
      },
    ],
  },
  {
    word: "おやすみ",
    furigana: "おやすみ",
    english: ["Goodnight"],
    info: [
      "'Oyasumi' is for your buddies, and 'Oyasuminasai' is for when you want to impress your cat with your politeness.",
    ],
    videos: [
      {
        src: "1J22sdgIC-MTUt7he25eRKrGEgxLFVnvh",
        title: "Days with My Step Sister S01E01",
      },
    ],
  },
  {
    word: "おやすみなさい",
    furigana: "おやすみなさい",
    english: ["Goodnight (polite)"],
    info: ["The extra polite version of おやすみ"],
    videos: [
      {
        src: "1XKwIe5hH7hZ_KCL85tmwcYwwXdmVQKKi",
        title: "Spy x Family S01E21",
      },
    ],
  },
  {
    word: "いってきます",
    furigana: "いってきます",
    english: ["I'll go and come back"],
    info: [
      "What you say when leaving the house, meaning 'I'll go and come back.'",
      "It's like a boomerang promise to your family.",
    ],
    videos: [
      {
        src: "1HJVi7VFmhDHYqzlfq5C4GoSsYYiGflF5",
        title: "Inuyasha S01E05",
      },
    ],
  },
  {
    word: "いってらっしゃい",
    furigana: "いってらっしゃい",
    english: ["Go and come back"],
    info: [
      "The response to 'いってきます,' meaning 'Go and come back.'",
      "It's like saying, 'You better come back, or the cat gets your dinner,' but in a polite way.",
    ],
    videos: [
      {
        src: "1zrHKS4iJd0Xo8aRk1uYmiWwxpBNWJqFD",
        title: "Inuyasha S02E48",
      },
    ],
  },
  {
    word: "ただいま",
    furigana: "ただいま",
    english: ["I'm home"],
    info: [
      "What you say when you return home, meaning 'I'm home.'",
      "It's like announcing your grand entrance to an audience of houseplants.",
    ],
    videos: [
      {
        src: "1__OB6cgz9ayHqV0T8PMHPR-e5bEMZtMI",
        title: "Spy x Family S01E18",
      },
    ],
  },
  {
    word: "おかえり",
    furigana: "おかえり",
    english: ["Welcome home"],
    info: [
      "The response to 'ただいま,' meaning 'Welcome home.'",
      "It's the warm fuzzy feeling of being back, in word form.",
    ],
    videos: [
      {
        src: "16EE_ZyY1LUqScnyLSxBYaeiDwHfKDZyu",
        title: "Days with My Step Sister S01E09",
      },
    ],
  },
  {
    word: "おかえりなさい",
    furigana: "おかえりなさい",
    english: ["Welcome home (polite)"],
    info: ["The extra polite version of おかえり"],
    videos: [
      {
        src: "1FwA5Vso27U725q4VEgkwVgUnD04jre-W",
        title: "86 - Eighty Six S01E23",
      },
    ],
  },
  {
    word: "いただきます",
    furigana: "いただきます",
    english: ["Thanks for the food"],
    info: [
      "Said before eating, it's like a mini-gratitude speech to the food gods.",
      "'Thanks for this feast that I'm about to demolish.'",
    ],
    videos: [
      {
        src: "1FbHQEFJ4NlPwqLGfNBPVJWZkblWjx4cc",
        title: "Campfire Cooking in Another World S01E01 + Spy x Family S01E17",
      },
    ],
  },
  {
    word: "ごちそうさまでした",
    furigana: "ごちそうさまでした",
    english: ["That was delicious"],
    info: [
      "Said after eating, it's the classy way to say 'That was delicious.'",
      "It's like a mic drop at the end of a meal.",
    ],
    videos: [
      {
        src: "10WUchh99TOGg-ThuFXd-loqIjhXM_N8L",
        title: "Jujutsu Kaisen S01E22",
      },
    ],
  },
  {
    word: "はじめまして",
    furigana: "はじめまして",
    english: ["Nice to meet you"],
    info: [
      "The cool, casual 'Nice to meet you.'",
      "Use it when you meet someone new or your friend's pet tarantula.",
      'Translated literally, it means "first time."',
    ],
    videos: [
      {
        src: "1NILE_XypmyaN0twjc3Ng7sl_5dQOGKrv",
        title: "86 - Eighty Six S01E23",
      },
    ],
  },
  {
    word: "よろしくおねがいします",
    furigana: "よろしくおねがいします",
    english: ["Please be kind to me"],
    info: [
      "This one's tricky to translate, but it's a mix of 'Please be kind to me,' 'Let's get along,' and 'I'm counting on you.'",
      "It's the ultimate ice-breaker and friend-maker.",
    ],
    videos: [
      {
        src: "1NitItbauSSced0kkBbbLZYHCmAt38Vs9",
        title: "I Got a Cheat Skill in Another World S01E02",
      },
    ],
  },
  {
    word: "ようこそ",
    furigana: "ようこそ",
    english: ["Welcome"],
    info: [
      "This is a warm and welcoming greeting, equivalent to 'Welcome' in English.",
      "It's used when greeting someone arriving at a place, such as a home, store, or event.",
      "You'll often see and hear 'ようこそ' on signs, in hospitality settings, or during events.",
    ],
    videos: [
      {
        src: "1dMY94h9i0NSUXxt-lAqNJq9hZEmJwnBR",
        title: "SAO Alternative - Gun Gale Online S01E02",
      },
    ],
  },
]

export default vocabItems
