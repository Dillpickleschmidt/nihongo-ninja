import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "そして",
    furigana: "そして",
    english: ["and", "and then"],
    info: [
      "Used to add information or show a sequence of events",
      "Connects sentences or ideas",
      "Often implies a shorter time gap between events compared to それから",
    ],
    example_sentences: [
      {
        japanese: "私は朝ごはんを食べます。そして、学校に行きます。",
        english: "I eat breakfast and then I go to school.",
      },
      {
        japanese: "彼は医者です。そして、彼女は看護師です。",
        english: "He is a doctor. Also, she is a nurse.",
      },
    ],
  },
  {
    word: "それから",
    furigana: "それから",
    english: ["and then", "after that"],
    info: [
      "Similar to そして, but often implies a longer time gap between events",
      "Used to connect sentences or ideas in a sequence",
      "Can also be used to mean 'in addition' or 'moreover'",
    ],
    example_sentences: [
      {
        japanese: "私は宿題をします。それから、テレビを見ます。",
        english: "I do my homework and then I watch TV.",
      },
      {
        japanese: "まず日本語を勉強します。それから、中国語も勉強したいです。",
        english:
          "First I will study Japanese, and then I would like to study Chinese.",
      },
    ],
  },
  {
    word: "でも",
    furigana: "でも",
    english: ["but", "however"],
    info: [
      "Used at the beginning of a sentence to mean 'but' or 'however'",
      "Shows contrast or introduces a contradicting idea",
      "Cannot appear in the middle of a sentence; must be at the beginning",
    ],
    example_sentences: [
      {
        japanese: "日本語は難しいです。でも、楽しいです。",
        english: "Japanese is difficult, but it's fun.",
      },
      {
        japanese: "たいていうちで勉強します。でも、ときどき本を読みます。",
        english: "I usually study at home, but sometimes I read books.",
      },
    ],
  },
  {
    word: "けど",
    furigana: "けど",
    english: ["but", "however", "although"],
    info: [
      "Used to connect two contrasting ideas within a sentence",
      "More casual than が",
      "Often used to introduce a new topic or provide background information",
      "Can be used at the end of a sentence to soften a request or statement",
      "Common in everyday conversation",
    ],
    example_sentences: [
      {
        japanese: "映画は面白かったけど、長かったです。",
        english: "The movie was interesting, but it was long.",
      },
      {
        japanese: "あのう、週末ですけど、映画を見ませんか。",
        english: "Um, it's the weekend, but do you want to see a movie?",
      },
      {
        japanese: "ちょっと暑いんですけど。",
        english: "It's a little hot.",
      },
    ],
  },
  {
    word: "が",
    furigana: "が",
    english: ["but", "however", "although"],
    info: [
      "Similar to けど, but more formal and often used in writing",
      "Used to connect contrasting ideas or provide background information",
      "More common in formal speech or writing",
      "This usage is different from が as a subject marker",
    ],
    example_sentences: [
      {
        japanese: "日本語を勉強していますが、まだ上手ではありません。",
        english: "I'm studying Japanese, but I'm not very good at it yet.",
      },
      {
        japanese: "すみませんが、今はちょっと...",
        english: "Sorry, but right now... (isn't the best time)",
      },
    ],
  },
]

export default vocabItems
