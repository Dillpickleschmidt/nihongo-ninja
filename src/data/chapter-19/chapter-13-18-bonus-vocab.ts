import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "夫婦",
    furigana: "夫婦[ふうふ]",
    english: ["married couple", "husband and wife"],
    mnemonics: ["Combines 夫 (husband) and 婦 (wife)"],
    info: [
      "夫 is also used in 夫 (おっと) - 'my husband'",
      "婦 is also found in 主婦 (しゅふ) - 'housewife'",
      "Can be made polite with ご as ご夫婦",
    ],
    example_sentences: [
      {
        japanese: "田中さんご夫婦は毎朝公園を散歩します。",
        english: "Mr. and Mrs. Tanaka take a walk in the park every morning.",
      },
    ],
  },
  {
    word: "親戚",
    furigana: "親戚[しんせき]",
    english: ["relative", "relatives", "extended family"],
    mnemonics: [
      "親 (しん) means 'parent/relative' and appears in 両親 (parents)",
      "Can think of 戚 as representing the extended branches of the family tree",
    ],
    info: [
      "Refers to extended family members beyond immediate family",
      "Can be made polite with ご as ご親戚",
      "Different from 家族 (かぞく) which refers to immediate family",
    ],
    example_sentences: [
      {
        japanese: "お正月に親戚が集まります。",
        english: "Relatives gather for New Year's.",
      },
    ],
  },
  {
    word: "留守番",
    furigana: "留守番[るすばん]",
    english: ["house-sitting", "watching the house", "staying home"],
    mnemonics: [
      "留守 (るす) means 'absent/away from home' and 番 (ばん) means 'to watch/guard' - watching over something while others are away",
    ],
    info: [
      "Often used in the phrase 留守番をする (to house-sit/stay home)",
      "Can refer to both watching a house while owners are away, or staying home while family members go out",
      "The word 留守 by itself means 'away from home/absent'",
    ],
    example_sentences: [
      {
        japanese: "弟が留守番をしている間に、買い物に行きました。",
        english: "I went shopping while my younger brother stayed home.",
      },
    ],
  },
  {
    word: "主な",
    furigana: "主[おも]な",
    english: ["main", "principal", "primary"],
    mnemonics: [
      "Same 主 as in 主人 (しゅじん - master/owner) - the main/principal person",
    ],
    info: [
      "A な-adjective that must be followed by a noun",
      "Often used in academic or formal writing to describe key points or main aspects",
      "Related words include 主に (おもに - mainly) and 主役 (しゅやく - leading role)",
    ],
    example_sentences: [
      {
        japanese: "この会社の主な商品は携帯電話です。",
        english: "This company's main product is mobile phones.",
      },
    ],
  },
  {
    word: "申す",
    furigana: "申[もう]す",
    english: [
      "to say (humble)",
      "to be called (humble)",
      "extra-modest expression for いう",
    ],
    mnemonics: [
      "Humble version of 言う",
      "Same kanji as in 申し訳ありません (もうしわけありません - I'm very sorry)",
    ],
    info: [
      "Very humble/polite way of saying 言う",
      "Often used in set phrases like 申し上げます",
      "Common in phrase 〜と申します (My name is...) when introducing oneself very formally",
      "Used primarily in business and very formal situations",
    ],
    example_sentences: [
      {
        japanese: "田中と申します。",
        english: "My name is Tanaka. (humble)",
      },
    ],
  },
  {
    word: "迷う",
    furigana: "迷[まよ]う",
    english: ["to get lost", "to be puzzled", "to hesitate"],
    mnemonics: [
      "The character 迷 shows a person (辵) wandering through threads/paths (米) - like being lost in a maze",
    ],
    info: [
      "Can be used both for physically getting lost (道に迷う) and mental uncertainty",
      "Common in phrases like 迷っています (I'm undecided/hesitating)",
      "Often used when choosing between options or making decisions",
      "Related: 迷子 (まいご - lost child)",
    ],
    example_sentences: [
      {
        japanese: "どちらを選べばいいか迷っています。",
        english: "I'm having trouble deciding which one to choose.",
      },
    ],
    particles: [
      {
        particle: "に",
      },
      {
        particle: "で",
      },
    ],
  },
  {
    word: "ある日",
    furigana: "ある 日[ひ]",
    english: ["one day", "a certain day"],
    mnemonics: ["Like 'once upon a time' in stories"],
    info: [
      "Often used at the beginning of stories or anecdotes",
      "Similar to English phrase 'one day' when telling a story",
    ],
    example_sentences: [
      {
        japanese: "ある日、突然電話がかかってきました。",
        english: "One day, I suddenly received a phone call.",
      },
    ],
  },
  {
    word: "この年",
    furigana: "この 年[とし]",
    english: ["this year", "that year (in context)"],
    info: [
      "Often used in storytelling to refer to a specific year being discussed",
      "Can refer to either the current year or a year being discussed in a story",
    ],
  },
  {
    word: "年下",
    furigana: "年下[としせた]",
    english: ["younger", "junior"],
    mnemonics: ["年 (year) + 下 (below) = someone with fewer years"],
    info: [
      "Opposite of 年上 (としうえ)",
      "Used to describe someone younger than the subject",
      "Can be used as a noun: 年下の人 (younger person)",
    ],
  },
  {
    word: "年代",
    furigana: "年代[ねんだい]",
    english: ["era", "period", "decade"],
    mnemonics: ["年 (year) + 代 (generation/era)"],
    info: [
      "Used for talking about decades (70年代 - the 70s)",
      "Can also refer to historical periods",
      "Often used in phrases like その年代 (that era)",
    ],
  },
  {
    word: "一生",
    furigana: "一生[いっしょう]",
    english: ["whole life", "lifetime", "all one's life"],
    mnemonics: ["一 (one) + 生 (life) = one's entire life"],
    info: [
      "Often used in phrases like 一生懸命 (いっしょうけんめい - with all one's might)",
      "Can be used as 一生の in phrases like 一生の思い出 (lifetime memory)",
    ],
  },
  {
    word: "一年中",
    furigana: "一年中[いちねんじゅう]",
    english: ["all year round", "throughout the year"],
    mnemonics: ["一年 (one year) + 中 (during/throughout)"],
    info: [
      "Similar pattern to 一日中 (いちにちじゅう - all day long)",
      "Implies something happens continuously throughout the year",
    ],
  },
  {
    word: "一ヶ月後",
    furigana: "一[いっ]ヶ月[かげつ]後[ご]",
    english: ["one month later", "after one month"],
    mnemonics: ["一ヶ月 (one month) + 後 (after)"],
    info: [
      "ヶ月 is also seen in ３ヶ月 (three months), ６ヶ月 (six months), etc.",
      "Can modify with any number: 二ヶ月後, 三ヶ月後, etc.",
    ],
  },
  {
    word: "女子",
    furigana: "女子[じょし]",
    english: ["girl", "female"],
    mnemonics: ["女 (woman) + 子 (child/person)"],
    info: [
      "Often used in academic or sports contexts",
      "Common in compound words like 女子大 (women's university)",
      "More formal than 女の子",
      "Used in terms like 女子トイレ (women's restroom)",
    ],
  },
  {
    word: "男子",
    furigana: "男子[だんし]",
    english: ["boy", "male"],
    mnemonics: ["男 (man) + 子 (child/person)"],
    info: [
      "Often used in academic or sports contexts",
      "More formal than 男の子",
      "Used in terms like 男子トイレ (men's restroom)",
      "Common in phrases like 男子学生 (male student)",
    ],
  },
]

export default vocabItems
