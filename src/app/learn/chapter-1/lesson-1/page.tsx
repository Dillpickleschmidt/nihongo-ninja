import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import Image from "next/image"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Lesson1() {
  return (
    <Dialog
      variant={"reading"}
      background="/wavy-pattern-2.jpg"
      backgroundSize="700px"
      opacity={4}
      className="bg-[#151515] text-white"
    >
      <div className="pb-16">
        <div>
          <Image
            src={"/empty-circle.jpg"}
            alt="circle"
            width={1600}
            height={800}
            className="absolute mix-blend-lighten opacity-40 mt-[-30px] z-[-1]"
          />
        </div>
        <h1
          className={`${JapaneseFont.className} pt-[16rem] pb-8 text-[5rem] font-bold leading-[3.5rem] px-12 text-center`}
        >
          こにちは！
        </h1>
        <p className="text-xl text-center">Good afternoon!</p>
        <h2 className="pb-2 pt-52 text-5xl font-medium leading-[3.5rem] text-center px-24">
          Welcome to your <em>first lesson!</em> ⛩️
        </h2>
        <div className="px-28 text-xl leading-8 [&>*]:py-6">
          <p>
            <u>Glad you could make it!</u> Now, as a beginner, the first thing
            you'll want to know is that Japanese consists of{" "}
            <em>
              <strong>three</strong>
            </em>{" "}
            writing systems and all three can be seen in a single sentence:
          </p>
          <div className="flex flex-row justify-center">
            <p className={`${JapaneseFont.className} text-2xl text-center`}>
              テレビを見ます
            </p>
            <p> - I watch television (change)</p>
          </div>
          <h2 className="text-4xl text-center font-bold !pb-4 !pt-12">
            Hiragana
          </h2>
          <p className="!pt-0">
            First up, we've got <strong>Hiragana</strong>, your new{" "}
            <strong>best friend</strong> in Japanese. Hiragana is used for
            native Japanese words, and the whole alphabet revolves around five
            simple vowels:
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
          <p className="mt-0 text-base text-center">
            *Note the rounded shapes of Hiragana characters*
          </p>
          <p>
            You already saw Hiragana when you created an account. Think of
            Hiragana as your go-to for most things Japanese. It's like learning
            your ABCs, but way cooler!
          </p>
          <h2 className="text-4xl text-center font-bold !pb-4 !pt-12">
            Katakana
          </h2>
          <p className="!pt-0">
            Then, say hello to <strong>Katakana</strong>. It's the twin of
            Hiragana, used for words that come from{" "}
            <strong>other languages</strong>, and is often used in TV
            commercials to emphasize words to make them look <em>*special*</em>.
          </p>
          <div
            className={`${JapaneseFont.className} font-medium text-center text-2xl !py-0`}
          >
            <p>ア a</p>
            <p>イ i</p>
            <p>ウ u</p>
            <p>エ e</p>
            <p>オ o</p>
          </div>
          <p className="mt-0 text-base text-center">
            (Note the angular shapes of Katakana characters)
          </p>
          <p>
            Katakana works exactly the same way as Hiragana, and the characters
            sound the same, too. Once you know Hiragana, Katakana is just
            another set of characters. Think of it like a funky new font!
          </p>
          <h2 className="text-4xl text-center font-bold !pb-4 !pt-12">Kanji</h2>
          <p className="!pt-0">
            Finally, there's <strong>Kanji</strong>. They're like little{" "}
            <strong>pictures</strong> that stand for whole words or ideas. They
            are inherited from traditional Chinese. While China has simplified
            many of its characters, Japan has kept many of them unchanged, like
            a collection of preserved art pieces.
          </p>
          <p className="mt-0 text-base text-center">
            (Note the pictorial depiction of the sun)
          </p>
          <p>
            They might look complex, but we'll tackle them bit by bit. Think of
            them as a journey you'll embark on gradually, uncovering the stories
            behind each symbol as you grow in your language skills.
          </p>
          <h2 className="text-3xl font-bold !pb-4 !pt-16">Getting Started</h2>
          <p className="!pt-0">
            Let's start by getting comfy with Hiragana—their pronunciation, and
            basic writing. It's your <u>key to unlocking everything else.</u>
          </p>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/lesson-2" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
