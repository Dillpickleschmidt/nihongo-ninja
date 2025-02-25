import ContentBox from "@/components/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"
import Romaji from "@/components/text/Romaji"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-3/chapter-1-kanji-part-1">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Breaking Down Kanji
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          2,136 kanji is a <strong>lot</strong> better than 50,000 kanji. But
          what if I told you we can do better? How about:
        </p>
        <h2 class="!mt-3 text-center text-3xl font-bold">443 Kanji</h2>
        <p class="font-bold">Seems impossible? Well, read on.</p>

        <div>
          <YouTubeVideo
            videoId="DRbVBwzc6Ww"
            title="The Anatomy of a Japanese Kanji"
            credit="ToKini Andy"
          />
        </div>

        <h2 class="text-center text-3xl font-bold">Kanji Radicals</h2>

        <p>
          Kanji radicals are the building blocks of kanji characters. Think of
          them as the roots or foundational elements that provide meaning and
          structure to kanji. Each kanji is made up of one or more radicals, and
          each radical can give us clues about the kanji's meaning and
          pronunciation.
        </p>

        <div>
          <p class="font-bold">1. Semantic Clues</p>
          <ul class="ml-9 mt-3 list-disc space-y-2">
            <li>
              Radicals often indicate the general meaning of a kanji. For
              example, the radical <span class="font-japanese text-xl">水</span>{" "}
              means <strong>water</strong> and appears in kanji related to
              liquids, like <span class="font-japanese text-xl">泉</span>{" "}
              meaning <strong>spring</strong> or <strong>fountain</strong>.
            </li>
          </ul>
        </div>
        <div>
          <p class="font-bold">2. Structural Understanding</p>
          <ul class="ml-9 mt-3 list-disc space-y-2">
            <li>
              Knowing radicals helps break down complex kanji into manageable
              parts. This makes it easier to memorize and write kanji correctly.
              For example, the kanji{" "}
              <span class="font-japanese text-xl">働</span> meaning{" "}
              <strong>work</strong> can be broken down into the radicals{" "}
              <span class="font-japanese text-xl">亻</span> meaning{" "}
              <strong>person</strong> and{" "}
              <span class="font-japanese text-xl">動</span> meaning{" "}
              <strong>move</strong>.
            </li>
          </ul>
          <div class="mt-4 flex justify-center text-4xl">
            <div class="flex">
              <div class="text-center">
                <Romaji romaji="person">亻</Romaji>
              </div>
              <div class="mx-4">+</div>
              <div class="text-center">
                <Romaji romaji="move">動</Romaji>
              </div>
              <div class="mx-4">{"->"}</div>
              <div class="text-center">
                <Romaji romaji="work">働</Romaji>
              </div>
            </div>
          </div>
          {/* <p class="mt-2 text-base italic text-muted-foreground">
            *Remember that the kanji for person (人) is one of the few
            kanji/radicals that can look very different depending on the font
            and usage.
          </p> */}
          <p class="mt-2 text-base italic text-muted-foreground">
            *<span class="font-japanese text-lg not-italic">動</span> (move) is
            not a radical, but it is a kanji that can be broken down into other
            radicals.
          </p>
        </div>

        <p>
          By learning radicals, you can make educated guesses about unfamiliar
          kanji, making the learning process more efficient.
        </p>

        <div class="space-y-3">
          <h3 class="text-xl font-bold">Types of Kanji Radicals</h3>
          <p>
            Kanji radicals are categorized based on their position within a
            kanji:
          </p>
          <p class="text-base italic text-muted-foreground">
            *There's no need to memorize the positions, they're just nice to
            know for general reference purposes.
          </p>
        </div>

        <ol class="ml-6 mt-3 list-decimal space-y-2 font-semibold">
          <li>
            Left-hand Radicals - Hen (
            <span class="font-japanese text-xl font-light">編</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals positioned on the left side of a kanji.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  亻
                </span>{" "}
                - person,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">扌</span>{" "}
                - left-hand
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  何
                </span>{" "}
                - what,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">指</span>{" "}
                - finger
              </li>
            </ul>
          </li>
          <li>
            Right-hand Radicals - Tsukuri (
            <span class="font-japanese text-xl font-light">旁</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals found on the right side of a kanji.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  刂
                </span>{" "}
                - knife,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">⻏</span>{" "}
                - small village
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  別
                </span>{" "}
                - separate,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">都</span>{" "}
                - metropolis
              </li>
            </ul>
          </li>
          <li>
            Crown Radicals - Kanmuri (
            <span class="font-japanese text-xl font-light">冠</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals placed on top of kanji.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  宀
                </span>{" "}
                - roof with a chimney,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">⺌</span>{" "}
                - rays of light
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  家
                </span>{" "}
                - house,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">堂</span>{" "}
                - assembly hall
              </li>
            </ul>
          </li>
          <li>
            Legs or Feet Radicals - Ashi (
            <span class="font-japanese text-xl font-light">脚</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals situated at the bottom of kanji.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  儿
                </span>{" "}
                - legs,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">灬</span>{" "}
                - fire sparks
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  兄
                </span>{" "}
                - older brother,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">黒</span>{" "}
                - black
              </li>
            </ul>
          </li>
          <li>
            Enclosure Radicals - Kamae (
            <span class="font-japanese text-xl font-light">編</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals that enclose kanji on at least two sides.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  門
                </span>{" "}
                - gate,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">冂</span>{" "}
                - upside-down box
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  聞
                </span>{" "}
                - hear,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">高</span>{" "}
                - tall, high, expensive
              </li>
            </ul>
          </li>
          <li>
            Hang-off Radicals - Tare (
            <span class="font-japanese text-xl font-light">垂れ</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals that hang over the top and left side of kanji.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  广
                </span>{" "}
                - house on a cliff,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">尸</span>{" "}
                - corpse with a flag
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  度
                </span>{" "}
                - degrees,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">屋</span>{" "}
                - roof
              </li>
            </ul>
          </li>
          <li>
            Left-to-Bottom Enclosure Radicals: - Nyou (
            <span class="font-japanese text-xl font-light">繞</span>)
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals that wrap around the left and bottom of kanji.</li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  ⻌
                </span>{" "}
                - road,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">龰</span>{" "}
                - running shoes
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  運
                </span>{" "}
                - carry,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">足</span>{" "}
                - foot
              </li>
            </ul>
          </li>
          <li>
            Whole Kanji Radicals:
            <ul class="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>
                Entire kanji that <strong>also</strong> serve as radicals{" "}
                <span class="text-base">
                  (the majority fall into this category)
                </span>
                . These can be located anywhere within a kanji.
              </li>
              <li>
                <span class="text-base font-semibold">Example: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  大
                </span>{" "}
                - large, big, great, etc...{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">木</span>{" "}
                - tree, shrub, timber, etc...
              </li>
              <li>
                <span class="text-base font-semibold">Appear in: </span>
                <span class="ml-2 font-japanese text-2xl font-medium">
                  太
                </span>{" "}
                - plump,{" "}
                <span class="ml-2 font-japanese text-2xl font-medium">森</span>{" "}
                - forest
              </li>
            </ul>
          </li>
        </ol>

        <p>
          There are 214 <strong>official</strong> radicals, and James Heisig{" "}
          <span class="text-base text-muted-foreground">
            (author of the book <em>Remembering The Kanji</em>)
          </span>{" "}
          popularized the use of 229 additional <strong>unoffical</strong>{" "}
          radicals he calls <em>primitives</em>, totaling 443 essential kanji
          parts you'll need to know to put together almost any kanji word.
        </p>

        <p class="text-base italic text-muted-foreground">
          *You'll encounter both the official and RTK radicals in{" "}
          <strong>jpdb.io</strong>, with some added tweaks that further improve
          RTK's primatives.
        </p>

        <p>
          So yeah, technically, there's still over 2,000 kanji to learn if you
          want to match Japanese adults. But after learning these 443 radicals,
          all you have to do is mash together what you already know to create
          new kanji. That way, the remaining kanji will come{" "}
          <strong>much</strong> more quickly.
        </p>

        <div>
          <h3 class="pb-4 text-xl font-bold">How Japanese Kids Learn Kanji</h3>
          <YouTubeVideo
            videoId="EykWxB_sqOM"
            title="How Japanese Kids Learn Kanji"
            credit="That Japanese Man Yuta"
          />
          <p class="text-base text-muted-foreground">
            This is just to demistify how kids actually learn kanji in Japan.
            However, they have the advantage of already knowing the words, so I
            wouldn't recommend learning in exactly the same way as they do if
            you're going for efficiency.
          </p>
        </div>

        <div>
          <h3 class="pb-4 text-xl font-bold">
            Can Japanese People Actually Write Japanese Kanji?
          </h3>
          <YouTubeVideo
            videoId="sJNxPRBvRQg"
            title="Can Japanese Actually Write Japanese Kanji?"
            credit="That Japanese Man Yuta"
          />
          <p class="text-base text-muted-foreground">
            Fun fact: Remembering how to read kanji is much easier than
            remembering how to write it. Even Japanese people sometimes
            struggle!
          </p>
        </div>
      </div>
    </ContentBox>
  )
}
