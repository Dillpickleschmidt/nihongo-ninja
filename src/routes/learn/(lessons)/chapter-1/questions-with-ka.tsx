import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function Page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/the-no-particle"
    >
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Forming Questions With The{" "}
        <span class="font-japanese text-red-500">か</span> Particle
      </h1>
      <div class="space-y-6 px-8 pb-32 md:px-24">
        <YouTubeVideo
          videoId="_bG8RWRAaJM"
          title="か (ka) #9 Ultimate Japanese Particle Guide"
          credit="JapanesePod101.com"
          startTime={7}
        />
        <h2 class="my-3 text-center text-2xl font-bold">Introduction</h2>
        <p>
          The <span class="font-japanese">か</span> particle is a crucial
          element in Japanese grammar, primarily used to form questions, though
          it has other uses as well. Understanding how to use{" "}
          <span class="font-japanese">か</span> will help you ask and understand
          questions in Japanese, enhancing your conversational skills.
        </p>
        <h2 class="my-3 text-center text-2xl font-bold">
          Forming Yes/No Questions
        </h2>
        <div>
          <p>
            To form a yes/no question in Japanese, simply add{" "}
            <span class="font-japanese text-xl">か</span> to the end of a
            statement.
          </p>
          <ul class="my-4 ml-6">
            <li>
              <span class="font-bold">Statement: </span>
              <span class="font-japanese text-xl font-bold">
                がくせいです。
              </span>{" "}
              - <span class="text-muted-foreground">(I am)</span> a student.
            </li>
            <li>
              <span class="font-bold">Question: </span>
              <span class="font-japanese text-xl font-bold">
                がくせいです
                <span class="text-red-500">か</span>。
              </span>{" "}
              - Are <span class="text-muted-foreground">(you)</span> a student?
            </li>
          </ul>
          <p>
            Notice that in Japanese, it is not customary to use a question mark
            at the end of a question sentence when the{" "}
            <span class="font-japanese">か</span> particle is present, though it
            is sometimes used in casual writing for clarity.
          </p>
        </div>
        <h2 class="my-3 text-center text-2xl font-bold">Question Words</h2>
        <p>
          In addition to yes/no questions, Japanese questions often use specific
          question words, such as:
        </p>
        <div class="flex w-full justify-center">
          <ul class="list-disc text-xl">
            <li>
              <span class="font-japanese text-2xl font-semibold">なん</span> or{" "}
              <span class="font-japanese text-2xl font-semibold">なに</span> -
              what
            </li>
            <li>
              <span class="font-japanese text-2xl font-semibold">どこ</span> -
              where
            </li>
            <li>
              <span class="font-japanese text-2xl font-semibold">だれ</span> -
              who
            </li>
            <li>
              <span class="font-japanese text-2xl font-semibold">いつ</span> -
              when
            </li>
            <li>
              <span class="font-japanese text-2xl font-semibold">どう</span> -
              how
            </li>
            <li>
              <span class="font-japanese text-2xl font-semibold">なぜ</span> -
              why
            </li>
          </ul>
        </div>
        <p>
          These question words are typically followed by the{" "}
          <span class="font-japanese text-xl">か</span> particle to form a
          complete question.
        </p>
        <li class="italic">
          In this lesson, we'll focus on using{" "}
          <span class="font-japanese text-xl not-italic">なん・なに</span> with
          the <span class="font-japanese text-xl not-italic">か</span> particle.
        </li>
        <p>
          <strong>Example:</strong>
        </p>
        <ul>
          <li>
            <span class="font-japanese text-xl">せんこうはなんですか。</span> -
            What is your major?
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese text-xl">せんこう</span> - major
              </li>
              <li>
                <span class="font-japanese">は</span> - topic particle
              </li>
              <li>
                <span class="font-japanese text-xl">なん</span> - what
              </li>
              <li>
                <span class="font-japanese text-xl">です</span> - is
              </li>
              <li>
                <span class="font-japanese text-xl">か</span> - question
                particle
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Can be literally translated as:{" "}
          <span class="font-bold">
            As for <span class="text-muted-foreground">(your)</span> major, what
            is it?
          </span>
        </p>
        <p>
          <strong>Responses:</strong>
        </p>
        <ul>
          <li>
            <span class="font-japanese text-xl">せんこうはえいごです。</span> -
            My major is English.
          </li>
          <li>
            Or just: <span class="font-japanese text-xl">えいごです。</span> -
            It's English.
          </li>
        </ul>
        <div>
          <h2 class="text-center text-2xl font-bold">
            <span class="font-japanese text-sky-500">なん</span> vs.{" "}
            <span class="font-japanese text-sky-500">なに</span>
          </h2>
          <h2 class="text-center font-japanese text-3xl font-medium text-sky-500">
            何
          </h2>
        </div>
        <p>
          Both <span class="font-japanese text-sky-500">なん</span> and{" "}
          <span class="font-japanese text-sky-500">なに</span> mean{" "}
          <span class="font-bold italic">"what"</span> in Japanese, and they
          share the same kanji{" "}
          <span class="font-japanese text-xl text-sky-500">何</span>, but they
          are used slightly differently. Here's a quick guide:
        </p>
        <div class="space-y-1">
          <h3 class="font-japanese text-2xl font-bold text-sky-500">なに</h3>
          <li>Stands on its own.</li>
          <li>
            Example:{" "}
            <span class="font-japanese text-xl font-bold">
              なにをしますか。
            </span>{" "}
            - What will you do?
          </li>
        </div>
        <div class="space-y-1">
          <h3 class="font-japanese text-2xl font-bold text-sky-500">なん</h3>
          <li>
            Used before words starting with <span class="font-black">d</span>,{" "}
            <span class="font-black">n</span>, or{" "}
            <span class="font-black">t</span> sounds, and with counters.
          </li>
          <li>
            Example:{" "}
            <span class="font-japanese text-xl font-bold">なんですか。</span> -
            What is it?
          </li>
        </div>
        <div class="space-y-1">
          <h3 class="text-xl font-bold">Quick Tips</h3>
          <li>
            Use <span class="font-japanese text-xl">なん</span> before{" "}
            <span class="font-black">d</span>, <span class="font-black">n</span>
            , or <span class="font-black">t</span> sounds, and counters.
          </li>
          <li>
            Use <span class="font-japanese text-xl">なに</span> in other cases.
          </li>
          <li>
            Don't overthink it! You'll get a feel for which one to use pretty
            quickly with practice.
          </li>
        </div>
        <h2 class="my-3 text-center text-2xl font-bold">
          <span class="font-japanese text-3xl text-red-500">か</span> Example
          Sentences
        </h2>
        <ul>
          <li>
            <h4 class="mb-1 mt-6 font-bold">What time is it now?</h4>
            <ul class="ml-6 list-disc">
              <li>
                A: <span class="font-japanese text-xl">いまなんじですか。</span>{" "}
              </li>
              <li>
                B: <span class="font-japanese text-xl">くじです。</span> - It is
                nine o'clock.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">How old are you, Yuki?</h4>
            <ul class="ml-6 list-disc">
              <li>
                A:{" "}
                <span class="font-japanese text-xl">
                  ゆきさんはなんさいですか。
                </span>{" "}
              </li>
              <li>
                B:{" "}
                <span class="font-japanese text-xl">
                  じゅうきゅうさいです。
                </span>{" "}
                - I'm nineteen years old.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">What year are you in college?</h4>
            <ul class="ml-6 list-disc">
              <li>
                A:{" "}
                <span class="font-japanese text-xl">なんねんせいですか。</span>{" "}
              </li>
              <li>
                B: <span class="font-japanese text-xl">にねんせいです。</span> -
                I'm a sophomore.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">What is your telephone number?</h4>
            <ul class="ml-6 list-disc">
              <li>
                A:{" "}
                <span class="font-japanese text-xl">
                  でんわばんごうはなんばんですか。
                </span>{" "}
              </li>
              <li>
                B:{" "}
                <span class="font-japanese text-xl">
                  はちろくななごさんぜろきゅうです。
                </span>{" "}
                - It is 867-5309.
              </li>
            </ul>
          </li>
        </ul>
        <h2 class="pt-6 text-center text-2xl font-bold">
          Additional Points to Consider
        </h2>
        <ul class="ml-6 list-disc">
          <li>
            <strong>Using Question Marks</strong>: While traditional Japanese
            does not use question marks, they are fairly common in casual and
            written language, especially in text messages and informal writing.
            However, in formal writing and speech, the{" "}
            <span class="font-japanese">か</span> particle alone is sufficient
            to indicate a question.
          </li>
        </ul>
        <h2 class="my-3 text-center text-2xl font-bold">
          Non-Question Uses of{" "}
          <span class="font-japanese text-[1.65rem] text-red-500">か</span>
        </h2>
        <ul class="ml-6 list-disc">
          <li>
            <h4 class="mb-1 mt-6 font-bold">Saying "or":</h4>
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-sm">にほんじん</span>}>
                    日本人
                  </Furigana>
                  か
                  <Furigana
                    furigana={<span class="text-sm">かんこくじん</span>}
                  >
                    韓国人
                  </Furigana>
                </span>{" "}
                - Japanese or Korean
              </li>
              <li>
                Here, <span class="font-japanese text-xl">か</span> serves the
                exact same function as "or" in English.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">
              Expressing Uncertainty or Surprise:
            </h4>
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese text-xl">そうですか</span> - Is that
                so?
              </li>
              <li>
                Here, <span class="font-japanese text-xl">か</span> can indicate
                mild surprise or uncertainty, often translating to{" "}
                <span class="font-semibold italic">Oh, really?</span> in
                English.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">Polite Confirmations:</h4>
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese text-xl">そうですね。</span> - That's
                right.
              </li>
              <li>
                <span class="font-japanese text-xl">そうですか。</span> - I see.
                / Is that so?
              </li>
              <li>
                The <span class="font-japanese text-xl">か</span> at the end
                shows that the speaker is politely confirming information, often
                used in conversations to show attentiveness.
              </li>
            </ul>
          </li>
        </ul>
        <h2 class="my-3 text-center text-2xl font-bold">Intonation</h2>
        <p>
          In Japanese, intonation plays a significant role in conveying meaning,
          especially when using the <span class="font-japanese">か</span>{" "}
          particle. The intonation can rise or fall depending on the context and
          the speaker's intention.
        </p>
        <h3 class="text-center text-xl font-semibold">
          Rising Intonation (<span class="text-yellow-400">↑</span>)
        </h3>
        <p>
          Rising intonation is often used in direct questions, especially when
          seeking information or confirmation. We often do the same in English.
        </p>
        <ul>
          <li>
            <h4 class="mb-1 mt-6 font-bold">Example 1:</h4>
            <ul class="ml-6 list-disc">
              <li>
                <strong>Question:</strong>{" "}
                <span class="font-japanese text-xl">いまなんじですか。</span> -
                What time is it now? (seeking information)
              </li>
              <li>
                <strong>Response:</strong>{" "}
                <span class="font-japanese text-xl">くじです。</span> - It is
                nine o'clock.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">Example 2:</h4>
            <ul class="ml-6 list-disc">
              <li>
                <strong>Question:</strong>{" "}
                <span class="font-japanese text-xl">
                  さとうさんはがくせいですか。
                </span>{" "}
                - Are you{" "}
                <span class="text-base text-muted-foreground">(Satou)</span> a
                student? (seeking confirmation)
              </li>
              <li>
                <strong>Response:</strong>{" "}
                <span class="font-japanese text-xl">はい、がくせいです。</span>{" "}
                - Yes, I am a student.
              </li>
            </ul>
          </li>
        </ul>
        <h3 class="text-center text-xl font-semibold">
          Falling Intonation (<span class="text-indigo-400">↓</span>)
        </h3>
        <p>
          Falling intonation is often used to indicate understanding,
          realization, or mild surprise. It can also be used to politely confirm
          information that the speaker has just learned.
        </p>
        <ul>
          <li>
            <h4 class="mb-1 mt-6 font-bold">Example 1:</h4>
            <ul class="ml-6 list-disc">
              <li>
                <strong>Statement:</strong>{" "}
                <span class="font-japanese text-xl">
                  あのう、いまなんじですか。
                </span>{" "}
                - Excuse me, what time is it now?
              </li>
              <li>
                <strong>Response:</strong>{" "}
                <span class="font-japanese text-xl">いま、１０じです。</span>-{" "}
                Right now it's ten o'clock.
              </li>
              <li>
                <strong>Confirmation:</strong>{" "}
                <span class="font-japanese text-xl">
                  あ、１０じですか。ありがとうございます。
                </span>{" "}
                - Oh, it's ten o'clock. Thank you.
              </li>
            </ul>
          </li>
          <li>
            <h4 class="mb-1 mt-6 font-bold">Example 2:</h4>
            <ul class="ml-6 list-disc">
              <li>
                <strong>Statement:</strong>{" "}
                <span class="font-japanese text-xl">
                  はじめまして。A です。
                </span>{" "}
                - Nice to meet you. I'm A.
              </li>
              <li>
                <strong>Confirmation:</strong>{" "}
                <span class="font-japanese text-xl">
                  ああ、A さんですか。はじめまして。B です。
                </span>{" "}
                - Oh, you are A? Nice to meet you. I'm B.
              </li>
            </ul>
          </li>
        </ul>
        {/* <h2 class="my-3 text-center text-2xl font-bold">Practice</h2>
        <p>
          Convert the following statements into questions by adding the{" "}
          <span class="font-japanese">か</span> particle:
        </p>
        <ul>
          <li>
            <span class="font-japanese">かれはにほんじんです。</span> - "He
            is Japanese."
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese">かれはにほんじんですか。</span>{" "}
                - "Is he Japanese?"
              </li>
            </ul>
          </li>
          <li>
            <span class="font-japanese">ねこがすきです。</span> - "I like
            cats."
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese">ねこがすきですか。</span> - "Do
                you like cats?"
              </li>
            </ul>
          </li>
          <li>
            <span class="font-japanese">さとうさんはがくせいです。</span> -
            "Satou is a student."
            <ul class="ml-6 list-disc">
              <li>
                <span class="font-japanese">
                  さとうさんはがくせいですか。
                </span>{" "}
                - "Is Satou a student?"
              </li>
            </ul>
          </li>
        </ul> */}
        <h2 class="pt-6 text-center text-2xl font-bold">Conclusion</h2>
        <p>
          Mastering the use of the <span class="font-japanese">か</span>{" "}
          particle is essential for forming questions in Japanese. Understanding
          its use in statements and polite confirmations will enhance your
          ability to interact naturally in Japanese. It might seem a bit weird
          at first, but it will soon become second nature.
        </p>
      </div>
    </ContentBox>
  )
}
