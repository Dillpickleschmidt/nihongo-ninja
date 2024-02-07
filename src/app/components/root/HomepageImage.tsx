"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

type Props = {
  image: string
}

export default function HomepageImage({ image }: Props) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.9, 1])
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.9],
    ["-10%", "-20%", "-20%", "-15%"]
  )

  return (
    <motion.div style={{ opacity, x, scale }} ref={targetRef} className="">
      <Image
        src={image}
        width={1400}
        height={1080}
        alt="lesson-page-preview"
        className="relative my-12"
      />
    </motion.div>
  )
}
