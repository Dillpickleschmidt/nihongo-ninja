"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Button from "@/components/Button"

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "relative"
  })

  return (
    <motion.div style={{ opacity }} ref={targetRef} className="">
      <motion.div
        className="origin-top-left w-full"
        style={{ scale, position }}
      >
        <div className="2xl:flex flex-none 2xl:justify-between">
          <h1 className="mt-52 2xl:mb-36 2xl:ml-48 2xl:max-w-[70rem] xl:mx-32 md:mx-16 mx-10 text-8xl font-semibold">
            <span className="text-red-500">[In progress]</span> Nihongo
            Ninja—the one-stop shop for all your Japanese learning needs.
          </h1>
          <div className="w-full flex flex-col justify-center items-center">
            <Button
              className="text-4xl my-24 py-5 px-9 font-medium"
              link="/learn"
            >
              Get started {"->"}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
