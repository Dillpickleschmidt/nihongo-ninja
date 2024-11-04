import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function JapanesePronunciation() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-0/hiragana"
    >
      <div class="-mt-2 h-48 w-full border-b border-black">
        <img src="/img/chapter-0/brushes.jpg" alt="japanese brushstrokes" />
      </div>
      <h2 class="mt-24 px-12 pb-14 text-4xl font-medium lg:px-24 lg:text-5xl">
        Let's take a closer look at the Japanese writing systems.
      </h2>
      <div class="mb-32 space-y-9 px-12 sm:px-24">
        <div class="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Wise Monk, what's this I'm hearing about more than one writing
            system? Is this an ancient truth or mere legend?
          </p>
        </div>
        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            <span class="text-xl">Ah</span>, young grasshopper, your curiosity
            blooms like the weeds in my backyard.{" "}
            <span class="font-semibold">Yes</span>, Japanese has{" "}
            <strong>three</strong> writing systems, and all three can be seen in
            a single sentence.
          </p>
        </div>
        <div>
          <p class="mb-2 text-center text-2xl font-semibold">
            <em>...Behold!</em>
          </p>
          <p class="text-center">
            <span class="font-japanese text-2xl">
              <span class="text-green-500 saturate-[25%]">テレビ</span>
              <span class="text-sky-500 saturate-50 dark:text-background-secondary dark:saturate-100">
                を
              </span>
              <span class="text-red-500">見</span>
              <span class="text-sky-500 saturate-50 dark:text-background-secondary dark:saturate-100">
                ます
              </span>
            </span>
            <span class="text-sm">(terebi o mimasu)</span> - I watch television
          </p>
          <ul class="mt-2 flex w-full justify-center space-x-6 pb-4">
            <li>
              <div class="inline-flex h-3 w-3 rounded-full bg-green-500 saturate-[25%]" />{" "}
              - Katakana
            </li>
            <li>
              <div class="inline-flex h-3 w-3 rounded-full bg-sky-500 saturate-50 dark:bg-background-secondary dark:saturate-100" />{" "}
              - Hiragana
            </li>
            <li>
              <div class="inline-flex h-3 w-3 rounded-full bg-red-500" /> -
              Kanji
            </li>
          </ul>
        </div>
        <div class="px-2 [&>*]:mt-4">
          <p>
            <span class="font-extrabold">Student:</span> <em>Three</em> writing
            systems? That seems like climbing three mountains at once, oh
            sagacious one.
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Fear not, for each
            system has its purpose, and together, they create harmony. First, we
            have Hiragana, your loyal companion on this journey. They can
            represent all of the spoken Japanese sounds that you'll hear, and
            are often used for native Japanese words. They are built upon five
            pure vowel sounds:
          </p>
          <div class="text-center font-japanese text-2xl font-medium">
            <p>あ a</p>
            <p>い i</p>
            <p>う u</p>
            <p>え e</p>
            <p>お o</p>
          </div>
          <p class="mt-0">
            <span class="font-extrabold">Sensei:</span> Observe the gentle,
            rounded shapes of Hiragana characters, like the smooth stones of a
            Zen garden.
          </p>
          <div class="flex w-full justify-center">
            <div class="h-10 w-10">
              <img src="/img/chapter-0/stones-smooth.png" alt="smooth stones" />
            </div>
          </div>
          <p>
            <span class="font-extrabold">Sensei:</span> There are 46 hiragana
            characters in total. Think of Hiragana like the Japanese ABCs.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> And what of the other
            writing systems, venerable master?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Next, greet Katakana,
            the spirited twin of Hiragana. Katakana is used for foreign words,
            and it often appears in TV commercials to make words stick out.
          </p>
          <div class="text-center font-japanese text-2xl font-medium">
            <p>ア a</p>
            <p>イ i</p>
            <p>ウ u</p>
            <p>エ e</p>
            <p>オ o</p>
          </div>
          <p class="mt-0">
            <span class="font-extrabold">Sensei:</span> Note the sharp, angular
            shapes of Katakana characters, like the edges of a finely crafted
            katana.
          </p>
          <div class="flex w-full justify-center">
            <div class="h-10 w-10 rounded-full">
              <img
                src="/img/chapter-0/katana-leafs.png"
                alt="kanata-sword-icon"
              />
            </div>
          </div>
          <p>
            <span class="font-extrabold">Student:</span> Uhh, these have the
            same sounds... So, are they just stylistic variations?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Indeed, they are like
            different robes for the same emperor. Katakana has 46 characters,
            identical in sound but used for distinct purposes.
          </p>
          <p class="text-base font-thin">
            Got a loanword from English? Write it in Katakana. Heard an
            onomatopoeia that mimics sounds? Katakana's got you covered. It's
            also the go-to for emphasis, kind of like how we use italics or ALL
            CAPS. Plus, it's the script of choice for sci-fi and tech names,
            giving everything a futuristic vibe. Think of it like a funky font!
          </p>
          <p>
            <span class="font-extrabold">Student:</span> And the final writing
            system, wise monk?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Now, Kanji, oh boy, this
            is where things get real. Imagine taking Chinese characters, which
            are essentially pictures or concepts squished into tiny boxes, and
            using them to write Japanese. Each Kanji can have multiple readings
            and meanings, turning your study session into a detective game.
          </p>
          <p>
            Why use Kanji? Efficiency and tradition. One symbol can convey what
            might take several Hiragana characters to express. Also, it makes
            you look super smart when you can read them.
          </p>
          <p>
            These characters are inherited from the neighbors in China. For
            example, the word kanji is actually written as{" "}
            <span class="font-japanese text-xl">漢字</span> which literally
            means:
          </p>
          <div class="flex w-full items-end justify-center">
            <span class="mb-0.5 mr-1 font-japanese text-xl">漢</span> (Han
            Chinese) <span class="mx-1 mb-0.5 font-japanese text-xl">字</span>{" "}
            (Characters)
          </div>
          <p>
            While China has simplified many, Japan has kept many of them
            unchanged, like a collection of preserved art pieces. Behold the
            pictorial depiction of the sun:
          </p>
          <p class="text-center font-japanese text-5xl">日</p>
          <p>
            <span class="font-extrabold">Student:</span> Uh huh...
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> So, why does Japanese
            use all three? Well, it's like having different tools in your
            toolbox. Each system has its own function, making the language
            incredibly expressive and, let's be honest, a bit of a beautiful
            mess. Hiragana for the basics and native tweaks, Katakana for the
            imports and sound effects, and Kanji for depth, meaning, and when
            you're ready to question all your life choices.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> Hmm, how should I get
            started, oh impeccable one?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Begin with Hiragana, if
            you must—their sounds and strokes are simple, like the fleeting hope
            you might actually understand all this.
          </p>
          <h2 class="!mt-12 mb-8 text-2xl font-bold">
            Bonus - <span class="font-normal">Romaji</span>
          </h2>
          <div class="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>Sensei, I've seen Romaji used a lot. What exactly is it?</p>
          </div>
          <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" class="float-end" />
            <p>
              Romaji is the use of Latin alphabet letters to represent Japanese
              sounds. It serves as a bridge for those who are just beginning
              their journey in the Japanese language. For example, the word
              "こんにちは" can be written as "konnichiwa" in Romaji.
            </p>
          </div>
          <p class="!mt-12">
            <span class="font-extrabold">Student:</span> Is Romaji used often in
            Japan?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Romaji is primarily used
            for the benefit of learners and in contexts where Japanese
            characters might not be practical, such as on international signage
            or in technology settings. It's for those who can't be bothered to
            learn actual Japanese characters.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> Oh... I see. So, Romaji
            is like training wheels?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Mmm, yes, precisely.
            Romaji can help you get started, but to truly embrace the beauty and
            depth of the Japanese language, you must delve into its unique
            scripts. That is why we will only use Romaji during this first
            chapter.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> Thanks, Sensei. I'll
            make sure to practice reading without relying too much on it.
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span>{" "}
            <span class="text-base italic">Mumbles</span> If only I had chosen
            to be a hermit... <span class="text-base italic">Smiles</span> Wise
            decision, young one. Embrace the challenge and let each step bring
            you closer to fluency.
          </p>
          <h2 class="!mt-12 mb-4 text-2xl font-bold">Summary</h2>
          <ul class="!mt-2 ml-6 list-disc space-y-4">
            <li class="">
              <span class="font-extrabold">Hiragana - </span>Smooth characters
              primarily used for native Japanese words and grammatical elements.
              It is the core of the Japanese writing system.
            </li>
            <li>
              <span class="font-extrabold">Katakana - </span>Angular characters
              that primarily represent loanwords/foreign words. It is the
              energetic sibling of Hiragana and is often used in commercials.
            </li>
            <li>
              <span class="font-extrabold">Kanji - </span>Ancient Chinese
              characters that represent entire words or ideas.
            </li>
            <li>
              <span class="font-extrabold">Bonus: Romaji - </span>
              Your Latin alphabet crutch, helping you limp along until you can
              run with the big boys.
            </li>
          </ul>
        </div>
      </div>
    </ContentBox>
  )
}
