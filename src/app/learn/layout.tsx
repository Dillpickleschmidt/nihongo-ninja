import Image from "next/image"
import { Space_Grotesk } from "next/font/google"
import Button from "../../components/button"
import TimeBasedGreeting from "../../components/greeting"

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function Lesson({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-[5rem] max-w-[1650px] mx-auto z-0">
      {children}
      <TimeBasedGreeting />
      <ul
        className="grid grid-cols-4 h-[520px] max-w-[91%] gap-4 mt-32 mx-auto text-center text-7xl
            [&>*]:p-5 [&>*]:rounded-2xl [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:shadow-lg [&>*]:drop-shadow-lg [&>*]:saturate-50"
      >
        <Button
          variant={"card"}
          className="bg-red-700"
          link="/learn/chapter-1/welcome"
        >
          Lessons
        </Button>
        <Button
          variant={"card"}
          className="bg-cyan-500"
          link="/learn/reading-passage"
        >
          Writing
        </Button>
        <Button variant={"card"} className="bg-yellow-500" link="/games">
          Games
        </Button>
        <Button
          variant={"card"}
          className="bg-purple-500"
          link="/spaced-repetition"
        >
          Flashcards
        </Button>
      </ul>
      <div className="grid grid-cols-[1fr,2.5fr] h-[675px] max-w-[95%] mt-48 mx-auto">
        <h3 className="leading-[100px] py-24 text-9xl">
          Keep up the great work!
        </h3>
        <div className="container ml-12 bg-[#F6E7D2] rounded-[60px] shadow-inner overflow-hidden">
          <div className="flex flex-row justify-between">
            <h4
              className={`${SpaceGrotesk.className} mt-20 ml-24 text-5xl text-[#191919] font-semibold`}
            >
              <u>YOU&apos;RE ON CHAPTER 2</u>
            </h4>
            <div className="flex flex-row justify-center items-center mr-12 mt-12 bg-[#191919] w-28 h-28 rounded-full">
              <h4 className="text-3xl">
                <u>2/3</u>
              </h4>
            </div>
          </div>
          <div className="container bg-[#FFF7EC] mt-8 ml-48 w-[75%] h-[65%] rounded-[60px] shadow-inner"></div>
        </div>
      </div>
      <h2 className={`${SpaceGrotesk.className} my-24 text-9xl text-center`}>
        YOU&apos;VE BEEN STUDYING FOR <strong>56</strong> DAYS IN A ROW,
        YOU&apos;RE ON
        <strong> FIRE</strong> 🔥!
      </h2>
    </main>
  )
}
