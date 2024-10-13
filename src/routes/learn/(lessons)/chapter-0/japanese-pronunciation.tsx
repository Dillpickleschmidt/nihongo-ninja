import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function JapanesePronunciation() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-0/writing-systems"
    >
      <div class="space-y-2 pl-8 pt-8">
        <h4 class="text-xl font-medium">Lesson Resources:</h4>
        <ul class="list-inside list-disc">
          <li>
            <a
              class="text-sky-400 underline"
              href="https://learnjapanese.moe/guide/"
              target="_blank"
            >
              Japanese Guide - The Moe Way
            </a>
          </li>
        </ul>
      </div>

      <div class="flex w-full justify-center">
        <div class="mt-6 aspect-auto w-64 overflow-hidden rounded-2xl opacity-[85%] shadow-xl sm:mt-12">
          <img
            src="/img/chapter-0/chapter-0-welcome.png"
            alt="welcome PortraitIcon"
          />
        </div>
      </div>
      <h2 class="mt-12 px-24 text-center text-5xl font-medium leading-[3.5rem]">
        Getting started 🍵
      </h2>
      <h2 class="mt-6 px-24 pb-2 text-3xl font-medium leading-[2.5rem]">
        Feeling a bit <span class="font-extrabold">daunted</span> by the thought
        of tackling Japanese? Fear not! If you're coming from the world of
        English, you'll find Japanese pronunciation isn't the dragon you might
        expect.
      </h2>
      <div class="mb-32 px-16 sm:px-24 [&>*]:my-6">
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
          *Nihongo Ninja slashes through the basics from N5-N4 levels. We follow
          the school textbook trail but with epic explanations and practice
          tools that actually don't bore you to tears. Each topic? Handpicked
          from the internet's vast dojo for maximum enlightenment.
        </p>
        <div class="pb-4 pt-2 [&>*]:my-6">
          <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>
              Wise Sensei, I've heard tales that Japanese sounds are akin to
              those in English. Is that true?
            </p>
          </div>
          <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" class="float-end" />
            <p>
              Ah, curious one, your ears do not deceive you! Sounds like 'ko'
              (こ), 'ma' (ま), 'nu' (ぬ), 'ke' (け), and 'yo' (よ) roll off the
              tongue much like in English.
            </p>
          </div>
        </div>
        <div class="px-2 [&>*]:mt-4">
          <p>
            <span class="font-extrabold">Student:</span> That's good to know.
            So, the journey might be smoother than I feared, oh keeper of
            knowledge?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Very much so. Japanese
            has a simple phonetic structure. The language revolves around five
            basic vowel sounds. Lend me your ears:
          </p>
          <div class="flex w-full justify-center font-japanese text-2xl font-medium">
            <ul>
              <li>
                あ a -{" "}
                <span class="text-xl">
                  <em>
                    <span class="text-2xl font-extrabold">AH</span>HH!!
                  </em>
                </span>
              </li>
              <li>
                い i -{" "}
                <span class="text-xl">
                  <em>
                    eur<span class="text-2xl font-semibold">ea</span>ka!
                  </em>
                </span>
              </li>
              <li>
                う u -{" "}
                <span class="text-xl">
                  g<span class="text-2xl font-semibold">👀</span>se 🪿
                </span>
              </li>
              <li>
                え e -{" "}
                <span class="text-xl">
                  <span class="text-2xl font-semibold">e</span>lephant 🐘
                </span>
              </li>
              <li>
                お o -{" "}
                <span class="text-xl">
                  d<span class="text-2xl font-semibold">o</span>nut 🍩
                </span>
              </li>
            </ul>
          </div>
          <p class="mb-12 mt-0 text-center text-sm">
            *Note the rounded shapes of Hiragana characters.*
          </p>
          <div class="my-6 ml-6 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" class="float-end ml-2" />
            <p>
              These vowels are the heart of every syllable. Add a consonant, and
              voila, you've got a new sound! Every other character is just a
              consonant sound + one of these 5 vowels.
            </p>
          </div>
          <p>
            <span class="font-extrabold">Student:</span> I'm still spinning like
            a top, Sensei. A demonstration, perhaps?
          </p>
          <p class="text-center">
            Let's take <span class="text-xl font-bold">k</span> for a spin:
          </p>
          <div class="flex justify-center font-japanese text-2xl font-medium">
            <div>
              <p>か ka</p>
              <p>き ki</p>
              <p>く ku</p>
              <p>け ke</p>
              <p>こ ko</p>
            </div>
          </div>
          <p class="text-center">
            And for <span class="text-xl font-bold">s</span>:
          </p>
          <div class="flex justify-center font-japanese text-2xl font-medium">
            <div>
              <p>さ sa</p>
              <p>
                し shi<span class="text-xl">*</span>
              </p>
              <p>す su</p>
              <p>せ se</p>
              <p>そ so</p>
            </div>
          </div>
          <p>
            <span class="font-extrabold">Student:</span> Ah, the mist clears!
            So, the rest like p, b, t, they follow suit?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> You're catching on,
            young apprentice. Master a sound, and it's yours forever with no
            surprise spellings. Once you learn a sound, it remains unchanged.
          </p>
          <p>
            In fact, Japanese boasts only about 71 basic sounds, crafting around
            100 combinations, while English juggles with around 250 unique
            sounds and <span class="font-semibold italic">thousands</span> of
            chaotic letter combinations. Your tongue is already a polyglot
            prodigy!
          </p>
          <p>
            <span class="font-extrabold">Student:</span> That's quite the
            reassurance, Sensei. This might just be manageable!
          </p>
          <h2 class="!mt-12 text-2xl font-bold">Your Turn:</h2>
          <p class="!mt-2">
            Try connect the consonants t, n, h, m, and r to each of the five
            vowel sounds.
          </p>
        </div>
      </div>
    </ContentBox>
  )
}
