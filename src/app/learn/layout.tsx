import Image from "next/image"
import { Space_Grotesk } from "next/font/google"
import Button from "../../components/Button"
import TimeBasedGreeting from "@/components/greeting"
import JapaneseFont from "@/components/text/JapaneseFont"
import Link from "next/link"

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function Lesson({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto">
      {children}
      <div className="mt-24 h-screen w-full z-10">
        <div className="h-full pb-[12rem] xl:pb-[14rem]">
          <div className="absolute w-full z-30 h-8 bg-[#2d2d2d]/90 backdrop-blur-xl shadow-md"></div>
          <Link href="/learn/chapter-1/welcome">
            <div className="relative h-full z-20 shadow-md bg-[#191919]">
              <Image
                src="/img/japanese-gate.png"
                fill={true}
                alt="cover image"
                className="h-full object-cover"
              />
              {/* Vignette */}
              <div className="absolute w-full h-full bg-[radial-gradient(50%_120%_at_50%_50%,rgba(0,0,0,0.0)_70%,rgba(0,0,0,0.2)_100%)]"></div>
              <div
                className="absolute w-full h-full flex justify-center items-center pb-[20.5rem] md:text-[5.75rem] text-6xl"
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <h1>NIHONGO NINJA</h1>
              </div>
            </div>
          </Link>
          <div className="relative w-full z-10 h-11 bg-[#2d2d2d]/80 backdrop-blur-xl drop-shadow-2xl mb-[600px] pointer-events-none">
            <ul className="w-full h-full mx-auto max-w-[95%] lg:max-w-[86%] xl:max-w-[82%] 2xl:max-w-[80%] flex justify-around items-center opacity-30 text-lg pb-[.125rem]">
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                CARDS
              </p>
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                CHEAT SHEETS
              </p>
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                PROGRESS
              </p>
              <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                READER
              </p>
            </ul>
          </div>
        </div>
        <div className="relative w-full flex justify-center">
          <ul
            className="absolute bottom-[8rem] xl:bottom-[9rem] w-full max-w-[95%] lg:max-w-[86%] xl:max-w-[82%] 2xl:max-w-[80%] grid grid-cols-4 h-[520px] gap-4 mt-32 mx-auto text-center text-7xl pointer-events-auto
            [&>*]:p-5 [&>*]:rounded-2xl [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:shadow-lg [&>*]:drop-shadow-lg [&>*]:saturate-50"
          >
            <Button
              variant={"card"}
              className="bg-red-700"
              link="/spaced-repetition"
            >
              Cards
            </Button>
            <Button
              variant={"card"}
              className="bg-cyan-500"
              link="/learn/reading-passage"
            >
              Cheat Sheets
            </Button>
            <Button variant={"card"} className="bg-yellow-500" link="/games">
              Progress
            </Button>
            <Button
              variant={"card"}
              className="bg-purple-500"
              link="/learn/chapter-1/welcome"
            >
              Reader
            </Button>
          </ul>
        </div>
      </div>
      <div className="max-w-[1850px] mx-auto px-6 sm:px-12 md:px-24">
        {/* <div className="lg:flex lg:flex-col ml-5 2xl:max-w-[70%] text-[6.5rem] mt-32">
          <JapaneseFont>
            <h1>
              <TimeBasedGreeting className="font-bold" />、
            </h1>
            <h1 className="inline-flex">キュズミックさん！</h1>
          </JapaneseFont>
        </div> */}
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(380px,_1fr))] gap-8 text-center
          [&>*]:w-full [&>*]:h-[700px] [&>*]:bg-[#c1b5a2] [&>*]:rounded-3xl [&>*]:border-2 border-black"
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

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
      </div>
    </main>
  )
}
