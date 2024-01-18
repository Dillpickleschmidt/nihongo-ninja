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
  centered,
}: RomajiProps) {
  return (
    <>
      <span>{children}</span>
      <p
        className={`${romajiTextSize} !${romajiTextPadding} ${
          centered && "text-center"
        }`}
      >
        {romaji}
      </p>
    </>
  )
}
