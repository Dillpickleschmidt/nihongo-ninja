import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

export default function Lesson5() {
  return (
    <Dialog variant={"reading"}>
      <div className="h-full pb-16 overflow-y-auto overscroll-y-contain no-scrollbar">
        <h1>Double Consonants and Long Vowels</h1>
        <h2>You thought you were finally in the clear? No!</h2>
        <h2>
          Welcome, brave souls, to the adrenaline-pumping, edge-of-your-seat
          world of Double Consonants and Long Vowels in Japanese! Oh yes, it's
          the roller coaster ride of language learning you never knew you
          needed. Buckle up, because things are about to get wildly...
          linguistic.
        </h2>
        <h3>
          Double Consonants (促音, Sokuon): The Dramatic Pauses of Japanese:
        </h3>
        <p>
          Imagine you're in a suspenseful movie, and there's that momentary
          pause that makes your heart skip a beat. That's what double consonants
          are in the realm of Japanese. They're like tiny, suspenseful hiccups
          in words that add a whole layer of drama. (add some double consonant
          examples)
        </p>
        <p>
          Take "がっこう (gakkou - school)." Without the double 'k', it would
          just be a boring old "gakou." But with that extra 'k', suddenly, it's
          (gak-kou) a word with a bit more punch, a bit more "oomph." It's the
          linguistic version of adding an extra shot of espresso to your morning
          coffee - small but mighty!
        </p>
        <h3>Long Vowels: The Stretchy Elastic of Sounds:</h3>
        <p>
          Now, let's switch gears to long vowels. If double consonants are the
          dramatic pauses, long vowels are like stretching a rubber band,
          elongating the sound until you think it might just snap. But fear not,
          it won't!
        </p>
        <p>
          Consider "おばあさん (obaasan - grandmother)." If you don't stretch
          the 'aa', you might end up calling someone "おばさん (obasan - aunt),"
          and oh boy, can that lead to some awkward family reunions.
        </p>
        <p>
          Double consonants and long vowels are a bit difficult for English
          speakers. You'll need to be extra diligent about not forgetting double
          consonants and long vowels when speaking since they can completely
          change the meaning of the word. If you're having trouble, fear not!
          You'll be hearing and saying them throughout your Japanese journey.
        </p>
        <h3>Why, Oh Why?:</h3>
        <p>
          You may ask, "Why do these exist?" Well, it's all about adding flavor,
          my friends! Just like chefs use spices to turn bland food into
          culinary masterpieces, Japanese uses double consonants and long vowels
          to turn plain speech into melodious music.
        </p>
        <h3>Mastering the Art:</h3>
        <p>
          Getting these sounds right might feel like trying to pat your head and
          rub your belly at the same time. But once you get the hang of it,
          you'll be weaving through Japanese conversations with the grace of a
          linguistic acrobat.
        </p>
        <p>
          So, embark on this exhilarating adventure with gusto! Embrace the
          dramatic, relish the stretchy, and remember - in the world of Japanese
          phonetics, more is more. Revel in the glory of sounding like a true
          Nihongo master, and let the double consonants and long vowels add that
          extra zing to your linguistic journey! 🎢🗣️✨
        </p>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/hiragana-test-final">
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
