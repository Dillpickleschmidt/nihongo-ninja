import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function JapanesePronunciation() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-0/practice/hiragana">
      <div class="space-y-2 pl-8 pt-8">
        <h4 class="text-xl font-medium">Lesson Resources:</h4>
        <ul class="list-inside list-disc">
          <li>
            <a
              class="text-sky-400 underline"
              href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
              target="_blank"
            >
              Tofugu's Learn Hiragana PDF
            </a>
          </li>
          <li>
            <a
              class="text-sky-400 underline"
              href="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png"
              target="_blank"
            >
              Hiragana & Katakana Chart by IREAL
            </a>
          </li>
          <li>
            <a
              class=""
              href="https://www.youtube.com/watch?v=_wZHqOghvSs"
              target="_blank"
            >
              <span class="text-sky-400 underline">
                Learn Hiragana + Katakana in 2 Hours by JapanesePod101
              </span>
              <br />
              <p class="ml-6 text-sm text-muted-foreground no-underline">
                ^ if you really want to spend some time on it
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div class="flex w-full justify-center">
        <img
          src="/img/chapter-0/あ.png"
          alt="あ image"
          class="aspect-square w-64"
        />
      </div>
      <h1 class="mt-12 px-12 text-center text-5xl font-bold leading-[3.5rem] lg:px-24 lg:text-6xl">
        Hiragana: The <span class="text-sky-400">ABC</span>s of Japanese
      </h1>
      <h2 class="mb-4 mt-12 text-center text-3xl font-bold">
        What is Hiragana?
      </h2>
      <div class="mb-32 space-y-9 px-8 sm:px-24 lg:px-16">
        <p>
          Hiragana is one of the three main scripts used in Japanese writing,
          along with Katakana and Kanji, often referred to as the foundational
          writing system in Japanese. It's primarily used for{" "}
          <strong>native</strong> Japanese words and{" "}
          <strong>grammatical elements</strong> that connect words into
          sentences. Each Hiragana character represents a distinct sound, and
          these characters can be combined to form words.
        </p>
        <p>
          There are a total of <strong>46</strong> Hiragana characters. It
          sounds like a lot, but don't worry! They all include the same 5 vowels
          that you've already seen.
        </p>
        <div class="flex w-full justify-center font-japanese text-3xl font-semibold">
          <ul class="flex w-full justify-evenly">
            <li>あ a</li>
            <li>い i</li>
            <li>う u</li>
            <li>え e</li>
            <li>お o</li>
          </ul>
        </div>
        <p>
          Remember this pattern! 'a, i, u, e, o'. If you memorize that, the rest
          will come more easily.
        </p>
        <p>
          Next, we just add a consonant to each of these. Adding 'k' will give
          us five new characters:
        </p>
        <div class="flex w-full justify-center font-japanese text-2xl font-medium">
          <ul>
            <li>
              か ka -{" "}
              <span class="text-xl">
                <em>
                  <span class="font-extrabold">ca</span>r
                </em>
              </span>
            </li>
            <li>
              き ki -{" "}
              <span class="text-xl">
                <em>
                  <span class="font-extrabold">ke</span>y
                </em>
              </span>
            </li>
            <li>
              く ku -{" "}
              <span class="text-xl">
                <em>
                  <span class="font-extrabold">cou</span>pon
                </em>
              </span>
            </li>
            <li>
              け ke -{" "}
              <span class="text-xl">
                <em>
                  <span class="font-extrabold">ke</span>pt
                </em>
              </span>
            </li>
            <li>
              こ ko -{" "}
              <span class="text-xl">
                <em>
                  <span class="font-extrabold">co</span>rner
                </em>
              </span>
            </li>
          </ul>
        </div>
        <p>
          Here's a chart containing all 46 Hiragana characters with their
          pronunciations.
        </p>
        <div class="mt-12 flex flex-col items-center">
          {/* <HiraganaChart /> */}
        </div>
        <div class="py-2 [&>*]:my-6">
          <div class="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>
              But wait, <span class="font-japanese">し</span> sounds like 'she'
              instead of 'see'! And what about{" "}
              <span class="font-japanese">ん？</span>
            </p>
          </div>
          <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" class="float-end" />
            <p>
              Good eye! Japanese likes to keep you on your toes with these. Some
              characters do veer <em>slightly</em> off the pattern, but they're
              nothing that you haven't pronounced before in English.
            </p>
          </div>
        </div>
        <div class="mt-4 flex flex-row justify-center">
          <ul class="![&>*]:py-0 flex h-32 flex-col justify-center pl-2 pr-4 text-center text-2xl font-bold leading-7">
            <li class="font-japanese">ん</li>
          </ul>
          <p>
            <span class="font-extrabold">Sensei:</span> Now, let's talk about
            one of the most distinctive Hiragana characters you'll encounter—"
            <span class="font-japanese text-xl">ん</span>" (n). Unlike the
            na-ni-nu-ne-no sounds, this "n" is added at the end of a syllable
            and is the only time a Japanese syllable ends with a consonant.
            Pronounce it like you're about to say "no" but got distracted
            mid-word.
          </p>
        </div>
        <div class="mt-4 flex flex-row justify-center">
          <ul class="![&>*]:py-0 flex h-14 flex-col justify-center pl-2 pr-4 text-center text-2xl font-bold leading-7">
            <li class="font-japanese">を</li>
          </ul>
          <p>
            <span class="font-extrabold">Sensei:</span> And lastly, we have "
            <span class="font-japanese text-xl">を</span>". This character is
            technically pronounced "wo," but you'll more often hear it
            pronounced as "o".
          </p>
        </div>
        <p>
          You'll see gaps in some rows on the chart. Japanese decided to spare
          you a few extra characters.
        </p>
        <p>
          <span class="font-extrabold">Student:</span> Sensei, these
          characters... they're like scribbles! And remembering{" "}
          <span class="text-xl font-medium">46 of them?</span> I might need a
          brain upgrade.
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> Fear not, for the
          ✨digital realm✨ has come to your rescue:
        </p>
        <h2 class="text-center text-3xl">
          <a
            class="text-sky-400 underline"
            href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
            target="_blank"
          >
            Tofugu's Learn Hiragana PDF
          </a>
        </h2>
        <p>
          It's so good, we're basically outsourcing your introduction to
          Hiragana to them. Give it a go. It is very effective at helping you
          quickly memorize every Hiragana character, and you can master Hiragana
          within days if not hours. Best of all, it's free for all learners—no
          login/signup required. Go check it out!
        </p>
        <p>
          <span class="font-extrabold">Student:</span> I'll check that out. What
          comes after mastering these squiggles?
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> Once you've acquainted
          yourself with all characters, we'll practice our Japanese greetings.
          You don't have to be perfect; we'll ease you in with some romaji this
          time, but next chapter, you're on your own, kid.
        </p>
        <div class="mt-4 flex w-full justify-center">
          <PortraitIcon
            src="/img/chapter-0/shocked-child.png"
            class="h-16 w-16 border-none bg-inherit"
          />
        </div>
        <div class="!-mb-6">
          <p class="text-base">
            <span class="font-bold">A note from sensei: </span>
            Think of Hiragana like my collection of vintage tea cups -{" "}
            <span class="font-thin italic">
              pulls out absolutely massive tea cup collection from nowhere -{" "}
            </span>
            start with one, add another, and before you know it, you'll have a
            collection worth showing off.{" "}
            <span class="font-thin italic">arranges cups precisely</span>{" "}
            Practice daily, and you'll be surprised how quickly they add up.
          </p>
          <div class="mt-4 flex w-full justify-center">
            <PortraitIcon src="/img/guru.png" class="border-none" />
          </div>
          <div class="flex w-full justify-center pt-6">
            <div class="w-full max-w-96">
              <YouTubeVideo
                videoId="GuDyQYkdyio"
                title="35 years mug collection destroyed"
              />
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
