// Documentation:
// https://github.com/hexenq/kuroshiro?tab=readme-ov-file#ready-made-analyzer-plugins

"use client"
import React, { useEffect, useState } from "react"
import Kuroshiro from "kuroshiro"
// Initialize kuroshiro with an instance of analyzer (You could check the [apidoc](#initanalyzer) for more information):
// For this example, you should npm install and import the kuromoji analyzer first
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  inputText: string
}

export default function ConvertToHiragana({ inputText, ...props }: Props) {
  const [result, setResult] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Instantiate
        const kuroshiro = new Kuroshiro()
        // Initialize
        // Here uses async/await, you could also use Promise
        await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "/dict/" }))
        // Convert what you want
        const result = await kuroshiro.convert(inputText, {
          mode: "spaced",
          to: "hiragana",
        })
        setResult(result)
      } catch (error) {
        console.error(error)
        setResult("Error occurred while converting text.")
      }
    }

    fetchData()
  }, [])

  return <p {...props}>{result}</p>
}
