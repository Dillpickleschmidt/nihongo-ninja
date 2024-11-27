import BackgroundImage from "./BackgroundImage"

export default function StandardBackground() {
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
      <div class="fixed z-[-2] -mt-16 min-h-screen w-full min-w-[800px]">
        <img
          src="/img/japanese-gate.png"
          class="custom-gradient-mask pointer-events-none opacity-[0.05]"
        />
      </div>
      <BackgroundImage
        class="z-[-1] !-mt-[4.1rem] min-h-screen"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={5}
      />
      <BackgroundImage
        class="!fixed z-[-1] !-mt-16"
        backgroundImage="/img/dots.svg"
        backgroundImageSize="400px"
        backgroundImageOpacity={3}
      />
    </>
  )
}
