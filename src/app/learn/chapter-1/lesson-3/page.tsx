import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Lesson3() {
  return (
    <Dialog variant={"reading"}>
      <div className="h-full pb-16 overflow-y-auto overscroll-y-contain no-scrollbar">
        <h2 className="pt-28 text-5xl font-medium leading-[3.25rem] text-center px-20">
          🌊
        </h2>
        <h2 className="pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
          So you've mastered the gentle curves and strokes of Hiragana, and
          you're feeling <em>*pretty* confident</em>, right? Well,{" "}
          <span className="text-[3.5rem]">
            <strong>hold onto your hats</strong>
          </span>
          , because it's time to <em>spice</em> things up with some dashes and
          circles —welcome to the dazzling domain of{" "}
          <span className="text-5xl font-bold">Dakuten</span> and{" "}
          <span className="text-5xl font-bold">Handakuten!</span>
        </h2>
        <div className="px-32 text-xl leading-8 [&>*]:py-6">
          <p className="!py-0 text-center font-bold text-3xl">( " )</p>
          <div className="flex flex-row justify-center !pb-0">
            <div
              className="pr-6 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <em>
                <p>D</p>
                <p>A</p>
                <p>K</p>
                <p>U</p>
                <p>T</p>
                <p>E</p>
                <p>N</p>
              </em>
            </div>
            <p>
              Think of Dakuten as little <em>magical</em> marks that have the
              power to change sounds in a snap. They're like the cool DJs of the
              Hiragana world, remixing the beats. You take a plain sound like
              'ka' (
              <span
                className={`${JapaneseFont.className} text-2xl font-semibold`}
              >
                か
              </span>
              ), slap on a dakuten, and voila, it's suddenly transformed into{" "}
              <em>'ga'</em> (
              <span
                className={`${JapaneseFont.className} text-2xl font-semibold`}
              >
                が
              </span>
              ). It's like adding a little bit of seasoning to your favorite
              dish - just a small dash changes the whole flavor! 🍜
            </p>
          </div>
          <p className="mt-0 mb-12 text-base text-center">
            *It's a small change but take a look at those extra little quote
            marks on が*
          </p>
          <div className="flex flex-row justify-center items-center !pb-0">
            <div
              className="pr-6 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <em>
                <p>H</p>
                <p>A</p>
                <p>N</p>
                <p>D</p>
                <p>A</p>
                <p>K</p>
                <p>U</p>
                <p>T</p>
                <p>E</p>
                <p>N</p>
              </em>
            </div>
            <div className="mb-12">
              <p className="!py-0 text-center font-bold text-3xl">( ゜)</p>
              <p>
                Now, if Dakuten are the DJs, Handakuten are like their quirky
                sidekicks. These little circles are a bit more selective, only
                partying with the{" "}
                <span
                  className={`${JapaneseFont.className} text-[1.325rem] font-semibold`}
                >
                  'h'
                </span>{" "}
                sounds. Add them to 'ha' (
                <span
                  className={`${JapaneseFont.className} text-2xl font-semibold`}
                >
                  は
                </span>
                ), and suddenly you're in the cool, breezy world of{" "}
                <em>'pa'</em> (
                <span
                  className={`${JapaneseFont.className} text-2xl font-semibold`}
                >
                  ぱ
                </span>
                ). It's like putting a fancy hat on a letter and watching it
                turn into a social butterfly. 🦋
              </p>
            </div>
          </div>
          <h2 className="mt-16 text-4xl font-bold text-center">
            <em>
              <span className="text-5xl">WHY</span>, THOUGH?
            </em>
          </h2>
          <p className="!py-0">
            You might be asking, "
            <span className="text-2xl">
              <em>Why all these changes?</em>
            </span>{" "}
            " Well, because{" "}
            <em>
              <u>variety is the spice of life!</u>
            </em>{" "}
            Or maybe because Japanese speakers centuries ago got a little bored
            and decided to mix things up.
          </p>
          <p className="text-4xl text-center !py-2">🤷🏻</p>
          <p>
            <span className="text-[1.325rem] font-bold">
              <em>Strap in</em>
            </span>{" "}
            and let's play with these quirky additions to the Japanese alphabet.
            Who knew a couple of tiny marks could make such a <u>big</u>{" "}
            difference? Happy learning, and remember, in the realm of Dakuten
            and Handakuten, <em>expect the unexpected!</em>
          </p>
          (Provide dialectical hiragana chart)
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-between">
          <Button
            variant={"system"}
            link="/learn/tasteful-memes"
            className="text-sm"
          >
            What this do?👀
          </Button>
          <Button link="/learn/chapter-1/hiragana-quiz-2">
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
