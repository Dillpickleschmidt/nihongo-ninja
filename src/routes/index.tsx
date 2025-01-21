import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import { Title } from "@solidjs/meta"
import HomePageCarousel from "@/features/home-page/Carousel"

export default function Home() {
  return (
    <>
      <Title>Nihongo Ninja - Welcome Page</Title>
      <style>
        {`
        .custom-gradient-mask {
          mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 73%
          );
          -webkit-mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 73%
          );
        }
        `}
      </style>
      <main>
        <div class="fixed z-[-1] -mt-16 w-full min-w-[800px]">
          <img
            src="/img/japanese-gate.png"
            class="custom-gradient-mask pointer-events-none opacity-[0.05]"
          />
        </div>

        <div class="absolute top-20 hidden w-full justify-center px-10 md:top-36 md:flex md:px-0">
          <HomePageCarousel />
        </div>

        {/* Headers */}
        <div class="px-10 pb-24 pt-8 md:px-16 md:pt-10 lg:px-24 2xl:px-32 2xl:pt-16">
          <div class="flex justify-between">
            <h3 class="ml-2 font-medium md:text-3xl md:text-[#BBBBBB]">
              Nihongo Ninja
            </h3>
            <div class="text-base italic text-primary/75">
              Questions? contact @dillpickleschmidt
              <img src="/icons/discord.png" alt="" class="ml-2 h-6 w-6" />
            </div>
          </div>

          {/* small screen */}
          <div class="flex w-full justify-center pt-4 md:hidden">
            <HomePageCarousel />
          </div>
          <h1 class="mt-6 max-w-[800px] pr-4 text-[2.25rem] font-medium leading-[3rem] text-[#BBBBBB] md:mt-48 md:hidden md:pr-0">
            Curated Japanese Tools and Learning Resources
          </h1>
          {/* medium+ screen */}
          <h1 class="mt-64 hidden max-w-[800px] pr-0 text-[3.25rem] font-medium leading-[3.5rem] text-[#BBBBBB] md:mt-[450px] md:block">
            Curated Japanese Tools and Learning Resources
          </h1>
          <h2 class="mt-8 max-w-[950px] text-[1.15rem] leading-8 tracking-tight md:mt-5 md:text-[1.55rem] md:leading-[2.6rem]">
            Discover <span class="text-[#E8C1A9]">helpful videos</span>, tackle
            challenging <span class="text-[#E8C1A9]">grammar</span> concepts,
            learn <span class="text-[#E8C1A9]">vocabulary</span> through anime
            examples, master <span class="text-[#E8C1A9]">conjugation</span>,
            conquer <span class="text-[#E8C1A9]">kanji</span>, reinforce your
            skills with <span class="text-[#E8C1A9]">games</span>, and more.
          </h2>
          <div class="mt-8 flex w-full justify-center md:mt-10">
            <Button
              class="transform rounded-lg bg-[#ffd4ba] px-4 py-[0.65rem] text-[1rem] duration-200 hover:scale-105 hover:bg-[#ffe2cf] md:rounded-xl md:px-10 md:py-5 md:text-2xl"
              as="a"
              href="/learn"
            >
              Get Started! <span class="ml-2 font-semibold">{"->"}</span>
            </Button>
          </div>
        </div>
        {/* Box content */}
        {/* <div class="mt-12 w-full px-6 pb-24 md:mt-24">
          <div class="grid w-[750px] grid-cols-9 gap-[0.275rem] md:ml-[17rem] md:w-[1475px] md:gap-2 [&>*]:h-20 [&>*]:rounded-2xl [&>*]:bg-neutral-700 [&>*]:text-neutral-700 [&>*]:md:h-40">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div class="mt-12 grid grid-cols-2 gap-[0.275rem] sm:grid-cols-3 md:w-[1750px] md:grid-cols-5 md:gap-2 md:pt-24 [&>*]:h-48 [&>*]:rounded-2xl [&>*]:bg-neutral-700 [&>*]:text-neutral-700 [&>*]:md:h-96">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div> */}
      </main>
    </>
  )
}
