type RomajiProps = {
  children: React.ReactNode
  romaji: string
}

export default function Romaji({ children, romaji }: RomajiProps) {
  return (
    <>
      <span>{children}</span>
      <p className="text-base !pt-0">{romaji}</p>
    </>
  )
}
