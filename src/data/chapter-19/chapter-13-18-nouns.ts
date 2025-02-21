import type { VocabItem } from "@/types/vocab.ts"

const vocabItems: VocabItem[] = [
  {
    word: "大人",
    furigana: "大人[おとな]",
    english: ["adult"],
    mnemonics: ["Big (大) person (人) = adult"],
  },
  {
    word: "弁護士",
    furigana: "弁護士[べんごし]",
    english: ["lawyer"],
    info: [
      "It refers to legal professionals who represent clients in court and provide legal advice.",
      'The term combines "弁護" (defense) and "士" (professional).',
    ],
  },
  {
    word: "紅茶",
    furigana: "紅茶[こうちゃ]",
    english: ["black tea"],
    info: [
      "Literally means 'red tea' in Japanese, referring to the reddish color of black tea",
      "Introduced to Japan in the 17th century by Dutch traders",
      "Often served with milk and sugar, unlike traditional Japanese green tea",
    ],
  },
  {
    word: "着物",
    furigana: "着物[きもの]",
    english: ["kimono", "Japanese traditional dress"],
    mnemonics: ["Wear (着) + thing (物) = kimono"],
    info: [
      "Evolved from the Chinese hanfu during the Heian period (794-1185)",
      "Became the main form of dress for all classes in Japan during the Edo period (1603-1867)",
    ],
  },
  {
    word: "楽器",
    furigana: "楽器[がっき]",
    english: ["musical instrument"],
    info: [
      "音楽に使うもの - Things used for music",
      "Uses the same 楽 kanji as in 音楽",
    ],
    example_sentences: [
      {
        japanese: "子どものころ、楽器を３つ練習しました。",
        english: "When I was a child, I practiced three musical instruments.",
      },
    ],
  },
  {
    word: "空手",
    furigana: "空手[からて]",
    english: ["karate"],
    mnemonics: ["Empty (空) + hand (手) = karate"],
  },
  {
    word: "言葉",
    furigana: "言葉[ことば]",
    english: ["language", "word", "speech"],
    mnemonics: ["Contains 言 from 言う (to say)"],
    info: [
      "Can refer to a single word, a phrase, or an entire language",
      "Often used to discuss manner of speaking or choice of words",
    ],
  },
  {
    word: "空港",
    furigana: "空港[くうこう]",
    english: ["airport"],
    mnemonics: ["空 sky + 港 port = skyport/airport"],
  },
  {
    word: "店",
    furigana: "店[みせ]",
    english: ["shop", "store"],
    info: [
      "General term for any kind of shop or store",
      "Often used in compound words to specify type of store",
    ],
  },
  {
    word: "物価",
    furigana: "物価[ぶっか]",
    english: ["consumer prices", "cost of living"],
    info: ["prices of commodities, prices in general, cost-of-living"],
  },
  {
    word: "広告",
    furigana: "広告[こうこく]",
    english: ["advertisement"],
    mnemonics: ["Wide (広) + inform (告) = advertisement"],
  },
  {
    word: "募集",
    furigana: "募集[ぼしゅう]",
    english: ["recruitment"],
  },
  {
    word: "約束",
    furigana: "約束[やくそく]",
    english: ["promise", "appointment"],
  },
  {
    word: "経験",
    furigana: "経験[けいけん]",
    english: ["experience"],
    example_sentences: [
      {
        japanese: "結婚のご経験はありますか？",
        english: "Have you ever been married before?",
      },
    ],
  },
  {
    word: "奥さん",
    furigana: "奥[おく]さん",
    english: ["(your/someone's) wife"],
    info: [
      'The term literally means "inner person" or "person in the depths." This reflects the traditional role of women in Japanese households, where they were expected to manage the inner workings of the home. Though this term has faced some criticism, the term is still widely used in Japan today.',
      "Despite being a respectful term for others' wives, when used by a husband to refer to his own wife in public, it can be seen as slightly distancing or formal. For that situation, you might use the word 妻 (tsuma).",
    ],
    example_sentences: [
      {
        japanese:
          "田中さんの奥さんは毎朝5時に起きて、富士山(Mt. Fuji)が見える公園でヨガをしているそうです。",
        english:
          "I hear that Mr. Tanaka's wife wakes up at 5am every morning and does yoga in a park with a view of Mt. Fuji.",
      },
    ],
  },
  {
    word: "ご主人",
    furigana: "ご 主人[しゅじん]",
    english: ["(your/someone's) husband"],
    info: [
      'ご主人 literally translates to "honorable master" or "honorable husband," where ご means "honorable", and 主人 means "master."',
      "This is still commonly used by many women, especially in more formal situations. However, it's becoming less popular among younger generations.",
      "When referring to your own husband, you could also use the word 夫 (otto) instead.",
      "It can also refer to someone's master.",
    ],
    example_sentences: [
      {
        japanese:
          "田中さんのご主人は料理が上手で、毎週日曜日に奥さんのために朝ごはんを作るそうです。",
        english:
          "I hear that Tanaka's husband is a good cook and makes breakfast for his wife every Sunday.",
      },
    ],
  },
  {
    word: "両親",
    furigana: "両親[りょうしん]",
    english: ["parents"],
    mnemonics: ['両 (ryō) means "both" and 親 (shin) means "parent."'],
    example_sentences: [
      {
        japanese: "私の両親は毎日7時に起きて、一緒に朝ごはんを食べます。",
        english:
          "My parents wake up at 7 o'clock every day and eat breakfast together.",
      },
    ],
  },
  {
    word: "大家さん",
    furigana: "大家[おおや]さん",
    english: ["landlord", "landlady"],
    mnemonics: ['大 (ō) means "big," 家 (ya) means "house,"'],
    example_sentences: [
      {
        japanese:
          "大家さんは親切で、エアコンが壊れたときすぐに直してくれました。",
        english:
          "The landlord was kind and fixed the air conditioner right away when it broke.",
      },
    ],
  },
  {
    word: "指輪",
    furigana: "指輪[ゆびわ]",
    english: ["ring"],
    mnemonics: [
      '指 (yubi) means "finger," and 輪 (wa) means "ring" or "circle"',
    ],
    example_sentences: [
      {
        japanese:
          "ロード・オブ・ザ・リングでフロドは魔法の指輪を持っています。",
        english: "In The Lord of the Rings, Frodo carries a magic ring.",
      },
    ],
  },
  {
    word: "鉛筆",
    furigana: "鉛筆[えんぴつ]",
    english: ["pencil"],
    mnemonics: ['Sounds like "a pencil."'],
  },
  {
    word: "漫画",
    furigana: "漫画[まんが]",
    english: ["manga", "comic book"],
  },
  {
    word: "履歴書",
    furigana: "履歴書[りれきしょ]",
    english: ["resume", "résumé"],
    info: [
      "Many Japanese companies still expect handwritten 履歴書 in the modern day, though this is changing in some industries.",
      "especially due to changes brought on by the COVID-19 pandemic.",
    ],
  },
  {
    word: "外国人",
    furigana: "外国人[がいこくじん]",
    english: ["foreigner"],
    mnemonics: [
      "外 (gai) means 'outside', 国 (koku) means 'country', and 人 (jin) means 'person'",
    ],
    example_sentences: [
      {
        japanese: "日本には多くの外国人が住んでいます。",
        english: "Many foreigners live in Japan.",
      },
    ],
  },
  {
    word: "絵",
    furigana: "絵[え]",
    english: ["painting", "picture", "drawing"],
    mnemonics: [
      "Consists of kanji for 'thread' and 'meet,' think of a paintbrush meeting the woven canvas (made of thread).",
    ],
    info: [
      "This word can refer to any kind of pictorial representation, from fine art to children's drawings.",
    ],
    example_sentences: [
      {
        japanese: "彼女は絵を描くのが上手です。",
        english: "She is good at drawing pictures.",
      },
    ],
  },
  {
    word: "地図",
    furigana: "地図[ちず]",
    english: ["map"],
    mnemonics: [
      "地 (chi) means 'earth', and 図 (zu) means 'diagram' - A map is really just a diagram of a section of Earth.",
    ],
    info: [
      "This word can refer to any type of map, from a world map to a subway map.",
      "In the age of smartphones, physical maps are less common, but the word is still used for digital maps as well.",
    ],
  },
  {
    word: "辞書",
    furigana: "辞書[じしょ]",
    english: ["dictionary"],
    mnemonics: ["辞 (ji) means 'word' and 書 (sho) means 'write'"],
    info: ["This word can refer to both physical and digital dictionaries."],
    example_sentences: [
      {
        japanese: "分からない言葉は辞書で調べます。",
        english: "I look up words I don't understand in the dictionary.",
      },
    ],
  },
  {
    word: "家具",
    furigana: "家具[かぐ]",
    english: ["furniture"],
    mnemonics: [
      "家 (ka) means 'house', and 具 (gu) means 'tool' or 'equipment'",
    ],
    info: [
      "This word refers to any kind of furniture used in a home or office.",
      "Large furniture stores like IKEA are called 家具店 (kaguten) in Japanese.",
    ],
  },
  {
    word: "電池",
    furigana: "電池[でんち]",
    english: ["battery"],
    example_sentences: [
      {
        japanese: "リモコンの電池が切れたので、新しいのを買いに行きました。",
        english:
          "The remote control's batteries died, so I went to buy new ones.",
      },
    ],
  },
  {
    word: "割引券",
    furigana: "割引券[わりびきけん]",
    english: ["discount coupon"],
    info: [
      "This term is used for various types of discount coupons, from those found in magazines to digital coupons used in online shopping.",
      "In casual speech, people might just say クーポン (kuupon), which is a loanword from English.",
    ],
  },
  {
    word: "地震",
    furigana: "地震[じしん]",
    english: ["earthquake"],
    mnemonics: [
      "地 (ji) means 'earth' and 震 (shin) means 'shake' - Earth shake.",
    ],
    info: [
      "Japan is located in a seismically active area, so this word is unfortunately quite common.",
      "There are different scales to measure earthquakes in Japan, including the shindo (震度) scale, which measures the intensity of shaking at a specific location.",
    ],
    example_sentences: [
      {
        japanese: "昨日、小さな地震がありました。",
        english: "There was a small earthquake yesterday.",
      },
    ],
  },
  {
    word: "保険",
    furigana: "保険[ほけん]",
    english: ["insurance"],
    mnemonics: ["保 (ho) means 'protect' and 険 (ken) means 'danger'"],
    info: [
      "This word covers all types of insurance, including health insurance, life insurance, and property insurance.",
      "In Japan, everyone is required to have health insurance, either through their employer or through the national health insurance system.",
      "保険に入る -> to get insurance (e.g., against thefts or accidents)",
    ],
    example_sentences: [
      {
        japanese: "こんなことならもうちょい手厚い保険に入っとくんだったな。",
        english:
          "If I'd known this was going to happen, I would've enrolled in a jucier life insurance package.",
      },
    ],
  },
  {
    word: "税金",
    furigana: "税金[ぜいきん]",
    english: ["tax"],
    mnemonics: [
      "Contains 金 (きん -> money) and 兄 (older brother) with horns. Think of sitting in a tree with a pair of binoculars, observing your evil older brother extorting others for money from afar.",
    ],
    info: [
      "This word refers to any kind of tax, including income tax, sales tax, and property tax.",
      "Japan has a consumption tax (消費税, shouhizei) which is similar to sales tax or VAT in other countries.",
      "税金を払う -> to pay taxes",
    ],
    example_sentences: [
      {
        japanese: "来月は税金を払わなければなりません。",
        english: "I have to pay taxes next month.",
      },
    ],
  },
  {
    word: "教室",
    furigana: "教室[きょうしつ]",
    english: ["classroom"],
    mnemonics: [
      "教 (kyou) means 'teach', and 室 (shitsu) means 'room' (which you've seen in words like 部屋)",
    ],
  },
  {
    word: "建物",
    furigana: "建物[たてもの]",
    english: ["building"],
    mnemonics: ["建 (tate) means 'build', and 物 (mono) means 'thing'"],
    info: [
      "This word can refer to any type of building, from houses to skyscrapers.",
    ],
    example_sentences: [
      {
        japanese: "東京には高い建物がたくさんあります。",
        english: "There are many tall buildings in Tokyo.",
      },
    ],
  },
  {
    word: "映画館",
    furigana: "映画館[えいがかん]",
    english: ["movie theater"],
    mnemonics: [
      "映画 (eiga) means 'movie', and 館 (kan) means 'building' or 'hall'",
    ],
    example_sentences: [
      {
        japanese: "週末に友達と映画館で新作映画を見ました。",
        english:
          "I watched a new movie with my friends at the movie theater on the weekend.",
      },
    ],
  },
  {
    word: "旅館",
    furigana: "旅館[りょかん]",
    english: ["Japanese inn"],
    mnemonics: [
      "旅 (ryo) means 'travel', and 館 (kan) means 'building' or 'hall'",
    ],
    info: [
      "Ryokan are traditional Japanese inns that typically feature tatami-matted rooms, communal baths, and other public areas where visitors may wear yukata and talk with the owner.",
      "Many ryokan are known for their cuisine, featuring local and seasonal specialties.",
    ],
    example_sentences: [
      {
        japanese: "温泉地で有名な旅館に泊まりました。",
        english: "I stayed at a famous ryokan in a hot spring area.",
      },
    ],
  },
  {
    word: "庭",
    furigana: "庭[にわ]",
    english: ["garden"],
    example_sentences: [
      {
        japanese: "祖父は毎日庭の手入れをしています。",
        english: "My grandfather takes care of the garden every day.",
      },
    ],
  },
  {
    word: "活動",
    furigana: "活動[かつどう]",
    english: ["activity"],
    mnemonics: [
      "活 (katsu) means 'activity', and 動 (dou) means 'move' (which you've already seen in words like 動物 (とうぶつ - animal)",
    ],
    info: [
      "This word can refer to various types of activities, from club activities at school to social or political activities.",
      "It's often used in compound words, like 課外活動 (extracurricular activities) or 経済活動 (economic activities).",
    ],
  },
  {
    word: "経験",
    furigana: "経験[けいけん]",
    english: ["experience"],
    mnemonics: [
      "経 (けい) means 'to pass through' and 験 (けん) means 'test' or 'trial'",
    ],
    info: [
      "This word can refer to both general life experiences and specific work experiences.",
      "In job applications, 経験者 (keiken-sha) refers to someone with relevant experience.",
    ],
  },
  {
    word: "習慣",
    furigana: "習慣[しゅうかん]",
    english: ["custom"],
    mnemonics: [
      "習 (shuu) means 'learn', and 慣 (kan) means 'become accustomed to'",
    ],
    info: [
      "This word can refer to personal habits as well as cultural customs.",
    ],
    example_sentences: [
      {
        japanese: "毎朝ジョギングをするのが私の習慣です。",
        english: "It's my habit to go jogging every morning.",
      },
    ],
  },
  {
    word: "締め切り",
    furigana: "締[し]め 切[き]り",
    english: ["deadline"],
    mnemonics: [
      "締め (shime) means 'tighten' or 'close', and 切り (kiri) means 'cut' - imagine the deadline cutting off time",
    ],
    info: [
      "This word is used in various contexts, from school assignments to work projects.",
      "Missing a deadline is often expressed as 締め切りに間に合わない (shimekiri ni maniawanai).",
    ],
    example_sentences: [
      {
        japanese: "レポートの締め切りは来週の金曜日です。",
        english: "The deadline for the report is next Friday.",
      },
    ],
  },
  {
    word: "予定",
    furigana: "予定[よてい]",
    english: ["schedule", "plan"],
    mnemonics: [
      "You've already seen 予 (よ - 'beforehand') in words like 予約 - reservation",
    ],
    info: [
      "This word can refer to both personal plans and official schedules.",
      "Dont use 作る to describe making plans -> 予定を立てる = make plans   instead of   X予定を作る.",
    ],
    example_sentences: [
      {
        japanese: "明日の予定は何ですか。",
        english: "What are your plans for tomorrow?",
      },
    ],
  },
  {
    word: "卒業式",
    furigana: "卒業式[そつぎょうしき]",
    english: ["graduation ceremony"],
    mnemonics: [
      "卒業 (sotsugyou) means 'graduation', and 式 (shiki) means 'ceremony'",
    ],
    info: [
      "You can also say 卒業する to mean 'to graduate', however, you must use ～を instead of ～から when describing where you're graduating from.",
    ],
    example_sentences: [
      {
        japanese: "来月、大学の卒業式があります。",
        english: "Next month, there's a university graduation ceremony.",
      },
    ],
  },
  {
    word: "結婚式",
    furigana: "結婚式[けっこんしき]",
    english: ["wedding"],
    mnemonics: [
      "結婚 (kekkon) means 'marriage', and 式 (shiki) means 'ceremony'",
    ],
    info: [
      "Japanese weddings can be either traditional Shinto ceremonies or Western-style ceremonies.",
    ],
  },
  {
    word: "観光",
    furigana: "観光[かんこう]する",
    english: ["sightseeing"],
    mnemonics: ["Contains 見 - meaning 'to see'"],
  },
  {
    word: "発表",
    furigana: "発表[はっぴょう]",
    english: ["announcement", "presentation"],
  },
  {
    word: "駅員",
    furigana: "駅[えき]員[いん]",
    english: ["station attendant"],
    mnemonics: ["駅 (eki) means 'station', 員 (in) means 'member/staff'"],
    info: [
      "Related words: 会社員 (company employee), 図書館員 (librarian), 会員 (member), 教員 (teacher)",
      "The suffix 員 (-in) is used for various professions or roles",
    ],
    example_sentences: [
      {
        japanese: "駅員さんに道を聞きました。",
        english: "I asked the station attendant for directions.",
      },
    ],
  },
  {
    word: "砂糖",
    furigana: "砂糖[さとう]",
    english: ["sugar"],
    mnemonics: [
      "砂 (sa) means 'sand', 糖 (tou) means 'sugar' - sugar looks like sand",
    ],
    info: [
      "Don't confuse with the surname 佐藤 (also さとう but with different pitch accent)",
      "さとう (sugar) vs さとう (Satō, surname)",
    ],
    example_sentences: [
      {
        japanese: "コーヒーに砂糖を入れますか。",
        english: "Do you put sugar in your coffee?",
      },
    ],
  },
  {
    word: "研究",
    furigana: "研究[けんきゅう]",
    english: ["research"],
    mnemonics: [
      "研 (ken) means 'polish/study', 究 (kyuu) means 'investigate thoroughly'",
    ],
    info: ["Can be used in compound words, e.g., アジア研究 (Asian Studies)"],
    example_sentences: [
      {
        japanese: "大学で日本語の研究をしています。",
        english: "I'm doing research on Japanese at university.",
      },
    ],
  },
  {
    word: "大学院",
    furigana: "大学院[だいがくいん]",
    english: ["graduate school"],
    mnemonics: ["大学 (daigaku) means 'university', 院 (in) means 'institute'"],
    info: ["院 is also used in other words like 病院 (hospital)"],
    example_sentences: [
      {
        japanese: "来年、大学院に行きたいです。",
        english: "I want to go to graduate school next year.",
      },
    ],
  },
  {
    word: "奨学金",
    furigana: "奨学金[しょうがくきん]",
    english: ["scholarship"],
    mnemonics: [
      "奨 (shou) means 'encourage', 学 (gaku) means 'study', 金 (kin) means 'money'",
    ],
    info: [
      "学 is used in words related to education: 学生 (student), 大学 (university)",
      "金 means money or gold",
    ],
    example_sentences: [
      {
        japanese: "奨学金を申し込みました。",
        english: "I applied for a scholarship.",
      },
    ],
  },
  {
    word: "推薦状",
    furigana: "推薦状[すいせんじょう]",
    english: ["letter of recommendation"],
    mnemonics: [
      "推薦 (suisen) means 'recommendation', 状 (jou) means 'letter'",
    ],
    info: ["Common mistake: ❌️すいせんじょ, Correct: ⭕️すいせんじょう"],
    example_sentences: [
      {
        japanese: "先生に推薦状を書いてもらいました。",
        english: "I had my teacher write a letter of recommendation for me.",
      },
    ],
  },
  {
    word: "台風",
    furigana: "台風[たいふう]",
    english: ["typhoon"],
    mnemonics: [
      "台 (tai) means 'pedestal', 風 (fuu) means 'wind' - a powerful wind that can topple things",
    ],
    info: ["Common mistake: ❌️たいふん, Correct: ⭕️たいふう"],
    example_sentences: [
      {
        japanese: "台風が来るので、外出しないでください。",
        english: "A typhoon is coming, so please don't go out.",
      },
    ],
  },
  {
    word: "返事",
    furigana: "返事[へんじ]",
    english: ["reply"],
    mnemonics: [
      "返 (hen) means 'return', 事 (ji) means 'matter/thing' - returning a response",
    ],
    info: [
      "Can be used with お as お返事 for politeness",
      "Common phrases: お返事、ありがとうございます (Thank you for your reply), 返事がきた (I got a reply)",
    ],
    example_sentences: [
      {
        japanese: "メールの返事を書きました。",
        english: "I wrote a reply to the email.",
      },
    ],
  },
  {
    word: "給料",
    furigana: "給料[きゅうりょう]",
    english: ["salary"],
    info: [
      "The 料 in 給料 is also used in 授業料（じゅぎょうりょう）-> tuition",
    ],
  },
  {
    word: "残業",
    furigana: "残業[ざんぎょう]",
    english: ["overtime work"],
    info: ['Literally means "work that remains"'],
  },
  {
    word: "宝くじ",
    furigana: "宝[たから]くじ",
    english: ["lottery"],
    info: ["宝 means treasure"],
  },
  {
    word: "紙",
    furigana: "紙[かみ]",
    english: ["paper"],
    info: [
      "Found in 折り紙（おりがみ）(origami)",
      "折る means to fold or to break sticks into pieces",
    ],
  },
  {
    word: "お湯",
    furigana: "お 湯[ゆ]",
    english: ["hot water"],
    info: ["Do not say 熱い水 for hot water"],
  },
  {
    word: "違い",
    furigana: "違[ちが]い",
    english: ["difference"],
    info: [
      "Related verb: 違う (to be different)",
      "Do not say 違いです",
      "Compare with: どう違うと思いますか。-> How do you think it's different?",
    ],
    example_sentences: [
      {
        japanese: "どんな違いがあると思いますか。",
        english: "What differences do you think there are?",
      },
    ],
  },
  {
    word: "秘密",
    furigana: "秘密[ひみつ]",
    english: ["secret"],
    info: ["Common phrase: 秘密を守る (keep the secret)"],
  },
  {
    word: "準備",
    furigana: "準備[じゅんび]",
    english: ["preparation"],
  },
  {
    word: "客",
    furigana: "客[きゃく]",
    english: ["guest", "visitor", "client", "customer"],
    info: [
      "客 (きゃく) is the blunt, descriptive version of お客さん",
      "お客様 (おきゃくさま) is the polite version",
    ],
  },
  {
    word: "冷蔵庫",
    furigana: "冷蔵[れいぞう]庫[こ]",
    english: ["refrigerator"],
    mnemonics: ["Related to 冷たい (つめたい -> cold)"],
  },
  {
    word: "日記",
    furigana: "日記[にっき]",
    english: ["diary"],
    mnemonics: ["日 means 'daily', 記 means 'to note'"],
  },
  {
    word: "携帯",
    furigana: "携帯[けいたい]",
    english: ["cell phone"],
    info: ["More commonly written as ケータイ or スマホ"],
  },
  {
    word: "桜",
    furigana: "桜[さくら]",
    english: ["cherry blossom"],
  },
  {
    word: "虫",
    furigana: "虫[むし]",
    english: ["insect", "bug", "worm"],
    info: [
      "Used for both insects and worms",
      "Related word: 虫歯(むしば) - cavity/tooth decay",
    ],
  },
  {
    word: "家賃",
    furigana: "家賃[やちん]",
    english: ["rent"],
    mnemonics: ["家 is house, 賃 is money/fee"],
    info: ["家賃 - money paid for a house"],
  },
  {
    word: "外",
    furigana: "外[そと]",
    english: ["outside"],
    info: ["Opposite: 中(なか) meaning inside"],
  },
  {
    word: "夕方",
    furigana: "夕方[ゆうがた]",
    english: ["evening"],
    info: ["Related words:", "夕日(ゆうひ) - sunset", "夕食 - early dinner"],
  },
  {
    word: "髪",
    furigana: "髪[かみ]",
    english: ["hair"],
    mnemonics: [
      "Think of 'kami' as in origami. Picture folding origami with hair-like delicacy.",
    ],
  },
]

export default vocabItems
