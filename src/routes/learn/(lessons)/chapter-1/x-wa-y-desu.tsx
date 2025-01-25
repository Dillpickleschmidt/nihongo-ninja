import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/occupations-majors"
    >
      <div class="space-y-6 px-4 pb-32 sm:px-12 md:px-20">
        <div class="mb-6 mt-16 w-full border-b py-6">
          <h1 class="text-center text-4xl font-semibold">
            <span class="text-orange-400">X</span>
            <span class="font-japanese">は</span>
            <span class="text-emerald-400">Y</span>
            <span class="font-japanese">です</span> — Your <em>First</em>{" "}
            Japanese Sentence Pattern
          </h1>
        </div>
        <p class="text-lg">
          Let's look at how Japanese handles one of the most basic types of
          sentences: stating what something is.
        </p>

        <hr class="my-6 border-t" />

        <h2 class="text-2xl font-bold">In English vs Japanese</h2>
        <div class="mt-4 space-y-4">
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
          <div class="rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
            <div class="flex justify-center">
              <ul class="space-y-4 text-xl font-medium">
                <li class="text text-orange-400">📙 This is a book.</li>
                <li class="text text-sky-400">🧑‍🎓 I am a stuent</li>
                <li class="text text-emerald-500">👥 We are friends</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
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
          {/* <p class="text-center text-sm">And it gets even better.</p> */}
        </div>

        <hr class="my-6 border-t" />
        <div>
          <h2 class="text-2xl font-bold">
            です (desu)
            {/* : The Polite Copula */}
          </h2>
          <p class="pt-2">
            In English, we can roughly translate{" "}
            <span class="font-japanese">です</span> as <strong>to be</strong>,
            but it's not quite the same. In Japanese,{" "}
            <span class="font-japanese">です</span> adds a polite touch to the
            sentence without changing its meaning.
          </p>
        </div>

        <div class="flex flex-col items-center gap-6 sm:flex-row">
          <ul class="mt-2 list-disc space-y-2 pl-6">
            <li>No need to choose between am/is/are</li>
            <li>Adds politeness to the sentence</li>
            <li>Can often be dropped in casual speech</li>
          </ul>
          <iframe
            src="https://giphy.com/embed/IHnROpQICe4kE"
            width="240"
            height="182"
            class="giphy-embed mt-2"
            allowfullscreen
          />
        </div>

        <div class="rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">
            Japanese Makes It Simple
          </h2>
          <div class="mt-4 grid gap-6 md:grid-cols-2">
            <div class="rounded-lg bg-background/60 p-4">
              <h3 class="font-bold">In English:</h3>
              <div class="mt-2 space-y-2">
                <p class="text-xl">📘 This is a book.</p>
                <p class="text-xl">👩‍🎓 I am a student.</p>
                <p class="text-xl">👥 We are friends.</p>
              </div>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <h3 class="font-bold">In Japanese:</h3>
              <div class="mt-2 space-y-2">
                <p class="font-japanese text-xl">
                  ほん<span class="text-emerald-500">です</span>。
                </p>
                <p class="font-japanese text-xl">
                  がくせい<span class="text-emerald-500">です</span>。
                </p>
                <p class="font-japanese text-xl">
                  ともだち<span class="text-emerald-500">です</span>。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="font-japanese">
          <p>
            Technically, です is optional (it just makes you sound more polite).
            You could drop it and still have a grammatically correct full
            sentence:
          </p>
          <div class="mt-3 space-y-1">
            <div class="flex w-full justify-around gap-4">
              <div>
                <p class="text-xl">ほんです。</p>
                <p class="text-xl">おもしろい。</p>
              </div>
              <div>
                <p class="">
                  <span class="text-muted-foreground">(That is a)</span> book.
                </p>
                <p class="">
                  <span class="text-muted-foreground">(Something is)</span>{" "}
                  interesting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
            So, if we were to say "that's a mess!" in a Japanese lexicon, it
            would simply be:
          </p>
          <h3 class="text-center text-2xl font-bold">
            <em>Mess!</em>
          </h3>
        </div>

        <div class="rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">Context is Everything</h2>
          <div class="mt-4 space-y-3">
            <div>
              <p class="font-japanese text-xl">
                がくせい<span class="text-emerald-500">です</span>。
              </p>
              <p class="text-sm text-muted-foreground">
                Could mean "I am", "You are", or "They are" a student - context
                decides!
              </p>
            </div>
            <div>
              <p class="font-japanese text-xl">
                ともだち<span class="text-emerald-500">です</span>。
              </p>
              <p class="text-sm text-muted-foreground">
                Could refer to one friend or many friends - again, context tells
                us!
              </p>
            </div>
          </div>
        </div>

        <p class="text-base">
          One thing that separates Japanese from English is that it's a highly
          contextual language. You often don't have to spell out every detail in
          your sentence because your listener can usually figure it out from the
          context.
        </p>

        <p class="text-sm italic text-muted-foreground">
          But what if we need to make the context explicit? That's where
          particles come in...
        </p>

        <hr class="my-6 border-t" />

        <h2 class="text-center text-3xl font-bold">The Role of Particles</h2>

        <p class="mt-4 text-lg">
          Particles are tiny words that act like grammatical glue, helping to
          clarify the roles of other words in the sentence. Though they might
          look small, they're crucial for making your meaning clear.
        </p>

        <div class="mt-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">
            The <span class="font-japanese">は</span> Particle
          </h2>
          <p class="mt-4">
            One of the most important particles is{" "}
            <span class="font-japanese text-xl">は</span> (wa). Think of it as a
            spotlight - it highlights the topic of your sentence.
          </p>

          <div class="mt-4 rounded-lg bg-background/60 p-4">
            <div class="space-y-3">
              <p class="font-japanese text-xl">
                <span class="text-orange-400">これ</span>
                <span class="text-sky-400">は</span>
                <span class="text-emerald-500">ほん</span>です。
              </p>
              <p class="text-lg text-muted-foreground">
                As for <span class="text-orange-400">this</span>, it's a{" "}
                <span class="text-emerald-500">book</span>.
              </p>
            </div>
          </div>
        </div>

        <p class="text-center text-xl font-semibold">
          Yes, this particle is actually pronounced{" "}
          <span class="underline">wa</span> even though it's written は (ha).
        </p>

        <div class="mt-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-6">
          <h3 class="text-center text-2xl font-bold">The Basic Pattern</h3>

          <div class="mt-4 space-y-4">
            <div class="rounded-lg bg-background/60 p-4">
              <p class="text-center text-xl">
                <span class="text-orange-400">Topic</span>
                <span class="font-japanese text-sky-400">は</span>
                <span class="text-emerald-500">Information</span>
                <span class="font-japanese">です</span>
              </p>
            </div>

            <div class="space-y-4 rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                <span class="text-orange-400">
                  <Furigana furigana={<span class="text-xs">わたし</span>}>
                    私
                  </Furigana>
                </span>
                <span class="text-sky-400">は</span>
                <span class="text-emerald-500">
                  <Furigana furigana={<span class="text-xs">がくせい</span>}>
                    学生
                  </Furigana>
                </span>
                です。
              </p>
              <p class="text-muted-foreground">
                As for <span class="text-orange-400">me</span>, I'm a{" "}
                <span class="text-emerald-500">student</span>.
              </p>
            </div>

            <div class="space-y-4 rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                <span class="text-orange-400">
                  <Furigana furigana={<span class="text-xs">とうきょう</span>}>
                    東京
                  </Furigana>
                </span>
                <span class="text-sky-400">は</span>
                <span class="text-emerald-500">
                  <Furigana furigana={<span class="text-xs">おお</span>}>
                    大
                  </Furigana>
                  きい
                </span>
                です。
              </p>
              <p class="text-muted-foreground">
                As for <span class="text-orange-400">Tokyo</span>, it's{" "}
                <span class="text-emerald-500">big</span>.
              </p>
            </div>
          </div>
        </div>

        <p class="text-base text-muted-foreground">
          You might think it's annoying to read this as "wa" instead of "ha",
          but trust me, you'll see this particle so much you won't even think
          about it. Frankly, you'll be reading it as "wa" even more than "ha"
          because of how commonly used it is.
        </p>
        <p class="text-base italic text-muted-foreground">—Trust me, bro.</p>

        <h3 class="mt-6 text-xl font-bold">When Context is Clear</h3>
        <p class="mt-2">
          Japanese speakers often drop the topic and は when it's obvious from
          context:
        </p>

        <div class="mt-4 space-y-4">
          <div>
            <p class="font-semibold">
              Question: What do you think about the movie?
            </p>
            <div class="mt-2 pl-4">
              <p class="font-japanese text-xl">
                <span class="text-emerald-500">おもしろい</span>です。
              </p>
              <p class="text-sm text-muted-foreground">
                (It is) interesting.
                <br />
                No need for 映画は (the movie は) - we already know what we're
                talking about!
              </p>
            </div>
          </div>

          <div>
            <p class="font-semibold">After showing your friend a photo:</p>
            <div class="mt-2 pl-4">
              <p class="font-japanese text-xl">
                <span class="text-emerald-500">
                  <Furigana furigana={<span class="text-xs">いもうと</span>}>
                    妹
                  </Furigana>
                </span>
                です。
              </p>
              <p class="text-sm text-muted-foreground">
                (This is) my little sister.
                <br />
                No need for これは (this は) - it's obvious we're talking about
                the photo!
              </p>
            </div>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <h2 class="text-center text-3xl font-bold">
          Real Conversation Examples
        </h2>
        <p>
          In casual conversations, です can be だ (more on this in later
          chapters).
        </p>

        <p>
          Take a look at the following example to see when{" "}
          <strong>Topic + は</strong> gets dropped, and where it's needed.
        </p>

        <div class="mt-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6">
          <h3 class="text-center text-2xl font-bold">
            A Conversation About Tokyo
          </h3>

          <div class="mt-4 space-y-4">
            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                <span class="text-yellow-400">ねえ</span>、
                <span class="text-orange-400">東京</span>
                <span class="text-sky-400">は</span>
                どうだった？
              </p>
              <p class="text-muted-foreground">Hey, how was Tokyo?</p>
              <p class="mt-1 text-sm text-muted-foreground">
                *東京は marks "Tokyo" as our topic
              </p>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                <span class="text-emerald-500">
                  <Furigana furigana={<span class="text-xs">さいこう</span>}>
                    最高
                  </Furigana>
                </span>
                だったよ！
              </p>
              <p class="text-muted-foreground">It was great!</p>
              <p class="mt-1 text-sm text-muted-foreground">
                *No need for 東京は - we're clearly still talking about Tokyo
              </p>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl">
                <span class="text-orange-400">食べ物</span>
                <span class="text-sky-400">は</span>
                すごく
                <span class="text-emerald-500">おいしかった</span>。
              </p>
              <p class="text-muted-foreground">
                The food was really delicious.
              </p>
              <p class="mt-1 text-sm text-muted-foreground">
                *食べ物は introduces "food" as a new topic
              </p>
            </div>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <div class="mt-6 space-y-4">
          <h3 class="text-xl font-bold">Point to Remember</h3>
          <ul class="list-disc space-y-2 pl-6">
            <li>Use は to introduce new topics</li>
            <li>Drop は when the topic is clear from context</li>
            <li>は helps your listener know what you're talking about</li>
          </ul>
        </div>

        <hr class="my-6 border-t" />

        <h2 class="text-2xl font-bold">Additional Resources</h2>
        <div class="mt-4">
          <YouTubeVideo
            videoId="15ukUhFolU4"
            title="The REAL Most Basic Japanese Sentence Structures"
            credit="ToKini Andy"
          />
          <p class="mt-2 text-sm italic text-muted-foreground">
            *Nihongo Ninja is not affiliated with ToKini Andy or any other
            linked channels.
          </p>
        </div>

        <hr class="my-6 border-t" />

        <h2 class="text-2xl font-bold">Summary</h2>
        <ul class="ml-6 mt-4 list-disc space-y-4">
          <li>
            <span class="font-japanese font-extrabold">です - </span>
            Roughly translated as <strong>to be</strong>, it adds politeness to
            a sentence without changing its meaning, suitable for use in most
            polite/formal situations.
          </li>
          <li>
            <span class="font-extrabold">Particles - </span>Small elements that
            grammatically structure sentences—they help to clarify the role of
            the words around them.
          </li>
          <li>
            <span class="font-japanese font-extrabold">は - </span>
            Indicates a new topic.
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
