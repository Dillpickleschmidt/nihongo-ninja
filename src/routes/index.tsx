import { A } from "@solidjs/router"
import BackgroundImage from "@/components/BackgroundImage"
import Sidebar from "@/features/sidebar/Sidebar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
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
            class="custom-gradient-mask opacity-[0.05]"
          />
        </div>
        {/* Headers */}
        <div class="px-10 pt-14 md:px-16 md:pt-16 lg:px-24 2xl:px-32 2xl:pt-24">
          <h3 class="ml-2 font-medium md:text-3xl md:text-[#BBBBBB]">
            Nihongo Ninja
          </h3>
          <h1 class="mt-16 max-w-[800px] pr-4 text-[2.25rem] font-medium leading-[3rem] text-[#BBBBBB] md:mt-48 md:pr-0 md:text-[3.25rem] md:leading-[3.5rem]">
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
          <div class="mt-8 flex w-full justify-center md:mt-10 md:justify-start">
            <A href="/learn">
              <Button class="rounded-lg bg-[#E8C1A9] px-4 py-[0.65rem] text-[1rem] md:px-6 md:py-3 md:text-lg">
                Get Started! <span class="ml-2 font-semibold">{"->"}</span>
              </Button>
            </A>
          </div>
        </div>
        {/* Box content */}
        <div class="mt-12 w-full px-6 pb-24 md:mt-24">
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
        </div>
      </main>
    </>
  )
}
