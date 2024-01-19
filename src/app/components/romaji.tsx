import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type RomajiProps = {
  children: React.ReactNode
  romaji: string
  romajiTextSize?: string
  romajiTextPadding?: string
  centered?: boolean
}

export default function Romaji({
  children,
  romaji,
  romajiTextSize = "text-base",
  romajiTextPadding = "pt-0",
  centered = true,
}: RomajiProps) {
  return (
    <div className="inline-flex">
      <div className="block">
        <span className={`${JapaneseFont.className}`}>{children}</span>
        <p
          className={`${romajiTextSize} !${romajiTextPadding} ${
            centered && "text-center"
          }`}
        >
          {romaji}
        </p>
      </div>
    </div>
  )
}
