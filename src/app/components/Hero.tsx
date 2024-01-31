"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Button from "@/components/button"

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed"
  })

  return (
    <motion.div style={{ opacity }} ref={targetRef} className="h-[815px]">
      <motion.div
        className="origin-top-left w-full"
        style={{ scale, position }}
      >
        <div className="flex justify-between">
          <h1 className="mt-52 mb-36 ml-48 max-w-[70rem] text-8xl font-semibold">
            <span className="text-red-500">[In progress]</span> Nihongo
            Ninja—the one-stop shop for all your Japanese learning needs.
          </h1>
          <div className="w-full flex flex-col justify-center items-center">
            <Button className="text-4xl py-5 px-9 font-medium" link="/learn">
              Get started {"->"}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
