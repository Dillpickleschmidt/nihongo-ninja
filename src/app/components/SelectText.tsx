"use client"
import { useState } from "react"
import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type SelectTextProps = {
  answer: string
  a?: string
  b?: string
  c?: string
  d?: string
}

export default function SelectText({ answer, a, b, c, d }: SelectTextProps) {
  const options = { a, b, c, d }
  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({})
  const [correct, setCorrect] = useState<{ [key: string]: boolean }>({})

  const handleClick = (option: string) => {
    setClicked((prev) => ({ ...prev, [option]: true }))
    if (options[option as keyof typeof options] === answer) {
      setCorrect((prev) => ({ ...prev, [option]: true }))
    }
  }

  const getTextColorClass = (option: string) => {
    if (correct[option]) {
      return "bg-green-500 bg-opacity-[90%] rounded-md font-medium text-black"
    } else if (clicked[option]) {
      return "text-red-500 rounded-md font-medium"
    } else {
      return ""
    }
  }

  return (
    <div className="pl-7 !space-y-3">
      {a && (
        <p className={``}>
          <span
            className={`${getTextColorClass(
              "a"
            )} cursor-pointer inline-block origin-left hover:scale-[110%] ease-out duration-100 px-3 py-[.0625rem]`}
            onClick={() => handleClick("a")}
          >
            {"a) "}
            <span className={`${JapaneseFont.className} text-[1.7rem]`}>
              {a}
            </span>
          </span>
        </p>
      )}
      {b && (
        <p className={``}>
          <span
            className={`${getTextColorClass(
              "b"
            )} cursor-pointer inline-block origin-left hover:scale-[110%] ease-out duration-100 px-3 py-[.0625rem]`}
            onClick={() => handleClick("b")}
          >
            {"b) "}
            <span className={`${JapaneseFont.className} text-[1.7rem]`}>
              {b}
            </span>
          </span>
        </p>
      )}
      {c && (
        <p className={``}>
          <span
            className={`${getTextColorClass(
              "c"
            )} cursor-pointer inline-block origin-left hover:scale-[110%] ease-out duration-100 px-3 py-[.0625rem]`}
            onClick={() => handleClick("c")}
          >
            {"c) "}
            <span className={`${JapaneseFont.className} text-[1.7rem]`}>
              {c}
            </span>
          </span>
        </p>
      )}
      {d && (
        <p className={``}>
          <span
            className={`${getTextColorClass(
              "d"
            )} cursor-pointer inline-block origin-left hover:scale-[110%] ease-out duration-100 px-3 py-[.0625rem]`}
            onClick={() => handleClick("d")}
          >
            {"d) "}
            <span className={`${JapaneseFont.className} text-[1.7rem]`}>
              {d}
            </span>
          </span>
        </p>
      )}
    </div>
  )
}
