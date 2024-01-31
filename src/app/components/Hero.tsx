"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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
    <motion.div style={{ opacity }} ref={targetRef} className="h-[600px] mb-36">
      <div className="pt-52">
        <motion.div
          className="origin-top-left max-w-[70rem] ml-48"
          style={{ scale, position }}
        >
          <h1 className="text-8xl font-semibold">
            Nihongo Ninja—the one-stop shop for all your Japanese learning
            needs.
          </h1>
        </motion.div>
      </div>
    </motion.div>
  )
}
