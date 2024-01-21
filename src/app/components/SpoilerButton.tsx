"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import Button from "./button"

import upArrow from "./upArrow.json"
import downArrow from "./downArrow.json"
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { twMerge } from "tailwind-merge"

type SpoilerButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  animated?: boolean
  text?: string
  className?: string
}

export default function SpoilerButton({
  children,
  animated = false,
  text,
  className,
}: SpoilerButtonProps) {
  const [showSpoiler, setShowSpoiler] = useState(false)

  return (
    <div>
      <div className="w-full flex justify-center">
        <Button
          onClick={() => setShowSpoiler(!showSpoiler)}
          className={twMerge(
            "py-2 px-4 drop-shadow-none text-lg bg-[#222222] text-white hover:bg-[#444444] inline-flex items-center",
            className
          )}
        >
          {text && <p className="mr-2 text-base">{text}</p>}
          {/* If content is showed and animated is true */}
          {showSpoiler && animated && (
            <Lottie animationData={upArrow} className="w-6" />
          )}
          {/* If content is showed and animated is false */}
          {showSpoiler && (
            <div className="w-6">
              <MdOutlineKeyboardArrowUp />
            </div>
          )}
          {/* If content is hidden and animated is true */}
          {!showSpoiler && animated && (
            <Lottie animationData={downArrow} className="w-6" />
          )}
          {/* If content is hidden and animated is false */}
          {!showSpoiler && (
            <div className="w-6">
              <MdKeyboardArrowDown />
            </div>
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
