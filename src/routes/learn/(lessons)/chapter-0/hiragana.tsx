import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function JapanesePronunciation() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-0/practice/hiragana"
    >
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
      <h1 class="mx-24 mt-12 text-center text-6xl font-bold leading-[3.5rem]">
        Hiragana: The <span class="text-sky-400">ABC</span>s of Japanese
      </h1>
      <h2 class="mb-4 mt-12 text-center text-3xl font-bold">
        What is Hiragana?
      </h2>
      <div class="mb-32 space-y-9 px-16 sm:px-24">
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
              Excellent observation, young apprentice. Some characters do veer{" "}
              <em>slightly</em> off the pattern, but they're nothing that you
              haven't pronounced before in English.
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
            and is the only time a Japanese syllable ends with a consonant. To
            pronounce it, lift the back of your tongue to the roof of your mouth
            and produce a sound similar to "un."
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
          You've may have also noticed that not all the rows are completely
          filled. Japanese doesn't have characters for 'yi', 'ye', 'wi', etc.
          That just means fewer characters for you to memorize!
        </p>
        <p>
          <span class="font-extrabold">Student:</span> Sensei, The pattern seems
          simple, but the characters themselves are all squiggly and weird! And
          46 of them?{" "}
          <span class="text-xl font-medium">
            How the heck am I supposed to learn these?
          </span>
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> Ah, worried wombat, do not
          be intimidated by their appearance. The ✨internet✨ holds many
          treasures to aid you in your journey. One such treasure is:
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
          This guide is a rarity—it's so well-made that we felt compelled to
          send you here first{" "}
          <span class="text-xs">(no need to reinvent the wheel)</span>. It is
          very effective at helping you quickly memorize every Hiragana
          character, and you can master Hiragana within days if not hours. Best
          of all, it's free for all learners—no login/signup required. Go check
          it out!
        </p>
        <p>
          <span class="font-extrabold">Student:</span> I'll definitely look into
          that. What should I do after I've explored all the characters?
        </p>
        <p>
          <span class="font-extrabold">Sensei:</span> Once you've made your way
          through all the characters,{" "}
          <span class="text-xl font-semibold">come back</span> so we can
          properly greet each other in Japanese! Remember, you don't need to
          master every hiragana character in one go, we'll provide the romaji
          (the pronunciations) with the hiragana for the remainder of this
          chapter,{" "}
          <span class="font-medium">
            but we'll be ditching them in the next one.
          </span>
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
            <em>
              Learning Hiragana is like building the foundation of a house. It
              takes time and practice, but everything you learn after this will
              rely on this fundamental knowledge. So, take your time, practice
              regularly, and most importantly, enjoy the process, young
              grasshopper.
            </em>
          </p>
          <div class="mt-4 flex w-full justify-center">
            <PortraitIcon src="/img/guru.png" class="border-none" />
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
