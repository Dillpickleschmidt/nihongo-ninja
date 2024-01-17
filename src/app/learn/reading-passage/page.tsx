import Image from "next/image"
import Dialog from "@/app/components/dialog"
import KatanaLinework from "/public/katana-linework.svg"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function ReadingPassage() {
  return (
    <>
      <Dialog>
        {/* Content */}
        <div className="h-full overflow-x-hidden scrollbar-thin scrollbar-thumb-[#999999] hover:scrollbar-thumb-neutral-400">
          {/* Top Reading Passage Box */}
          <div className="flex flex-row justify-center h-[77%] mb-16 border-4 mr-[-4px] mt-[-4px] ml-[-60px] rounded-b-[60px] overflow-hidden border-black">
            <div className="w-[23%]">
              <div className="bg-[#191919] h-full"></div>
            </div>
            <div className="bg-white w-[77%]">
              {/* Background Image */}
              <div className="relative flex flex-row justify-end w-full">
                <div className="absolute h-[0px] w-[190px] mt-12 mr-24">
                  <Image
                    src={KatanaLinework}
                    alt="katana-linework"
                    className="object-contain mix-blend-multiply opacity-90 z-[-1] select-none pointer-events-none"
                  ></Image>
                </div>
              </div>
              {/* Text */}
            </div>
          </div>
          {/* Below Reading Passage Box */}
          <div
            className={`${JapaneseFont.className} text-3xl leading-[3.25rem] ml-32 mr-[400px] mb-4 font-normal`}
          >
            １．第二段落で、主題を説明するためにどのような具体的な例が挙げられていますか？
          </div>
          <div className="flex justify-end mx-3">
            <textarea
              id="answer1"
              placeholder="Type your answer here..."
              autoFocus={true}
              className="h-56 w-[63%] border-[5px] border-black rounded-[45px] bg-[#191919] placeholder:text-[#838383] text-white text-2xl  py-6 px-8 resize-none shadow-2xl drop-shadow-2xl"
            ></textarea>
          </div>
          <div
            className={`${JapaneseFont.className} text-3xl leading-[3.25rem] ml-32 mr-[400px] font-normal mt-8 mb-6`}
          >
            ２．読み物に出てきた3つの新しい単語を特定し、その意味を書いてください。これらは文脈の中でどのように使われていますか？
          </div>
          <div className="flex justify-start mx-20 mb-16">
            <textarea
              id="answer1"
              placeholder="Type your answer here..."
              autoFocus={true}
              className="h-56 w-[63%] border-[5px] border-black rounded-[45px] bg-[#191919] placeholder:text-[#838383] text-white text-2xl  py-6 px-8 resize-none"
            ></textarea>
          </div>
        </div>
      </Dialog>
    </>
  )
}
