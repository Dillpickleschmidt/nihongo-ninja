import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import { Title } from "@solidjs/meta"
import CoverflowCarousel3 from "@/features/home-page/Carousel3"
import HomePageVocabCard from "@/features/home-page/components/HomePageVocabCard"
import { GraduationCap, PencilLine } from "lucide-solid"
import ToolPreviewCarousel from "@/features/home-page/components/ToolPreviewCarousel"

export default function Home() {
  const iconSize = "22px"
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

        <div>
          {/* Mobile View */}
          <div class="md:hidden">
            <div class="">
              <CoverflowCarousel3 />
            </div>
            <h1 class="mt-6 px-10 text-4xl font-medium leading-tight text-primary/75 dark:text-[#BBBBBB]">
              Curated Japanese Tools and Learning Resources
            </h1>
          </div>

          {/* Desktop View */}
          <div class="hidden md:block">
            <div class="w-full">
              <CoverflowCarousel3 />
            </div>
            <div class="px-16 lg:px-24 2xl:px-32">
              <h1 class="mt-16 max-w-[800px] text-5xl font-medium leading-[3.25rem] text-primary/75 dark:text-[#BBBBBB]">
                Curated Japanese Tools and Learning Resources
              </h1>
            </div>
          </div>

          {/* Shared Content */}
          <div class="w-full justify-between px-8 pb-12 md:px-16 lg:flex lg:px-24 2xl:px-32">
            <h2 class="mt-8 max-w-[950px] text-lg leading-8 text-primary/90 dark:text-primary md:text-2xl md:leading-[2.5rem]">
              Discover <span class="text-[#E8C1A9]">helpful videos</span>,
              tackle challenging <span class="text-[#E8C1A9]">grammar</span>{" "}
              concepts, learn <span class="text-[#E8C1A9]">vocabulary</span>{" "}
              through anime examples, master{" "}
              <span class="text-[#E8C1A9]">conjugation</span>, conquer{" "}
              <span class="text-[#E8C1A9]">kanji</span>, reinforce your skills
              with <span class="text-[#E8C1A9]">games</span>, and more.
            </h2>
            <div>
              <Button
                class="mt-8 transform text-nowrap rounded-lg bg-[#ffd4ba] px-6 py-3 text-black duration-200 hover:scale-105 hover:bg-[#ffe2cf] md:text-lg"
                as="a"
                href="/learn"
              >
                Get Started! <span class="ml-2 font-semibold">{"->"}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section class="content-gradient py-8 md:px-16 md:py-16">
          <div class="mx-auto max-w-[1450px]">
            <h2 class="pb-4 text-center text-4xl font-medium">
              What makes us different?
            </h2>
            <div class="mx-auto max-w-3xl rounded-2xl bg-card/80 py-8 backdrop-blur-sm dark:bg-card/10 md:px-8">
              <div class="px-8">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  You'll follow the closest thing to a standard curriculum
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  While most online Japanese courses use their own unique
                  teaching sequences, Nihongo Ninja follows the structure of the
                  Genki textbook—the most widely used Japanese textbook in
                  American universities.
                </p>
                <p class="mt-4 text-lg leading-relaxed">
                  This standardized approach means you can confidently switch
                  between different learning resources, take university classes,
                  or find tutors who use Genki without getting lost or having to
                  relearn topics in a different order. You're not locked into
                  just one learning system, giving you more flexibility.
                </p>
              </div>

              <div class="px-8 pt-8">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  You'll listen tons of real-life examples
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  Textbooks are great, but they're missing something crucial:
                  real, natural Japanese speech. Sure, you can search for
                  content on your own, but it takes forever to find anything
                  useful—and when you do, it's almost always too hard or too
                  easy for your current level. Search algorithms aren't much
                  help here either.
                </p>
                <p class="mt-4 text-lg leading-relaxed">
                  Also, most resources for beginners are painfully boring, which
                  makes it hard to stay motivated. That's why we've carefully
                  selected a collection of engaging listening materials that are
                  perfectly matched to your skill level{" "}
                  <span class="text-base text-muted-foreground">
                    (selected by college students)
                  </span>
                  .
                </p>

                <p class="mt-4 text-lg leading-relaxed">
                  By the way, <u>every single vocabulary word</u> has multiple{" "}
                  <span class="text-base text-muted-foreground">
                    (sometimes dozens)
                  </span>{" "}
                  of short recordings of that word being used in context,
                  sampled from Japanese dramas and anime, with pictures attached{" "}
                  <span class="text-base italic text-muted-foreground">
                    (thanks{" "}
                    <a
                      href="https://v2.immersionkit.com/"
                      target="_blank"
                      class="hover:text-sky-400/60 hover:underline"
                    >
                      Immersion Kit
                    </a>
                    )
                  </span>
                  .
                </p>

                <div class="pt-4">
                  <HomePageVocabCard />
                </div>
              </div>

              <div class="px-8 pt-8">
                <h2 class="text-3xl font-medium dark:text-[#BBBBBB]">
                  We Have Better Tools
                </h2>
                <p class="mt-4 text-lg leading-relaxed">
                  While there are a lot of resources out there, anyone who's
                  made real progress learning will tell you that the best way to
                  self-study{" "}
                  <span class="text-base text-muted-foreground">
                    (if you don't have access to a native speaker)
                  </span>{" "}
                  is through a textbook or spaced-repetition flashcards. We've
                  got both.
                </p>
                <p class="mt-4 text-lg leading-relaxed">
                  Textbooks are great for learning grammar and sentence
                  structure, while flashcards are perfect for memorizing
                  vocabulary and kanji.
                </p>
                <p class="mt-4 text-lg leading-relaxed">
                  I went through some Japanese textbooks, and{" "}
                  <span class="text-base text-muted-foreground">
                    while their grammar explanations are usually pretty decent,
                  </span>{" "}
                  let me tell you, the practice sections were inefficient and
                  sooo boring.
                </p>
                <p class="mt-4 text-lg leading-relaxed">
                  I spent more mental effort trying to understand what they were
                  asking and come up with situations to write about than
                  actually practicing the grammar the lesson claimed to be
                  about.
                </p>
                <p class="mt-4 text-lg leading-relaxed">
                  That's why I made the tools on Nihongo Ninja—you get clear
                  instructions, instant feedback on your work, and 100% of your
                  effort goes into learning the task at hand. You might even
                  enjoy them and end up doing some multiple times just for fun{" "}
                  <span class="text-base text-muted-foreground">
                    (shocking, I know)
                  </span>
                  .
                </p>
                {/* <p class="mt-4 text-lg leading-relaxed">
                  If you're already in a classroom, use Nihongo Ninja as your
                  study-buddy because it'll help you flex on all the other
                  students with the mastery you'll inevitably develop.
                </p> */}

                <p class="mt-4 text-base text-muted-foreground">
                  Some of the tools:
                </p>
                <ul class="flex flex-wrap gap-2 pt-2">
                  <Button variant="outline" class="space-x-2">
                    <PencilLine size={iconSize} class="text-yellow-500" />
                    <label class="text-nowrap font-medium">
                      Practice Sentence{" "}
                    </label>
                  </Button>
                  <Button variant="outline" class="space-x-2">
                    <GraduationCap size={iconSize} class="text-teal-400" />
                    <label class="text-nowrap font-medium">
                      Conjugation Practice{" "}
                    </label>
                  </Button>
                  <Button variant="outline" class="space-x-2">
                    <GraduationCap size={iconSize} class="text-green-500" />
                    <label class="text-nowrap font-medium">
                      Counter Practice{" "}
                    </label>
                  </Button>
                  <Button variant="outline" class="space-x-2">
                    <GraduationCap size={iconSize} class="text-orange-500" />
                    <label class="text-nowrap font-medium">
                      Vocab Practice{" "}
                    </label>
                  </Button>
                  <Button variant="outline" class="space-x-2">
                    <GraduationCap size={iconSize} class="text-yellow-500" />
                    <label class="text-nowrap font-medium">Vocab Test </label>
                  </Button>
                </ul>

                <div class="px-2 pt-4">
                  <div class="overflow-x-hidden rounded-xl">
                    <ToolPreviewCarousel
                      currentIndex={0}
                      onIndexChange={() => {
                        return
                      }}
                    />
                  </div>
                </div>
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
              Join our community of students learning Japanese the fun way.
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
