import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

export default function Lesson4() {
  return (
    <Dialog variant={"reading"}>
      <div className="pb-16">
        <h2 className="pt-28 text-4xl font-medium leading-[3.25rem] text-center px-20">
          <span className="text-5xl font-medium">
            Alright, language warriors!
          </span>{" "}
          Just when you{" "}
          <span className="text-[2.5rem]">
            <u>
              <em>thought</em>
            </u>
          </span>{" "}
          you had Japanese phonetics in your pocket, it's time to{" "}
          <span className="text-[2.5rem]">
            <em>twist</em>
          </span>{" "}
          your brain a bit more. Enter the{" "}
          <span className="text-5xl font-bold">fantastical</span> world of{" "}
          <span className="text-[3.5rem] font-bold">
            <u>Contracted Sounds</u>
          </span>{" "}
          - the linguistic equivalent of a<em>*surprise*</em> party in the
          middle of a sentence!
        </h2>
        <div className="px-32 text-xl leading-8 [&>*]:py-6">
          <h3 className="font-semibold !pb-4">
            Contracted Sounds (拗音, Yōon): The Team-Up in Japanese:
          </h3>
          <div className="flex flex-row justify-center items-center !pb-0">
            <div
              className="pr-6 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <em>
                <p>C</p>
                <p>o</p>
                <p>n</p>
                <p>t</p>
                <p>r</p>
                <p>a</p>
                <p>c</p>
                <p>t</p>
                <p>e</p>
                <p>d</p>
                <br />
                <p>S</p>
                <p>o</p>
                <p>u</p>
                <p>n</p>
                <p>d</p>
                <p>s</p>
              </em>
            </div>
            <div>
              <p>
                Picture this: some of the Hiragana characters decide to team up,
                and work together. It's a bit like a tag team in a friendly
                game, where two players join forces to win the game.
              </p>
              <br />
              <p>
                Take "じゃ (ja)" for example. Here, "じ (ji)" teams up with a
                tiny version of "や (ya)" to create a sound that's not just
                "jiya" but a smoother, more compact "ja". You'll see this
                dynamic duo popping up in words like "じゃあね (jaane - see
                you)".
              </p>
              <br />
              <p>
                You'll most often see three players in this game who are smart
                enough to work together, the small "ゃ", "ゅ", and "ょ", but
                you'll see others join in the fun too. Why are they small?
                Probably because they were willing to reduce their egos for a
                greater cause. Truly, they're like the special agents of the
                Hiragana world, teaming up with others to create these smooth,
                blended sounds.
              </p>
            </div>
          </div>
          <h3 className="mt-16 !pb-0 text-4xl font-bold text-center">
            Why These Sounds?
          </h3>
          <p className="">
            Japanese is <span className="text-2xl font-medium">all about</span>{" "}
            efficiency and flow. These contracted sounds help make the language
            more fluid and natural-sounding.
          </p>
          <p>
            <span className="text-2xl font-bold">Practice Makes Perfect:</span>{" "}
            These sounds might seem a bit awkward at first, like learning a new
            dance move. But once you get the rhythm, you'll be flowing through
            sentences with a newfound <strong>groove</strong>. They add a{" "}
            <em>smoothness</em> and
            <em> efficiency</em> to Japanese, like a sleek high-speed train{" "}
            <u>zipping</u> through the countryside.
          </p>
          <p>
            <span className="text-[1.325rem] font-medium">
              <u>
                <em>Embrace</em>
              </u>
            </span>{" "}
            these contracted sounds, play around with them, and watch how they
            add a new rhythm and flow to your speech.{" "}
            <span className="font-medium">Remember</span>, every new sound is a
            step closer to fluency, so enjoy these linguistic{" "}
            <span className="text-2xl font-medium">leaps</span> and{" "}
            <span className="text-2xl font-medium">bounds!</span> 🌟
          </p>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/hiragana-quiz-3">
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
