import ContentBox from "@/components/ContentBox"
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { WelcomePageQuestionnaire } from "@/features/questionnaire/WelcomePageQuestionnaire"

import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  Library,
  BookOpenText,
  BookPlus,
} from "lucide-solid"

export default function WelcomePage() {
  const iconSize = "22px"
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-0/japanese-pronunciation"
    >
      {/* Lesson Resources */}
      <div class="space-y-2 pl-8 pt-8">
        <h4 class="text-xl font-medium">Lesson Resources:</h4>
        <ul class="list-inside list-disc">
          <li>
            <a
              class="text-sky-400 underline"
              href="https://learnjapanese.moe/guide/"
              target="_blank"
            >
              Japanese Guide- The Moe Way
            </a>
          </li>
        </ul>
      </div>

      {/* Welcome Image */}
      <div class="flex w-full justify-center">
        <div class="mt-6 aspect-auto w-64 overflow-hidden rounded-2xl opacity-[85%] shadow-xl sm:mt-12">
          <img
            src="/img/chapter-0/chapter-0-welcome.png"
            alt="welcome PortraitIcon"
          />
        </div>
      </div>

      {/* Getting Started Section */}
      <h2 class="mt-12 px-12 text-center text-5xl font-medium leading-[3.5rem] lg:px-24">
        Getting Started 🍵
      </h2>
      <h2 class="mt-6 px-12 pb-2 text-3xl font-medium leading-[2.5rem] lg:px-24">
        Get an overview of what you're getting into, and we what can offer you.
      </h2>

      <div class="px-8 sm:px-24 lg:px-16 [&>*]:my-6">
        <p>
          Before delving into the Japanese language, you'll want to make sure
          you're going to learn in a way that's fun and interesting!{" "}
          <a
            class="text-sky-400 underline"
            href="https://learnjapanese.moe/guide/"
            target="_blank"
          >
            This guide
          </a>{" "}
          has some great pointers to get you started. Nihongo Ninja aims to help
          get you started and be your trusty companion, ensuring you know
          grammar and vocab for when the going gets tough. But ultimately, the
          way you learn is up to you!
        </p>
        <p class="text-base italic text-muted-foreground">
          *Nihongo Ninja goes through the essentials from N5-N4 level. We follow
          a typical college textbook order but with epic explanations and
          practice tools that actually don't bore you to tears. Each topic?
          Handpicked from the internet's vast repository for maximum fun.
        </p>
      </div>

      <div class="space-y-6 px-4 pb-32 sm:px-12 md:px-20">
        {/* What to Expect */}
        <div class="rounded-lg bg-card/50 p-6 shadow-sm">
          <h2 class="text-xl font-bold text-fuchsia-500 dark:text-fuchsia-300">
            What to Expect
          </h2>
          <p class="mt-2">
            This course covers listening, reading, writing, and grammar, but you
            can focus on the areas that interest you most—whether that’s spoken
            Japanese, written words, or mastering grammar.
          </p>
          <p class="mt-4">
            No matter what your goal is, we recommend starting with hiragana and
            katakana, the basic Japanese alphabets. They only take about a week
            to learn, and are essential for recognizing Japanese words and
            phrases.
          </p>
        </div>

        {/* Flexible Learning */}
        <div class="mt-8 rounded-lg bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 p-6 shadow-md">
          <h2 class="text-xl font-bold text-fuchsia-500 dark:text-fuchsia-300">
            Flexible Learning
          </h2>
          <p class="mt-2">
            The course is designed so you can pick and choose what to focus on.
            Want to master listening? Jump into the listening-focused lessons.
            Want to explore vocabulary or grammar? Start there. There’s no wrong
            way to approach this—just start where your curiosity takes you.
          </p>
        </div>

        {/* Available Modules */}
        <div class="rounded-lg bg-card/50 p-6 shadow-sm">
          <h2 class="text-xl font-bold text-fuchsia-500 dark:text-fuchsia-300">
            Available Modules
          </h2>
          <p class="mt-2">
            Here's a list of all the kinds of modules available in Nihongo
            Ninja.
          </p>
          <ul class="mt-3 space-y-2 [&>*]:flex">
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <BookOpen size={iconSize} class="text-green-500" />
                  <label class="text-nowrap font-medium">
                    Lesson{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                grammar & advanced concepts
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <BookPlus
                    size={iconSize}
                    class="text-sky-400 saturate-[75%]"
                  />
                  <label class="text-nowrap font-medium">
                    Vocab <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                preview vocab with anime videos, mnemonics, and more
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <ScrollText size={iconSize} class="text-red-500 opacity-80" />
                  <label class="text-nowrap font-medium">
                    Grammar Notes{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                grammar nicely summarized in one place
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <Video size={iconSize} class="text-purple-400" />
                  <label class="text-nowrap font-medium">
                    Immersion Video{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                listening/reading practice
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <Volume2 size={iconSize} class="text-purple-400" />
                  <label class="text-nowrap font-medium">
                    Immersion Audio{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                listening practice
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <PencilLine
                    size={iconSize}
                    class="text-yellow-500 saturate-[75%]"
                  />
                  <label class="text-nowrap font-medium">
                    Practice Sentence{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                apply knowledge learned from lessons
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <Library
                    size={iconSize}
                    class="text-sky-400 saturate-[75%]"
                  />
                  <label class="text-nowrap font-medium">
                    Vocab List{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                preview all the vocab in one place
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <GraduationCap size={iconSize} class="text-orange-500" />
                  <label class="text-nowrap font-medium">
                    Vocab Practice{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                memorize vocab very efficiently
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <GraduationCap
                    size={iconSize}
                    class="text-yellow-500 saturate-[75%]"
                  />
                  <label class="text-nowrap font-medium">
                    Vocab Test{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                test your vocab retention
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <GraduationCap size={iconSize} class="text-teal-400" />
                  <label class="text-nowrap font-medium">
                    Conjugation Practice{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                hammer out those conjugation issues
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <GraduationCap size={iconSize} class="text-green-500" />
                  <label class="text-nowrap font-medium">
                    Counter Practice{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                an essential knowledge gap most courses forget
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <BookOpenText size={iconSize} class="text-teal-400" />
                  <label class="text-nowrap font-medium">
                    Reading{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                really get mastery of Japanese
              </label>
            </li>
            <li class="space-x-1">
              <div>
                <div class="flex items-center space-x-2">
                  <PencilLine size={iconSize} class="text-teal-400" />
                  <label class="text-nowrap font-medium">
                    Worksheet{" "}
                    <span class="text-base text-muted-foreground">-</span>
                  </label>
                </div>
              </div>
              <label class="pt-0.5 text-base text-muted-foreground">
                if you're looking for something extra to do
              </label>
            </li>
          </ul>

          <p class="pt-4 text-base italic text-muted-foreground">
            *Some modules might include multiple types in one.
          </p>
        </div>

        {/* Curated Videos */}
        <div class="mt-8 rounded-lg bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-6 shadow-md">
          <h2 class="text-xl font-bold text-orange-400">
            High-Quality, Curated Resources
          </h2>
          <p class="mt-2">
            One of the unique features of this course is our curated explanation
            videos. Unlike other courses that try to do everything themselves,
            we’ve scoured the internet to find the best, most engaging, and
            clearest videos available.
          </p>
          <p class="mt-4">
            These resources are selected based on their difficulty level and
            relevance and are provided just when they’re most helpful to your
            learning journey. We’re not here to profit off of what should be
            free knowledge—our goal is to save you time and frustration by
            filtering only the highest quality content so you can focus entirely
            on learning.
          </p>
        </div>

        {/* Next Steps */}
        <div class="mt-8 rounded-lg bg-card/50 p-6 shadow-sm">
          <h2 class="text-xl font-bold text-orange-400">Next Steps</h2>
          <p class="mt-2">
            Before you start, let's figure out what you want to learn. After
            answering the questionnaire below, we'll provide guidance on how to
            make this course work for you.
          </p>
        </div>

        {/* Questionnaire */}
        <div class="rounded-lg border bg-card p-6 shadow-md">
          <WelcomePageQuestionnaire />
        </div>
      </div>
    </ContentBox>
  )
}
