import { Noto_Sans_JP } from "next/font/google"
import { twMerge } from "tailwind-merge"

const MyJapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type JapaneseFontProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
  className?: string
}

export default function JapaneseFont({
  children,
  className,
  ...props
}: JapaneseFontProps) {
  return (
    <span
      className={twMerge(`${MyJapaneseFont.className}`, className)}
      {...props}
    >
      {children}
    </span>
  )
}
