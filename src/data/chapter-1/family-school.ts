import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "おかあさん",
    furigana: "おかあさん",
    english: ["mother"],
    info: [
      "'おかあさん' is the polite way to refer to someone's mother.",
      "It can be used to refer to your own mother in a polite context or someone else's mother.",
      "In informal contexts, you might hear it as 'かあさん'.",
    ],
    overwrite_word: "お母さん",
  },
  {
    word: "おとうさん",
    furigana: "おとうさん",
    english: ["father"],
    info: [
      "'おとうさん' is the polite way to refer to someone's father.",
      "It can be used to refer to your own father in a polite context or someone else's father.",
      "In informal contexts, you might hear it as 'とうさん'.",
    ],
    overwrite_word: "お父さん",
  },
  {
    word: "おねえさん",
    furigana: "おねえさん",
    english: ["older sister"],
    info: [
      "'おねえさん' is the polite way to refer to someone's older sister.",
      "It can be used to refer to your own older sister in a polite context or someone else's older sister.",
      "In informal contexts, you might hear 'ねえさん'.",
    ],
    overwrite_word: "お姉さん",
  },
  {
    word: "おにいさん",
    furigana: "おにいさん",
    english: ["older brother"],
    info: [
      "'おにいさん' is the polite way to refer to someone's older brother.",
      "It can be used to refer to your own older brother in a polite context or someone else's older brother.",
      "In informal contexts, you might hear 'にいさん'.",
    ],
    overwrite_word: "お兄さん",
  },
  {
    word: "いもうと",
    furigana: "いもうと",
    english: ["younger sister"],
    info: [
      "'いもうと' refers to a younger sister.",
      "It is a term used without a polite prefix.",
      "For someone else's younger sister, you would say 'いもうとさん'.",
    ],
    overwrite_word: "妹",
  },
  {
    word: "おとうと",
    furigana: "おとうと",
    english: ["younger brother"],
    info: [
      "'おとうと' refers to a younger brother.",
      "It is a term used without a polite prefix.",
      "For someone else's younger brother, you would say 'おとうとさん'.",
    ],
    overwrite_word: "弟",
  },
  {
    word: "おばあさん",
    furigana: "おばあさん",
    english: ["grandmother"],
    info: [
      "'おばあさん' is the polite way to refer to someone's grandmother.",
      "It can be used to refer to your own grandmother in a polite context or someone else's grandmother.",
      "In informal contexts, you might hear 'ばあさん' or 'おばあちゃん'.",
    ],
  },
  {
    word: "おじいさん",
    furigana: "おじいさん",
    english: ["grandfather"],
    info: [
      "'おじいさん' is the polite way to refer to someone's grandfather.",
      "It can be used to refer to your own grandfather in a polite context or someone else's grandfather.",
      "In informal contexts, you might hear 'じいさん' or 'おじいちゃん'.",
    ],
  },
  {
    word: "おばさん",
    furigana: "おばさん",
    english: ["aunt"],
    info: [
      "'おばさん' is the polite way to refer to someone's aunt.",
      "It can be used to refer to your own aunt in a polite context or someone else's aunt.",
      "In informal contexts, you might hear 'ばさん' or 'おばちゃん'.",
    ],
  },
  {
    word: "おじさん",
    furigana: "おじさん",
    english: ["uncle"],
    info: [
      "'おじさん' is the polite way to refer to someone's uncle.",
      "It can be used to refer to your own uncle in a polite context or someone else's uncle.",
      "In informal contexts, you might hear 'じさん' or 'おじちゃん'.",
    ],
  },
  {
    word: "だいがく",
    furigana: "だいがく",
    english: ["college", "university"],
    info: [
      "'だいがく' refers to a college or university.",
      "It is used to describe institutions of higher education.",
      "It can also be part of compound words, such as 'だいがくせい' (college student).",
    ],
    overwrite_word: "大学",
  },
  {
    word: "こうこう",
    furigana: "こうこう",
    english: ["high school"],
    info: [
      "'こうこう' refers to high school.",
      "It is the stage of education before college.",
      "Students in high school are referred to as 'こうこうせい'.",
    ],
    overwrite_word: "高校",
  },
  {
    word: "がくせい",
    furigana: "がくせい",
    english: ["student"],
    info: [
      "'がくせい' is a general term for student.",
      "It can be used to refer to students of all educational levels.",
    ],
    overwrite_word: "学生",
  },
  {
    word: "だいがくせい",
    furigana: "だいがくせい",
    english: ["college student"],
    info: [
      "'だいがくせい' refers to a college or university student.",
      "It combines 'だいがく' (college) and 'せい' (student).",
      "It is commonly used to identify someone's educational status.",
    ],
    overwrite_word: "大学生",
  },
  {
    word: "りゅうがくせい",
    furigana: "りゅうがくせい",
    english: ["international student"],
    info: [
      "'りゅうがくせい' refers to an international student or foreign exchange student.",
      "It combines 'りゅう' (to stay) and 'がくせい' (student).",
      "It is used to describe students who study abroad.",
    ],
    overwrite_word: "留学生",
  },
  {
    word: "～ねんせい",
    furigana: "～ねんせい",
    english: ["...year student"],
    info: [
      "'～ねんせい' is a suffix used to indicate the grade or year of a student.",
      "For example, 'さんねんせい' means 'third-year student'.",
    ],
    overwrite_word: "年生",
  },
  {
    word: "いちねんせい",
    furigana: "いちねんせい",
    english: ["first-year student"],
    info: [
      "'いちねんせい' means 'first-year student'.",
      "It combines 'いち' (one) and 'ねんせい' (year student).",
      "It is commonly used to describe students in their first year of study.",
    ],
    overwrite_word: "一年生",
  },
  {
    word: "せんこう",
    furigana: "せんこう",
    english: ["major"],
    info: [
      "'せんこう' refers to a field of study or major in college.",
      "It is used to describe the primary subject area a student is studying.",
    ],
    overwrite_word: "専攻",
  },
]

export default vocabItems
