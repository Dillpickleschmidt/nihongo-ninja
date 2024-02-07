// Dynamic greeting component that changes based on time of day

"use client"
import { useState, useEffect } from "react"
import JapaneseFont from "./text/JapaneseFont"

export default function TimeBasedGreeting({ ...props }) {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const updateGreeting = () => {
      const hours = new Date().getHours()
      if (hours < 12) {
        setGreeting("おはいよございます")
      } else if (hours < 18) {
        setGreeting("こにちは")
      } else {
        setGreeting("こんばんは")
      }
    }

    updateGreeting()
    // Optionally, set an interval to update greeting
    const interval = setInterval(updateGreeting, 3600000) // Update every hour

    // Clear interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return <JapaneseFont {...props}>{greeting}</JapaneseFont>
}
