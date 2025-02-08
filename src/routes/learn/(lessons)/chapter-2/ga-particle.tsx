import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-2/dare">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        New Subjects With The{" "}
        <span class="font-japanese text-green-500">が</span> Particle
      </h1>
      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <div>
          <p>
            In this lesson, we'll delve into the{" "}
            <span class="font-japanese text-xl">が</span> (ga) particle, its use
            cases, and how it differs from the{" "}
            <span class="font-japanese text-xl">は</span> (wa) particle. You've
            learned how to define <strong>topics</strong> with{" "}
            <span class="font-japanese text-xl font-bold">は</span>; now it's
            time to understand how to define <strong>subjects</strong> with{" "}
            <span class="font-japanese text-xl font-bold">が</span>.
          </p>
          <p class="mt-2">
            First, let's review our understanding of{" "}
            <span class="font-japanese text-xl">は</span>.
          </p>
        </div>

        <h3 class="!mt-9 text-xl font-bold">
          <span class="font-japanese text-2xl">は</span> (Wa)
        </h3>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>Marks the <strong>topic</strong> of the
            sentence, indicating what the sentence is about, and emphasizing
            what comes after it.
          </li>
          <li>
            <strong>Example: </strong>
            <span class="font-japanese text-xl">
              これ<span class="font-bold text-sky-400">は</span>
              <Furigana furigana={<span class="text-sm">おおき</span>}>
                大木
              </Furigana>
              <Furigana furigana={<span class="text-sm">いぬ</span>}>
                犬
              </Furigana>
              です。
            </span>
            {"->"} As for this,{" "}
            <span class="font-bold italic">it's a big dog.</span>
          </li>
        </ul>
        <p class="!mt-4">
          All of the emphasis is placed on{" "}
          <span class="font-bold italic">it's a big dog</span>, while quickly
          indicating that it's <span class="font-japanese text-xl">これ</span>{" "}
          that we're referring to.
        </p>

        <h3 class="!mt-9 text-xl font-bold">
          <span class="font-japanese text-2xl">が</span> (Ga)
        </h3>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>Marks the <strong>subject</strong> of the
            sentence, (emphasizing the subject).
          </li>
          <li>
            <strong>Example: </strong>
            <span class="font-japanese text-xl">
              これ<span class="font-bold text-green-500">が</span>
              <Furigana furigana={<span class="text-sm">おおき</span>}>
                大木
              </Furigana>
              <Furigana furigana={<span class="text-sm">いぬ</span>}>
                犬
              </Furigana>
              です。
            </span>
            {"->"} As for <span class="font-bold italic">this</span>, it's a big
            dog.
          </li>
        </ul>
        <p class="!mt-4">
          The emphasis here is placed on{" "}
          <span class="font-bold italic">this</span>. In this case, the word{" "}
          <span class="font-japanese text-xl">これ</span> is much more
          important.
        </p>

        <p class="text-base italic text-muted-foreground">
          *Please note that the above examples are taken from Andy's YouTube
          video where he explains the differences between{" "}
          <span class="font-japanese not-italic">は</span> and{" "}
          <span class="font-japanese not-italic">が</span>. We highly recommend
          you watch his video here for further understanding.
        </p>
        <div>
          <YouTubeVideo
            videoId="ytjRoTwWnzw"
            title="Japanese は and が Particles in 2 Minutes | (WA) vs (GA)"
            credit="ToKini Andy"
          />
        </div>
        <p class="text-sm italic text-muted-foreground">
          *The comparison aspect of{" "}
          <span class="font-japanese not-italic">は</span> will be covered in
          later chapters.
        </p>

        <p>Let's look at another example</p>

        <h3 class="text-xl">
          <span class="font-japanese text-2xl">
            これ<span class="font-bold text-sky-400">は</span>ペンです。
          </span>
          {"->"} This is a <span class="font-bold italic">pen.</span>
        </h3>
        <p>
          <strong>Context: </strong>Use this sentence when you want to introduce
          a pen as the topic of discussion. You are saying "As for this, it's a
          pen," and then any further discussion will be about the pen.
        </p>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Situation: </strong>Showing items one by one: "This is an
            eraser, this is a pen, this is a ruler."
          </li>
        </ul>

        <h3 class="text-xl">
          <span class="font-japanese text-2xl">
            これ<span class="font-bold text-green-500">が</span>ペンです。
          </span>
          {"->"} <span class="font-bold italic">This</span> is a pen.
        </h3>
        <p>
          <strong>Context: </strong>Use when emphasizing "this" as the subject.
        </p>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Situation: </strong>Imagine someone is looking for a pen
            among several mechanical pencils in a drawer, and they ask, "Which
            one is the pen?" You'd respond:{" "}
            <span class="font-japanese text-xl">
              これ<span class="font-bold text-green-500">が</span>ペンです。
            </span>
            {"->"} <span class="font-bold italic">This one's</span> a pen.
          </li>
        </ul>
        <p class="text-base">
          For the purposes of this chapter, the above information should be
          enough to get you started with <span class="font-japanese">が</span>.
          If you are interested in exploring this topic in more depth, we
          encourage you to read{" "}
          <a
            href="https://8020japanese.com/wa-vs-ga/"
            target="_blank"
            class="font-medium text-sky-400"
          >
            this article
          </a>
          . It assumes you have basic knowledge of verbs and particles that
          won't be introduced until Chapter 3, so some of the example sentences
          may be a bit advanced at this stage. However, the author's
          explanations are the clearest we've found, and it will probably save
          you years of headaches and confusion down the road.
        </p>
        <p class="text-base">
          While you don't have to read it now, you'll certainly want to read it
          in Chapter 3 when you start encountering more difficult/ambiguous
          sentences. Therefore, we've included this module again in the list of
          Chapter 3 lessons to make sure you don't forget to read it.
        </p>

        <h3 class="pt-6 text-center text-2xl font-bold">
          WH Questions and{" "}
          <span class="font-japanese text-[1.6rem] text-green-500">が</span>
        </h3>
        <p>
          WH-words (who, what, where, when, why, which) like{" "}
          <span class="font-japanese">だれ</span>,{" "}
          <span class="font-japanese">なに</span>,{" "}
          <span class="font-japanese">どこ</span>,
          <span class="font-japanese">どれ</span>,{" "}
          <span class="font-japanese">どの</span>+noun, etc. and are always
          marked by{" "}
          <span class="font-japanese text-xl font-bold text-green-500">が</span>{" "}
          when they are the subject of a sentence.
        </p>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-bold text-red-500">Incorrect</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl line-through">
              どれ
              <span class="font-bold text-sky-400">は</span>
              田中さんのペンですか。
            </span>
          </p>
        </div>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-bold">Correct</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl">
              どれ
              <span class="font-bold text-green-500">が</span>
              田中さんのペンですか。
            </span>
            {"->"} Which one is Tanaka's pen?
          </p>
        </div>

        <ul class="!mt-4 ml-6 list-inside list-disc space-y-2">
          <li>
            This sentence emphasizes{" "}
            <span class="font-japanese text-xl font-semibold">どれ</span> (which
            one) as the subject of the sentence{" "}
            <span class="text-base text-muted-foreground">
              (focus on the part{" "}
              <strong>
                before <span class="font-japanese">が</span>
              </strong>
              )
            </span>
            . It directly asks which pen among several options belongs to
            Tanaka.
          </li>
          <li>
            <strong>Example: </strong>If you're standing in front of a desk with
            several pens and want to know specifically which one is Tanaka's,
            you might use this structure.
          </li>
        </ul>

        <div class="flex w-full items-center">
          <p class="w-1/4 font-bold">Also Correct</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl">
              田中さんのペン
              <span class="font-bold text-sky-400">は</span>どれですか。
            </span>
            {"->"} Which one is Tanaka's pen?
          </p>
        </div>
        <ul class="!mt-4 ml-6 list-inside list-disc space-y-2">
          <li>
            This sentence places{" "}
            <span class="font-japanese text-xl">田中さんのペン</span> (Tanaka's
            pen) as the topic. It asks
            <div class="my-3 border-l-[3px] border-muted-foreground pl-6">
              <p class="font-extralight italic">
                among these several pens,{" "}
                <span class="font-light underline underline-offset-4">
                  which one
                </span>{" "}
                is Tanaka's?
              </p>
            </div>
            <p>
              (with the focus on the part{" "}
              <strong>
                after <span class="font-japanese">は</span>
              </strong>
              ).
            </p>
          </li>
          <li>
            <strong>Example: </strong>If you know one of the pens belongs to
            Tanaka and you want to find out which one it is, this structure
            would be appropriate.
          </li>
        </ul>
      </div>
      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *There may be more than 1 correct answer*
        </p>
        <p>
          You are showing your friend different items in your room. How would
          you say "This is a pen"?
        </p>
        <SelectText
          answer="これはペンです。"
          a="これはペンです。"
          b="これがペンです。"
          class="text-xl"
        />
        <p>
          Your friend is looking for their notebook among several on the table.
          How would you say "This one's your notebook"?
        </p>
        <SelectText
          answer="これが[name]のノートです。"
          a="これは[name]のノートです。"
          b="これが[name]のノートです。"
          class="text-xl"
        />
        <p>Someone asks, "Who has this?" How would you say "Taro has it"?</p>
        <SelectText
          answer="たろうがもっています。"
          a="たろうはもっています。"
          b="たろうがもっています。"
          class="text-xl"
        />
        <p>Which sentence(s) correctly ask(s), "What is that?"</p>
        <p class="!my-0 text-base text-muted-foreground">
          *<span class="font-japanese">何</span> {"->"} なん・なに
        </p>
        <SelectText
          answer="それは何ですか。"
          a="何がそれですか。"
          b="何はそれですか。"
          c="それは何ですか。"
          d="それが何ですか。"
          class="text-xl"
        />
        <p>
          Choose the correct sentence(s) to ask, "Which one is Takashi's
          notebook?"
        </p>
        <SelectText
          answer={[
            "隆さんのノートはどれですか。",
            "どれが隆さんのノートですか。",
          ]}
          a="隆さんのノートはどれですか。"
          b="どれは隆さんのノートですか。"
          c="どれが隆さんのノートですか。"
          d="隆さんのノートがどれですか。"
          class="text-xl"
        />
      </div>
    </ContentBox>
  )
}
