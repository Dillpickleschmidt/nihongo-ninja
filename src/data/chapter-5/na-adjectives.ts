import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "好き",
    furigana: "好[す]き",
    english: ["fond of", "to like"],
    info: ["な-adjective"],
    particles: [
      {
        particle: "が",
      },
    ],
    extra: "https://www.youtube.com/shorts/ReEoMi0syDA?feature=share",
  },
  {
    word: "嫌い",
    furigana: "嫌[きら]い",
    english: ["disgusted with", "to dislike"],
    info: ["な-adjective"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "大好き",
    furigana: "大[だい]好[す]き",
    english: ["very fond of", "to love"],
    info: ["な-adjective"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "大嫌い",
    furigana: "大[だい]嫌[きら]い",
    english: ["to hate"],
    info: ["な-adjective"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "きれい",
    furigana: "きれい",
    english: ["beautiful", "clean"],
    info: ["な-adjective"],
  },
  {
    word: "元気",
    furigana: "元[げん]気[き]",
    english: ["healthy", "energetic"],
    info: ["な-adjective"],
  },
  {
    word: "静か",
    furigana: "静[しず]か",
    english: ["quiet"],
    info: ["な-adjective"],
  },
  {
    word: "にぎやか",
    furigana: "にぎやか",
    english: ["lively"],
    info: ["な-adjective"],
  },
  {
    word: "暇",
    furigana: "暇[ひま]",
    english: ["not busy", "to have a lot of free time"],
    info: [
      "While '暇' means 'not busy' or 'having free time,' it can carry a slightly negative connotation, as it implies someone might be unoccupied or idle.",
      "Incorrect usage: 先生、質問があります。今暇ですか。",
      "Correct alternatives: ",
      "  - 質問がありますけど、今、いいですか。 (I have a question, but is now okay?)",
      "  - 今時間がありますか。 (Do you have time now?)",
    ],
    example_sentences: [
      {
        japanese: "今日は暇です。",
        english: "I am free today.",
      },
      {
        japanese: "暇な時に本を読みます。",
        english: "I read books when I have free time.",
      },
    ],
  },
]

export default vocabItems
