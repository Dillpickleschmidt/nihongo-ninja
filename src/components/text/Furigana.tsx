import React from "react"

type FuriganaProps = {
  children: React.ReactNode
  furigana: any
}

export default function Furigana({ children, furigana }: FuriganaProps) {
  return (
    <ruby className="font-japanese">
      {children}
      <rp>(</rp>
      <rt>{furigana}</rt>
      <rp>)</rp>
    </ruby>
  )
}
