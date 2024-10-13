import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/occupations-majors"
    >
      <h1 class="mt-32 px-20 pb-12 text-center text-4xl font-semibold leading-[2.875rem]">
        <span class="text-orange-400">X</span>
        <span class="font-japanese">は</span>
        <span class="text-emerald-400">Y</span>
        <span class="font-japanese">です</span>
        —Your{" "}
        <span class="font-bold">
          <em>first</em>
        </span>{" "}
        introduction to Japanese grammar
      </h1>
      <div class="space-y-6 px-16 pb-32 md:px-24">
        <div class="flex w-full items-center">
          <div class="mx-4 flex flex-col items-center">
            <h3 class="text-center font-semibold">
              です (desu): The Polite Copula
            </h3>
            <h2 class="py-0 text-center text-2xl font-bold">
              &quot;It&apos;s a state of being, man...&quot;
            </h2>
            <iframe
              src="https://giphy.com/embed/IHnROpQICe4kE"
              width="240"
              height="182"
              class="giphy-embed mt-2"
              allowfullscreen
            />
          </div>
          <div class="flex justify-center pt-4 text-2xl">
            <ul class="space-y-4 font-semibold">
              <li class="text-orange-400">📙 This is a book.</li>
              <li class="text-sky-400">🧑‍🎓 I am a stuent</li>
              <li class="text-emerald-500">👥 We are friends</li>
            </ul>
          </div>
        </div>
        <div>
          <p class="text">
            In <span class="font-bold">English</span>, when we want to make a
            statement about something, we:
          </p>
          <ul class="space-y-2 px-6 pt-4 text-base">
            <li>
              <span class="mr-2 font-semibold">{"1."}</span>Explicity state
              which thing we're referring to (this/that, I/you, etc.).
            </li>
            <li>
              <span class="mr-2 font-semibold">{"2."}</span>Then, we use one of
              the several conjugations of the word <strong>to be</strong>.
            </li>
            <li>
              <span class="mr-2 font-semibold">{"3."}</span>Sometimes, we follow
              it up with a strange article that changes if the next word starts
              with a vowel (a/an).
            </li>
            <li>
              <span class="mr-2 font-semibold">{"4."}</span>And <em>finally</em>
              , the object we are making a statement about.
            </li>
          </ul>
          <h3 class="pt-4 text-center text-2xl font-bold">
            <em>That's a mess!</em>
          </h3>
        </div>
        <div class="flex w-full items-center justify-center">
          <div class="w-1/2">
            <h3 class="text-xl font-bold text-orange-400">
              The Simplicity of Japanese
            </h3>
            <p class="pt-2">
              Japanese, on the other hand, makes things{" "}
              <span>
                <em>much</em>
              </span>{" "}
              easier:
            </p>
          </div>
          <div class="flex w-1/2 justify-center">
            <ul class="space-y-4 text-2xl font-semibold">
              <li>
                📙{" "}
                <span class="font-japanese text-orange-400">
                  ほん<span class="underline underline-offset-4">です</span>。
                </span>
              </li>
              <li>
                🧑‍🎓{" "}
                <span class="font-japanese text-sky-400">
                  がくせい
                  <span class="underline underline-offset-4">です</span>。
                </span>
              </li>
              <li>
                👥{" "}
                <span class="font-japanese text-emerald-500">
                  ともだち
                  <span class="underline underline-offset-4">です</span>。
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="text-center text-2xl font-bold">
            <em>Yes! Consistency!</em>
          </h3>
          <p class="text-center text-sm">And it gets even better.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold">
            More on <span class="font-japanese">です</span> (desu)
          </h3>
          <p class="pt-2">
            In English, we can roughly translate{" "}
            <span class="font-japanese">です</span> as <strong>to be</strong>,
            but it's not quite the same. In Japanese,{" "}
            <span class="font-japanese">です</span> adds a polite touch to the
            sentence without changing its meaning.
          </p>
        </div>
        <h3 class="text-center text-2xl font-bold">
          Sometimes, we can just drop <span class="font-japanese">です</span>{" "}
          altogether and still have a complete sentence! 😀
        </h3>
        <div class="font-japanese text-5xl font-semibold">
          <div class="flex w-full items-center">
            <div class="flex w-1/2 items-center">
              <h4 class="text-orange-400">ほん。</h4>
              <h4 class="whitespace-nowrap pr-4 font-inter text-4xl text-muted-foreground">
                {"->"}
              </h4>
            </div>
            <div class="flex w-1/2">
              <div class="relative mt-6 w-full overflow-hidden rounded-md pb-[68.42%]">
                {/* <CustomImage src="/img/chapter-1/student.jpeg" alt="student" /> */}
              </div>
            </div>
          </div>
          <div class="flex w-full items-center">
            <div class="flex w-1/2 items-center">
              <h4 class="text-sky-500">がくせい。</h4>
              <h4 class="whitespace-nowrap pr-4 font-inter text-4xl text-muted-foreground">
                {"->"}
              </h4>
            </div>
            <div class="flex w-1/2">
              <div class="relative mt-6 w-full overflow-hidden rounded-md pb-[68.42%]">
                <img src="/img/chapter-1/student.jpeg" alt="student" />
              </div>
            </div>
          </div>
          <div class="flex w-full items-center">
            <div class="flex w-1/2 items-center">
              <h4 class="text-emerald-500">ともだち。</h4>
              <h4 class="whitespace-nowrap pr-4 font-inter text-4xl text-muted-foreground">
                {"->"}
              </h4>
            </div>
            <div class="w-1/2">
              <div class="relative mt-6 w-full overflow-hidden rounded-md pb-[68.42%]">
                <img src="/img/chapter-1/friends.jpeg" alt="friends" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            So, if we were to say "that's a mess!" in a Japanese lexicon, it
            would simply be:
          </p>
          <h3 class="text-center text-3xl font-bold">
            <em>Mess!</em>
          </h3>
        </div>
        <p class="pt-3">
          Yet, <span class="font-japanese">です</span> peppers conversations
          because it's like saying "please" with every sentence - it's just
          polite, so you'll hear it used a lot in Japanese.
        </p>
        <div>
          <h3 class="pt-3 text-xl font-bold">Understood Context</h3>
          <p class="pt-2">
            Notice no{" "}
            <span class="font-semibold underline underline-offset-[3px]">
              I
            </span>
            , or{" "}
            <span class="font-semibold underline underline-offset-[3px]">
              it
            </span>
            ? Context is king. <span class="font-japanese">ともだちです</span>{" "}
            could be{" "}
            <span class="font-semibold underline underline-offset-[3px]">
              I'm
            </span>{" "}
            a friend,{" "}
            <span class="font-semibold underline underline-offset-[3px]">
              You're
            </span>{" "}
            a friend, or{" "}
            <span class="font-semibold underline underline-offset-[3px]">
              They're
            </span>{" "}
            friends. Context decides.
          </p>
          <div class="mt-2">
            <small class="text-base">
              <em>
                *<span class="font-japanese">です</span> can refer to either one
                or a group of things.
              </em>
            </small>
          </div>
        </div>
        <div>
          <h2 class="pt-3 text-2xl font-bold">Example Sentences</h2>
          <div class="mt-6 flex w-full justify-center">
            <ul class="space-y-2">
              <li>
                <span class="font-japanese">
                  <span class="text-red-400">いちねんせい</span>です
                </span>{" "}
                - <span class="text-red-400">First-year student</span> and
                already regretting my life choices..
              </li>
              <li>
                <span class="font-japanese">
                  <span class="text-sky-400">[name]</span>です
                </span>{" "}
                - I am known as <span class="text-sky-400">[name]</span>, not
                'hey you'.
              </li>
              <li>
                <span class="font-japanese">
                  <span class="text-yellow-400">にじ</span>です
                </span>{" "}
                - It is <span class="text-yellow-400">two o'clock</span>.
              </li>
              <li>
                <span class="font-japanese">
                  <span class="text-indigo-400">けいざい</span>です
                </span>{" "}
                - (My major) is <span class="text-indigo-400">economics</span>,
                - where I learn why I can't afford anything...
              </li>
              <li>
                <span class="font-japanese">
                  <span class="text-emerald-400">ほん</span>です
                </span>{" "}
                - Could be one{" "}
                <span class="font-japanese text-emerald-400">book</span>, could
                be a library's worth.
              </li>
            </ul>
          </div>
        </div>
        <div class="mr-48 min-h-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p class="mt-1">
            But <span class="font-japanese">せんせい</span>, what if the topic
            isn't clear?
          </p>
        </div>
        <div class="ml-40 min-h-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p class="mt-1">
            Ah, young grasshopper, that's when we call in the particles.
          </p>
        </div>
        <div class="w-full border-b border-card-foreground pb-3"></div>
        <h2 class="pt-6 text-center text-3xl font-black">
          The Role of Particles in Japanese
        </h2>
        {/* <div> */}
        <p>
          Particles are tiny words, often just a syllable or two, that play a
          crucial role in Japanese sentences. They are like the grammatical glue
          holding sentences together, clarifying the roles of the words around
          them.
        </p>
        {/* <p class="pt-4 text-center font-semibold">
            You don't need to know all these just yet, but here's what some of
            them look like:
          </p>
        </div>
        <div class="pb-6"></div> */}
        <h2 class="text-center text-3xl font-black">
          The <span class="font-japanese">は</span> Particle
        </h2>
        <p>
          One of the most important particles is{" "}
          <span class="font-japanese text-xl">は</span> (wa). This particle
          indicates the topic of the sentence.
        </p>
        <div class="flex w-full justify-center">
          <ul class="space-y-4 text-center text-2xl font-semibold">
            <li>
              📙 -{" "}
              <span class="font-japanese">
                <span class="text-orange-400">これ</span>
                <span class="underline underline-offset-2">は</span>
                <span class="text-emerald-500">ほん</span>
                です。
              </span>
            </li>
            <li>
              <span class="text-orange-400">This</span> is a{" "}
              <span class="text-emerald-500">book</span>.
            </li>
            <p class="text-center text-sm font-normal">
              Yes, this particle is actually pronounced{" "}
              <span class="font-bold">wa</span> and not{" "}
              <span class="font-bold">ha</span>.
            </p>
          </ul>
        </div>
        <p>
          Here, <span class="font-japanese">これは</span> (kore wa) uses the{" "}
          <span class="font-japanese">は</span> particle to mark{" "}
          <span class="font-semibold">this</span> (
          <span class="font-japanese">これ</span>) as the topic.{" "}
          <span class="font-japanese">は</span> doesn't have any meaning itself,
          but it helps to clarify the topic of the sentence. You can think of it
          like an arrow pointing to the topic of the sentence.
        </p>
        <p class="space-y-0 text-sm italic text-muted-foreground">
          *Particles are a totally foreign concept for English speakers. They're
          mini-words that serve only grammatical purposes and have no meaning
          themselves—just pure, unadulterated grammar magic. But don't worry,
          you'll begin to understand them through seeing more examples.
        </p>
        <div class="w-full space-y-4 rounded-2xl bg-primary/10 py-10 text-center font-semibold">
          <p>
            As for <span class="text-orange-400">this</span>, it is a{" "}
            <span class="text-emerald-500">book</span>.
          </p>
          <h3 class="text-center text-4xl font-bold">
            <em>
              As for <span class="text-orange-400">X</span>, it is{" "}
              <span class="text-emerald-500">Y</span>.
            </em>
          </h3>
          <h3 class="pb-2 pt-3 text-center text-[2.875rem]">
            <span class="text-orange-400">X</span>
            <span class="font-japanese">は</span>
            <span class="text-emerald-500">Y</span>
            <span class="font-japanese">です。</span>
          </h3>
        </div>
        <p class="space-y-0 text-base text-muted-foreground">
          You'll want to remember the structure above. ^
        </p>
        <h2 class="text-2xl font-bold">Example Sentences</h2>
        <p>
          Japanese speakers often omit the topic and <span>は</span> particle
          when it's obvious from context. For example:
        </p>
        <div>
          <h4 class="pb-2 text-xl font-semibold">In English</h4>
          <div class="mx-6 space-y-2">
            <p>
              <span class="mr-2">A:</span>Hey, how was your trip to Tokyo?
            </p>
            <p>
              <span class="mr-2">B:</span>It was awesome! Food was to die for.
            </p>
            {/* <p>
              <span class="mr-2">A:</span>Nice! Did you check out any
              temples?
            </p>
            <p>
              <span class="mr-2">B:</span>Yeah, I went to Sensoji Temple. It
              was gorgeous!
            </p> */}
          </div>
        </div>
        <div class="text-xl">
          <h4 class="pb-2 text-xl font-semibold">In Japanese</h4>
          <div class="mx-6 space-y-2">
            <p>
              <span class="mr-2 text-lg">A:</span>
              <Romaji
                romaji={
                  <>
                    <span class="text-yellow-400">hey</span>,
                  </>
                }
              >
                <span class="text-yellow-400">ねえ</span>
              </Romaji>
              、
              <Romaji
                romaji={
                  <>
                    <span class="text-sky-300">as for</span>{" "}
                    <span class="text-orange-400">Tokyo</span>
                  </>
                }
                class="mr-1"
              >
                <span class="flex items-end justify-center">
                  <span class="text-orange-400">
                    <Furigana
                      furigana={
                        <span class="text-xs font-normal">とうきょう</span>
                      }
                    >
                      東京
                    </Furigana>
                  </span>

                  <span class="font-bold text-sky-400">は</span>
                </span>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span class="text-emerald-400">how</span>{" "}
                  </>
                }
              >
                <span class="text-emerald-400">どう</span>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span class="text-red-400">was it</span> ?
                  </>
                }
              >
                <span class="text-red-400">だった</span>？
              </Romaji>
            </p>
            <li class="mx-6 text-base">
              Here,{" "}
              <span class="font-japanese">
                <span class="text-orange-400">東京</span>
                <span class="text-sky-400">は</span>
              </span>{" "}
              sets Tokyo as the topic of the conversation.
            </li>
            <p>
              <span class="mr-2 text-lg">B:</span>
              <Romaji
                romaji={
                  <span class="mr-2">
                    <span class="text-muted-foreground">(It)</span>{" "}
                    <span class="text-red-400">was</span>{" "}
                    <span class="text-emerald-400">awesome</span>!
                  </span>
                }
              >
                <span class="text-emerald-400">
                  <Furigana
                    furigana={<span class="text-xs font-medium">さいこう</span>}
                  >
                    最高
                  </Furigana>
                </span>
                <span class="text-red-400">だった</span>よ！
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span class="text-sky-400">As for</span>{" "}
                    <span class="text-muted-foreground">the </span>
                    <span class="text-orange-400">food</span>
                  </>
                }
              >
                <span class="flex items-end justify-center">
                  <span class="text-orange-400">
                    <Furigana
                      furigana={
                        <span class="text-xs font-medium">たべもの</span>
                      }
                    >
                      食べ物
                    </Furigana>
                  </span>
                  <span class="font-bold text-sky-400">は</span>
                </span>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span class="text-muted-foreground">(it)</span>
                    <span class="text-emerald-400"> was</span>{" "}
                    <span class="text-indigo-400">really</span>{" "}
                    <span class="text-emerald-400">delicious</span>.
                  </>
                }
              >
                <span class="text-indigo-400">すごく</span>
                <span class="text-emerald-400">おいしかった</span>。
              </Romaji>
            </p>
            <li class="mx-6 text-base">
              Here, the topic of Tokyo has already been introduced, so we can
              drop{" "}
              <span class="font-japanese">
                <span class="text-orange-400">東京</span>
                <span class="text-sky-400">は</span>
              </span>
              . No need to say{" "}
              <span class="font-japanese">
                <span class="text-orange-400">東京</span>
                <span class="text-sky-400">は</span>最高だった
              </span>
              .
            </li>
            <li class="mx-6 text-base">
              Food is a new topic, so we use{" "}
              <span class="font-japanese text-sky-400">は</span> paired with the
              topic, <span class="font-japanese text-orange-400">食べ物</span>.
            </li>
          </div>
        </div>

        <h2 class="text-2xl font-bold">
          The REAL Most Basic Japanese Sentence Structures
        </h2>
        <div>
          <YouTubeVideo
            videoId="15ukUhFolU4"
            title="The REAL Most Basic Japanese Sentence Structures"
            credit="ToKini Andy"
          />
          <small class="italic text-muted-foreground">
            *Nihongo Ninja is not affiliated with ToKini Andy or any other
            linked channels.
          </small>
        </div>

        <h2 class="text-2xl font-bold">Summary</h2>
        <ul class="ml-6 mt-2 list-disc space-y-4">
          <li class="">
            <span class="font-japanese font-extrabold">です - </span>Roughly
            translated as <strong>to be</strong>, it adds politeness to a
            sentence without changing its meaning, suitable for use in most
            polite/formal situations.
          </li>
          <li>
            <span class="font-extrabold">Particles - </span>Small elements that
            grammatically structure sentences—they help to clarify the role of
            the words around them.
          </li>
          <li>
            <span class="font-japanese font-extrabold">は - </span>Indicates a
            new topic.
          </li>
          <li>
            <span class="font-extrabold">Dropping the topic - </span>
            Japanese speakers often omit the topic +{" "}
            <span class="font-japanese">は</span> particle when it's obvious
            from context, or when the topic has already been introduced.
          </li>
        </ul>
      </div>
    </ContentBox>
  )
}
