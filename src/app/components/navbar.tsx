// Persistent navbar at the top of the screen for all pages

"use client"
// imports
import Button from "./button"
import { twMerge } from "tailwind-merge"
import { useState } from "react"

import Chat from "./chat"

// types
type Props = {
  locked?: boolean
}

// component
const Navbar = ({ locked }: Props) => {
  // track chat modal state
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }
  return (
    // Navbar
    <nav className="fixed top-0 left-0 z-30 w-full text-white bg-[#191919]">
      <ul className="flex items-center justify-between py-3 mx-auto">
        {/* 3 elements: */}
        <li></li> {/* 1. Empty li for spacing */}
        {/* 2. AI Chat Bar */}
        <input
          className={twMerge(
            "rounded-full px-12 py-3 my-3 ml-12 text-right placeholder:text-[#EEEEEE] w-[720px] bg-[#333333]",
            `${
              locked && // if locked, override with these classes:
              "bg-[#222222] placeholder:text-[#666666] text-[#666666] cursor-not-allowed py-[6px] my-1 w-[620px]"
            }`
          )}
          id="ai-input"
          type="text"
          placeholder="AIとはなします"
          disabled={locked}
          onClick={toggleChat}
          title={`${
            locked ? "This feature is disabled while taking lessons" : ""
          }`}
        />
        {/* Call Chat component */}
        {isChatOpen && <Chat isOpen={isChatOpen} toggleChatProp={toggleChat} />}
        {/* 3. Profile Button */}
        <Button
          className={twMerge(
            "px-0 py-0 mr-12 bg-gradient-to-t from-red-800 to-red-500 w-14 h-14 drop-shadow-none",
            `${locked && "w-11 h-11"}`
          )}
          link="/learn/profile"
        ></Button>
      </ul>
    </nav>
  )
}

export default Navbar
