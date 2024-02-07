"use client"
import JapaneseFont from "@/components/text/JapaneseFont"
import Button from "@/components/Button"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Study() {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div>
      <div className="h-[60%] 2xl:w-[55%] xl:w-[80%] fixed top-[47%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-12 py-10 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col justify-between mx-16">
            <h1 className="mt-16 mb-8 text-center text-8xl pb-8 px-12 border-b border-white border-opacity-20">
              <JapaneseFont>大丈夫</JapaneseFont>
            </h1>
            {showAnswer && (
              <motion.div
                key={`${showAnswer}`} // key is used to force a rerender when the index changes
                initial={{ y: -7, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4 },
                }}
                exit={{ y: 7, opacity: 0 }}
                className=""
              >
                <h2 className="text-center text-5xl">
                  <JapaneseFont>
                    <span className="font-medium">だいじょうぶ</span> -{" "}
                    <span className="text-[2.5rem]">
                      It&apos;s okay; not to worry
                    </span>
                  </JapaneseFont>
                </h2>
              </motion.div>
            )}
          </div>
          {showAnswer ? (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center gap-6">
                <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl underline decoration-1 underline-offset-4 bg-sky-400">
                  30
                </div>
                <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-red-500">
                  4
                </div>
                <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-[#42c672]">
                  1
                </div>
              </div>
              <div className="flex justify-center gap-6">
                <Button
                  variant="card"
                  className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-red-500"
                >
                  <div className="flex flex-row items-center">
                    Again
                    <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
                      1
                    </span>
                  </div>
                </Button>
                <Button
                  variant="card"
                  className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-yellow-400"
                >
                  Hard
                  <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-55 rounded-md inline-flex items-center justify-center text-sm">
                    2
                  </span>
                </Button>
                <Button
                  variant="card"
                  className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-sky-400"
                >
                  Good
                  <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-45 rounded-md inline-flex items-center justify-center text-sm">
                    3
                  </span>
                </Button>
                <Button
                  variant="card"
                  className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-[#42c672]"
                >
                  Easy
                  <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
                    4
                  </span>
                </Button>
              </div>
            </div>
          ) : (
            <Button
              variant="card"
              className="text-lg py-3 px-5 rounded-lg text-neutral-100 font-semibold bg-neutral-800 border border-black border-opacity-70 w-[80%] hover:scale-x-[1.005]hover:scale-y-[1.03]"
              onClick={() => setShowAnswer(true)}
            >
              Show Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
