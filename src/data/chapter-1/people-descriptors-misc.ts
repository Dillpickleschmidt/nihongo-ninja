import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "わたし",
    furigana: "わたし",
    english: ["I"],
    info: [
      "'わたし' is the standard way to say 'I' or 'me' in Japanese.",
      "It is gender-neutral and can be used in both formal and informal contexts.",
      "Men could use 'ぼく' instead, and might even prefer 'おれ' in informal settings. More on this later.",
    ],
    overwrite_word: "私",
  },
  {
    word: "ともだち",
    furigana: "ともだち",
    english: ["friend"],
    info: [
      "'ともだち' means 'friend' in Japanese.",
      "It can refer to both male and female friends.",
    ],
  },
  {
    word: "～さん",
    furigana: "～さん",
    english: ["Mr.", "Mrs.", "Ms."],
    info: [
      "'～さん' is a polite title used after someone's name.",
      "It is similar to Mr., Mrs., or Ms. in English. However, while we default to calling each other by first names in English, in Japanese, the DEFAULT is to use LAST NAME + さん.",
      "It can be used with both first and last names, but you should default to using last (family) names unless requested to do otherwise.",
      "You should refer to everyone using '～さん' (or another appropriate honorary title that you'll learn about soon) unless you are explicitly asked not to. If you don't use it, you sound very forward and rude.",
      "The usage of this single word is probably the biggest difference between Japanese and Western culture in terms of etiquette.",
      "NEVER use 'さん' when referring to yourself. It is strictly used to address or refer to others. Using ～さん for oneself is like calling yourself Mr./Mrs.[your name] and considered overly self-important and inappropriate.",
    ],
    overwrite_word: "さん",
  },
  {
    word: "～じん",
    furigana: "～じん",
    english: ["...people"],
    info: [
      "'～じん' is a suffix used to indicate nationality or ethnicity.",
      "For example, 'にほんじん' means 'Japanese people/person'.",
      "It is commonly used to describe the people of a particular country.",
    ],
    overwrite_word: "人",
  },
  {
    word: "にほんじん",
    furigana: "にほんじん",
    english: ["Japanese people", "Japanese person"],
    info: ["It combines 'にほん' (Japan) and 'じん' (people)."],
    overwrite_word: "日本人",
  },
  {
    word: "せんせい",
    furigana: "せんせい",
    english: ["Teacher", "Professor", "Dr."],
    info: [
      "'せんせい' is a term used to address teachers, professors, doctors, or anyone who is a master in their field.",
      "It is a respectful title and can be used by students to address their instructors.",
      "It is also used as a suffix after a person's name, just like ～さん. For example: '田中せんせい' (Dr. Tanaka).",
    ],
    overwrite_word: "先生",
  },
  {
    word: "～さい",
    furigana: "～さい",
    english: ["...years old"],
    info: [
      "'～さい' is a suffix used to indicate age in years.",
      "It is added after numbers to denote someone's age.",
      "For example, 'にじゅっさい' means '20 years old'.",
    ],
    overwrite_word: "歳",
  },
  {
    word: "～ご",
    furigana: "～ご",
    english: ["...language"],
    info: [
      "'～ご' is a suffix used to indicate a language.",
      "It is added after the name of a country to denote the language spoken there.",
      "For example, 'にほんご' means 'Japanese language' and 'えいご' means 'English language'.",
    ],
    overwrite_word: "語",
  },
  {
    word: "にほんご",
    furigana: "にほんご",
    english: ["Japanese language"],
    info: [
      "'にほんご' means 'Japanese language'.",
      "It combines 'にほん' (Japan) and 'ご' (language).",
      "It is used to refer to the language spoken in Japan.",
    ],
    overwrite_word: "日本語",
  },
  {
    word: "でんわ",
    furigana: "でんわ",
    english: ["telephone"],
    info: [
      "'でんわ' means 'telephone' in Japanese.",
      "It can refer to both the device itself and the act of making a phone call.",
    ],
    overwrite_word: "電話",
  },
  {
    word: "～ばん",
    furigana: "～ばん",
    english: ["...number"],
    info: [
      "'～ばん' is a suffix used to indicate a number in a series.",
      "It is added after numbers to denote the order or position, like 'いちばん' for 'number one'.",
    ],
    overwrite_word: "番",
  },
  {
    word: "ばんごう",
    furigana: "ばんごう",
    english: ["number"],
    info: [
      "'ばんごう' means 'number'.",
      "It is used for phone numbers, room numbers, and other numerical identifiers.",
      "For example, 'でんわばんごう' means 'phone number'.",
    ],
    overwrite_word: "番号",
  },
  {
    word: "なまえ",
    furigana: "なまえ",
    english: ["name"],
    info: [
      "'なまえ' means 'name'.",
      "It can refer to both first names and last names.",
      "For example, 'おなまえは？' means 'What is your name?'.",
    ],
    overwrite_word: "名前",
  },
  {
    word: "みんな",
    furigana: "みんな",
    english: ["everyone", "all"],
    info: [
      "'みんな' means 'everyone' or 'all' in Japanese.",
      "It is used to refer to a group of people inclusively.",
    ],
  },
  {
    word: "なん/なに",
    furigana: "なん/なに",
    english: ["what"],
    info: [
      "'なん' and 'なに' both mean 'what'.",
      "For example, 'なんですか？' means 'What is it?' and 'なにをしますか？' means 'What will you do?'.",
      "You'll get a feel for which to use pretty quickly just by listening.",
    ],
    overwrite_word: "何",
  },
  {
    word: "あのう",
    furigana: "あのう",
    english: ["um..."],
    info: [
      "'あのう' is a filler word used to pause or hesitate in speech.",
      "It is similar to 'um' or 'uh' in English.",
      "It is often used when the speaker is thinking or trying to get someone's attention politely.",
      'While English speakers are often discouraged from using filler words like "uh" or "um", when politely seeking someone\'s attention, Japanese speakers purposefully use \'あのう\' to show politeness and respect. This applies to other situations in Japan as well.',
    ],
  },
  {
    word: "はい",
    furigana: "はい",
    english: ["yes"],
    info: [
      "'はい' means 'yes' in Japanese.",
      "It can also be used to show agreement or acknowledgment.",
      "In some contexts, it can mean 'here' or 'present' when responding to a roll call.",
    ],
  },
  {
    word: "そうです",
    furigana: "そうです",
    english: ["That's right."],
    info: [
      "'そうです' means 'That's right' or 'It is so'.",
      "It is used to confirm information or agree with a statement.",
    ],
  },
  {
    word: "そうですか",
    furigana: "そうですか",
    english: ["I see", "Is that so?"],
    info: [
      "'そうですか' means 'I see' or 'Is that so?'.",
      "It is used to show understanding or surprise.",
      "In Japanese culture, showing active listening and engagement is crucial for building rapport and trust.",
      "Japanese speakers often use this phrase to show that they are listening and engaged in the conversation.",
      "Japanese speakers frequently use interjections like 'そうですか,' 'うん,' 'はい,' 'へえ,' and 'なるほど' to show they are listening. These even have their own name—'aizuchi' and serve as verbal nods.",
      "Aizuchi are used more often in Japanese than in English, reflecting a higher level of active listening and engagement. Try to use them in your own conversations.",
    ],
  },
  {
    word: "しゅっしん",
    furigana: "しゅっしん",
    english: ["hometown", "place of origin"],
    info: [
      "'しゅっしん' means 'hometown' or 'place of origin' in Japanese.",
      "It is used to refer to the place where someone is from.",
    ],
    overwrite_word: "出身",
  },
]

export default vocabItems
