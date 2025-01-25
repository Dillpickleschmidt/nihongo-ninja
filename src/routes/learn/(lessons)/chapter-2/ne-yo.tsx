import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/kikusasaizu-2-2"
    >
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Understanding the Particles{" "}
        <span class="font-japanese text-yellow-400">ね</span> and{" "}
        <span class="font-japanese text-green-600">よ</span>
      </h1>
      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          In Japanese, the particles{" "}
          <span class="font-japanese text-xl font-semibold text-yellow-400">
            ね
          </span>{" "}
          (ne) and{" "}
          <span class="font-japanese text-xl font-semibold text-green-600">
            よ
          </span>{" "}
          (yo) are essential for conveying nuance and context in conversations.
          These particles help express shared experiences, agreement, or new
          information.
        </p>

        <div>
          <YouTubeVideo
            videoId="Snk9eCUqJSo"
            title="Using Ending Particle ね in Japanese"
            credit="Kaname Naito"
          />
        </div>
        <div>
          <YouTubeVideo
            videoId="T1FfatXVH_U"
            title="How to Use いい"
            credit="Kaname Naito"
            startTime={220}
            timestamps={[
              { label: "using いい", time: 0 },
              { label: "よ・ね particles", time: 220 },
            ]}
          />
        </div>

        <h3 class="text-2xl font-bold">
          The Particle <span class="font-japanese text-yellow-400">ね</span>{" "}
          (ne)
        </h3>
        <p>
          The particle{" "}
          <span class="font-japanese text-xl font-semibold text-yellow-400">
            ね
          </span>{" "}
          is used to confirm shared knowledge, seek agreement, or express
          empathy. It's similar to saying{" "}
          <span class="font-black">isn't it?</span> or{" "}
          <span class="font-black">right?</span> in English.
        </p>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span class="font-bold">Confirming Shared Experience:</span>
            <p class="ml-4">
              Use{" "}
              <span class="font-japanese text-xl font-semibold text-yellow-400">
                ね
              </span>{" "}
              when both you and the listener can perceive the same thing.
            </p>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  このラーメンはおいしいですね。
                  <span class="font-inter">{"->"}</span> This ramen is tasty,
                  isn't it?
                </span>
                <p class="text-sm text-muted-foreground">
                  *Context: You and your friend are both eating the ramen and
                  can share the experience of its taste.
                </p>
              </li>
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  あの
                  <Romaji romaji={<span class="text-sm">movie</span>}>
                    映画
                  </Romaji>
                  は
                  <Romaji romaji={<span class="text-sm">was interesting</span>}>
                    面白かった
                  </Romaji>
                  ね。 (Ano eiga wa omoshirokatta ne.) - That movie was
                  interesting, wasn't it?
                </span>
                <p class="text-sm text-muted-foreground">
                  *Context: You and your friend watched the movie together and
                  are reflecting on the shared experience.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <span class="font-bold">Discussing the Present Situation:</span>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  <Romaji romaji={<span class="text-sm">today</span>}>
                    今日
                  </Romaji>
                  はいい
                  <span class="text-center">
                    <Romaji romaji={<span class="text-sm">weather</span>}>
                      天気
                    </Romaji>
                  </span>
                  ですね。 (Kyō wa ii tenki desu ne.) - It's nice weather today,
                  isn't it?
                </span>
                <p class="text-sm text-muted-foreground">
                  *Context: Both you and the listener can perceive the current
                  weather.
                </p>
              </li>
            </ul>
          </li>
        </ol>

        <h3 class="text-2xl font-bold">
          The Particle <span class="font-japanese text-green-600">よ</span> (yo)
        </h3>
        <p>
          The particle{" "}
          <span class="font-japanese text-xl font-semibold text-green-600">
            よ
          </span>{" "}
          is used to provide new information, assert something with confidence,
          or emphasize a point. It's like saying{" "}
          <span class="font-black">you know</span> or{" "}
          <span class="font-black">I tell you</span> in English.
        </p>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span class="font-bold">Providing New Information:</span>
            <p class="ml-4">
              Use{" "}
              <span class="font-japanese text-xl font-semibold text-green-600">
                よ
              </span>{" "}
              when informing the listener of something they might not know.
            </p>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  これは私の本ですよ。 (Kore wa watashi no hon desu yo.) - This
                  is my book, you know.
                </span>
                <p class="text-sm text-muted-foreground">
                  *Context: You see someone looking at a book and want to assert
                  that it belongs to you because they might not be aware.
                </p>
              </li>
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  その
                  <Romaji romaji={<span class="text-sm">movie</span>}>
                    映画
                  </Romaji>
                  は
                  <span class="text-center">
                    <Romaji romaji={<span class="text-sm">interesting</span>}>
                      面白い
                    </Romaji>
                  </span>
                  ですよ。 (Sono eiga wa omoshiroi desu yo.) - That movie is
                  interesting, you know.
                </span>
                <p class="text-sm text-muted-foreground">
                  *Context: You are telling someone about a movie they haven't
                  seen yet, emphasizing its interesting nature.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <span class="font-bold">Emphasizing a Point:</span>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  いいえ、それは違いますよ。 (Iie, sore wa chigaimasu yo.) - No,
                  that's not correct.
                </span>
                <p class="text-sm text-muted-foreground">
                  *Context: You are correcting someone who has misunderstood or
                  is mistaken about something, emphasizing that their statement
                  is incorrect.
                </p>
              </li>
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  このレストランは本当にいいですよ。 (Kono resutoran wa hontō ni
                  ii desu yo.) - This restaurant is really good, you know.
                </span>
                <p class="text-sm text-muted-foreground">
                  You are recommending a restaurant to someone who hasn't been
                  there before, emphasizing its quality and trying to convince
                  them to try it.
                </p>
              </li>
            </ul>
          </li>
        </ol>

        <h3 class="text-2xl font-bold">
          Combining <span class="font-japanese text-yellow-400">ね</span> and{" "}
          <span class="font-japanese text-green-600">よ</span>:{" "}
          <span class="font-japanese text-orange-500">よね</span> (yone)
        </h3>
        <p>
          When you want to confirm information and seek agreement
          simultaneously, you can combine{" "}
          <span class="font-japanese text-xl font-semibold text-yellow-400">
            ね
          </span>{" "}
          and{" "}
          <span class="font-japanese text-xl font-semibold text-green-600">
            よ
          </span>{" "}
          to form{" "}
          <span class="font-japanese text-xl font-semibold text-orange-500">
            よね
          </span>{" "}
          (yone). This combination is used to assert something you believe to be
          true and seek the listener's agreement or confirmation.
        </p>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span class="font-bold">Confirming and Seeking Agreement:</span>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  田中さんは
                  <Furigana furigana={<span class="text-sm">がくせい</span>}>
                    学生
                  </Furigana>
                  ですよね。
                  <span class="font-inter">{"->"}</span> Tanaka is a student,
                  right?
                </span>
                <p class="text-sm text-muted-foreground">
                  You are confirming with your friend, who you believe knows
                  Tanaka, that Tanaka is indeed a student. You are seeking their
                  agreement and confirmation of this shared knowledge.
                </p>
              </li>
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  あの
                  <Romaji romaji={<span class="text-sm">movie</span>}>
                    映画
                  </Romaji>
                  は
                  <Romaji romaji={<span class="text-sm">was interesting</span>}>
                    面白かった
                  </Romaji>
                  ですよね。 (Ano eiga wa omoshirokatta desu yone.) - That movie
                  was interesting, wasn't it?
                </span>
                <p class="text-sm text-muted-foreground">
                  You and your friend watched the movie together, and you are
                  confirming with them that they also found it interesting,
                  seeking their agreement on this shared experience.
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *There may be more than 1 correct answer*
        </p>
        <p>
          Someone points at a huge library building in the distance, asking{" "}
          <span class="whitespace-nowrap font-japanese text-xl">
            あれは
            <Furigana furigana={<span class="text-sm">なん</span>}>何</Furigana>
            ですか。
          </span>
        </p>
        <p class="text-base text-muted-foreground">
          *<span class="font-japanese">ビル</span> {"->"} building
        </p>
        <p class="!mt-1 text-base text-muted-foreground">
          *<span class="font-japanese">図書館</span> (としょかん) {"->"} library
        </p>
        <SelectText
          answer={["あのビルは図書館ですよ。", "あのビルは図書館です。"]}
          a="あのビルは図書館ですよ。"
          b="あのビルは図書館です。"
          c="あのビルは図書館ですね。"
          d="あのビルは図書館ですよね。"
          class="text-xl"
        />
        <p>
          You're hiking up a mountain with a friend, but it's taking longer than
          you expected.
        </p>
        <p class="text-base text-muted-foreground">
          *<span class="font-japanese">山</span> (やま) {"->"} mountain
        </p>
        <p class="!mt-1 text-base text-muted-foreground">
          *<span class="font-japanese">高い</span> (たかい) {"->"} tall
        </p>
        <SelectText
          answer={["この山は高いですね。", "この山は高いですよね。"]}
          a="この山は高いですよ。"
          b="この山は高いですね。"
          c="この山は高いですよね。"
          class="text-xl"
        />
        <p>
          Your friend is unaware of a great café. How would you say "This café
          is really good, you know."
        </p>
        <p class="text-base text-muted-foreground">
          *<span class="font-japanese">本当に</span> (ほんとに) {"->"} really
        </p>
        <p class="!mt-1 text-base text-muted-foreground">
          *<span class="font-japanese">いい</span> {"->"} good
        </p>
        <SelectText
          answer="このカフェは本当にいいですよ。"
          a="このカフェは本当にいいですね。"
          b="このカフェは本当にいいですよ。"
          c="このカフェは本当にいいですよね。"
          class="text-xl"
        />
        <p>
          You and your friend just recieved two メニュー at a new レストラン
          (restaurant). You take a look and immediately realize that
          everything's expensive. You'd say to your friend:
        </p>
        <p class="text-base text-muted-foreground">
          *<span class="font-japanese">高い</span> (たかい) {"->"} expensive
        </p>
        <SelectText
          answer={[
            "このレストランは高いですね。",
            "このレストランは高いですよね。",
          ]}
          a="このレストランは高いですよ。"
          b="このレストランは高いですね。"
          c="このレストランは高いですよね。"
          class="text-xl"
        />
      </div>
    </ContentBox>
  )
}
