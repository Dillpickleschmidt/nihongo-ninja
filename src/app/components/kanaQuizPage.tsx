"use client"
import { useEffect, useRef, useState } from "react"
import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import {
  LetterBoxes,
  mainKana,
  dakuten,
  yoon,
  allKana,
} from "@/app/components/character-quiz-boxes"
import HandleBeforeUnload from "@/app/util/handleBeforeUnload"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type KanaQuizProps = {
  kana: string[]
  nextLesson: string
}

export default function KanaQuiz({ kana, nextLesson }: KanaQuizProps) {
  HandleBeforeUnload()

  return (
    <Dialog
      variant={"xl"}
      className="bg-[#F6E7D2] border-none overscroll-y-contain overflow-y-scroll no-scrollbar"
      background="/wavy-pattern.jpg"
      showAlertOnClose={true}
    >
      <div className="text-center">
        <h1 className="mt-12 mb-4 text-6xl font-semibold">Type the Romaji</h1>
        <h2 className="text-2xl">Press enter to submit.</h2>
        <h2 className="text-2xl">Take it as many times as you like! 👍</h2>
      </div>
      <div
        className={`${JapaneseFont.className} container grid grid-cols-[repeat(auto-fill,minmax(170px,_1fr))] p-3 mx-auto mt-12 text-center gap-3
          [&>*]:text-[#F8F5E9]`}
      >
        <LetterBoxes kana={kana} />
      </div>
      <div className="flex flex-row justify-end w-full">
        <Button
          className="mt-8 mb-16 mr-12 lg:mb-24 lg:mr-24"
          link={`${nextLesson}`}
        >
          Submit
        </Button>
      </div>
    </Dialog>
  )
}
