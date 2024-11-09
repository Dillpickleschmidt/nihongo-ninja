import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import YouTubeVideo from "@/features/youtube/YouTube"

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

      <h2 class="mt-12 px-12 text-center text-5xl font-medium leading-[3.5rem] lg:px-24">
        Getting Started 🍵
      </h2>
      <h2 class="mt-6 px-12 pb-2 text-3xl font-medium leading-[2.5rem] lg:px-24">
        If you speak English, you can already make almost every sound in
        Japanese.
      </h2>

      <div class="mb-32 px-8 sm:px-24 lg:px-16 [&>*]:my-6">
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
          *Nihongo Ninja goes through the essentials from N5-N4 levels. We
          follow a typical college textbook order but with epic explanations and
          practice tools that actually don't bore you to tears. Each topic?
          Handpicked from the internet's vast repository for maximum
          enlightenment.
        </p>

        <div class="pb-4 pt-2 [&>*]:my-6">
          <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>
              Sensei, I've heard Japanese is really difficult to learn. The
              pronunciation must be challenging, right?
            </p>
          </div>
          <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" class="float-end" />
            <p>
              <em>*sipping tea with suspicious intensity*</em> Actually, I have
              some surprising news that might make your day: Japanese
              pronunciation is probably one of the easiest parts of learning the
              language. No, seriously!
            </p>
          </div>
        </div>

        <div class="px-2 [&>*]:mt-4">
          <p>
            If you speak English, you can already make almost every sound in
            Japanese. Even better - unlike English's chaotic spelling system
            (quick quiz: how do you pronounce "read" vs "read"? Or try "though,
            through, rough, cough"!), Japanese is almost perfectly consistent.
            Once you learn how to pronounce something, that's it. It works the
            same way every single time.
          </p>
          <p>
            <span class="font-extrabold">Student:</span> That sounds too good to
            be true. How does it work?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span>{" "}
            <em>*eyes gleaming with slightly concerning intensity*</em> BEHOLD!
            The elegant simplicity of Japanese vowels! Just five pure sounds.
            Lend me your ears:
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

          <p>
            <span class="font-extrabold">Student:</span>{" "}
            <em>*backing away slightly*</em> So... what do we do with these
            vowels?
          </p>

          <p>
            <span class="font-extrabold">Sensei:</span> Now here's where it gets
            fun. Japanese combines these vowels with consonants to make
            syllables. It's like playing with LEGO - just snap a consonant onto
            a vowel!
          </p>

          <p class="text-center">
            Let's take <span class="text-xl font-bold">k</span> for example:
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
            <span class="font-extrabold">Student:</span> I think I'm getting it!
            But how many of these combinations do I need to learn?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span>{" "}
            <em>*laughing maniacally*</em> UNLIMITED PHONETIC POWER!{" "}
            <em>*lightning crackles around their teacup*</em> DO YOU REALIZE HOW
            POWERFUL THIS KNOWLEDGE IS? <em>*straightens robes*</em> I mean...
            here's the beautiful part: Japanese has only about 71 basic sounds,
            crafting around 100 combinations, while English juggles with around
            250 unique sounds and{" "}
            <span class="font-semibold italic">thousands</span> of chaotic
            letter combinations. Your tongue is already a polyglot prodigy!
          </p>
          <p>
            <span class="font-extrabold">Student:</span> That's actually really
            encouraging! Though I'm slightly concerned about your mental
            state... What should I practice first?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span> Ready to try? Combine
            these consonants with our five vowels: t, n, h, m, and r (and don't
            worry too much about that 'r' sound just yet - it'll come naturally
            with practice)
          </p>
          <p>
            Try saying これ (ko-re). There you go - you just said "this" in
            Japanese! And trust me, you already sound better than most English
            speakers attempting Japanese in movies.
          </p>
          <div class="flex w-full justify-center">
            <div class="w-full max-w-96">
              <YouTubeVideo
                videoId="vQFaPMth2kw"
                title="Japanese Characters Speaking Engrish in Anime Funny moments"
                credit="Tamako Sensei"
              />
            </div>
          </div>
          <p>
            <span class="font-extrabold">Student:</span> Is that all there is to
            it?
          </p>
          <p>
            <span class="font-extrabold">Sensei:</span>{" "}
            <em>*whispers intensely*</em> The real secret? Japanese
            pronunciation is like a well-organized toolbox - everything has its
            place, and once you know where things go, you can't really get it
            wrong. No silent letters, no mysterious rules, just straightforward
            combinations that work the same way every time.{" "}
            <em>*normal voice*</em> Would you like more tea?
          </p>
        </div>
      </div>
    </ContentBox>
  )
}
