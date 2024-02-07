"use client"
import { twMerge } from "tailwind-merge"
import { Noto_Sans_JP } from "next/font/google"
const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type CharacterBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  character: string
  userInput: string
  onInputChange: (newUserInput: string) => void
  disabled?: boolean
  inputTextColor?: string
  innerBorderColor?: string
}

// Boxes with a characters in them
export function CharacterBox({
  character,
  userInput,
  onInputChange,
  disabled,
  className,
  inputTextColor = "text-red-400",
  innerBorderColor = "border-[#aaaaaa]",
}: CharacterBoxProps) {
  return (
    <div
      className={twMerge(
        `${JapaneseFont.className} m-1 text-[3.5rem] h-52 bg-[#222222] shadow-lg shadow-[#645947] rounded-[12px]`,
        className
      )}
    >
      {character}
      <div className={`mt-8 mb-4 text-[2.5rem] ${inputTextColor}`}>
        <input
          type="text"
          className={`w-28 bg-[#191919] bg-opacity-0 border-2 ${innerBorderColor} border-dashed rounded-xl text-center`}
          value={userInput}
          onChange={(event) => onInputChange(event.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
