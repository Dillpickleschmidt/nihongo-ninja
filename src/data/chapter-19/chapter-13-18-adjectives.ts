import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "悪い",
    furigana: "悪[わる]い",
    english: ["bad"],
  },
  {
    word: "悲しい",
    furigana: "悲[かな]しい",
    english: ["sad"],
    mnemonics: ["Notice 心 (heart) radical at the bottom"],
  },
  {
    word: "厳しい",
    furigana: "厳[きび]しい",
    english: ["strict"],
    info: ["Opposite of 優しい (やさしい -> kind, gentle)"],
  },
  {
    word: "辛い",
    furigana: "辛[から]い",
    english: ["hot and spicy", "salty"],
  },
  {
    word: "近い",
    furigana: "近[ちか]い",
    english: ["close", "near"],
    info: [
      '近く can be used as a noun meaning "vicinity" or "neighborhood"',
      "近い uses に particle: AはBに近い",
      "近く uses の particle: Aの近く (in the vicinity of A)",
    ],
    example_sentences: [
      {
        japanese: "私の家は駅に近いです。",
        english: "My house is close to the station.",
      },
      {
        japanese: "駅の近くに公園があります。",
        english: "There is a park near the station.",
      },
    ],
  },
  {
    word: "幸せ",
    furigana: "幸[しあわ]せ",
    english: ["happy (lasting happiness)"],
    info: ["Used for long lasting happiness (as opposed to うれしい)"],
  },
  {
    word: "欲しい",
    furigana: "欲[ほ]しい",
    english: ["to want"],
    info: [
      "「〜てほしい」はひらがなで書く (write ～てほしい in hiragana)",
      '欲しい means "to want" or "to desire" (for objects or things)',
      "It's an i-adjective in Japanese",
      "Used to express a desire for something tangible, like objects or possessions",
      "欲しい is used for objects or things, たい is used for actions or verbs (wanting to do something)",
      "Like 好き, you cannot directly state what others want, you can only infer or guess what they desire, or quote them saying so",
      "弟は新しいゲームを欲しいです。- This is not correct.",
      "弟は新しいゲームを欲しそうです。- This is fine.",
      "弟は新しいゲームを欲しがっています。- This is also fine.",
      "弟は新しいゲームを欲しいと思います。- This is also fine.",
      "弟は新しいゲームを欲しいと言いました。- This is also fine.",
    ],
    example_sentences: [
      {
        japanese: "新しい携帯電話が欲しいです。",
        english: "I want a new cell phone.",
      },
    ],
    particles: [
      {
        label: "thing",
        particle: "が",
      },
    ],
  },
  {
    word: "汚い",
    furigana: "汚[きたな]い",
    english: ["dirty"],
    mnemonics: [
      "汚 (kitana) has the water radical (氵), implying unclean water",
    ],
    example_sentences: [
      {
        japanese: "この服は汚いので、洗濯しましょう。",
        english: "These clothes are dirty, so let's wash them.",
      },
    ],
  },
  {
    word: "危ない",
    furigana: "危[あぶ]ない",
    english: ["dangerous"],
  },
  {
    word: "少ない",
    furigana: "少[すく]ない",
    english: ["a little", "a few"],
    info: [
      "Opposite: 多い",
      "Related: 少し",
      "Usage notes:",
      "❌多い人 ⭕️多くの人 ⭕️人が多い",
      "❌少ない人 ⭕️人が少ない",
    ],
  },
  {
    word: "強い",
    furigana: "強[つよ]い",
    english: ["strong"],
    info: ["Opposite: 弱い", "Related: 勉強 - makes you strong and powerful!"],
  },
  {
    word: "最悪",
    furigana: "最悪[さいあく]",
    english: ["the worst"],
    example_sentences: [
      {
        japanese: "最悪なパターン",
        english: "Worst pattern/scenario",
      },
    ],
  },
  {
    word: "明るい",
    furigana: "明[あか]るい",
    english: ["bright", "cheerful"],
    info: [
      "Used for both lighting and personality traits",
      "Opposite: 暗い (くらい -> dark)",
    ],
    example_sentences: [
      {
        japanese: "A: 山田さんのへやは電気がなくても明るいですね。",
        english: "A: Yamada-san's room is bright even without lights.",
      },
      {
        japanese:
          "B: ええ。山田さんの性格も明るいし、よく笑うから、クラスのみんなが好きですよ。",
        english:
          "B: Yes. Yamada-san has a cheerful personality too, and since he laughs a lot, everyone in class likes him.",
      },
    ],
  },
  {
    word: "暗い",
    furigana: "暗[くら]い",
    english: ["dark"],
    info: ["Opposite of 明るい"],
  },
  {
    word: "恥ずかしい",
    furigana: "恥[は]ずかしい",
    english: ["embarrassing", "to feel embarrassed"],
  },
  {
    word: "大切",
    furigana: "大切[たいせつ]",
    english: ["important", "precious"],
  },
  {
    word: "不安",
    furigana: "不安[ふあん]",
    english: ["anxious", "worried"],
    info: ["Opposite: 安心(あんしん)な - relieved, assured"],
  },
  {
    word: "無理",
    furigana: "無理[むり]",
    english: ["impossible"],
    mnemonics: ["無(む) = not existing, 理(り) = reason"],
    example_sentences: [
      {
        japanese: "A: 今晩、映画を見に行きませんか。",
        english: "A: Would you like to go see a movie tonight?",
      },
      {
        japanese: "B: すみません。今晩は宿題がたくさんありますから、無理です。",
        english:
          "B: I'm sorry. I have a lot of homework tonight, so it's impossible.",
      },
      {
        japanese: "A: じゃあ、明日は？",
        english: "A: Then how about tomorrow?",
      },
      {
        japanese: "B: はい、明日なら大丈夫です。",
        english: "B: Yes, tomorrow would be fine.",
      },
    ],
  },
  {
    word: "親切",
    furigana: "親[しん]切[せつ]",
    english: ["kind"],
    mnemonics: [
      "Sounds like 'shin-sets.' Picture a kind person who always sets their heart (shin) on doing good.",
    ],
  },
  {
    word: "上手",
    furigana: "上手[じょうず]",
    english: ["skillful", "good at..."],
    particles: [
      {
        particle: "が",
      },
    ],
  },
]

export default vocabItems
