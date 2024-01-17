import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Lesson2() {
  return (
    <Dialog variant={"reading"}>
      <div className="pb-16">
        <h1 className="pt-32 pb-8 text-[5rem] font-bold leading-[4.25rem] px-16 text-center">
          Let's start learning 🎌Hiragana🎌
        </h1>
        <h2 className="text-4xl text-center font-bold !pb-4 !pt-12">
          What is Hiragana?
        </h2>
        <div className="px-32 text-xl leading-8 [&>*]:py-6">
          <p className="!pt-0">
            Hiragana is one of the three main scripts used in Japanese writing,
            along with Katakana and Kanji, often referred to as the foundational
            writing system in Japanese. It's primarily used for{" "}
            <strong>native</strong> Japanese words and{" "}
            <strong>grammatical elements</strong> that connect words into
            sentences. Each Hiragana character represents a distinct sound, and
            these characters can be combined to form words.
          </p>
          <p>
            There are a total of <strong>42</strong> Hiragana characters. It
            sounds like a lot, but don't worry! They're all based on the same 5
            vowels that you've already seen.
          </p>
          <div
            className={`${JapaneseFont.className} font-medium text-center text-2xl !py-0`}
          >
            <p>あ a</p>
            <p>い i</p>
            <p>う u</p>
            <p>え e</p>
            <p>お o</p>
          </div>
          <p>
            Remember this pattern! 'a, i, u, e, o'. If you memorize that, the
            rest will come more easily.
          </p>
          <p>
            Next, we just add a consonant to each of these. Adding 'k' will give
            us five new characters:
          </p>
          <div
            className={`${JapaneseFont.className} font-medium text-center text-2xl !py-0`}
          >
            <p>か (ka) - 'car'</p>
            <p>き (ki) - 'key'</p>
            <p>く (ku) - 'coupon'</p>
            <p>け (ke) - 'kept'</p>
            <p>こ (ko) - 'corner'</p>
          </div>
          <p>
            Try adding an 's' instead of 'k'. What do you think the sounds will
            be?
          </p>
          <div
            className={`${JapaneseFont.className} font-medium text-center text-2xl !py-0`}
          >
            <p>さ (sa)</p>
            <p>し (shi)</p>
            <p>す (su)</p>
            <p>せ (se)</p>
            <p>そ (so)</p>
          </div>
          <p>
            But wait, し sounds like 'she' instead of 'see'! Not everything maps
            1-1, a few characters are pronounced slightly differently than the
            pattern suggests, but they're nothing that you haven't pronounced
            before in English.
          </p>
          <p>
            Here's a chart containing all 42 Hiragana characters with their
            pronunciations.
          </p>
          <p>
            You've probably noticed that not all the rows are completely filled.
            Japanese doesn't have a character for 'yi' or for 'wu'. That just
            means fewer characters for you to memorize!
          </p>
          <p>
            The pattern seems simple, but the characters themselves might not
            seem so at first. And 42 of them? That sounds like a lot. But don't
            worry, the <em>internet</em> has you covered!
          </p>
          <p>
            While we pride ourselves on providing fun and engaging materials
            within our app, our favorite way of learning hiragana is through
            Tofugu's 'Learn Hiragana' PDF. This guide is a rarity—it's so
            well-made that we felt compelled to send you here first. It is very
            effective at helping you quickly memorize every Hiragana character,
            and you can master Hiragana within days if not hours. Best of all,
            it's free for all learners—no login/signup required. Go check it
            out!
          </p>
          <p>
            Once you've made your way through all the characters,{" "}
            <strong>come back</strong> so we can properly greet each other in
            Japanese! Remember, you don't need to master every hiragana
            character in one go, we'll provide the romaji (the pronunciations)
            with the hiragana for this chapter, but we'll be ditching it in the
            next one.
          </p>
          <p className="text-2xl">🤯</p>
          <p className="text-lg">
            <em>
              Learning Hiragana is like building the foundation of a house. It
              takes time and practice, but everything you learn after this will
              rely on this fundamental knowledge. So, take your time, practice
              regularly, and most importantly, enjoy the process!
            </em>
          </p>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/hiragana-quiz-1">
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
