"use client"
import SpoilerButton from "../../components/SpoilerButton"
import { useState } from "react"
import Button from "../../components/button"
import { motion } from "framer-motion"

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  text: string
}

export default function Dropdown({ children, text }: DropdownProps) {
  const [showSpoiler, setShowSpoiler] = useState(true)
  return (
    <div className="w-[45%]">
      <div className="flex justify-between items-center pr-3 border-b border-white border-opacity-15 py-3">
        <Button
          onClick={() => setShowSpoiler(!showSpoiler)}
          variant="card"
          className="text-lg py-2 px-4 rounded-md text-sky-400 bg-neutral-800"
        >
          {text}
        </Button>
        <div className="flex space-x-6 ease">
          <div className="text-base">Cards</div>
          <div className="text-base">Actions</div>
        </div>
      </div>
      {showSpoiler && (
        <motion.div
          key={`${showSpoiler}`} // key is used to force a rerender when the index changes
          initial={{ y: -5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          exit={{ y: 5, opacity: 0 }}
          className="w-full flex flex-col
                [&>*]:py-3 [&>*]:ml-4 [&>*]:px-2 [&>*]:border-b [&>*]:border-white [&>*]:border-opacity-15"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
