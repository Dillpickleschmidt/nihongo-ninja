// Dynamic greeting component that changes based on time of day

"use client"
import React, { useState, useEffect } from "react"
import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

function TimeBasedGreeting() {
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

  return (
    <div
      className={`${JapaneseFont.className} lg:flex lg:flex-col ml-5 2xl:max-w-[70%] text-[6.5rem] mt-32`}
    >
      <h1>
        <strong>{greeting}</strong>、
      </h1>
      <h1 className="inline-flex">キュズミックさん！</h1>
    </div>
  )
}

export default TimeBasedGreeting
