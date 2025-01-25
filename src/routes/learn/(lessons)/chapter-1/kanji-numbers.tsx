import ContentBox from "@/components/ContentBox"

export default function page() {
  const jpdbIds = [
    [1160790, 1737107075],
    [1579470, 1715924750],
    [1268060, 1736737325],
    [1461140, 1736726885],
    [1585310, 1711619990],
    [1275640, 1713518330],
    [1579350, 1737110120],
    [1319210, 1737107510],
    [1583090, 1711620860],
    [1579840, 1713264290],
    [1578150, 1736794745],
  ]

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/practice/kanji-numbers"
    >
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Kanji numbers 1-10
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          It's a bit early for kanji, and generally speaking, we don't expect
          you to memorize the kanji for words until <strong>Chapter 3</strong>,
          but you will be adding words to and practicing on{" "}
          <strong>jpdb.io</strong> everyday from this point on. That way, you'll
          hit the ground running when it's time to get serious with kanji.
        </p>
        <p>
          These first 10 numbers are so frequently used that it's worth
          mastering them right now on Nihongo Ninja, and we'll expect you to
          know them going forward{" "}
          <span class="text-base text-muted-foreground">
            (you'll still review them on jpdb)
          </span>
          . The reason being that they're actually{" "}
          <span class="font-bold italic">much</span> easier to read than the
          hiragana{" "}
          <span class="text-base text-muted-foreground">
            (once you get used to them)
          </span>
          , so we're actually making life easier for you.
        </p>
        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">一</div>
          <div>{"->"} One</div>
        </div>
        <p>
          A pictograph of <strong>one</strong> line. Simple, straightforward,
          and is more recognizable than{" "}
          <span class="font-japanese text-xl">いち.</span>
        </p>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">二</div>
          <div>{"->"} Two</div>
        </div>
        <p>
          A pictograph of <strong>two</strong> lines. Wow, this isn't that hard.{" "}
          <span>( ‾́ ◡ ‾́ )</span>
        </p>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">三</div>
          <div>{"->"} Three</div>
        </div>
        <p>
          A pictograph of <strong>three</strong> lines.
        </p>

        <h4 class="font-bold">
          Now, it gets weirder. Before we get to four, let's learn these kanji
          radicals:
        </h4>
        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">口</div>
          <div>{"->"} Mouth</div>
        </div>
        <p>A pictograph of an open mouth.</p>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">儿</div>
          <div>{"->"} Person's legs</div>
        </div>
        <p>A pictograph of a pair of legs.</p>

        <h4 class="font-bold">Now, on to the kanji for the number four:</h4>
        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">四</div>
          <div>{"->"} Four</div>
        </div>
        <p>
          A monster <strong>four</strong> times the size of a human has a{" "}
          <strong>mouth</strong> that's almost big enough to swallow them whole!
          We say <em>almost</em> because if it tried, the <strong>legs</strong>{" "}
          would still stick out!
        </p>
        <div class="!mt-2">
          <small class="text-muted-foreground">
            *We'll use mnemonics like this to help you remember kanji.
          </small>
        </div>
        <img
          src="/img/chapter-2/kanji-numbers/aqua-eaten-by-frog.jpg"
          alt="Aqua-eaten-by-frog"
          class="aspect-video-"
        />
        <div class="mt-2">
          <small class="text-muted-foreground">
            Anime:{" "}
            <span class="font-semibold">
              KONOSUBA -God's blessing on this wonderful world!
            </span>
          </small>
        </div>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">五</div>
          <div>{"->"} Five</div>
        </div>
        <p>
          English: On your mark, get set,{" "}
          <strong>
            go! (<span class="font-japanese text-xl">ご</span>)
          </strong>{" "}
          {"->"} Japanese:{" "}
          <span class="font-japanese text-xl">よーい、どん！</span>
        </p>
        <img
          src="/img/chapter-2/kanji-numbers/deku-running.jpg"
          alt="Deku-running"
          class="aspect-video"
        />
        <div class="mt-2">
          <small class="text-muted-foreground">
            Anime: <span class="font-semibold">My Hero Academia</span>
          </small>
        </div>

        <h4 class="font-bold">
          Let's learn these next two before the number six:
        </h4>
        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">亠</div>
          <div>{"->"} Lid</div>
        </div>
        <p>
          A pictograph of a lid. You know, the thing you put on a trash can?
        </p>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">ハ</div>
          <div>{"->"} Short legs</div>
        </div>
        <p>A pictograph of short legs.</p>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">六</div>
          <div>{"->"} Six</div>
        </div>
        <p>
          The Cookie Monster had <strong>six</strong> cookies 🍪 stolen by Oscar
          the Grouch and is seeking retribution. Oscar hides in a trash can with
          a <strong>lid</strong> over his head. He's the only one who can fit
          because he has such <strong>short legs</strong>.
        </p>
        <img
          src="/img/chapter-2/kanji-numbers/oscar-stole-cookies.jpg"
          alt="Oscar-stole-cookies"
          class="aspect-video"
        />

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">七</div>
          <div>{"->"} Seven</div>
        </div>
        <p>
          If you rotate it 180 degrees, you'll notice it's just an upside-down{" "}
          <strong>seven</strong>.
        </p>
        <img
          src="/img/chapter-2/kanji-numbers/seven.jpg"
          alt="Upside-down-seven"
          class="aspect-video"
        />

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">八</div>
          <div>{"->"} Eight</div>
        </div>
        <p>
          I <strong>eight</strong> something so large, it bent my chopsticks.
        </p>
        <p>
          The volcano hasn't erupted for <strong>eight</strong> years.
        </p>
        <div class="flex w-full justify-center">
          <div class="w-64">
            <img
              src="/img/chapter-2/kanji-numbers/eight-volcano.png"
              alt="Volcano-shaped-like-eight-kanji"
              class="aspect-square"
            />
          </div>
        </div>

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">九</div>
          <div>{"->"} Nine</div>
        </div>
        <p>
          It looks like an elaborate letter <span class="font-black">n</span>{" "}
          with a tiny <span class="font-black">i</span> attached at the end
          (where it flares up). What do the letters{" "}
          <span class="font-black">n</span> and{" "}
          <span class="font-black">i</span> start spelling? Yep, the word{" "}
          <strong>nine</strong>.
        </p>
        {/* <p>
          A woman in the doggie style position, waiting for{" "}
          <span class="font-bold italic tracking-wider">nine</span> inches.
          If only she knew back then she would get pregnant and would have to
          carry a baby for <strong>nine</strong> months!
        </p> */}
        {/* <div>
          <p>
            A person appearing to be in the doggie style position, waiting for
            (insert <strong>nine</strong> [unit of measurement] joke here).
          </p>
          <p class="mt-2 text-base italic text-muted-foreground">
            Whatever helps you remember it \_0_0_/
          </p>
        </div> */}

        <div class="flex items-center justify-center text-3xl">
          <div class="mr-4 font-japanese text-5xl">十</div>
          <div>{"->"} Ten</div>
        </div>
        <p>
          A pictograph of a cross, which signifies the number{" "}
          <strong>ten</strong>. You know, like the <strong>ten</strong>{" "}
          commandments?
        </p>
      </div>
    </ContentBox>
  )
}
