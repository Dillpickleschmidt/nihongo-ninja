import { A } from "@solidjs/router"
import BackgroundImage from "@/components/BackgroundImage"
import Sidebar from "@/features/sidebar/Sidebar"
import { LearnPageProvider } from "@/features/learn-page/context/LearnPageContext"

export default function learn(props: { children: any }) {
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
        <div class="fixed z-[-2] -mt-16 w-full min-w-[800px]">
          <img
            src="/img/japanese-gate.png"
            class="custom-gradient-mask pointer-events-none opacity-[0.05]"
          />
        </div>
        <BackgroundImage
          class="!fixed z-[-1] !-mt-16"
          backgroundImage="/img/dust-splatter-1.png"
          backgroundImageSize="1215px"
          backgroundImageOpacity={4}
        />
        <BackgroundImage
          class="!fixed z-[-1] !-mt-16"
          backgroundImage="/img/dots.svg"
          backgroundImageSize="400px"
          backgroundImageOpacity={3}
        />
        <LearnPageProvider>{props.children}</LearnPageProvider>
      </main>
    </>
  )
}
