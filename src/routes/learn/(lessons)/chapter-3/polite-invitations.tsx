import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/CustomTextArea"
import Romaji from "@/components/text/Romaji"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/next-lesson"
    >
      <h1 class="px-6 pb-6 pt-28 text-center text-4xl font-semibold sm:px-12 lg:px-28">
        Polite Invitations with{" "}
        <span class="font-japanese text-teal-400">ませんか</span>
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          In Japanese, one common way to make polite invitations is by using the{" "}
          <span class="font-japanese text-xl">ませんか</span> form. This form is
          polite and sounds softer than directly asking someone to do something.
        </p>

        <h2 class="text-2xl font-bold">Structure</h2>
        <h3 class="!mt-3 text-center text-2xl font-medium">
          Verb (negative <span class="font-japanese">ます</span> form) +{" "}
          <span class="font-japanese">か</span>
        </h3>

        <h3 class="text-xl font-bold">Example</h3>
        <p class="!mt-3">
          <span class="font-japanese text-xl">
            映画を見<span class="text-teal-400">ませんか</span>。
          </span>
          {"->"} Would you like to watch a movie?
        </p>

        <p>
          This form essentially means "Won't you...?" or "Why don't we...?" in
          English. It's a polite way to suggest doing something together.
        </p>

        <h3 class="text-xl font-bold">More examples</h3>
        <ul class="!mt-3 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">
              <Romaji romaji="together">
                <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                  一緒
                </Furigana>
                に
              </Romaji>
              食べ
              <span class="text-teal-400">ませんか</span>。
            </span>
            {"->"} Would you like to eat together?
          </li>
          <li>
            <span class="font-japanese text-xl">
              デートに行き<span class="text-teal-400">ませんか</span>。
            </span>
            {"->"} Would you like to go on a date?
          </li>
        </ul>

        <h2 class="!mt-9 text-2xl font-bold">Accepting an Invitation</h2>
        <p class="!mt-4">
          To accept an invitation, you can use{" "}
          <span class="font-japanese text-xl">いいです</span> with particles
          like <span class="font-japanese text-xl">ね</span> or{" "}
          <span class="font-japanese text-xl">よ</span> for emphasis:
        </p>

        <div class="ml-4 mt-2">
          <p class="font-japanese text-xl">
            A: 映画を見<span class="text-teal-400">ませんか</span>。
          </p>
          <p class="font-japanese text-xl">
            B: はい、いいです<span class="text-yellow-400">ね</span>。 /{" "}
            いいです<span class="text-green-600">よ</span>。
          </p>
        </div>

        <p>
          Literally, the adjective{" "}
          <span class="font-japanese text-xl font-medium">いい</span> means{" "}
          <strong>good</strong> or <strong>fine</strong>. It's an extremely
          versatile word in Japanese and can be used in many contexts.
        </p>
        <p>
          When used to accept an invitation, it's a polite way to say "That
          sounds good" or "I'm fine with that."
        </p>

        <p class="text-center italic">
          Here's a more thorough explanation of using{" "}
          <span class="font-japanese not-italic">いいですよ</span>.
        </p>
        <YouTubeVideo
          videoId="5s04gJYRPM4"
          title="How to Use いいですよ"
          credit="Kaname Naito"
        />

        <p>
          If you want to go into <em>more</em> depth learning about{" "}
          <span class="font-japanese text-xl font-medium">いい</span>,{" "}
          <span class="text-muted-foreground">(and not look like a fool)</span>{" "}
          Kaname's got you covered yet again. :)
        </p>
        <YouTubeVideo
          videoId="T1FfatXVH_U"
          title="How to Use いい"
          credit="Kaname Naito"
        />

        <p class="text-base italic text-muted-foreground">
          *You may occasionally see this word in some form of{" "}
          <span class="font-japanese text-lg not-italic">
            <Furigana furigana={<span class="text-sm">よ</span>}>良</Furigana>い
          </span>
          . <span class="font-japanese text-lg not-italic">いい</span> is the
          colloquial form of{" "}
          <span class="font-japanese text-lg not-italic">良い</span>, and you'll
          never see <span class="font-japanese text-lg not-italic">良い</span>{" "}
          used by itself in everyday conversation or even writing. However,
          whenever this adjective is conjugated (e.g.{" "}
          <span class="font-japanese text-lg not-italic">よかった</span>), it{" "}
          <strong>always</strong> uses the{" "}
          <span class="font-japanese text-lg not-italic">よい</span> form as its
          stem. More on this in Chapter 5.
        </p>

        <h2 class="!mt-9 text-2xl font-bold">Declining an Invitation</h2>
        <p class="!mt-4">
          In Japanese culture, directly refusing an invitation can be seen as
          impolite. Instead, people often use indirect methods to decline. To
          politely decline an invitation, we'll need to learn a couple of new
          vocabulary words. Two of the most commonly used are{" "}
          <span class="font-japanese text-xl">ちょっと</span> and{" "}
          <span class="font-japanese text-xl">大丈夫</span>.
        </p>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">ちょっと</span> -{" "}
          <span class="font-honk text-4xl">Chotto</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            <strong>Literal meaning:</strong> "A little" or "slightly"
          </li>
          <li>
            <strong>Usage 1:</strong> Describing a small amount or short
            duration
          </li>
          <li>
            <strong>Usage 2:</strong> Softener, indirect refusal
          </li>
          <li>
            <strong>Usage 3:</strong> Getting someone's attention politely
          </li>
          <li>
            <strong>Context:</strong> Versatile word used in various situations
          </li>
        </ul>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 1:</em>{" "}
            </span>
            Describing an amount
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You (the customer), shopkeeper
          </h4>
          <p class="mt-3">
            You're at a local market, eyeing some delicious-looking
            strawberries. The shopkeeper notices your interest and asks if you'd
            like to buy some. You reply, "
            <span class="font-japanese">
              はい、<span class="text-orange-500">ちょっと</span>
              だけください。
            </span>
            " (Yes, just a little bit, please.) The shopkeeper nods and prepares
            a small package for you.
          </p>
        </div>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 2:</em>{" "}
            </span>
            Declining an invitation
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You & Yuki (your friend)
          </h4>
          <p class="mt-3">
            After class, Yuki excitedly asks, "
            <span class="font-japanese">
              映画を見<span class="text-teal-400">ませんか</span>
            </span>
            。" (Want to watch a movie?) You have a big test tomorrow but don't
            want to hurt Yuki's feelings. You respond, "
            <span class="font-japanese">
              あ、今日は<span class="text-orange-500">ちょっと</span>...
            </span>
            " (Ah, today is a bit...). Yuki understands your subtle refusal
            without you having to explain further.
          </p>
          <p class="!mt-2 text-base italic text-muted-foreground">
            Note: In Japanese, it's often acceptable to leave the rest of the
            message inferred. For example, you might just say "
            <span class="font-japanese not-italic">ちょっと...</span>" and trail
            off, leaving the refusal implied rather than stated outright.
          </p>
        </div>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 3:</em>{" "}
            </span>
            Getting attention
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You & stranger on the street
          </h4>
          <p class="mt-3">
            You're lost in a new city and need directions. You spot a
            friendly-looking person and approach them saying, "
            <span class="font-japanese">
              すみません、<span class="text-orange-500">ちょっと</span>
              いいですか。
            </span>
            " (Excuse me, do you have a moment?) The person stops, ready to help
            you.
          </p>
        </div>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 4:</em>{" "}
            </span>
            Wait a Minute{" "}
            <span class="text-lg text-muted-foreground">
              (Additional usage)
            </span>
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You & your boss
          </h4>
          <div class="ml-4 mt-3">
            <p class="font-japanese text-xl">
              <span class="text-lg font-bold">Boss:</span>{" "}
              <Furigana furigana={<span class="text-sm">しごと</span>}>
                仕事
              </Furigana>
              、
              <Furigana furigana={<span class="text-sm">いのちが</span>}>
                命賭
              </Furigana>
              けでやってくれ。
            </p>
            <p>(I need you to do this job like your life depends on it.)</p>
            <p class="font-japanese text-xl">
              <span class="text-lg font-bold">You:</span> はい、分かりました。
              <span class="text-orange-500">ちょっと</span>まって。
            </p>
            <p>(Yes, I understand. Wait a moment.)</p>
            <p class="font-japanese text-xl">
              <span class="text-lg font-bold">Boss:</span> 何だ？
            </p>
            <p>(What is it?)</p>
            <p class="font-japanese text-xl">
              <span class="text-lg font-bold">You:</span> じゃあ、
              <Furigana furigana={<span class="text-sm">ゆいしょ</span>}>
                遺書
              </Furigana>
              を
              <Furigana furigana={<span class="text-sm">か</span>}>書</Furigana>
              いてきます。
            </p>
            <p>(I'll go write my will then.)</p>
          </div>
        </div>

        <h3 class="text-3xl font-medium">
          <span class="font-japanese">
            <Furigana furigana={<span class="text-sm">だいじょうぶ</span>}>
              大丈夫
            </Furigana>
          </span>{" "}
          - <span class="font-honk text-4xl">Daijōbu</span>
        </h3>
        <ul class="list-inside list-disc space-y-2">
          <li>
            <strong>Literal meaning:</strong> "All right" or "OK"
          </li>
          <li>
            <strong>Usage 1:</strong> Asking if someone is okay or if something
            is acceptable
          </li>
          <li>
            <strong>Usage 2:</strong> Confirming that something is fine or not a
            problem
          </li>
          <li>
            <strong>Usage 3:</strong> Polite refusal
          </li>
          <li>
            <strong>Context:</strong> Used in various situations to express or
            inquire about well-being or acceptability
          </li>
        </ul>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 1:</em>{" "}
            </span>
            Checking on someone
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You & an elderly person who just tripped
          </h4>
          <p class="mt-3">
            You're walking down the street when you see an elderly person
            stumble. You rush over and ask, "
            <span class="font-japanese">
              <span class="text-green-500">大丈夫</span>ですか。
            </span>
            " (Are you okay?) The person smiles, gets up, and assures you
            they're fine.
          </p>
        </div>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 2:</em>{" "}
            </span>
            Confirming acceptability
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You & the waiter at a restaurant
          </h4>
          <p class="mt-3">
            You're at a restaurant and the waiter informs you that your first
            choice isn't available. He suggests an alternative dish. You
            consider for a moment and then say, "
            <span class="font-japanese">
              はい、それで<span class="text-green-500">大丈夫</span>です。
            </span>
            " (Yes, that's fine.)
          </p>
        </div>

        <div>
          <h4 class="text-xl">
            <span class="text-2xl font-black">
              <em>Story 3:</em>{" "}
            </span>
            Declining an offer
          </h4>
          <h4 class="text-xl">
            <span class="mr-2 text-2xl font-black">
              <em>Characters:</em>
            </span>
            You & Hiroshi (your colleague)
          </h4>
          <p class="mt-3">
            It's lunchtime at your new job. Hiroshi invites you to join the team
            for lunch, saying "
            <span class="font-japanese">
              一緒に食べ<span class="text-teal-400">ませんか</span>。
            </span>
            " (Want to eat together?) You've already brought your lunch and
            prefer to eat alone today. You smile and say, "
            <span class="font-japanese">
              ありがとうございます。でも、
              <span class="text-green-500">大丈夫</span>です。
            </span>
            " (Thank you, but I'm fine.)
          </p>
        </div>

        <p class="!mt-12">
          <strong>
            Both <span class="font-japanese not-italic">ちょっと</span> and{" "}
            <span class="font-japanese not-italic">大丈夫</span> are incredibly
            versatile words in Japanese.
          </strong>{" "}
          While they're useful for politely declining invitations, you'll hear
          them used in many other contexts as well. Keep consuming Japanese
          content and you'll naturally become more comfortable with their
          nuances just from listening.
        </p>

        {/* <h2 class="text-2xl font-bold">Additional Note</h2>
        <p>
          While <span class="font-japanese text-xl">ませんか</span> is primarily
          used for invitations, it can occasionally be used to confirm a
          negative statement. This usage is less common, but it's good to be
          aware of it:
        </p>

        <div class="ml-4 mt-2">
          <p>
            <strong>A: </strong>
            <span class="font-japanese text-xl">
              鈴木さんは
              <Romaji romaji="never">
                <Furigana furigana={<span class="text-sm">ぜんぜん</span>}>
                  全然
                </Furigana>
              </Romaji>
              勉強しませんよ。
            </span>
            {"->"} Suzuki doesn't study at all.
          </p>
          <p>
            <strong>B: </strong>
            <span class="font-japanese text-xl">
              そうですか。全然し
              <span class="text-teal-400">ませんか</span>。
            </span>
            {"->"} Is that so? He doesn't study at all?
          </p>
        </div> */}

        <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <ol class="list-inside list-decimal space-y-4">
          <li>
            <strong>Create an invitation:</strong>
            <p class="mt-1">
              Invite your classmate,{" "}
              <span class="font-japanese">
                <Furigana furigana={<span class="text-sm">さとう</span>}>
                  佐藤
                </Furigana>
                さん
              </span>
              , to play tennis tonight.
            </p>
            <div class="mt-2">
              <WanakanaWrapper>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
          </li>
          <li>
            <strong>Respond to an invitation:</strong>
            <p class="mt-2">
              Your classmate has just invited you for lunch tomorrow. How would
              you respond?
            </p>
            <ol class="mt-2 list-inside list-[lower-alpha] space-y-3">
              <li>
                Accepting:
                <div class="mt-2">
                  <WanakanaWrapper>
                    <CustomTextArea
                      spacing={14}
                      class="h-28 w-full resize-none font-japanese text-xl"
                    />
                  </WanakanaWrapper>
                </div>
              </li>
              <li>
                Declining politely and suggesting an alternative:
                <div class="mt-2">
                  <WanakanaWrapper>
                    <CustomTextArea
                      spacing={14}
                      class="h-28 w-full resize-none font-japanese text-xl"
                    />
                  </WanakanaWrapper>
                </div>
              </li>
            </ol>
          </li>
        </ol>

        <p class="italic text-muted-foreground">
          Remember, when using{" "}
          <span class="font-japanese not-italic">ませんか</span> for
          invitations, it's polite and leaves room for the other person to
          decline if they wish. It's a great way to suggest activities without
          being too pushy!
        </p>
      </div>
    </ContentBox>
  )
}
