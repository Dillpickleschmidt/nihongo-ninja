import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { createEffect, createSignal, onMount, Show } from "solid-js"

const images = [
  { src: "/img/homepage/Vocab.jpg", alt: "Preview 1" },
  { src: "/img/homepage/ConjugationPractice.jpg", alt: "Preview 2" },
  { src: "/img/homepage/VocabPracticeMC.jpg", alt: "Preview 3" },
  { src: "/img/homepage/GrammarNotes.jpg", alt: "Preview 4" },
  { src: "/img/homepage/VocabPracticeW.jpg", alt: "Preview 5" },
  { src: "/img/homepage/VocabList.jpg", alt: "Preview 6" },
  { src: "/img/homepage/SentencePractice.jpg", alt: "Preview 7" },
]

export default function CoverflowCarousel() {
  const [api, setApi] = createSignal<ReturnType<CarouselApi>>()
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [isJsLoaded, setIsJsLoaded] = createSignal(false)
  const [autoplay] = createSignal(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  )

  onMount(() => {
    setIsJsLoaded(true)
  })

  createEffect(() => {
    if (!api()) return

    api()!.on("select", () => {
      setCurrentIndex(api()!.selectedScrollSnap())
    })

    // Stop autoplay on navigation button clicks
    const prevButton = document.querySelector("[data-carousel-prev]")
    const nextButton = document.querySelector("[data-carousel-next]")

    const stopAutoplay = () => {
      autoplay().stop()
    }

    prevButton?.addEventListener("click", stopAutoplay)
    nextButton?.addEventListener("click", stopAutoplay)

    api()!.scrollTo(0, false)

    // Cleanup
    return () => {
      prevButton?.removeEventListener("click", stopAutoplay)
      nextButton?.removeEventListener("click", stopAutoplay)
    }
  })

  return (
    <div class="relative w-full">
      <Show
        when={isJsLoaded()}
        fallback={
          <div class="flex justify-center gap-4">
            {[images[images.length - 1], images[0], images[1]].map(
              (image, index) => (
                <div
                  class="w-1/3 transition-all duration-500"
                  style={{
                    transform: index === 1 ? "scale(1)" : "scale(0.8)",
                    filter: index === 1 ? "none" : "brightness(0.7)",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    class="h-full w-full rounded-lg object-cover shadow-xl"
                  />
                </div>
              ),
            )}
          </div>
        }
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            startIndex: 0,
          }}
          plugins={[autoplay()]}
          class="mx-auto"
        >
          <CarouselContent class="-ml-4">
            {images.map((image, index) => (
              <CarouselItem class="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  class="relative transform-gpu transition-all duration-500"
                  style={{
                    transform: `
                      scale(${currentIndex() === index ? "1" : "0.8"})
                      translateZ(${currentIndex() === index ? "0px" : "-100px"})
                    `,
                    filter:
                      currentIndex() === index ? "none" : "brightness(0.7)",
                    "transform-style": "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    class="h-full w-full rounded-lg object-cover shadow-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            class="absolute left-0 top-1/2 h-full w-10 -translate-y-1/2 rounded-none border-none bg-transparent duration-100 hover:bg-black/25 md:mx-16 md:h-10 md:rounded-full md:bg-background/75 md:hover:bg-background"
            data-carousel-prev
          />
          <CarouselNext
            class="absolute right-0 top-1/2 h-full w-10 -translate-y-1/2 rounded-none border-none bg-transparent duration-100 hover:bg-black/25 md:mx-16 md:h-10 md:rounded-full md:bg-background/75 md:hover:bg-background"
            data-carousel-next
          />
        </Carousel>
      </Show>
    </div>
  )
}
