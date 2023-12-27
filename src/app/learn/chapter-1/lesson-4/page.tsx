import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

export default function Lesson4() {
  return (
    <Dialog variant={"reading"}>
      <div className="h-full pb-16 overflow-y-auto overscroll-y-contain no-scrollbar">
        <h1>Contracted Sounds</h1>
        <h2>
          Alright, language warriors! Just when you thought you had Japanese
          phonetics in your pocket, it's time to twist your brain a bit more.
          Enter the fantastical world of Contracted Sounds - the linguistic
          equivalent of a surprise party in the middle of a sentence!
        </h2>
        <h3>Contracted Sounds (拗音, Yōon): The Team-Up in Japanese:</h3>
        <p>
          Picture this: some of the Hiragana characters decide to team up, and
          work together. It's a bit like a tag team in a friendly game, where
          two players join forces to win the game.
        </p>
        <p>
          Take "じゃ (ja)" for example. Here, "じ (ji)" teams up with a tiny
          version of "や (ya)" to create a sound that's not just "jiya" but a
          smoother, more compact "ja". You'll see this dynamic duo popping up in
          words like "じゃあね (jaane - see you)".
        </p>
        <p>
          You'll most often see three players in this game who are smart enough
          to work together, the small "ゃ", "ゅ", and "ょ", but you'll see
          others join in the fun too. Why are they small? Probably because they
          were willing to reduce their egos for a greater cause. Truly, they're
          like the special agents of the Hiragana world, teaming up with others
          to create these smooth, blended sounds.
        </p>
        <h3>Why These Sounds?:</h3>
        <p>
          Japanese is all about efficiency and flow. These contracted sounds
          help make the language more fluid and natural-sounding.
        </p>
        <h3>Practice Makes Perfect:</h3>
        <p>
          These sounds might seem a bit awkward at first, like learning a new
          dance move. But once you get the rhythm, you'll be flowing through
          sentences with a newfound groove. They add a smoothness and efficiency
          to Japanese, like a sleek high-speed train zipping through the
          countryside.
        </p>
        <p>
          Embrace these contracted sounds, play around with them, and watch how
          they add a new rhythm and flow to your speech. Remember, every new
          sound is a step closer to fluency, so enjoy these linguistic leaps and
          bounds! 🌟🌿📚
        </p>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/hiragana-quiz-3">
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
