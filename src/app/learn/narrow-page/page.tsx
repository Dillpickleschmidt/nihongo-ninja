import Dialog from "@/app/components/dialog"
import Image from "next/image"
import Button from "@/app/components/button"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function NarrowPage() {
  return (
    <>
      <Dialog variant={"narrow"} className="overflow-x-clip">
        {/* Background Images */}
        <div className="absolute h-[35px] w-[510px] ml-[320px]">
          <Image
            src="/bamboo-with-red-sun.jpg"
            alt="red sun with bamboo"
            width={1400}
            height={980}
            className="absolute z-[-1] object-contain mix-blend-darken opacity-70"
          ></Image>
        </div>
        {/* Content */}
        <div className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#999999] hover:scrollbar-thumb-neutral-400 overscroll-y-contain overscroll-x-none overflow-hidden">
          <h3
            className={`${JapaneseFont.className} text-3xl leading-[3.25rem] mt-[6.5rem] ml-24 mr-28 font-normal`}
          >
            １．第二段落で、主題を説明するためにどのような具体的な例が挙げられていますか？
          </h3>
          <div className="flex justify-center my-4">
            <textarea
              id="answer1"
              placeholder="Type your answer here..."
              autoFocus={true}
              className="h-[18.5rem] w-[88%] border-[5px] border-black rounded-[45px] bg-[#FFF9F1] placeholder:text-[#807D78] text-2xl py-6 px-8 resize-none notes"
            ></textarea>
          </div>
          <h3
            className={`${JapaneseFont.className} text-3xl leading-[3.25rem] mt-12 ml-24 mr-28 font-normal`}
          >
            ２．第二段落で、主題を説明するためにどのような具体的な例が挙げられていますか？
          </h3>
          <div className="flex justify-center mt-4 mb-[6.5rem]">
            <textarea
              id="answer2"
              cols={30}
              rows={10}
              placeholder="Type your answer here..."
              className="h-[18.5rem] w-[88%] border-[5px] border-black rounded-[45px] bg-[#191919] placeholder:text-[#838383] text-white text-2xl  py-6 px-8 resize-none"
            ></textarea>
          </div>
        </div>
      </Dialog>
    </>
  )
}
