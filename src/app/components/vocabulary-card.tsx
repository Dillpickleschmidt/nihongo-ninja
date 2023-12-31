import { ReactNode } from "react"
type VocabCardProps = {
  children?: ReactNode
  title: string
  hiragana: string
  pronunciation?: string
  light?: boolean
}

export default function VocabCard({
  children,
  title,
  hiragana,
  pronunciation,
  light = false,
}: VocabCardProps) {
  return (
    <div
      className={`shadow-black py-12 px-16 my-6 mx-6 rounded-[30px] shadow-lg ${
        light ? "bg-[#f7f0dd]" : "bg-[#f7e2c4]"
      }`}
    >
      <h3 className="text-2xl font-bold !pb-0">{title}</h3>
      <p className="!pt-4">
        <strong>Hiragana:</strong> {hiragana} <br />
        {pronunciation && (
          <>
            <strong>Pronunciation:</strong> {pronunciation} <br />
          </>
        )}
        <strong>Usage:</strong> {children}
      </p>
    </div>
  )
}
