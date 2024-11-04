import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
// import KatakanaChart from "@/features/charts/KatakanaChart"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/practice/katakana"
    >
      <div class="space-y-2 pl-8 pt-8">
        <h4 class="text-xl font-medium">Lesson Resources:</h4>
        <ul class="list-inside list-disc">
          <li>
            <a
              class="text-sky-400 underline"
              href="https://files.tofugu.com/articles/japanese/2022-08-23-learn-katakana-book-pdf/learn-katakana-book-by-tofugu.pdf"
              target="_blank"
            >
              Tofugu's Learn Katakana PDF
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
        </ul>
      </div>

      <div class="flex w-full justify-center">
        <div class="relative mt-12 h-32 w-32 lg:mt-24 lg:h-64 lg:w-64">
          <img
            src="/img/chapter-2/katakana/ア.png"
            alt="ア image"
            sizes="400px"
          />
        </div>
      </div>
      <h1 class="mt-12 px-12 text-center text-5xl font-bold leading-[4.0rem] lg:px-24 lg:text-6xl">
        <span class="text-[#FF3333]">Katakana</span>: The <em>Energetic</em>{" "}
        Sibling of <span class="">Hiragana</span>
      </h1>
      <h2 class="mb-4 mt-12 text-center text-3xl font-bold">
        What is Katakana?
      </h2>
      <div class="space-y-9 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          Katakana is one of the three main scripts used in Japanese writing,
          along with Hiragana and Kanji. It is primarily used for{" "}
          <strong>foreign words</strong>, <strong>loanwords</strong>, and{" "}
          <strong>onomatopoeia</strong>, and sometimes for{" "}
          <strong>emphasis</strong>, similar to italics in English. Katakana
          characters have the same sounds as their Hiragana counterparts but are
          distinct in appearance with sharp, angular shapes.
        </p>
        <p>
          There are a total of <strong>46</strong> Katakana characters, each
          representing a specific sound.
        </p>
        <div class="flex w-full justify-center font-japanese text-3xl font-semibold">
          <ul class="flex w-full justify-evenly">
            <li>ア a</li>
            <li>イ i</li>
            <li>ウ u</li>
            <li>エ e</li>
            <li>オ o</li>
          </ul>
        </div>
        <p class="text-center italic">It's just like Hiragana!</p>
        <p>
          Here's a chart containing all 46 Katakana characters with their
          pronunciations.
        </p>
        <div class="mt-12 flex flex-col items-center">
          {/* <KatakanaChart /> */}
        </div>

        <h2 class="!mt-12 text-center text-3xl font-bold">
          Unique Aspects of Katakana
        </h2>
        <div class="space-y-2">
          <h3 class="text-xl font-bold">Extending the vowel (long vowel)</h3>
          <p>
            When you need to extend a vowel sound, use a dash{" "}
            <span class="font-japanese">ー</span> in horizontal writing or a
            small vertical line <span class="font-japanese">｜</span> in
            vertical writing.
          </p>

          <table class="w-full table-fixed">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div class="flex justify-center">
                    <PortraitIcon
                      class="h-12 w-12"
                      src="/img/chapter-2/katakana/old-computer.png"
                      alt="computer-icon"
                    />
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <PortraitIcon
                      class="h-12 w-12"
                      src="/img/chapter-2/katakana/harvard-logo.png"
                      alt="harvard-logo"
                    />
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <PortraitIcon
                      class="h-12 w-12"
                      src="/img/chapter-2/katakana/mary.png"
                      alt="harvard-logo"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <span class="font-semibold">Example: </span>
                </td>
                <td>
                  <div class="flex justify-center text-xl">
                    <Romaji class="!-my-1" romaji="compuutaa">
                      コンピューター
                    </Romaji>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center text-xl">
                    <Romaji class="!-my-1" romaji="haabaado">
                      ハーバード
                    </Romaji>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center text-xl">
                    <Romaji class="!-my-1" romaji="mearii">
                      メアリー
                    </Romaji>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="space-y-2">
          <h3 class="text-xl font-bold">Consonant + y + vowel</h3>
          <p>
            Japanese often combines consonants with the{" "}
            <span class="font-bold">ya</span>, <span class="font-bold">yu</span>
            , and <span class="font-bold">yo</span> sounds, allowing for more
            accurate representation of sounds found in foreign words.
          </p>
          <div class="flex justify-around">
            <p class="font-bold">Examples:</p>
            <p>
              <span class="font-japanese text-xl">
                <Romaji romaji="nyuuyōku">ニューヨーク</Romaji>
              </span>{" "}
              {"->"} New York
            </p>
            <p>
              <span class="font-japanese text-xl">
                <Romaji romaji="shyatsu">シャツ</Romaji>
              </span>{" "}
              {"->"} shirt
            </p>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-xl font-bold">
            <span class="font-japanese text-3xl">シ</span> vs.{" "}
            <span class="font-japanese text-3xl">ツ</span> and{" "}
            <span class="font-japanese text-3xl">ン</span> vs.{" "}
            <span class="font-japanese text-3xl">ソ</span>
          </h3>
          <ul class="list-inside list-disc space-y-2">
            <li>
              In Katakana, <span class="font-japanese text-xl">シ</span> (shi)
              and <span class="font-japanese text-xl">ツ</span> (tsu) look very
              similar but have slightly different stroke orientations.{" "}
              <span class="font-japanese text-xl">シ</span> (shi) has flatter
              strokes, while the strokes in{" "}
              <span class="font-japanese text-xl">ツ</span> (tsu) are more
              vertical.
            </li>
            <div class="flex items-center justify-center">
              <PortraitIcon
                class="h-16 w-16"
                src="/img/shocked-child.png"
                alt="shoked-person"
              />
              <p class="font-japanese">？？</p>
            </div>
            <li>
              When handwritten, the long curved line of{" "}
              <span class="font-japanese text-xl">シ</span> is written from the
              bottom up, while <span class="font-japanese text-xl">ツ</span> is
              written from top to bottom.
            </li>
            <li>
              You'll notice that the curved lines of{" "}
              <span class="font-japanese text-xl">シ</span> and{" "}
              <span class="font-japanese text-xl">ン</span> don't go all the way
              to the top of the character, while the curved lines of{" "}
              <span class="font-japanese text-xl">ツ</span> and{" "}
              <span class="font-japanese text-xl">ソ</span> do.
            </li>
            <li>
              <span class="font-japanese text-xl">ン</span> (n) and{" "}
              <span class="font-japanese text-xl">ソ</span> (so),{" "}
              <span class="font-japanese text-xl">ン</span> (n) are similar.{" "}
              <span class="font-japanese text-xl">ン</span> (n) is also flatter
              while <span class="font-japanese text-xl">ソ</span> (so) is more
              vertical.
            </li>
          </ul>
          <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon
              src="/img/guru.png"
              class="float-end border-none bg-card-foreground"
            />
            <p>
              It certainly takes a bit of reading exposure to get used to these
              subtle differences, but the good news is that the correct
              character will often become apparent from context.
            </p>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-xl font-bold">
            Double Consonants—small <span class="font-japanese">ッ</span>
          </h3>
          <p>
            Just like in hiragana, katakana uses the small{" "}
            <span class="font-japanese">ッ</span> (tsu) to indicate a doubled
            consonant sound.
          </p>
          <table class="!mt-6 w-full">
            <tbody>
              <tr>
                <td class="font-semibold">Compare:</td>
                <td>
                  <span class="font-japanese text-xl">
                    <Romaji romaji="ruuku">
                      ル<span class="text-orange-400">ー</span>ク
                    </Romaji>
                  </span>{" "}
                  {"->"} Luke
                </td>
                <td>
                  <span class="font-japanese text-xl">
                    <Romaji romaji="maaku">
                      マ<span class="text-orange-400">ー</span>ク
                    </Romaji>
                  </span>{" "}
                  {"->"} Mark
                </td>
                <td>
                  <span class="font-japanese text-xl">
                    <Romaji romaji="meekaa">
                      メ<span class="text-orange-400">ー</span>カ
                      <span class="text-orange-400">ー</span>
                    </Romaji>
                  </span>{" "}
                  {"->"} Maker
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <span class="font-japanese text-xl">
                    <Romaji romaji="rukku">
                      ル<span class="text-sky-400">ッ</span>ク
                    </Romaji>
                  </span>{" "}
                  {"->"} Look
                </td>
                <td>
                  <span class="font-japanese text-xl">
                    <Romaji romaji="makku">
                      マ<span class="text-sky-400">ッ</span>ク
                    </Romaji>
                  </span>{" "}
                  {"->"} Mac
                </td>
                <td>
                  <span class="font-japanese text-xl">
                    <Romaji romaji="mekka">
                      メ<span class="text-sky-400">ッ</span>カ
                    </Romaji>
                  </span>{" "}
                  {"->"} Mecca
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="space-y-2">
          <h3 class="text-xl font-bold">Dakuten & Handakuten</h3>
          <p>Just like hiragana, add diacritical markers to change sounds:</p>
          <div class="flex justify-around">
            <p class="font-japanese text-3xl font-medium">
              <Romaji romaji="ka">カ</Romaji>
              <span class="mx-1 font-inter text-xl">{"->"}</span>
              <Romaji
                romaji={
                  <>
                    <span class="text-orange-400">g</span>a
                  </>
                }
              >
                ガ
              </Romaji>
            </p>
            <p class="font-japanese text-3xl font-medium">
              <Romaji romaji="shi">シ</Romaji>
              <span class="mx-1 font-inter text-xl">{"->"}</span>
              <Romaji
                romaji={
                  <>
                    <span class="text-orange-400">j</span>i
                  </>
                }
              >
                ジ
              </Romaji>
            </p>
            <p class="font-japanese text-3xl font-medium">
              <Romaji romaji="ta">タ</Romaji>
              <span class="mx-1 font-inter text-xl">{"->"}</span>
              <Romaji
                romaji={
                  <>
                    <span class="text-orange-400">d</span>a
                  </>
                }
              >
                ダ
              </Romaji>
            </p>
            <p class="font-japanese text-3xl font-medium">
              <Romaji romaji="ha">ハ</Romaji>
              <span class="mx-1 font-inter text-xl">{"->"}</span>
              <Romaji
                romaji={
                  <>
                    <span class="text-orange-400">b</span>a
                  </>
                }
              >
                バ
              </Romaji>
            </p>
            <p class="font-japanese text-3xl font-medium">
              <Romaji romaji="ha">ハ</Romaji>
              <span class="mx-1 font-inter text-xl">{"->"}</span>
              <Romaji
                romaji={
                  <>
                    <span class="text-orange-400">p</span>a
                  </>
                }
              >
                パ
              </Romaji>
            </p>
          </div>
        </div>

        <p>
          <span class="font-japanese font-extrabold">
            <Furigana furigana="がくせい">学生</Furigana>:
          </span>{" "}
          <Furigana furigana="せんせい">先生</Furigana>, I'm finally coming to
          grips with Hiragana, and{" "}
          <span class="text-xl font-medium italic">
            now you expect me to learn Katakana?
          </span>
        </p>
        <p>
          <span class="font-extrabold">
            <Furigana furigana="せんせい">先生</Furigana>:
          </span>{" "}
          Indeed, young apprentice. But believe me when I say that learning
          Katakana is <span class="font-bold italic">much</span> easier once
          you've learned Hiragana. The two scripts share the same sounds, so
          you're already halfway there. Think of it like a funky new font!
        </p>
        <h2 class="text-center text-3xl">
          <a
            class="text-red-500 underline"
            href="https://files.tofugu.com/articles/japanese/2022-08-23-learn-katakana-book-pdf/learn-katakana-book-by-tofugu.pdf"
            target="_blank"
          >
            Tofugu's Learn Katakana PDF
          </a>
        </h2>
        <p>
          <span class="font-semibold">
            Once again, we recommend using Tofugu's guides to get started.
          </span>{" "}
          <span class="italic">
            If you are already familiar with Tofugu's Learn Hiragana Book, you
            already have an idea of what it is like. It comes in PDF format so
            you can print it out or use it on your tablet.
          </span>{" "}
          - Tofugu
        </p>
        <p>
          <span class="font-extrabold">
            <Furigana furigana="がくせい">学生</Furigana>:
          </span>{" "}
          Thanks <Furigana furigana="せんせい">先生</Furigana>, I'll give it a
          shot! Is there anything else I should know?
        </p>
        <p>
          <span class="font-extrabold">
            <Furigana furigana="せんせい">先生</Furigana>:
          </span>{" "}
          Well, now that you mention it,{" "}
          <span class="font-semibold italic">
            we won't be providing you with any furigana
          </span>{" "}
          (pronunciation guides) for Katakana characters in this chapter, so
          you'll need to reference a Katakana chart if you ever get stuck.
          That's why it's important to practice and memorize the characters as
          soon as possible.
        </p>
        <div class="flex w-full justify-center">
          <PortraitIcon
            src="/img/guru.png"
            class="h-14 w-14 border-none bg-inherit"
          />
        </div>
      </div>
    </ContentBox>
  )
}
