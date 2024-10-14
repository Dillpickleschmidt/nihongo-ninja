import Furigana from "@/components/text/Furigana"

export default function GaParticle() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        <span class="font-japanese text-green-500">が</span> Particle
      </h1>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">Function</h2>
        <p>
          Marks the <span class="font-bold">subject</span> of the sentence,
          emphasizing the subject itself.
        </p>
      </div>
      <h2 class="mt-4 text-lg font-semibold">Difference between は and が</h2>
      <p>
        <span class="font-japanese font-bold text-sky-500">は</span> (wa) Marks
        the <strong>topic</strong> of the sentence, quickly indicating what the
        sentence is about, and{" "}
        <u>
          emphasizes what comes <span class="font-semibold">after</span> it.
        </u>
      </p>
      <p class="my-4 text-center">
        <span class="font-japanese">
          これ<span class="font-bold text-sky-500">は</span>
          <Furigana furigana={<span class="text-xs">おおき</span>}>
            大木
          </Furigana>
          <Furigana furigana={<span class="text-xs">いぬ</span>}>犬</Furigana>
          です。
        </span>{" "}
        {"->"} As for this,{" "}
        <span class="font-bold italic">it's a big dog.</span>
      </p>
      <p>
        All of the emphasis is placed on{" "}
        <span class="font-bold italic">it's a big dog</span>, while quickly
        indicating that it's <span class="font-japanese font-medium">これ</span>{" "}
        that we're referring to.
      </p>

      <p class="mt-2">
        <span class="font-japanese font-bold text-green-500">が</span> (ga)
        Marks the <strong>subject</strong> of the sentence,{" "}
        <u>
          emphasizing what comes <span class="font-semibold">before</span> it.
        </u>
      </p>
      <p class="mb-1 text-center">
        <span class="font-japanese">
          これ<span class="font-bold text-green-500">が</span>
          <Furigana furigana={<span class="text-xs">おおき</span>}>
            大木
          </Furigana>
          <Furigana furigana={<span class="text-xs">いぬ</span>}>犬</Furigana>
          です。
        </span>
        {"->"} As for <span class="font-bold italic">this</span>, it's a big
        dog.
      </p>
      <p class="text-sm italic">
        *The above sentence would make sense at a pet show where there are
        multiple dogs.
      </p>
      <p class="mt-1">
        The emphasis here is placed on{" "}
        <span class="font-bold italic">this</span>. In this case, the word{" "}
        <span class="font-japanese font-medium">これ</span> is much more
        important.
      </p>

      <p class="mt-1 text-center">
        <strong>Credit: </strong>
        <a
          href="https://www.youtube.com/watch?v=ytjRoTwWnzw"
          target="_blank"
          class="text-sky-600"
        >
          (YouTube) Japanese は and が Particles in 2 Minutes | (WA) vs (GA)
        </a>
      </p>

      <h2 class="mt-2 text-lg font-semibold">WH Questions and が</h2>
      <p>
        WH-words like <span class="font-japanese">だれ</span>,{" "}
        <span class="font-japanese">なに</span>,{" "}
        <span class="font-japanese">どこ</span>,{" "}
        <span class="font-japanese">どれ</span>, etc. are always followed by{" "}
        <span class="font-japanese font-bold text-green-500">が</span> when they
        are the subject of a sentence.
      </p>

      <div class="flex w-full items-center">
        <p class="w-1/4 font-semibold text-red-500">Incorrect</p>
        <p class="w-3/4">
          <span class="font-japanese line-through">
            どれ
            <span class="font-bold text-sky-400">は</span>
            田中さんのペンですか。
          </span>
        </p>
      </div>
      <div class="flex w-full items-center">
        <p class="w-1/4 font-semibold">Correct</p>
        <p class="w-3/4">
          <span class="font-japanese">
            どれ
            <span class="font-bold text-green-500">が</span>
            田中さんのペンですか。
          </span>
          {"->"} Which one is Tanaka's pen?
        </p>
      </div>

      <ul class="ml-4 mt-1 list-inside list-disc">
        <li>
          This sentence emphasizes{" "}
          <span class="font-japanese font-semibold">どれ</span> (which one) as
          the subject of the sentence{" "}
          <span class="text-sm">
            (focus on the part{" "}
            <strong>
              before <span class="font-japanese">が</span>
            </strong>
            )
          </span>
          . It directly asks which pen among several options belongs to Tanaka.
        </li>
      </ul>

      <div class="flex w-full items-center">
        <p class="w-1/4 font-bold">Also Correct</p>
        <p class="w-3/4">
          <span class="font-japanese">
            田中さんのペン
            <span class="font-bold text-sky-400">は</span>どれですか。
          </span>
          {"->"} Which one is Tanaka's pen?
        </p>
      </div>
      <ul class="ml-4 mt-1 list-inside list-disc">
        <li>
          This sentence places <span class="font-japanese">田中さんのペン</span>{" "}
          (Tanaka's pen) as the topic. It asks
          <span class="ml-2 border-l-[3px] border-muted-foreground pl-2">
            <span class="font-light italic">
              among these several pens,{" "}
              <span class="font-normal underline underline-offset-4">
                which one
              </span>{" "}
              is Tanaka's?
            </span>
          </span>{" "}
          (with the focus on the part{" "}
          <strong>
            after <span class="font-japanese">は</span>
          </strong>
          ).
        </li>
      </ul>
    </div>
  )
}
