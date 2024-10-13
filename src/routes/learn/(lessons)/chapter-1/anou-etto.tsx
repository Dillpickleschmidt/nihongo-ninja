import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/kikusasaizu-1-1"
    >
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        <em>Fill</em> the Gaps: Master Your Japanese Filler Words
      </h1>
      <div class="space-y-6 px-16 pb-32 md:px-24">
        <h2 class="mt-6 text-center text-2xl font-bold">Let's face it...</h2>
        <p>
          No matter what language proficiency level you're at, you're going to
          pause, you're going to hesitate, and you're certainly going to make
          mistakes. It's all part of the learning process. But what if I told
          you that there's a way to make even your pauses sound more natural and
          fluent? That's where filler words come in.
        </p>
        <p>
          Japanese has many common filler words such as{" "}
          <span class="font-japanese text-xl">あのう</span> (anou),{" "}
          <span class="font-japanese text-xl">えっと</span>
          (etto), <span class="font-japanese text-xl">まあ</span> (maa), and{" "}
          <span class="font-japanese text-xl">そうですね</span> (sou desu ne),
          to name a few. Using these appropriately can help you sound more like
          a native speaker.
        </p>

        <h3 class="pt-12 font-japanese text-3xl font-medium">
          あのう - <span class="font-honk text-4xl">anou</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            A very common word used to politely interrupt someone. It's also
            used when you need to buy time to think, similar to{" "}
            <span class="font-black">um</span> or{" "}
            <span class="font-black">uh</span> in English.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">あのう、すみません。</span>
          </li>
          <li>
            Unlike in English, using{" "}
            <span class="font-japanese text-xl font-medium">あのう</span> before
            asking for help or interrupting someone can actually be polite and
            considerate, showing that you are being thoughtful.
          </li>
        </ul>

        <h3 class="pt-12 font-japanese text-3xl font-medium">
          えっと - <span class="font-honk text-4xl">etto</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            A very common filler word to buy time to think, similar to{" "}
            <span class="font-black">um</span> or{" "}
            <span class="font-black">uh</span> in English.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              えっと、
              <Furigana furigana={<span class="text-sm">つぎ</span>}>
                次
              </Furigana>
              に
              <Furigana furigana={<span class="text-sm">なに</span>}>
                何
              </Furigana>
              をするべきでしょうか。
            </span>
            <br />
            {"->"} Well, what should we do next?
          </li>
          <li>
            <span class="font-japanese text-xl">あのう</span> is generally used
            more often than <span class="font-japanese text-xl">えっと</span>{" "}
            when politelly interrupting someone, but both{" "}
            <span class="font-japanese text-xl">あのう</span> and{" "}
            <span class="font-japanese text-xl">えっと</span> are equally
            preferred when meaning <span class="font-black">um</span> or{" "}
            <span class="font-black">uh</span>. The choice for which to use in
            this context comes down to personal preference.
          </li>
        </ul>

        <h3 class="pt-12 font-japanese text-3xl font-medium">
          まあ - <span class="font-honk text-4xl">maa</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            Can be used to show a slight hesitation or to soften a statement, as
            well as to express annoyance, resignation, or acceptance, depending
            on the context and intonation.
          </li>
          <li>
            <span class="font-bold">Annoyance: </span>
          </li>
          <li>
            <span class="font-bold">Resignation: </span>
          </li>
          <li>
            <span class="font-bold">Suprise or Amazement: </span>
          </li>
          <li>
            <span class="font-bold">Hesitation or Softening a Statement: </span>
            <span class="font-japanese text-xl">
              まあ、いいんじゃないかな。
            </span>
          </li>
        </ul>

        <h3 class="pt-12 font-japanese text-3xl font-medium">
          そうですね - <span class="font-honk text-4xl">sou desu ne</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            Used to agree with someone or to show you're considering something,
            similar to "I see" or "that's right" in English.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">
              そうですね、そうしましょう。
            </span>
            <br />
            {"->"} I see, let's do that.
          </li>
        </ul>

        <h3 class="pt-12 font-japanese text-3xl font-medium">
          なんか - <span class="font-honk text-4xl">nanka</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            Used when you can't find the right word, similar to "like" or "you
            know" in English.
          </li>
          <li>
            <span class="font-bold">Example: </span>
            <span class="font-japanese text-xl">なんか、ちょっと変だね。</span>
            <br />
            {"->"} Like, it's a bit strange, you know.
          </li>
        </ul>
        <h2 class="pt-6 text-center text-2xl font-bold">
          Getting a feel for it...
        </h2>
        <p>
          The best way you can learn these words is to listen to lots of native
          material. Watching Japanese content <em>without</em> English subtitles
          is always preferred, but you'll be able to pick up these common filler
          words even with English subs if you listen/watch enough.
        </p>
      </div>
    </ContentBox>
  )
}
