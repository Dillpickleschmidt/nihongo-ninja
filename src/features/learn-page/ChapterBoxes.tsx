import ChapterBox from "./chapter-box/ChapterBox"

export default function ChapterBoxes() {
  return (
    <>
      <ChapterBox
        text="Chapter 0"
        class="bg-[#f83333] saturate-50"
        content={[
          {
            title: "Welcome & Overview",
            link: "/learn/chapter-0/welcome-overview",
            types: ["lesson"],
            id: "lesson-tour-example", // For the learn page tour
          },
          {
            title: "Japanese Pronunciation",
            link: "/learn/chapter-0/japanese-pronunciation",
            types: ["lesson"],
          },
          {
            title: "Writing Systems",
            link: "/learn/chapter-0/writing-systems",
            types: ["lesson"],
          },
          {
            title: "Hiragana",
            link: "/learn/chapter-0/hiragana",
            types: ["lesson"],
          },
          {
            title: "Practice Hiragana",
            link: "/learn/chapter-0/practice/hiragana",
            types: ["vocab-practice"],
          },
          {
            title: "Hiragana Quiz",
            link: "/learn/chapter-0/hiragana-quiz",
            types: ["worksheet"],
          },
          {
            title: "Dakuten & Handakuten",
            link: "/learn/chapter-0/dakuten-handakuten",
            types: ["lesson"],
          },
          {
            title: "Practice Dakuten & Handakuten",
            link: "/learn/chapter-0/practice/dakuten-handakuten",
            types: ["vocab-practice"],
          },
          {
            title: "Dakuten & Handakuten Quiz",
            link: "/learn/chapter-0/dakuten-handakuten-quiz",
            types: ["worksheet"],
          },
          {
            title: "Contracted Sounds",
            link: "/learn/chapter-0/contracted-sounds",
            types: ["lesson"],
          },
          {
            title: "Practice Contracted Sounds",
            link: "/learn/chapter-0/practice/contracted-sounds",
            types: ["vocab-practice"],
          },
          {
            title: "Contracted Sounds Quiz",
            link: "/learn/chapter-0/contracted-sounds-quiz",
            types: ["worksheet"],
          },
          {
            title: "Long Vowels & Double Consonants",
            link: "/learn/chapter-0/long-vowels-double-consonants",
            types: ["lesson"],
          },
          {
            title: "All Hiragana Quiz",
            link: "/learn/chapter-0/all-hiragana-quiz",
            types: ["worksheet"],
          },
          {
            title: "Punctuation and Misc.",
            link: "/learn/chapter-0/punctuation-misc",
            types: ["lesson"],
          },
          {
            title: "Chapter 0 Vocab List",
            link: "/learn/chapter-0/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Greetings",
            link: "/learn/chapter-0/greetings",
            types: ["vocab"],
          },
          {
            title: "Listen to Greetings",
            link: "/learn/chapter-0/greetings-japanese-super-immersion",
            types: ["video"],
          },
          // {
          //   title: "Culture Note: Japanese Greetings",
          //   link: "/learn/chapter-0/culture-note-japanese-greetings",
          //   types: ["culture-note"],
          //   disabled: true,
          // },
          // {
          //   title: "Greetings Quiz",
          //   link: "/learn/chapter-0/greetings-quiz",
          //   types: ["worksheet"],
          // },
          {
            title: "Common Expressions",
            link: "/learn/chapter-0/common-expressions",
            types: ["vocab"],
          },
          {
            title: "Listen to Common Expressions",
            link: "/learn/chapter-0/common-expressions-japanese-super-immersion",
            types: ["video"],
          },
          {
            title: "Practice Greet. & Common Expr.",
            link: "/learn/chapter-0/practice/greetings-common-expressions",
            types: ["vocab-practice"],
          },
          {
            title: "Numbers Intro",
            link: "/learn/chapter-0/numbers-intro",
            types: ["lesson"],
          },
          {
            title: "Numbers 0-100",
            link: "/learn/chapter-0/numbers-0-100",
            types: ["vocab"],
          },
          {
            title: "Number Matching",
            link: "/learn/chapter-0/number-matching",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Numbers 0-10",
            link: "/learn/chapter-0/practice/numbers-0-10",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Numbers 11-100",
            link: "/learn/chapter-0/practice/numbers-11-100",
            types: ["vocab-practice"],
          },
          {
            title: "Numbers Game 1",
            link: "",
            types: ["game"],
            disabled: true,
          },
          {
            title: "Numbers Game 2",
            link: "",
            types: ["game"],
            disabled: true,
          },
        ]}
      />

      <ChapterBox
        text="Chapter 1"
        class="bg-sky-600 saturate-50"
        content={[
          {
            title: "Chapter 1 Vocab List",
            link: "/learn/chapter-1/vocab-list",
            types: ["vocab-list"],
            id: "vocab-list-tour-example", // For the learn page tour
          },
          {
            title: "Chapter 1 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
          },
          {
            title: "Kanji Numbers",
            link: "/learn/chapter-1/kanji-numbers",
            types: ["vocab"],
            id: "vocab-tour-example", // For the learn page tour
          },
          {
            title: "Practice Kanji Numbers",
            link: "/learn/chapter-1/practice/kanji-numbers",
            types: ["vocab-practice"],
            id: "vocab-practice-tour-example", // For the learn page tour
          },
          {
            title: "People, Descriptors, Misc.",
            link: "/learn/chapter-1/people-descriptors-misc",
            types: ["vocab"],
          },
          {
            title: "Practice People, Descriptors, Misc.",
            link: "/learn/chapter-1/practice/people-descriptors-misc",
            types: ["vocab-practice"],
          },
          {
            title: "Family & School",
            link: "/learn/chapter-1/family-school",
            types: ["vocab"],
          },
          {
            title: "Practice Family & School",
            link: "/learn/chapter-1/practice/family-school",
            types: ["vocab-practice"],
          },
          {
            title: "X は Y です",
            link: "/learn/chapter-1/x-wa-y-desu",
            types: ["lesson"],
          },
          {
            title: "Occupations & Majors",
            link: "/learn/chapter-1/occupations-majors",
            types: ["vocab"],
          },
          {
            title: "Practice Occupations & Majors",
            link: "/learn/chapter-1/practice/occupations-majors",
            types: ["vocab-practice"],
          },
          {
            title: "X は Y です Practice Sentences",
            link: "/learn/chapter-1/sentence-practice/x-wa-y-desu",
            types: ["practice-sentence"],
            id: "sentence-practice-tour-example", // For the learn page tour
          },
          {
            title: "Everyday Expressions",
            link: "/learn/chapter-1/everyday-expressions",
            types: ["vocab"],
          },
          {
            title: "Self Introductions",
            link: "/learn/chapter-1/self-introductions",
            types: ["lesson"],
          },
          {
            title: "Japanese Names & Honorifics",
            link: "/learn/chapter-1/japanese-names-honorifics",
            types: ["lesson"],
          },
          {
            title: 'Saying "You" in Japanese',
            link: "/learn/chapter-1/saying-you-in-japanese",
            types: ["lesson"],
            id: "unique-lesson-tour-example", // For the learn page tour
          },
          {
            title: "Useful Expressions",
            link: "/learn/chapter-1/useful-expressions",
            types: ["vocab"],
          },
          {
            title: "Countries & Time",
            link: "/learn/chapter-1/countries-time",
            types: ["vocab"],
          },
          {
            title: "Practice Countries & Time",
            link: "/learn/chapter-1/practice/countries-time",
            types: ["vocab-practice"],
          },
          {
            title: "Questions with か",
            link: "/learn/chapter-1/questions-with-ka",
            types: ["lesson"],
          },
          {
            title: "Practice Questions with か",
            link: "/learn/chapter-1/sentence-practice/questions-with-ka",
            types: ["practice-sentence"],
          },
          {
            title: "Modifying Nouns: の",
            link: "/learn/chapter-1/the-no-particle",
            types: ["lesson"],
          },
          {
            title: "Practice Modifying Nouns: の",
            link: "/learn/chapter-1/sentence-practice/the-no-particle",
            types: ["practice-sentence"],
          },
          {
            title: "Worksheet 1",
            link: "/learn/chapter-1/worksheet-1",
            types: ["worksheet"],
          },
          {
            title: "Sounding Natural: あのう、えっと。。。",
            link: "/learn/chapter-1/anou-etto",
            types: ["lesson"],
          },
          {
            title: "Kikusasaizu Video - L1-1",
            link: "/learn/chapter-1/kikusasaizu-1-1",
            types: ["video"],
          },
          {
            title: "Nice to meet you - Listening Practice",
            link: "/learn/chapter-1/japanese-super-immersion-nice-to-meet-you",
            types: ["video"],
          },
          {
            title: "MyKikitori - Conversation 1",
            link: "/learn/chapter-1/my-kikitori-conversation-1",
            types: ["audio"],
          },
          {
            title: "Telling Time",
            link: "/learn/chapter-1/telling-time",
            types: ["lesson"],
          },
          {
            title: "Practice Time",
            link: "/learn/chapter-1/practice/telling-time",
            types: ["vocab-practice"],
          },
          {
            title: "Minutes",
            link: "/learn/chapter-1/minutes",
            types: ["lesson"],
          },
          {
            title: "Practice Minutes",
            link: "/learn/chapter-1/practice/minutes",
            types: ["vocab-practice"],
          },
          {
            title: "MyKikitori - Conversation 2",
            link: "/learn/chapter-1/my-kikitori-conversation-2",
            types: ["audio"],
          },
          {
            title: "Vocab Practice: All Vocab",
            link: "",
            types: ["vocab-practice"],
            disabled: true,
          },
          {
            title: "Worksheet 2",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
          {
            title: "Worksheet 3",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
          {
            title: "Kikusasaizu Video - L1-3",
            link: "/learn/chapter-1/kikusasaizu-1-3",
            types: ["video"],
          },
          {
            title: "Meet Your Host Family At The Airport",
            link: "",
            types: ["game"],
            disabled: true,
          },
          {
            title: "MyKikitori - Conversation 3",
            link: "/learn/chapter-1/my-kikitori-conversation-3",
            types: ["audio"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 2"
        class="bg-green-600 saturate-[65%]"
        content={[
          {
            title: "Chapter 2 Vocab List",
            link: "/learn/chapter-2/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 2 Grammar notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
          },
          {
            title: "Katakana",
            link: "/learn/chapter-2/katakana",
            types: ["lesson"],
          },
          {
            title: "Practice Katakana",
            link: "/learn/chapter-2/practice/katakana",
            types: ["vocab-practice"],
          },
          {
            title: "Katakana Quiz",
            link: "/learn/chapter-2/katakana-quiz",
            types: ["worksheet"],
          },
          {
            title: "Katakana Words Worksheet",
            link: "/learn/chapter-2/katakana-words-worksheet",
            types: ["worksheet"],
          },
          {
            title: "Things",
            link: "/learn/chapter-2/things",
            types: ["vocab"],
          },
          {
            title: "Practice Things",
            link: "/learn/chapter-2/practice/things",
            types: ["vocab-practice"],
          },
          {
            title: "Words That Point",
            link: "/learn/chapter-2/words-that-point",
            types: ["lesson"],
          },
          {
            title: "Practice Words That Point",
            link: "/learn/chapter-2/practice/words-that-point",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Words That Point Sentences",
            link: "/learn/chapter-2/sentence-practice/words-that-point",
            types: ["practice-sentence"],
          },
          {
            title: "が - The Subject Marker",
            link: "/learn/chapter-2/ga-particle",
            types: ["lesson"],
          },
          {
            title: "だれ",
            link: "/learn/chapter-2/dare",
            types: ["lesson"],
          },
          {
            title: "Practice だれ",
            link: "/learn/chapter-2/sentence-practice/dare",
            types: ["practice-sentence"],
          },
          {
            title: "Saying also with も",
            link: "/learn/chapter-2/mo-particle",
            types: ["lesson"],
          },
          {
            title: "Practice Saying also with も",
            link: "/learn/chapter-2/sentence-practice/mo-particle",
            types: ["practice-sentence"],
          },
          {
            title: "じゃないです - Is not...",
            link: "/learn/chapter-2/janai",
            types: ["lesson"],
          },
          {
            title: "Practice じゃないです - Is not...",
            link: "/learn/chapter-2/sentence-practice/janai",
            types: ["practice-sentence"],
          },
          {
            title: "Kikusasaizu Video - L2-1",
            link: "/learn/chapter-2/kikusasaizu-2-1",
            types: ["video"],
          },
          {
            title: "ね, よ",
            link: "/learn/chapter-2/ne-yo",
            types: ["lesson"],
          },
          {
            title: "Practice ね, よ",
            link: "/learn/chapter-2/sentence-practice/ne-yo",
            types: ["practice-sentence"],
          },
          {
            title: "Kikusasaizu Video - L2-2",
            link: "/learn/chapter-2/kikusasaizu-2-2",
            types: ["video"],
          },
          {
            title: "Places, Money, Food",
            link: "/learn/chapter-2/places-money-food",
            types: ["vocab"],
          },
          {
            title: "Practice Places, Money, Food",
            link: "/learn/chapter-2/practice/places-money-food",
            types: ["vocab-practice"],
          },
          {
            title: "MyKikitori - At a Café",
            link: "/learn/chapter-2/my-kikitori-at-a-cafe",
            types: ["audio"],
          },
          {
            title: "Big Numbers",
            link: "/learn/chapter-2/big-numbers",
            types: ["lesson"],
          },
          {
            title: "Japanese Money",
            link: "/learn/chapter-2/japanese-money",
            types: ["lesson"],
          },
          {
            title: "Practice Money",
            link: "/learn/chapter-2/practice-money",
            types: ["worksheet"],
          },
          {
            title: "MyKikitori - At a Store",
            link: "/learn/chapter-2/my-kikitori-at-a-store",
            types: ["audio"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-2/all-vocab-test",
            types: ["vocab-test"],
          },
          {
            title: "Numbers Game 1",
            link: "",
            types: ["game"],
            disabled: true,
          },
          {
            title: "Numbers Game 2",
            link: "",
            types: ["game"],
            disabled: true,
          },
          {
            title: "Bonus: More About Money",
            link: "",
            types: ["culture-note"],
            disabled: true,
          },
          {
            title: "Worksheet 1",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
          {
            title: "Worksheet 2",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
          {
            title: "Worksheet 3",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
          {
            title: "House Tour",
            link: "",
            types: ["game"],
            disabled: true,
          },
        ]}
      />

      <ChapterBox
        text="Chapter 3"
        class="bg-orange-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 3 Vocab List",
            link: "/learn/chapter-3/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 3 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
          },
          {
            title: "Introduction to Kanji",
            link: "/learn/chapter-3/kanji",
            types: ["lesson"],
          },
          {
            title: "Kanji Radicals",
            link: "/learn/chapter-3/kanji-radicals",
            types: ["lesson"],
          },
          {
            title: "Chapter 1 Kanji Part 1",
            link: "/learn/chapter-3/chapter-1-kanji-part-1",
            types: ["vocab"],
          },
          {
            title: "Practice Chapter 1 Kanji Part 1",
            link: "/learn/chapter-3/practice/chapter-1-kanji-part-1",
            types: ["vocab-practice"],
          },
          {
            title: "Chapter 1 Kanji Part 2",
            link: "/learn/chapter-3/chapter-1-kanji-part-2",
            types: ["vocab"],
          },
          {
            title: "Practice Chapter 1 Kanji Part 2",
            link: "/learn/chapter-3/practice/chapter-1-kanji-part-2",
            types: ["vocab-practice"],
          },
          {
            title: "Chapter 1 Kanji Part 3",
            link: "/learn/chapter-3/chapter-1-kanji-part-3",
            types: ["vocab"],
          },
          {
            title: "Practice Chapter 1 Kanji Part 3",
            link: "/learn/chapter-3/practice/chapter-1-kanji-part-3",
            types: ["vocab-practice"],
          },
          {
            title: "Chapter 2 Kanji",
            link: "/learn/chapter-3/chapter-2-kanji",
            types: ["vocab"],
          },
          {
            title: "Practice Chapter 2 Kanji",
            link: "/learn/chapter-3/practice/chapter-2-kanji",
            types: ["vocab-practice"],
          },
          {
            title: "jpdb.io Flashcards",
            link: "/learn/chapter-1/jpdb",
            types: ["lesson"],
          },
          {
            title: "Chapter 3 Nouns",
            link: "/learn/chapter-3/nouns",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns - Readings",
            link: "/learn/chapter-3/practice/nouns-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns - Kana",
            link: "/learn/chapter-3/practice/nouns-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Days of The Week & Time",
            link: "/learn/chapter-3/days-and-time",
            types: ["vocab"],
          },
          {
            title: "Practice Days & Time - Readings",
            link: "/learn/chapter-3/practice/days-and-time-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Days & Time - Kana",
            link: "/learn/chapter-3/practice/days-and-time-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Chapter 3 Verbs & Adj.",
            link: "/learn/chapter-3/verbs-and-adj",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs & Adj. - Readings",
            link: "/learn/chapter-3/practice/verbs-and-adj-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs & Adj. - Kana",
            link: "/learn/chapter-3/practice/verbs-and-adj-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verb Conj. - ます, Godan, Ichidan",
            link: "/learn/chapter-3/verb-conj-masu",
            types: ["lesson"],
          },
          {
            title: "Negative ます Conjugation",
            link: "/learn/chapter-3/negative-masu-conj",
            types: ["lesson"],
          },
          {
            title: "Practice Pos/Neg ます Conjugation",
            link: "/learn/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=true&iAdjective=false&naAdjective=false&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=true",
            types: ["conjugation-practice"],
            id: "conjugation-practice-tour-example", // For the learn page tour
          },
          {
            title: "Particles - を, で, に, へ",
            link: "/learn/chapter-3/o-de-ni-e-particles",
            types: ["lesson"],
          },
          {
            title: "Word Order",
            link: "/learn/chapter-3/word-order",
            types: ["lesson"],
          },
          {
            title: "Practice Particles - を, で, に, へ",
            link: "/learn/chapter-3/sentence-practice/o-de-ni-e-particles",
            types: ["practice-sentence"],
          },
          {
            title: "する vs. やる",
            link: "/learn/chapter-3/suru-vs-yaru",
            types: ["lesson"],
          },
          {
            title: "Your Japanese Voice",
            link: "/learn/chapter-3/your-japanese-voice",
            types: ["video"],
          },
          {
            title: "Reading Practice",
            link: "",
            types: ["reading"],
            disabled: true,
          },
          {
            title: "Polite Invitations - ませんか",
            link: "/learn/chapter-3/polite-invitations",
            types: ["lesson"],
          },
          {
            title: "Practice ませんか",
            link: "/learn/chapter-3/sentence-practice/polite-invitations",
            types: ["practice-sentence"],
          },
          {
            title: "Kikusasaizu Video - L3-2",
            link: "/learn/chapter-3/kikusasaizu-3-2",
            types: ["video"],
          },
          {
            title: "Kikusasaizu Video - L3-3",
            link: "/learn/chapter-3/kikusasaizu-3-3",
            types: ["video"],
          },
          {
            title: "MyKikitori - Do You Want to Go to Tokyo?",
            link: "/learn/chapter-3/my-kikitori-do-you-want-to-go-to-tokyo",
            types: ["audio"],
          },
          {
            title: "Adverbs & Expressions",
            link: "/learn/chapter-3/adverbs-expressions",
            types: ["vocab"],
          },
          {
            title: "Practice Adv. & Expres. - Readings",
            link: "/learn/chapter-3/practice/adverbs-expressions-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adv. & Expres. - Kana",
            link: "/learn/chapter-3/practice/adverbs-expressions-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-3/all-vocab-test",
            types: ["vocab-test"],
          },
          {
            title: "Practice Time Expressions",
            link: "/learn/chapter-3/sentence-practice/time-expressions",
            types: ["practice-sentence"],
          },
          {
            title: "MyKikitori - Campus Interview #1",
            link: "/learn/chapter-3/my-kikitori-campus-interview-1",
            types: ["video"],
          },
          {
            title: "Aizuchi: Japanese Noises",
            link: "/learn/chapter-3/aizuchi",
            types: ["video"],
          },
          {
            title: "Saying And, So, and But",
            link: "/learn/chapter-3/saying-and-so-but",
            types: ["lesson"],
          },
          {
            title: "Adverbs",
            link: "/learn/chapter-3/adverbs",
            types: ["lesson"],
          },
          {
            title: "Practice Frequency Adverbs",
            link: "/learn/chapter-3/sentence-practice/frequency-adverbs",
            types: ["practice-sentence"],
          },
          {
            title: "Kikusasaizu Video - L3-1",
            link: "/learn/chapter-3/kikusasaizu-3-1",
            types: ["video"],
          },
          {
            title: "MyKikitori - Campus Interview #2",
            link: "/learn/chapter-3/my-kikitori-campus-interview-2",
            types: ["audio"],
          },
          {
            title: "Long Form Conversation Immersion",
            link: "/learn/chapter-3/long-form-conversation-immersion",
            types: ["video"],
          },
          {
            title: "Contrast Worksheet",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
          {
            title: "Chapter 3 Worksheet",
            link: "",
            types: ["worksheet"],
            disabled: true,
          },
        ]}
      />

      <ChapterBox
        text="Chapter 4"
        class="bg-indigo-500 saturate-[33%]"
        content={[
          {
            title: "Chapter 4 Vocab List",
            link: "/learn/chapter-4/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 4 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-4/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-4/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-4/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-4/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-4/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-4/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Location Words",
            link: "/learn/chapter-4/location-words",
            types: ["vocab"],
          },
          {
            title: "Practice Location Words - Readings",
            link: "/learn/chapter-4/practice/location-words-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Location Words - Kana",
            link: "/learn/chapter-4/practice/location-words-kana",
            types: ["vocab-practice"],
          },
          {
            title: "いる・ある - Existence",
            link: "/learn/chapter-4/iru-aru",
            types: ["lesson"],
          },
          {
            title: "Practice いる・ある",
            link: "/learn/chapter-4/sentence-practice/iru-aru",
            types: ["practice-sentence"],
          },
          {
            title: "Where Things Are",
            link: "/learn/chapter-4/where-things-are",
            types: ["lesson"],
          },
          {
            title: "Practice Where Things Are",
            link: "/learn/chapter-4/sentence-practice/where-things-are",
            types: ["practice-sentence"],
          },
          {
            title: "Verbs, Adv, & Misc.",
            link: "/learn/chapter-4/verbs-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice V, Adv, & Misc. - Readings",
            link: "/learn/chapter-4/practice/verbs-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice V, Adv, & Misc. - Kana",
            link: "/learn/chapter-4/practice/verbs-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-4/all-vocab-test",
            types: ["vocab-test"],
          },
          {
            title: "でした・ました - Polite Past Tense",
            link: "/learn/chapter-4/polite-past-tense",
            types: ["lesson"],
          },
          {
            title: "Practice Past-Tense Verbs",
            link: "/learn/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=true&iAdjective=false&naAdjective=false&polite=true&plain=false&nonPast=false&past=true&positive=true&negative=true",
            types: ["conjugation-practice"],
          },
          {
            title: "Practice でした + Past-Tense Verbs",
            link: "/learn/chapter-4/sentence-practice/deshita-past-tense-verbs",
            types: ["practice-sentence"],
          },
          {
            title: "と - And/With",
            link: "/learn/chapter-4/to-particle",
            types: ["lesson"],
          },
          {
            title: "Immersion With Yuta - Listening Practice",
            link: "/learn/chapter-4/immersion-with-yuta",
            types: ["video"],
          },
          {
            title: "Practice と",
            link: "/learn/chapter-4/sentence-practice/to-particle",
            types: ["practice-sentence"],
          },
          {
            title: "も - Also/Too",
            link: "/learn/chapter-4/mo-particle",
            types: ["lesson"],
          },
          {
            title: "時間 - Time Duration",
            link: "/learn/chapter-4/jikan",
            types: ["lesson"],
          },
          {
            title: "Practice Time Duration",
            link: "/learn/chapter-4/sentence-practice/duration",
            types: ["practice-sentence"],
          },
          {
            title: "Counters Practice",
            link: "/learn/counter-practice",
            types: ["counter-practice"],
          },
          {
            title: "たくさん - Many",
            link: "/learn/chapter-4/takusan",
            types: ["lesson"],
          },
          {
            title: "Beginner Guide To コンビニ",
            link: "/learn/chapter-4/beginner-guide-to-konbini",
            types: ["video"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 5"
        class="bg-green-600 saturate-[65%]"
        content={[
          {
            title: "Chapter 5 Vocab List",
            link: "/learn/chapter-5/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 5 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-5/nouns",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-5/practice/nouns-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-5/practice/nouns-kana",
            types: ["vocab-practice"],
          },
          {
            title: "い Adjectives",
            link: "/learn/chapter-5/i-adjectives",
            types: ["vocab"],
          },
          {
            title: "Practice い Adjectives - Readings",
            link: "/learn/chapter-5/practice/i-adjectives-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice い Adjectives - Kana",
            link: "/learn/chapter-5/practice/i-adjectives-kana",
            types: ["vocab-practice"],
          },
          {
            title: "な Adjectives",
            link: "/learn/chapter-5/na-adjectives",
            types: ["vocab"],
          },
          {
            title: "Practice な Adjectives - Readings",
            link: "/learn/chapter-5/practice/na-adjectives-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice な Adjectives - Kana",
            link: "/learn/chapter-5/practice/na-adjectives-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adjective Conjugation",
            link: "/learn/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=false&iAdjective=true&naAdjective=true&polite=true&plain=false&nonPast=true&past=true&positive=true&negative=true",
            types: ["conjugation-practice"],
          },
          {
            title: "Practice Adjectives",
            link: "/learn/chapter-5/sentence-practice/adjectives",
            types: ["practice-sentence"],
          },
          {
            title: "Verbs, Adv, & Misc.",
            link: "/learn/chapter-5/verbs-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs, Adv, & Misc. - Readings",
            link: "/learn/chapter-5/practice/verbs-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs, Adv, & Misc. - Kana",
            link: "/learn/chapter-5/practice/verbs-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-5/all-vocab-test",
            types: ["vocab-test"],
          },
          {
            title: "い/な-Adjective Conjugation",
            link: "/learn/chapter-5/adjective-conjugation",
            types: ["lesson"],
          },
          {
            title: "Adjectives Modifying Nouns",
            link: "/learn/chapter-5/adj-modifying-nouns",
            types: ["lesson"],
          },
          {
            title: "好き・嫌い",
            link: "/learn/chapter-5/suki-kirai",
            types: ["lesson"],
          },
          {
            title: "は For Comparisons",
            link: "/learn/chapter-5/wa-comparisons",
            types: ["lesson"],
          },
          {
            title: "Polite Volitional - ましょう・ましょうか",
            link: "/learn/chapter-5/polite-volitional",
            types: ["lesson"],
          },
          {
            title: "Sports - Listening Practice",
            link: "/learn/chapter-5/sports",
            types: ["video"],
          },
          {
            title: "Counters",
            link: "/learn/chapter-5/counters",
            types: ["lesson"],
          },
          {
            title: "Counters Practice",
            link: "/learn/counter-practice",
            types: ["counter-practice"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 6"
        class="bg-red-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 6 Vocab List",
            link: "/learn/chapter-6/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 6 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns",
            link: "/learn/chapter-6/nouns",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns - Readings",
            link: "/learn/chapter-6/practice/nouns-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns - Kana",
            link: "/learn/chapter-6/practice/nouns-kana",
            types: ["vocab-practice"],
          },
          {
            title: "U-Verbs & Adjectives",
            link: "/learn/chapter-6/u-verbs-and-adj",
            types: ["vocab"],
          },
          {
            title: "Practice U-V & Adj - Readings",
            link: "/learn/chapter-6/practice/u-verbs-and-adj-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice U-V & Adj - Kana",
            link: "/learn/chapter-6/practice/u-verbs-and-adj-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Ru-Verbs, Irr-Verbs, & Misc.",
            link: "/learn/chapter-6/ru-v-irr-v-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Ru-V, Irr-V, & Misc. - Readings",
            link: "/learn/chapter-6/practice/ru-v-irr-v-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Ru-V, Irr-V, & Misc. - Kana",
            link: "/learn/chapter-6/practice/ru-v-irr-v-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "て-Form (Verbs)",
            link: "/learn/chapter-6/te-form",
            types: ["lesson"],
          },
          {
            title: "Practice て-Form Conjugation",
            link: "/learn/conjugation?normal=false&teForm=true&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=true&iAdjective=false&naAdjective=false&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=false",
            types: ["conjugation-practice"],
          },
          {
            title: "Connecting Actions With て-Form",
            link: "/learn/chapter-6/te-form-connection",
            types: ["lesson"],
          },
          {
            title: "～てください",
            link: "/learn/chapter-6/te-kudasai",
            types: ["lesson"],
          },
          {
            title: "～てもいいです",
            link: "/learn/chapter-6/te-mo-ii-desu",
            types: ["lesson"],
          },
          {
            title: "～てはいけません - Must Not Do",
            link: "/learn/chapter-6/te-wa-ikemasen",
            types: ["lesson"],
          },
          {
            title: "だめ - No Good",
            link: "/learn/chapter-6/dame",
            types: ["lesson"],
          },
          {
            title: "て-Form (Adj. & Nouns)",
            link: "/learn/chapter-6/te-form-adj-nouns",
            types: ["lesson"],
          },
          {
            title: "から",
            link: "/learn/chapter-6/kara",
            types: ["lesson"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-6/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 7"
        class="bg-sky-600 saturate-[50%]"
        content={[
          {
            title: "Chapter 7 Vocab List",
            link: "/learn/chapter-7/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 7 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-7/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-7/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-7/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Body Parts",
            link: "/learn/chapter-7/body-parts",
            types: ["vocab"],
          },
          {
            title: "Practice Body Parts - Readings",
            link: "/learn/chapter-7/practice/body-parts-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Body Parts - Kana",
            link: "/learn/chapter-7/practice/body-parts-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verbs",
            link: "/learn/chapter-7/verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs - Readings",
            link: "/learn/chapter-7/practice/verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs - Kana",
            link: "/learn/chapter-7/practice/verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adj, Adv, & Misc.",
            link: "/learn/chapter-7/adj-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Readings",
            link: "/learn/chapter-7/practice/adj-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Kana",
            link: "/learn/chapter-7/practice/adj-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-7/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 8"
        class="bg-orange-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 8 Vocab List",
            link: "/learn/chapter-8/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 8 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-8/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-8/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-8/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-8/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-8/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-8/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verbs",
            link: "/learn/chapter-8/verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs - Readings",
            link: "/learn/chapter-8/practice/verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs - Kana",
            link: "/learn/chapter-8/practice/verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adj, Adv, & Misc.",
            link: "/learn/chapter-8/adj-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Readings",
            link: "/learn/chapter-8/practice/adj-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Kana",
            link: "/learn/chapter-8/practice/adj-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-8/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 9"
        class="bg-red-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 9 Vocab List",
            link: "/learn/chapter-9/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 9 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns",
            link: "/learn/chapter-9/nouns",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns - Readings",
            link: "/learn/chapter-9/practice/nouns-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns - Kana",
            link: "/learn/chapter-9/practice/nouns-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Small Item Counters",
            link: "/learn/chapter-9/small-item-counters",
            types: ["vocab"],
          },
          {
            title: "Practice Small Item Counters - Readings",
            link: "/learn/chapter-9/practice/small-item-counters-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Small Item Counters - Kana",
            link: "/learn/chapter-9/practice/small-item-counters-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verbs",
            link: "/learn/chapter-9/verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs - Readings",
            link: "/learn/chapter-9/practice/verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs - Kana",
            link: "/learn/chapter-9/practice/verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adj, Adv, & Misc.",
            link: "/learn/chapter-9/adj-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Readings",
            link: "/learn/chapter-9/practice/adj-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Kana",
            link: "/learn/chapter-9/practice/adj-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-9/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 10"
        class="bg-green-600 saturate-[65%]"
        content={[
          {
            title: "Chapter 10 Vocab List",
            link: "/learn/chapter-8/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 10 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-10/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-10/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-10/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-10/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-10/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-10/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verbs",
            link: "/learn/chapter-10/verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs - Readings",
            link: "/learn/chapter-10/practice/verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs - Kana",
            link: "/learn/chapter-10/practice/verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adj, Adv, & Misc.",
            link: "/learn/chapter-10/adj-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Readings",
            link: "/learn/chapter-10/practice/adj-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Kana",
            link: "/learn/chapter-10/practice/adj-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-10/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 11"
        class="bg-indigo-500 saturate-[33%]"
        content={[
          {
            title: "Chapter 11 Vocab List",
            link: "/learn/chapter-11/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 11 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-11/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-11/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-11/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-11/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-11/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-11/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Ru and U-Verbs",
            link: "/learn/chapter-11/ru-v-u-v",
            types: ["vocab"],
          },
          {
            title: "Practice Ru and U-Verbs - Readings",
            link: "/learn/chapter-11/practice/ru-v-u-v-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Ru and U-Verbs - Kana",
            link: "/learn/chapter-11/practice/ru-v-u-v-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Irr. Verbs, Adv, & Misc.",
            link: "/learn/chapter-11/irr-v-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Irr. V, Adv, & Misc. - Readings",
            link: "/learn/chapter-11/practice/irr-v-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Irr. V, Adv, & Misc. - Kana",
            link: "/learn/chapter-11/practice/irr-v-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Occupations",
            link: "/learn/chapter-11/occupations",
            types: ["vocab"],
          },
          {
            title: "Practice Occupations - Readings",
            link: "/learn/chapter-11/practice/occupations-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Occupations - Kana",
            link: "/learn/chapter-11/practice/occupations-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-11/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 12"
        class="bg-orange-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 12 Vocab List",
            link: "/learn/chapter-12/vocab-list",
            types: ["vocab-list"],
            disabled: true,
          },
          {
            title: "Chapter 12 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-12/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-12/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-12/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-12/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-12/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-12/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verbs",
            link: "/learn/chapter-12/verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs - Readings",
            link: "/learn/chapter-12/practice/verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs - Kana",
            link: "/learn/chapter-12/practice/verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adj, Adv, & Misc.",
            link: "/learn/chapter-12/adj-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Readings",
            link: "/learn/chapter-12/practice/adj-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Kana",
            link: "/learn/chapter-12/practice/adj-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-12/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 13"
        class="bg-green-600 saturate-[65%]"
        content={[
          {
            title: "Chapter 13 Vocab List",
            link: "/learn/chapter-13/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 13 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns",
            link: "/learn/chapter-13/nouns",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns - Readings",
            link: "/learn/chapter-13/practice/nouns-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns - Kana",
            link: "/learn/chapter-13/practice/nouns-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adjectives & Verbs",
            link: "/learn/chapter-13/adj-and-verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Adj & Verbs - Readings",
            link: "/learn/chapter-13/practice/adj-and-verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj & Verbs - Kana",
            link: "/learn/chapter-13/practice/adj-and-verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Day Count & Misc.",
            link: "/learn/chapter-13/day-count-and-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Day Count & Misc. - Readings",
            link: "/learn/chapter-13/practice/day-count-and-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Day Count & Misc. - Kana",
            link: "/learn/chapter-13/practice/day-count-and-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-13/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 14"
        class="bg-indigo-500 saturate-[33%]"
        content={[
          {
            title: "Chapter 14 Vocab List",
            link: "/learn/chapter-14/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 14 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-14/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-14/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-14/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-14/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-14/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-14/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adjectives & Verbs",
            link: "/learn/chapter-14/adj-and-verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Adj & Verbs - Readings",
            link: "/learn/chapter-14/practice/adj-and-verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj & Verbs - Kana",
            link: "/learn/chapter-14/practice/adj-and-verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Counters, Adv., & Misc.",
            link: "/learn/chapter-14/counters-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Counters, Adv., & Misc. - Readings",
            link: "/learn/chapter-14/practice/counters-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Counters, Adv., & Misc. - Kana",
            link: "/learn/chapter-14/practice/counters-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-14/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 15"
        class="bg-red-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 15 Vocab List",
            link: "/learn/chapter-15/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 15 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-15/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-15/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-15/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-15/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-15/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-15/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Ichidan & Godan Verbs",
            link: "/learn/chapter-15/godan-and-ichidan-v",
            types: ["vocab"],
          },
          {
            title: "Practice Ichidan & Godan V. - Readings",
            link: "/learn/chapter-15/practice/godan-and-ichidan-v-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Ichidan & Godan V. - Kana",
            link: "/learn/chapter-15/practice/godan-and-ichidan-v-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Irreg Verbs, Adv., & Misc.",
            link: "/learn/chapter-15/irr-v-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Irreg Verbs, Adv., & Misc. - Readings",
            link: "/learn/chapter-15/practice/irr-v-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Irreg Verbs, Adv., & Misc. - Kana",
            link: "/learn/chapter-15/practice/irr-v-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-15/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 16"
        class="bg-orange-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 16 Vocab List",
            link: "/learn/chapter-16/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 16 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns",
            link: "/learn/chapter-16/nouns",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns - Readings",
            link: "/learn/chapter-16/practice/nouns-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns - Kana",
            link: "/learn/chapter-16/practice/nouns-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adjectives & U-Verbs",
            link: "/learn/chapter-16/adj-and-u-v",
            types: ["vocab"],
          },
          {
            title: "Practice Adj. & U-V - Readings",
            link: "/learn/chapter-16/practice/adj-and-u-v-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj. & U-V - Kana",
            link: "/learn/chapter-16/practice/adj-and-u-v-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Ru-Verbs & Irregular Verbs",
            link: "/learn/chapter-16/ru-and-irr-v",
            types: ["vocab"],
          },
          {
            title: "Practice Ru-V & Irreg V - Readings",
            link: "/learn/chapter-16/practice/ru-and-irr-v-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Ru-V & Irreg V - Kana",
            link: "/learn/chapter-16/practice/ru-and-irr-v-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adverbs & Misc.",
            link: "/learn/chapter-16/adv-and-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adv & Misc. - Readings",
            link: "/learn/chapter-16/practice/adv-and-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adv & Misc. - Kana",
            link: "/learn/chapter-16/practice/adv-and-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-16/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 17"
        class="bg-sky-600 saturate-50"
        content={[
          {
            title: "Chapter 17 Vocab List",
            link: "/learn/chapter-17/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 17 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-17/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-17/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-17/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2",
            link: "/learn/chapter-17/nouns-2",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 - Readings",
            link: "/learn/chapter-17/practice/nouns-2-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 - Kana",
            link: "/learn/chapter-17/practice/nouns-2-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Verbs",
            link: "/learn/chapter-17/verbs",
            types: ["vocab"],
          },
          {
            title: "Practice Verbs - Readings",
            link: "/learn/chapter-17/practice/verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Verbs - Kana",
            link: "/learn/chapter-17/practice/verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Adj, Adv, & Misc.",
            link: "/learn/chapter-17/adj-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Readings",
            link: "/learn/chapter-17/practice/adj-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Adj, Adv, & Misc. - Kana",
            link: "/learn/chapter-17/practice/adj-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-17/all-vocab-test",
            types: ["vocab-test"],
          },
          {
            title: "～そうです - Heresay Practice",
            link: "/learn/chapter-17/sentence-practice/sou-desu-heresay",
            types: ["practice-sentence"],
          },
          {
            title: "～って Practice",
            link: "/learn/chapter-17/sentence-practice/tte",
            types: ["practice-sentence"],
          },
          {
            title: "～たら Practice",
            link: "/learn/chapter-17/sentence-practice/tara",
            types: ["practice-sentence"],
          },
        ]}
      />

      <ChapterBox
        text="Chapter 18"
        class="bg-green-600 saturate-[65%]"
        content={[
          {
            title: "Chapter 18 Vocab List",
            link: "/learn/chapter-18/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 18 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Nouns 1",
            link: "/learn/chapter-18/nouns-1",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 1 - Readings",
            link: "/learn/chapter-18/practice/nouns-1-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 1 - Kana",
            link: "/learn/chapter-18/practice/nouns-1-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Nouns 2 & Adjectives",
            link: "/learn/chapter-18/nouns-2-and-adjectives",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns 2 & Adj - Readings",
            link: "/learn/chapter-18/practice/nouns-2-and-adjectives-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns 2 & Adj - Kana",
            link: "/learn/chapter-18/practice/nouns-2-and-adjectives-kana",
            types: ["vocab-practice"],
          },
          {
            title: "U & Irr Verbs",
            link: "/learn/chapter-18/u-and-irr-verbs",
            types: ["vocab"],
          },
          {
            title: "Practice U & Irr Verbs - Readings",
            link: "/learn/chapter-18/practice/u-and-irr-verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice U & Irr Verbs - Kana",
            link: "/learn/chapter-18/practice/u-and-irr-verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Ru Verbs & Misc.",
            link: "/learn/chapter-18/ru-verbs-and-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Ru Verbs & Misc. - Readings",
            link: "/learn/chapter-18/practice/ru-verbs-and-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Ru Verbs & Misc. - Kana",
            link: "/learn/chapter-18/practice/ru-verbs-and-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "All Vocab - Test",
            link: "/learn/chapter-18/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />
      <ChapterBox
        text="Chapter 19"
        class="bg-red-500 saturate-[65%]"
        content={[
          {
            title: "Chapter 19 Vocab List",
            link: "/learn/chapter-19/vocab-list",
            types: ["vocab-list"],
          },
          {
            title: "Chapter 19 Grammar Notes",
            link: "/learn/grammar-notes",
            types: ["grammar-notes"],
            disabled: true,
          },
          {
            title: "Ch. 13-18 Bonus Vocab",
            link: "/learn/chapter-19/chapter-13-18-bonus-vocab",
            types: ["vocab"],
          },
          {
            title: "Ch. 13-18 Nouns - Test",
            link: "/learn/chapter-19/chapter-13-18-nouns",
            types: ["vocab-test"],
          },
          {
            title: "Ch. 13-18 Adjectives - Test",
            link: "/learn/chapter-19/chapter-13-18-adjectives",
            types: ["vocab-test"],
          },
          {
            title: "Ch. 13-18 Verbs - Test",
            link: "/learn/chapter-19/chapter-13-18-verbs",
            types: ["vocab-test"],
          },
          {
            title: "Ch. 13-18 Adv., Misc. - Test",
            link: "/learn/chapter-19/chapter-13-18-adv-misc",
            types: ["vocab-test"],
          },
          {
            title: "Nouns & Adj.",
            link: "/learn/chapter-19/nouns-and-adj",
            types: ["vocab"],
          },
          {
            title: "Practice Nouns & Adj. - Readings",
            link: "/learn/chapter-19/practice/nouns-and-adj-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Nouns & Adj. - Kana",
            link: "/learn/chapter-19/practice/nouns-and-adj-kana",
            types: ["vocab-practice"],
          },
          {
            title: "U + Ru Verbs",
            link: "/learn/chapter-19/u-ru-verbs",
            types: ["vocab"],
          },
          {
            title: "Practice U + Ru Verbs - Readings",
            link: "/learn/chapter-19/practice/u-ru-verbs-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice U + Ru Verbs - Kana",
            link: "/learn/chapter-19/practice/u-ru-verbs-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Irr. Verbs, Adv., & Misc.",
            link: "/learn/chapter-19/irr-v-adv-misc",
            types: ["vocab"],
          },
          {
            title: "Practice Irr. Verbs, Adv., & Misc. - Readings",
            link: "/learn/chapter-19/practice/irr-v-adv-misc-readings",
            types: ["vocab-practice"],
          },
          {
            title: "Practice Irr. Verbs, Adv., & Misc. - Kana",
            link: "/learn/chapter-19/practice/irr-v-adv-misc-kana",
            types: ["vocab-practice"],
          },
          {
            title: "Ch. 19 All Vocab - Test",
            link: "/learn/chapter-19/all-vocab-test",
            types: ["vocab-test"],
          },
        ]}
      />
      <ChapterBox text="Chapter 20" class="bg-neutral-700" content={[]} />
      <ChapterBox text="Chapter 21" class="bg-neutral-700" content={[]} />
      <ChapterBox text="Chapter 22" class="bg-neutral-700" content={[]} />
      <ChapterBox text="Chapter 23" class="bg-neutral-700" content={[]} />
    </>
  )
}
