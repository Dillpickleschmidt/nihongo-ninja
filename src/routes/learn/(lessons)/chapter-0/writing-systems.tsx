import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function JapaneseWritingSystems() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-0/hiragana">
      <div class="-mt-2 h-48 w-full border-b border-black">
        <img src="/img/chapter-0/brushes.jpg" alt="japanese brushstrokes" />
      </div>
      <h2 class="mt-24 px-12 pb-14 text-4xl font-medium lg:px-24 lg:text-5xl">
        Let's take a closer look at the Japanese writing systems.
      </h2>
      <div class="mb-32 space-y-9 px-8 sm:px-24 lg:px-12">
        <div class="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Wise Sensei, what's this I'm hearing about more than one writing
            system? Is this some kind of joke?
          </p>
        </div>
        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            <em>*finishing his calligraphy strokes*</em> Japanese has three
            writing systems, and we often use all of them in a single sentence,
            like this masterpiece:
          </p>
        </div>
        <div>
          <p class="mb-2 text-center text-2xl">
            <span class="font-japanese">
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
            <span class="font-extrabold">Student:</span> Three writing systems?
            That seems... excessive.
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Think of it like having
            different tools in an artist's kit. Each has its purpose, and
            together they create something rather beautiful. Let me show you
            each one.
          </p>
          <p>
            First, meet Hiragana, the foundation of our writing system. These
            curved characters can represent every sound in Japanese:
          </p>
          <div class="text-center font-japanese text-2xl font-medium">
            <p>あ a</p>
            <p>い i</p>
            <p>う u</p>
            <p>え e</p>
            <p>お o</p>
          </div>
          <p class="mt-0">
            <span class="font-extrabold">Sensei:</span> Observe their rounded
            shapes, smooth like the stones in a Zen garden.
          </p>
          <div class="flex w-full justify-center">
            <div class="h-10 w-10">
              <img src="/img/chapter-0/stones-smooth.png" alt="smooth stones" />
            </div>
          </div>
          <p>
            There are 46 of these elegant characters - think of them as the
            Japanese ABCs, if ABCs were actually logical and consistent.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> And the other two
            systems?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span>{" "}
            <em>*SLAMS HANDS ON TABLE*</em> AH! NOW IT GETS EXCITING!{" "}
            <em>*tea splashes*</em> Next we have Katakana, Hiragana's more
            angular cousin! <em>*straightens robes*</em>
          </p>
          <p>Same sounds, different style:</p>
          <div class="text-center font-japanese text-2xl font-medium">
            <p>ア a</p>
            <p>イ i</p>
            <p>ウ u</p>
            <p>エ e</p>
            <p>オ o</p>
          </div>
          <p class="mt-0">
            <span class="font-extrabold">Sensei:</span> Notice their sharp,
            decisive forms - like the blade of a perfectly forged katana!
          </p>
          <div class="flex w-full justify-center">
            <div class="h-10 w-10 rounded-full">
              <img
                src="/img/chapter-0/katana-leafs.png"
                alt="katana-sword-icon"
              />
            </div>
          </div>
          <p>
            We use Katakana for foreign words, scientific terms, and when we
            want text to stand out. Like how English uses italics or bold for
            emphasis.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> These seem to make the
            same sounds... why have both?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Good question. Katakana
            is perfect for writing foreign words, sound effects in manga, and
            making things pop in advertisements. It's like having both casual
            and formal writing - each has its time and place.
          </p>
          <p class="text-base font-thin">
            Got a loanword from English? Write it in Katakana. Heard an
            onomatopoeia that mimics sounds? Katakana's got you covered. It's
            also the go-to for emphasis, kind of like how we use italics or ALL
            CAPS. Plus, it's the script of choice for sci-fi and tech names,
            giving everything a futuristic vibe.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> And the final system?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span>{" "}
            <em>*leaning forward with villainous delight*</em> Behold, minion...
          </p>
          <p>
            <em>*adjusts glasses*</em>
          </p>
          <p>
            These characters, borrowed from Chinese, are like little pictures
            with meaning. Look closely:
          </p>
          <p class="text-center font-japanese text-5xl">日</p>
          <p>(hi/nichi) - the sun!</p>
          <p>
            Why use Kanji? One symbol can replace several Hiragana characters,
            making writing more efficient. And more importantly...{" "}
            <em>*leans in conspiratorially*</em> it makes you look incredibly
            sophisticated when you can read them.
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
            While China has simplified many of their characters, Japan has kept
            them unchanged, like preserved artifacts of an ancient time.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> Hmm, how should I get
            started, oh impeccable one?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Begin with Hiragana,
            your foundation. Master its sounds and strokes, and the rest will
            follow.
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
          <p>
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
            <span class="font-extrabold">Sensei:</span> <em>*mumbles*</em> If
            only I had chosen to be a hermit... <em>*smiles emphatically*</em>{" "}
            Wise decision, young one. Embrace the challenge and let each step
            bring you closer to fluency.
          </p>
          <h2 class="!mt-12 mb-4 text-2xl font-bold">Summary</h2>
          <ul class="!mt-2 ml-6 list-disc space-y-4">
            <li>
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
              <span class="font-extrabold">Bonus: Romaji - </span>Your Latin
              alphabet crutch, helping you limp along until you can run with the
              big boys.
            </li>
          </ul>
        </div>
      </div>
    </ContentBox>
  )
}
