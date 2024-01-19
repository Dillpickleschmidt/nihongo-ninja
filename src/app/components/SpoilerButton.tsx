"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import Button from "./button"

import upArrow from "./upArrow.json"
import downArrow from "./downArrow.json"

type SpoilerButtonProps = {
  children: React.ReactNode
}

export default function SpoilerButton({ children }: SpoilerButtonProps) {
  const [showSpoiler, setShowSpoiler] = useState(false)

  return (
    <div>
      <div className="w-full flex justify-center">
        <Button
          onClick={() => setShowSpoiler(!showSpoiler)}
          className="py-2 px-4 drop-shadow-none text-lg bg-[#222222] text-[#F6E7D2] hover:bg-[#444444] inline-flex items-center"
        >
          {showSpoiler ? (
            <Lottie animationData={upArrow} className="w-6" />
          ) : (
            <>
              <Lottie animationData={downArrow} className="w-6" />
            </>
          )}
        </Button>
      </div>
      <motion.div
        key={`${showSpoiler}`} // key is used to force a rerender when the index changes
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{ y: 30, opacity: 0 }}
        className="flex flex-col items-center"
      >
        {showSpoiler && children}
      </motion.div>
    </div>
  )
}
