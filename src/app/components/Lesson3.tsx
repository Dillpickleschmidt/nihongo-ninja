"use client"
import JapaneseFont from "@/components/JapaneseFont"
import DakutenChart from "../data/DakutenChart"
import Button from "@/components/button"
import { use, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Lesson3() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.9, 1])
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.9],
    ["20%", "0%", "0%", "10%"]
  )

  return (
    <motion.div
      style={{ opacity, x, scale }}
      ref={targetRef}
      className="relative w-[45%] border-4 border-black rounded-[60px] bg-[#F6E7D2] text-black z-[-2] overflow-hidden"
    >
      <div className="mt-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/wavy-pattern-2.jpg)",
            backgroundRepeat: "repeat",
            backgroundSize: "700px", // Change this value to scale your background image
            backgroundBlendMode: "multiply",
            opacity: 9 / 100, // Change this value to set the opacity of the background image
          }}
        />
        <div className="pb-16">
          <h2 className="pt-28 text-5xl font-medium leading-[3.25rem] text-center px-20">
            🌊
          </h2>
          <h2 className="pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
            So you&apos;ve mastered the gentle curves and strokes of Hiragana,
            and you&apos;re feeling <em>*pretty* confident</em>, right? Well,{" "}
            <span className="text-[3.5rem]">
              <strong>hold onto your hats</strong>
            </span>
            , because it&apos;s time to <em>spice</em> things up with some
            dashes and circles —welcome to the dazzling domain of{" "}
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
                power to change sounds in a snap. They&apos;re like the cool DJs
                of the Hiragana world, remixing the beats. You take a plain
                sound like &apos;ka&apos; (
                <JapaneseFont className={`text-2xl font-semibold`}>
                  か
                </JapaneseFont>
                ), slap on a dakuten, and voila, it&apos;s suddenly transformed
                into <em>&apos;ga&apos;</em> (
                <JapaneseFont className={`text-2xl font-semibold`}>
                  が
                </JapaneseFont>
                ). It&apos;s like adding a little bit of seasoning to your
                favorite dish - just a small dash changes the whole flavor! 🍜
              </p>
            </div>
            <p className="mt-0 mb-12 text-base text-center">
              *It&apos;s a small change but take a look at those extra little
              quote marks on が*
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
                  <JapaneseFont className={`text-[1.325rem] font-semibold`}>
                    &apos;h&apos;
                  </JapaneseFont>{" "}
                  sounds. Add them to &apos;ha&apos; (
                  <JapaneseFont className={`text-2xl font-semibold`}>
                    は
                  </JapaneseFont>
                  ), and suddenly you&apos;re in the cool, breezy world of{" "}
                  <em>&apos;pa&apos;</em> (
                  <JapaneseFont className={`text-2xl font-semibold`}>
                    ぱ
                  </JapaneseFont>
                  ). It&apos;s like putting a fancy hat on a letter and watching
                  it turn into a social butterfly. 🦋
                </p>
              </div>
            </div>
            <h2 className="mt-16 text-4xl font-bold text-center">
              <em>
                <span className="text-5xl">WHY</span>, THOUGH?
              </em>
            </h2>
            <p className="!py-0">
              You might be asking, &quot;
              <span className="text-2xl">
                <em>Why all these changes?</em>
              </span>{" "}
              &quot; Well, because{" "}
              <em>
                <u>variety is the spice of life!</u>
              </em>{" "}
              Or maybe because Japanese speakers centuries ago got a little
              bored and decided to mix things up.
            </p>
            <p className="text-center">
              <JapaneseFont>わかりません</JapaneseFont>{" "}
              <span className="text-base">(I don&apos;t know)</span>{" "}
              <span className="text-4xl !py-2">🤷🏻</span>
            </p>
            <p>
              <span className="text-[1.325rem] font-bold">
                <em>Strap in</em>
              </span>{" "}
              and let&apos;s play with these quirky additions to the Japanese
              alphabet. Who knew a couple of tiny marks could make such a{" "}
              <u>big</u> difference? Happy learning, and remember, in the realm
              of Dakuten and Handakuten, <em>expect the unexpected!</em>
            </p>
            <div className="flex flex-col items-center">
              <DakutenChart />
            </div>
          </div>
          <div className="mt-24 mx-12 !mb-0 flex flex-row justify-between">
            <Button
              variant={"system"}
              link="/learn/tasteful-memes"
              className="text-sm"
            >
              What this do?👀
            </Button>
            <Button link="/learn/chapter-1/hiragana-quiz-2" autoFocus={true}>
              Next Lesson {"->"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
