"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import Button from "./Button"

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
  externalOnClick?: (e: React.MouseEvent<HTMLElement>) => void
  hideSpoiler?: boolean // Force the spoiler to be hidden from the parent component
}

export default function SpoilerButton({
  children,
  animated = false,
  text,
  className,
  externalOnClick,
  hideSpoiler = false,
}: SpoilerButtonProps) {
  const [showSpoiler, setShowSpoiler] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setShowSpoiler(!showSpoiler)
    if (externalOnClick) {
      externalOnClick(e) // Call the external click handler
    }
  }

  useEffect(() => {
    if (hideSpoiler) {
      setShowSpoiler(false)
    }
  })

  return (
    <div>
      <div className="w-full flex justify-center">
        <Button
          onClick={handleClick}
          className={twMerge(
            "py-2 px-4 drop-shadow-none text-lg bg-[#222222] text-[#F8F5E9] hover:bg-[#444444] inline-flex items-center",
            className
          )}
        >
          {text && <p className="mr-2 text-base">{text}</p>}
          {/* If content is showed */}
          {showSpoiler && (
            <div className="w-6 text-2xl">
              <MdOutlineKeyboardArrowUp />
            </div>
          )}
          {/* If content is hidden and animated is true */}
          {!showSpoiler && animated && (
            <Lottie animationData={downArrow} className="w-6" />
          )}
          {/* If content is hidden and animated is false */}
          {!showSpoiler && !animated && (
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
