"use client"
import { useState } from "react"
import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import HiraganaChart from "@/components/charts/HiraganaChart"

import { Noto_Sans_JP } from "next/font/google"
import SpoilerButton from "@/components/SpoilerButton"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Lesson2() {
  return (
    <Dialog
      variant={"reading"}
      background="/wavy-pattern-2.jpg"
      backgroundSize="700px"
      opacity={9}
    >
      <div className="pb-16">
        <h1 className="pt-32 pb-8 text-[5rem] font-bold leading-[4.25rem] px-20 text-center">
          Hiragana: The <span className="text-red-500">A</span>
          <span className="text-green-500">B</span>
          <span className="text-blue-500">C</span>s of Japanese
        </h1>
        <h2 className="text-4xl text-center font-bold !pb-4 !pt-12">
          What is Hiragana?
        </h2>
        <div className="px-32 text-xl leading-8 [&>*]:py-6">
          <p className="!pt-0">
            Hiragana is one of the three main scripts used in Japanese writing,
            along with Katakana and Kanji, often referred to as the foundational
            writing system in Japanese. It&apos;s primarily used for{" "}
            <strong>native</strong> Japanese words and{" "}
            <strong>grammatical elements</strong> that connect words into
            sentences. Each Hiragana character represents a distinct sound, and
            these characters can be combined to form words.
          </p>
          <p>
            There are a total of <strong>46</strong> Hiragana characters. It
            sounds like a lot, but don&apos;t worry! They all include the same 5
            vowels that you&apos;ve already seen.
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
            Remember this pattern! &apos;a, i, u, e, o&apos;. If you memorize
            that, the rest will come more easily.
          </p>
          <p>
            Next, we just add a consonant to each of these. Adding &apos;k&apos;
            will give us five new characters:
          </p>
          <div
            className={`${JapaneseFont.className} font-medium text-center text-2xl !py-0`}
          >
            <p>か (ka) - &apos;car&apos;</p>
            <p>き (ki) - &apos;key&apos;</p>
            <p>く (ku) - &apos;coupon&apos;</p>
            <p>け (ke) - &apos;kept&apos;</p>
            <p>こ (ko) - &apos;corner&apos;</p>
          </div>
          <p className="!pb-0">
            Try adding an &apos;s&apos; instead of &apos;k&apos;. What do you
            think the sounds will be?
          </p>

          <SpoilerButton animated={true} className="flex justify-center">
            <div
              className={`${JapaneseFont.className} mt-6 font-medium text-center text-2xl`}
            >
              <p>さ (sa)</p>
              <p>し (shi*)</p>
              <p>す (su)</p>
              <p>せ (se)</p>
              <p>そ (so)</p>
            </div>
            <p className="mt-6">
              But wait, し sounds like &apos;she&apos; instead of
              &apos;see&apos;! Some characters do veer <em>slightly</em> off the
              pattern, but they&apos;re nothing that you haven&apos;t pronounced
              before in English.
            </p>
          </SpoilerButton>
          <p className="!pb-0">
            Here&apos;s a chart containing all 46 Hiragana characters with their
            pronunciations.
          </p>

          <SpoilerButton animated={true}>
            <div className="mt-12 flex flex-col items-center">
              <HiraganaChart />
            </div>
          </SpoilerButton>
          <p>
            You&apos;ve probably noticed that not all the rows are completely
            filled. Japanese doesn&apos;t have characters for &apos;yi&apos;,
            &apos;ye&apos;, &apos;wi&apos;, etc. That just means fewer
            characters for you to memorize!
          </p>
          <p>
            The pattern seems simple, but the characters themselves are all
            squiggly and weird! And 46 of them? You may be asking yourself,{" "}
            <span className="text-2xl font-medium">
              <em>&quot;How the heck am I supposed to learn these?&quot;</em>
            </span>{" "}
            Don&apos;t worry, the ✨internet✨ has you covered! 😼
          </p>
          <p>
            Our favorite way of learning hiragana is through Tofugu&apos;s
            &apos;Learn Hiragana&apos; PDF. This guide is a rarity—it&apos;s so
            well-made that we felt compelled to send you here first{" "}
            <span className="text-sm">(no need to reinvent the wheel)</span>. It
            is very effective at helping you quickly memorize every Hiragana
            character, and you can master Hiragana within days if not hours.
            Best of all, it&apos;s free for all learners—no login/signup
            required. Go check it out!
          </p>
          <p>
            Once you&apos;ve made your way through all the characters,{" "}
            <strong>come back</strong> so we can properly greet each other in
            Japanese! Remember, you don&apos;t need to master every hiragana
            character in one go, we&apos;ll provide the romaji (the
            pronunciations) with the hiragana for the remainder of this chapter,
            but we&apos;ll be ditching them in the next one.
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
          <Button link="/learn/chapter-1/hiragana-quiz-1" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
