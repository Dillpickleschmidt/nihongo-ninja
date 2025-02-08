import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-1/useful-expressions">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Saying "You" in Japanese
      </h1>
      <div class="space-y-3 px-8 pb-32 md:px-24">
        <p>
          In Japanese, addressing someone as "you" is quite nuanced and{" "}
          <span class="font-bold">often avoided</span>. Unlike English, where
          "you" is universally applicable, using direct pronouns in Japanese can
          come across as <span class="font-bold">rude or overly direct</span>.
          Instead, Japanese speakers prefer using names and titles, which convey
          respect.
        </p>
        <div class="!mt-12">
          <YouTubeVideo
            videoId="8KTvBdGt_vg"
            title="Saying 'You' in Japanese by Kaname Naito, Nov 12 2023"
            credit="Kaname Naito"
          />
        </div>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          Using Names and Titles Instead of "You"
        </h2>
        <p>
          Japanese speakers frequently use the person's name with an appropriate
          honorific or title, especially in formal or polite settings. This
          practice is more respectful and avoids the directness that can
          sometimes be considered impolite in Japanese culture.
        </p>
        <div></div>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          Second-Person Pronouns You Might've Heard
        </h2>
        <p>
          <em>
            The following second-person pronouns should not be used unless
            you've reached a near-native level of Japanese speaking ability and
            can fully grasp the situations in which they would be appropriate.
          </em>
        </p>
        <h3 class="pt-3 font-bold">
          <span class="font-japanese text-xl">あなた</span> (Anata)
        </h3>
        <div class="ml-4">
          <li>
            <span class="font-bold">Usage: </span>General term for "you," that
            is can often sound rude except in very specific situations.
          </li>
          <li>
            <span class="font-bold">Context: </span>While okay in some contexts,{" "}
            <span class="font-japanese text-xl">あなた</span> can also sound
            overly familiar or even rude if used too frequently or
            inappropriately, especially with strangers or superiors. By the time
            you learn someone's name, it's better to use that instead of{" "}
            <span class="font-japanese text-xl">あなた</span>.
          </li>
          <li>
            <span class="font-bold">Example Usage: </span>
            <span class="font-japanese text-xl">
              あなたは
              <Furigana furigana={<span class="text-sm">がくせい</span>}>
                学生
              </Furigana>
              ですか。
            </span>
            — Are you a student?
          </li>
        </div>
        <h3 class="pt-3 font-bold">
          <Furigana furigana={<span class="text-sm">きみ</span>}>君</Furigana>{" "}
          (Kimi)
        </h3>
        <div class="ml-4">
          <li>
            <span class="font-bold">Usage: </span>Informal term for "you," often
            used by men towards someone of lower status or age, or by women
            towards their children or close friends.
          </li>
          <li>
            <span class="font-bold">Context: </span>Can sound affectionate or
            condescending depending on the relationship and context. It's more
            common in casual settings and should be used with caution,
            especially with people you do not know well.
          </li>
          <li>
            <span class="font-bold">Example Usage: </span>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">きみ</span>}>
                君
              </Furigana>
              はどう
              <Furigana furigana={<span class="text-sm">おも</span>}>
                思
              </Furigana>
              う？
            </span>
            — What do you think?
          </li>
        </div>

        <div class="ml-4">
          <h3 class="pt-3 font-bold">
            <span class="font-japanese text-xl">
              お
              <Furigana furigana={<span class="text-sm">まえ</span>}>
                前
              </Furigana>
            </span>{" "}
            (Omae)
          </h3>
          <li>
            <span class="font-bold">Usage: </span>Very informal and direct term
            for "you," often used by men.
          </li>
          <li>
            <span class="font-bold">Context: </span>Can sound rude or aggressive
            if used improperly. Suitable for very close friends or in
            confrontational contexts. Using{" "}
            <span class="font-japanese text-xl">お前</span> with strangers or
            superiors can be very disrespectful and is generally not
            recommended.
          </li>
          <li>
            <span class="font-bold">Example Usage: </span>
            <span class="font-japanese text-xl">お前は何をしているんだ？</span>—
            What the hell are you doing?
          </li>
        </div>

        <h3 class="pt-3 font-bold">
          <span class="font-japanese text-xl">てめえ</span> (Temee)
        </h3>
        <div class="ml-4">
          <li>
            <span class="font-bold">Usage: </span>Extremely informal and
            confrontational term for "you," often used in anime or manga for
            dramatic effect.
          </li>
          <li>
            <span class="font-bold">Context: </span>Highly disrespectful and
            aggressive. It should be avoided in real-life conversations due to
            its offensive nature. Typically used in contexts where one is
            extremely angry or in a fight.
          </li>
          <li>
            <span class="font-bold">Example Usage: </span>
            <span class="font-japanese text-xl">
              てめえ、
              <Furigana furigana={<span class="text-sm">かくご</span>}>
                覚悟
              </Furigana>
              しろ！
            </span>
            — Get ready, you bastard!
          </li>
        </div>

        <div class="ml-4">
          <h3 class="pt-3 font-bold">
            <Furigana furigana={<span class="text-sm">きさま</span>}>
              貴様
            </Furigana>{" "}
            (Kisama)
          </h3>
          <li>
            <span class="font-bold">Usage: </span>Archaic and very rude term for
            "you."
          </li>
          <li>
            <span class="font-bold">Context: </span>Almost always insulting or
            confrontational. Not used in modern polite conversation. This term
            should be avoided entirely unless you are in a historical drama or
            intend to be extremely offensive.
          </li>
          <li>
            <span class="font-bold">Example Usage: </span>
            <span class="font-japanese">
              <Furigana furigana={<span class="text-sm">きさま</span>}>
                貴様
              </Furigana>
              、
              <Furigana furigana={<span class="text-sm">ゆる</span>}>
                許
              </Furigana>
              さん！
            </span>
            — I won't forgive you mother @$#%!
          </li>
        </div>
        <div class="ml-4">
          <h3 class="pt-3 font-bold">
            <span class="font-japanese text-xl">
              あなた
              <Furigana furigana={<span class="text-sm">さま</span>}>
                様
              </Furigana>
            </span>{" "}
            (Anata-sama)
          </h3>
          <li>
            <span class="font-bold">Usage: </span>Very respectful and formal
            term for "you."
          </li>
          <li>
            <span class="font-bold">Context: </span>Used in extremely polite or
            deferential contexts, such as customer service or formal addresses.
            It conveys high respect and is suitable for addressing customers or
            in very formal situations.
          </li>
          <li>
            <span class="font-bold">Example Usage: </span>
            <span class="font-japanese">
              あなた
              <Furigana furigana={<span class="text-sm">さま</span>}>
                様
              </Furigana>
              のお
              <Furigana furigana={<span class="text-sm">なまえ</span>}>
                名前
              </Furigana>
              は？
            </span>
            — What is your name, sir/madam?
          </li>
        </div>
        <h3 class="pt-6 text-center text-2xl font-bold">
          But what if you don't know their name?
        </h3>
        <div class="!mt-12">
          <YouTubeVideo
            videoId="t1iTJK31UYw"
            title="First-time Greeting in Japanese for Beginners by Kaname Naito, Jun 15 2024"
            startTime={256}
            credit="Kaname Naito"
            // glow
            timestamps={[
              { time: 0, label: "First-time Greetings" },
              { time: 256, label: "How to Ask for Someone's Name" },
            ]}
          />
        </div>
        <h4 class="pt-6 text-center font-japanese text-3xl font-medium">
          <Furigana furigana={<span>しつれい</span>}>失礼</Furigana>ですが、お
          <Furigana furigana={<span>なまえ</span>}>名前</Furigana>は？
        </h4>
        <li>
          <span class="font-japanese text-xl font-bold">
            <Furigana furigana={<span class="text-sm">しつれい</span>}>
              失礼
            </Furigana>
            です -{" "}
          </span>
          Literally—
          <em>"Rude"</em> - Means—<em>"Excuse me/Pardon me"</em>
        </li>
        <li>
          <span class="font-japanese text-xl font-bold">が、 - </span>"but"{" "}
          <span class="text-base text-muted-foreground">
            (more on this in later lessons)
          </span>
        </li>
        <li>
          <span class="font-japanese text-xl font-bold">お - </span>Polite
          prefix
        </li>
        <li>
          <span class="font-japanese text-xl font-bold">
            <Furigana furigana={<span class="text-sm">なまえ</span>}>
              名前
            </Furigana>
          </span>{" "}
          - "What is your name?"
        </li>
        <li>
          <span class="font-japanese text-xl font-bold">は？ - </span>
          topic particle
        </li>
      </div>
    </ContentBox>
  )
}
