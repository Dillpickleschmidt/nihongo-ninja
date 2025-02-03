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
        
        .content-gradient {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
        }
        `}
      </style>
      <main class="relative min-h-screen">
        {/* Fixed background image */}
        <div class="fixed z-[-1] -mt-16 w-full min-w-[800px]">
          <img
            src="/img/japanese-gate.png"
            class="custom-gradient-mask pointer-events-none opacity-[0.05]"
            alt="Decorative Japanese Gate"
          />
        </div>

        {/* Navigation Header */}
        <header class="sticky top-0 z-50 backdrop-blur-sm">
          <div class="flex justify-between px-8 py-6 md:px-16">
            <h3 class="text-nowrap text-xl font-medium dark:text-[#BBBBBB] md:text-2xl">
              Nihongo Ninja
            </h3>
            <div class="flex items-center text-right text-sm italic text-primary/75 md:text-base">
              Questions? contact @dillpickleschmidt
              <img
                src="/icons/discord.png"
                alt="Discord Icon"
                class="ml-2 h-6 w-6"
              />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section class="px-6 pb-16 pt-6 md:px-16 md:py-24">
          <div class="mx-auto max-w-[1450px]">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between md:gap-12">
              <div class="md:w-1/2">
                <h1 class="text-4xl font-medium leading-tight dark:text-[#BBBBBB] md:text-5xl">
                  Wish You Could Watch Anime Without Subtitles?
                </h1>
                <p class="mt-6 text-lg leading-relaxed md:text-xl">
                  You're watching your favorite show, and suddenly you recognize
                  a Japanese word or phrase. That little moment feels amazing,
                  right? Imagine experiencing that all the time.
                </p>
                <div class="flex items-end justify-between gap-4">
                  <Button
                    class="mt-8 transform text-nowrap rounded-lg bg-[#ffd4ba] px-6 py-3 text-lg text-black duration-200 hover:scale-105 hover:bg-[#ffe2cf]"
                    as="a"
                    href="/learn"
                  >
                    Get Started! <span class="ml-2 font-semibold">{"->"}</span>
                  </Button>
                  {/* <h3 class="text-2xl font-semibold italic text-red-500">
                    This website is currently in ALPHA!
                  </h3> */}
                </div>
              </div>
              <div class="mt-12 w-full md:mt-0 md:w-1/2">
                <HomePageCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section class="content-gradient px-6 py-16 md:px-16 md:py-24">
          <div class="mx-auto max-w-[1450px]">
            <div class="grid gap-12 md:grid-cols-2">
              <div class="rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/30 p-8 backdrop-blur-sm">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  Learning Japanese Should Be Fun
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  If you love anime, you already have the perfect gateway to
                  Japanese. Discover helpful videos, tackle challenging grammar
                  concepts, learn vocabulary through anime examples, and master
                  the fundamentals—all explained in a way that actually makes
                  sense.
                </p>
              </div>
              <div class="rounded-2xl bg-card/10 p-8 backdrop-blur-sm">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  Explained by Someone Who Gets It
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  No more dense textbook explanations or confusing jargon. As a
                  student who survived Japanese learning the hard way, I explain
                  everything in plain English with real examples and a touch of
                  humor. Learn from someone who remembers what it's like to be a
                  beginner.
                </p>
              </div>
              <div class="rounded-2xl bg-card/10 p-8 backdrop-blur-sm">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  Tools That Fast-Track Your Progress
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  Master conjugation and sentence structure through focused
                  exercises that follow the Genki textbook order—perfect for
                  self-study or complementing your college courses.
                </p>
              </div>
              <div class="rounded-2xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 p-8 backdrop-blur-sm">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  Interactive Learning Modules
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  Build confidence with vocabulary and sentence practice that
                  gives you instant feedback. No more wondering if you're on the
                  right track as you progress through each lesson.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="px-6 py-16 md:px-16 md:py-24">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-3xl font-medium dark:text-[#BBBBBB] md:text-4xl">
              Ready to Level Up Your Japanese?
            </h2>
            <p class="mt-6 text-lg md:text-xl">
              Join our community of anime enthusiasts learning Japanese the fun
              way.
            </p>
            <Button
              class="mt-8 transform rounded-lg bg-[#ffd4ba] px-8 py-4 text-lg text-black duration-200 hover:scale-105 hover:bg-[#ffe2cf]"
              as="a"
              href="/learn"
            >
              Get Started! <span class="ml-2 font-semibold">{"->"}</span>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
