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
        <div class="mt-6 aspect-auto w-64 overflow-hidden rounded-2xl opacity-75 shadow-xl sm:mt-12">
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
        If you feel intimidated about learning a new language, there's good news
        for you! Japanese pronunciation is{" "}
        <span class="font-extrabold">easy</span> if you know English.
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
          get you started and be your trusty companion during your Japanese
          learning journey, teaching you grammar and vocab. But ultimately, the
          way you learn is up to you!
        </p>
        <p class="text-base italic text-muted-foreground">
          *Nihongo Ninja covers N5-N4 Japanese proficiency levels. You learn
          vocab and grammar in the order of school textbooks, but with better
          explanations and helpful practice tools. Each topic is taught using
          the best free handpicked resources from the internet to offer the most
          helpful explanations.
        </p>
        <div class="pb-4 pt-2 [&>*]:my-6">
          <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>
              Wise Sensei, I want to learn Japanese. I heard that the sounds are
              similar to English. Is that true?
            </p>
          </div>
          <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" class="float-end" />
            <p>
              Ah, young eager one, indeed, many Japanese sounds are quite
              familiar to English speakers. For instance, 'ko' (こ), 'ma' (ま),
              'nu' (ぬ), 'ke' (け), and 'yo' (よ) are pronounced just as you
              read them in English.
            </p>
          </div>
        </div>
        <div class="px-2 [&>*]:mt-4">
          <p>
            <span class="font-extrabold">Student:</span> That's good to know.
            Does that make the path to learning easier, oh enlightened one?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Very much so. Japanese
            has a simple phonetic structure. The language revolves around five
            basic vowel sounds. Listen carefully:
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
              These vowels are the core of the Japanese phonetic system. Every
              other character is just a consonant sound + one of these 5 vowels.
            </p>
          </div>
          <p>
            <span class="font-extrabold">Student:</span> I'm not sure I'm
            following, wise one. Can you give me an example?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Of course.
          </p>
          <p class="text-center">
            Take the consonant <span class="text-xl font-bold">k</span>:
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
            And the consonant <span class="text-xl font-bold">s</span>:
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
            <span class="font-extrabold">Student:</span> Ah, I understand the
            pattern now. So, I can guess the sounds for t, n, h, and the rest?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Precisely, young
            apprentice. Japanese pronunciation is as consistent as the flow of
            time, unlike the unpredictable English. Once you learn a sound, it
            remains unchanged.
          </p>
          <p>
            As a matter of fact, Japanese has only 71 sounds that combine to
            create ~100 sound combinations. By contrast, English has ~250 unique
            sounds and 1000s of combinations. That means your tongue can already
            pronounce four times more sounds than the average Japanese person
            can!
          </p>
          <p>
            <span class="font-extrabold">Student:</span> That's comforting to
            hear, wise Sensei. This doesn't seem so hard after all.
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
