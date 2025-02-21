import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "編む",
    furigana: "編[あ]む",
    english: ["to knit"],
    mnemonics: ["Contains 糸 (thread)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "頑張る",
    furigana: "頑張[がんば]る",
    english: ["to do one's best", "to try hard", "to try one's best"],
  },
  {
    word: "泣く",
    furigana: "泣[な]く",
    english: ["to cry"],
    mnemonics: ["Contains 氵 (water drops)"],
  },
  {
    word: "磨く",
    furigana: "磨[みが]く",
    english: ["to brush (teeth)", "to polish"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "感動する",
    furigana: "感動[かんどう]する",
    english: ["to be moved (emotionally)", "to be touched (emotionally)"],
    mnemonics: ["Notice 心 (heart) radical at the bottom"],
    info: [
      "Often used with the particle に",
      'Basic structure: [Source of emotion] に 感動する "[Subject] is moved by [source of emotion]"',
    ],
    example_sentences: [
      {
        japanese: "美しい景色に感動しました。",
        english: "I was moved by the beautiful scenery.",
      },
    ],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "守る",
    furigana: "守[まも]る",
    english: ["to protect", "to defend", "to keep (a promise/rule)"],
    mnemonics: [
      "The kanji looks like a roof (宀) over a small figure - protecting something under a roof",
    ],
    info: [
      "Can be used for physical protection (e.g., 子供を守る - protect a child)",
      "Also used for abstract concepts (e.g., 約束を守る - keep a promise)",
      "Used with rules/laws (e.g., 規則を守る - follow rules)",
      "Related: お守り (おまもり) - protective charm/amulet",
    ],
    example_sentences: [
      {
        japanese: "秘密を守ってください。",
        english: "Please keep the secret.",
      },
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "送る",
    furigana: "送[おく]る",
    english: ["to send"],
    info: ["おくる can be written in either hiragana or kanji"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "thing",
        particle: "を",
      },
    ],
  },
  {
    word: "似合う",
    furigana: "似合[にあ]う",
    english: ["to look good (on somebody)", "to suit"],
    info: [
      "Structure: 人(に)物(が)似合う - The thing (が) suits the person (に)",
    ],
    particles: [
      {
        label: "thing",
        particle: "が",
      },
    ],
  },
  {
    word: "相談する",
    furigana: "相談[そうだん]する",
    english: ["to consult"],
    mnemonics: [
      'When you consult with someone, you ask them questions. When you learn something new, you say "そうか". That sounds a bit like そうだん, right?',
    ],
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "注意する",
    furigana: "注意[ちゅうい]する",
    english: ["to give warning", "to watch out"],
    mnemonics: ['Han Solo says, "Chewie, watch out!"'],
    example_sentences: [
      {
        japanese: "先生は学生にうるさいと注意しました。",
        english: "The teacher warned the students that they were being noisy.",
      },
      {
        japanese: "道路で注意してください。",
        english: "Please be careful on the road.",
      },
      {
        japanese: "熊に注意してください。",
        english: "Be careful of bears.",
      },
    ],
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "売る",
    furigana: "売[う]る",
    english: ["to sell"],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "下ろす",
    furigana: "下[お]ろす",
    english: ["to withdraw (money)", "to unload"],
    info: ["Can also be used with 荷物を下ろす (to unload luggage)"],
    example_sentences: [
      {
        japanese: "お金を下ろす",
        english: "To withdraw money (literally, unloading money)",
      },
    ],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "探す",
    furigana: "探[さが]す",
    english: ["to look for"],
    info: [
      "Action focused",
      "Refers to the act of searching for something. It implies that the object or information you are looking for has not yet been found.",
      "見つける -> to find X item (item focused)",
      "見つける focuses on the result of the search, indicating that the object is known",
    ],
    example_sentences: [
      {
        japanese: "新しい仕事を探している",
        english: "I'm looking for a new job",
      },
    ],
    particles: [
      {
        label: "item",
        particle: "を",
      },
    ],
  },
  {
    word: "誘う",
    furigana: "誘[さそ]う",
    english: ["to invite"],
    info: ["Structure: 人をopportunityに誘う"],
    example_sentences: [
      {
        japanese: "大学で知り合った友達を家に誘う",
        english: "Invite a friend you met at university over to your house",
      },
    ],
    particles: [
      {
        label: "person",
        particle: "を",
      },
    ],
  },
  {
    word: "付き合う",
    furigana: "付[つ]き 合[あ]う",
    english: ["to date (someone)", "to keep company"],
    info: [
      "Structure: Aさんは/がBさんと付き合っている -> Aさん and Bさん are dating (refers to a committed relationship)",
      "デートする is used for individual dating events, whether or not the people involved are in a serious relationship",
    ],
    particles: [
      {
        label: "person",
        particle: "と",
      },
      {
        label: "purpose",
        particle: "に",
      },
    ],
  },
  {
    word: "着く",
    furigana: "着[つ]く",
    english: ["to arrive"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
    ],
  },
  {
    word: "調べる",
    furigana: "調[しら]べる",
    english: ["to look into (a matter)", "to examine"],
    example_sentences: [
      {
        japanese: "分からない言葉は辞書で調べます。",
        english: "I look up words I don't understand in the dictionary.",
      },
    ],
    particles: [
      {
        label: "matter",
        particle: "を",
      },
    ],
  },
  {
    word: "見える",
    furigana: "見[み]える",
    english: ["to be visible"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "観光する",
    furigana: "観光[かんこう]する",
    english: ["to do sightseeing"],
    mnemonics: ["Contains 見 - meaning 'to see'"],
  },
  {
    word: "予約する",
    furigana: "予約[よやく]する",
    english: ["to reserve", "to make a reservation", "to book an appointment"],
    mnemonics: [
      "予 (よ) means 'beforehand,' 約 (やく) means 'promise' (same as in 約束)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "参加する",
    furigana: "参加[さんか]する",
    english: ["to participate"],
    mnemonics: [
      "参: Consists of the radicals 人 (person) + 大 (big) + 小 (small). Think of 'all kinds of people, big and small, participating together.'",
      "加: The hiragana か and katakana カ were derived from this kanji",
      "To see how other hiragana were derived, check out https://www.reddit.com/r/LearnJapanese/comments/9vwxhn/hiragana_chart_showing_the_kanji_they_came_from/",
    ],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "卒業する",
    furigana: "卒業[そつぎょう]する",
    english: ["to graduate (from...)"],
    mnemonics: ["業 is the same kanji as in 授業 (じゅぎょう; class)"],
    info: [
      "You must use ～を instead of ～から when describing where you're graduating from",
      "Can be used with 式 (しき) to form 卒業式 (graduation ceremony)",
    ],
    particles: [
      {
        label: "school",
        particle: "を",
      },
    ],
  },
  {
    word: "発表する",
    furigana: "発表[はっぴょう]する",
    english: ["to make a presentation", "to make public"],
  },
  {
    word: "起こす",
    furigana: "起[お]こす",
    english: ["to wake (someone) up"],
    mnemonics: [
      "起 (o) means 'wake up', こす (kosu) sounds like 'coax' - coaxing someone to wake up",
    ],
    info: [
      "Transitive verb (V.T.)",
      "Compare with intransitive verb (V.I.) 起きる (to wake up)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "朝、弟を起こします。",
        english: "I wake up my younger brother in the morning.",
      },
    ],
  },
  {
    word: "笑う",
    furigana: "笑[わら]う",
    english: ["to laugh"],
    mnemonics: ["笑 (wara) looks like a person laughing with their mouth open"],
    info: [
      "Different types of laughter:",
      "アハハと笑う (to laugh 'ahaha')",
      "ガハハと笑う (to burst into laughter)",
      "ウフフと笑う (to giggle)",
      "エヘヘと笑う (embarrassed grin)",
      "ニコニコ笑う (to smile)",
      "ニコッと笑う (to grin)",
      "クスッと笑う (to chuckle)",
    ],
    example_sentences: [
      {
        japanese: "面白い話を聞いて、みんなが笑いました。",
        english: "Everyone laughed after hearing the funny story.",
      },
    ],
  },
  {
    word: "落ち込む",
    furigana: "落[お]ち 込[こ]む",
    english: ["to get depressed"],
    mnemonics: [
      "落ち (ochi) means 'fall', 込む (komu) means 'go into' - falling into a low mood",
    ],
    info: [
      "落ち込む means 'to GET depressed'",
      "落ち込んでいる means 'to be depressed' (ongoing state)",
    ],
    example_sentences: [
      {
        japanese: "試験に失敗して、落ち込んでいます。",
        english: "I'm feeling depressed because I failed the exam.",
      },
    ],
  },
  {
    word: "困る",
    furigana: "困[こま]る",
    english: ["to have difficulty", "to have troubles"],
    mnemonics: [
      "困 (koma) looks like a box (囗) with a tree (木) inside - being trapped in a difficult situation",
    ],
    example_sentences: [
      {
        japanese: "お金がなくて困っています。",
        english: "I'm having difficulty because I don't have money.",
      },
    ],
  },
  {
    word: "直す",
    furigana: "直[なお]す",
    english: ["to correct", "to fix"],
    mnemonics: [
      "直 (nao) means 'straight/direct' - making something right again",
    ],
    info: [
      "Common uses: 宿題を直す (to correct homework), 家具を直す (to fix furniture)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "先生が宿題の間違いを直してくれました。",
        english: "The teacher corrected the mistakes in my homework.",
      },
    ],
  },
  {
    word: "訳す",
    furigana: "訳[やく]す",
    english: ["to translate"],
    mnemonics: [
      "訳 (yaku) means 'translate/meaning', す (su) is a verb ending",
    ],
    info: [
      "Kanji breakdown: 言 (say) + 尺 (measure) - measuring what is said in another language",
    ],
    particles: [
      {
        label: "source",
        particle: "を",
      },
      {
        label: "target",
        particle: "に",
      },
    ],
    example_sentences: [
      {
        japanese: "この文章を日本語から英語に訳しました。",
        english: "I translated this text from Japanese to English.",
      },
    ],
  },
  {
    word: "貸す",
    furigana: "貸[か]す",
    english: ["to lend", "to loan"],
    mnemonics: [
      "貸 (ka) has the money radical (貝), implying lending money or valuables",
    ],
    info: ["Opposite: 借りる (to borrow)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "thing",
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "友達に本を貸しました。",
        english: "I lent a book to my friend.",
      },
    ],
  },
  {
    word: "集める",
    furigana: "集[あつ]める",
    english: ["to collect"],
    mnemonics: ["集 (atsu) means 'gather', める (meru) is a verb ending"],
    info: ["Transitive verb (V.T.)", "Related: 集まる (V.I., to gather)"],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "切手を集めています。",
        english: "I'm collecting stamps.",
      },
      {
        japanese: "１０時に集まってください。",
        english: "Please gather at 10 o'clock.",
      },
      {
        japanese: "私は猫が大好きで、猫のグッズを集めています。",
        english: "I love cats and collect cat goods.",
      },
    ],
  },
  {
    word: "寝坊する",
    furigana: "寝坊[ねぼう]する",
    english: ["to oversleep"],
    example_sentences: [
      {
        japanese: "今朝、朝寝坊して、遅刻しました。",
        english: "I overslept this morning and was late.",
      },
    ],
  },
  {
    word: "案内する",
    furigana: "案内[あんない]する",
    english: ["to show (someone) around"],
    mnemonics: ["案内 (annai) means 'guidance', する (suru) makes it a verb"],
    info: ["Usage: 人にPlaceを案内する (to show a place to someone)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        label: "place",
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "友達に町を案内しました。",
        english: "I showed my friend around town.",
      },
    ],
  },
  {
    word: "説明する",
    furigana: "説明[せつめい]する",
    english: ["to explain"],
    mnemonics: ["Kanji breakdown: 説 (explain) + 明 (bright, clear)"],
    info: [
      "Common mistake: ❌️説明をあげる (to give explanation) - simply use 説明した",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "先生が問題を説明しました。",
        english: "The teacher explained the problem.",
      },
    ],
  },
  {
    word: "迎えに来る",
    furigana: "迎[むか]えに 来[く]る",
    english: ["to come pick up"],
    mnemonics: [
      "迎え (mukae) means 'to meet/greet', 来る (kuru) means 'to come'",
    ],
    info: ["Opposite of 迎えに行く (to go to pick up)"],
    particles: [
      {
        label: "place",
        particle: "に",
      },
      {
        label: "person",
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "母が学校に私を迎えに来ました。",
        english: "My mother came to school to pick me up.",
      },
    ],
  },
  {
    word: "失礼する",
    furigana: "失礼[しつれい]する",
    english: ["to excuse oneself", "to leave", "to be rude"],
    mnemonics: [
      "失(しつ) means 'lose' and 礼(れい) means 'manners' - when you excuse yourself, you're temporarily 'losing manners' by interrupting or leaving",
    ],
    info: [
      "Often used when leaving a room or ending a conversation",
      "Can be more polite as 失礼します (shitsurei shimasu)",
      "Also used to apologize for being rude",
    ],
    example_sentences: [
      {
        japanese: "ちょっと失礼します。",
        english: "Excuse me for a moment.",
      },
    ],
  },
  {
    word: "選ぶ",
    furigana: "選[えら]ぶ",
    english: ["to choose", "to select"],
    info: ["Related word: 選挙(せんきょ) meaning election"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "沸かす",
    furigana: "沸[わ]かす",
    english: ["to boil"],
  },
  {
    word: "脱ぐ",
    furigana: "脱[ぬ]ぐ",
    english: ["to take off (clothes)"],
    info: [
      "Used in pairs with wearing verbs:",
      "シャツを着る、脱ぐ (for shirts)",
      "ブーツをはく、ブーツを脱ぐ (for boots)",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "混む",
    furigana: "混[こ]む",
    english: ["to get crowded"],
    info: ["Used to describe traffic: (道が）混んでいる (there is traffic)"],
    example_sentences: [
      {
        japanese: "道が混んでいる",
        english: "There is traffic",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "足りる",
    furigana: "足[た]りる",
    english: ["to be sufficient", "to be enough"],
    example_sentences: [
      {
        japanese: "時間が足りない",
        english: "There isn't enough time",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "慣れる",
    furigana: "慣[な]れる",
    english: ["to get used to"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "化粧する",
    furigana: "化粧[けしょう]する",
    english: ["to put makeup on", "to put on makeup"],
    mnemonics: ["化粧 from 化粧品"],
  },
  {
    word: "就職する",
    furigana: "就職[しゅうしょく]する",
    english: ["to get a full-time job"],
    info: [
      "Similar expressions:",
      "〜で働く (to work at)",
      "〜に務める (to work for/serve at)",
    ],
    particles: [
      {
        label: "company",
        particle: "に",
      },
    ],
  },
  {
    word: "離婚する",
    furigana: "離婚[りこん]する",
    english: ["to get a divorce"],
    mnemonics: ["The 婚 character is the same as in 結婚 (marriage)"],
    particles: [
      {
        label: "person",
        particle: "と",
      },
    ],
  },
  {
    word: "片付ける",
    furigana: "片付[かたづ]ける",
    english: ["to tidy up"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "消える",
    furigana: "消[き]える",
    english: [
      "(something) goes off",
      "(something) disappears",
      "(a light) goes out",
    ],
    info: ["Intransitive verb (v.i.)", "Transitive pair: 消す(けす)"],
    example_sentences: [
      {
        japanese:
          "このコンピューター、消しても消えない〜！！困ったなあ。壊れちゃったのかな。",
        english:
          "This computer won't turn off even when I try to shut it down! What a problem. I wonder if it's broken.",
      },
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "壊れる",
    furigana: "壊[こわ]れる",
    english: [
      "(something) breaks",
      "(something) is broken",
      "to become broken",
    ],
    info: ["Intransitive pair of 壊す"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "開く",
    furigana: "開[あ]く",
    english: ["(something) opens"],
    info: [
      "Intransitive verb (v.i.)",
      "Transitive pair: 開ける(あける)",
      "Used with が particle",
    ],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "閉まる",
    furigana: "閉[し]まる",
    english: ["(something) closes"],
    mnemonics: ["Both 開 and 閉 characters contain 門 (gate)"],
    info: ["Intransitive verb (v.i.)", "Transitive pair: 閉める(しめる)"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "謝る",
    furigana: "謝[あやま]る",
    english: ["to apologize"],
    mnemonics: ["Contains the radical 言 (word)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
    ],
  },
  {
    word: "押す",
    furigana: "押[お]す",
    english: ["to push", "to press"],
    mnemonics: ["Contains the radical 手 (hand)"],
    info: [
      "Basic physical action of pushing/pressing",
      "Used for buttons, doorbells, keypads",
      "Can be combined with various particles:",
      "- を押す: direct pushing of an object",
      "- に押す: pushing against something",
    ],
    particles: [
      {
        particle: "を",
      },
    ],
    example_sentences: [
      {
        japanese: "エレベーターのボタンを押してください。",
        english: "Please press the elevator button.",
      },
    ],
  },
  {
    word: "落とす",
    furigana: "落[お]とす",
    english: ["to drop (something)"],
    info: ["Transitive pair of 落ちる"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "転ぶ",
    furigana: "転[ころ]ぶ",
    english: ["to fall down"],
    mnemonics: ["Same 転 as in 自転車 meaning 'to roll'"],
  },
  {
    word: "咲く",
    furigana: "咲[さ]く",
    english: ["to bloom"],
    particles: [
      {
        particle: "が",
      },
    ],
  },
  {
    word: "助かる",
    furigana: "助[たす]かる",
    english: ["to be saved", "to be helped"],
    info: [
      "Common phrase: (〜さんのおかげで)助かりました",
      "Note: Used for thanking outsiders, not family/superiors",
      "Transitive pair: 助ける",
    ],
  },
  {
    word: "頼む",
    furigana: "頼[たの]む",
    english: ["to ask (a favor)", "to request"],
    info: ["Related noun: 頼み (request, favor)"],
    particles: [
      {
        label: "person",
        particle: "に",
      },
      {
        particle: "を",
      },
    ],
  },
  {
    word: "汚す",
    furigana: "汚[よご]す",
    english: ["to make dirty"],
    info: ["Transitive pair of 汚れる", "Related: 汚い(きたない)"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "注文する",
    furigana: "注文[ちゅうもん]する",
    english: ["to place an order"],
    mnemonics: ["Uses same 注 as in 注意する"],
    info: ["Can be used both for online shopping and in-store orders"],
    particles: [
      {
        particle: "を",
      },
    ],
  },
  {
    word: "送る",
    furigana: "送[おく]る",
    english: ["to walk/drive (someone)", "to escort (a person somewhere)"],
    info: ["Honorific usage depends on context"],
    particles: [
      {
        label: "person",
        particle: "を",
      },
      {
        label: "place",
        particle: "まで",
      },
    ],
  },
  {
    word: "遅れる",
    furigana: "遅[おく]れる",
    english: ["to become late"],
    info: ["Intransitive verb"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "乗る",
    furigana: "乗[の]る",
    english: ["to ride", "to board"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
  {
    word: "入る",
    furigana: "入[はい]る",
    english: ["to enter"],
    particles: [
      {
        particle: "に",
      },
    ],
  },
]

export default vocabItems
