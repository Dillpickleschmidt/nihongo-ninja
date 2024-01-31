import Dialog from "@/components/dialog"
import Button from "@/components/button"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Lesson5() {
  return (
    <Dialog
      variant={"reading"}
      background="/wavy-pattern-2.jpg"
      backgroundSize="700px"
      opacity={9}
    >
      <div className="pb-16">
        <h1 className="pt-28 text-4xl font-medium leading-[3.25rem] text-center px-20">
          You thought you were finally in the clear?{" "}
          <span className="text-5xl font-bold">
            <em>No!</em>{" "}
          </span>
          ...<em>Welcome</em>, brave souls, to the{" "}
          <span className="text-[2.5rem] font-medium">adrenaline-pumping</span>,
          edge-of-your-seat world of{" "}
          <span className="text-[3.5rem] font-bold">Double Consonants</span> and{" "}
          <span className="text-[3.5rem] font-bold">Long Vowels</span> in
          Japanese!{" "}
          <span className="font-semibold">
            <u>Oh yes</u>
          </span>
          , it&apos;s the roller coaster ride of language learning you{" "}
          <em>never knew you needed</em>.{" "}
          <span className="text-[2.5rem] font-bold">
            <em>Buckle up</em>
          </span>
          , because things are about to get <em>wildly</em>... linguistic.
        </h1>
        <h2 className="text-4xl font-medium leading-[3.25rem] text-center px-20"></h2>

        <div className="px-32 text-xl leading-8 [&>*]:py-6">
          <h3 className="font-semibold !pb-4">
            Double Consonants (促音, Sokuon): The Dramatic Pauses of Japanese:
          </h3>
          <div className="flex flex-row justify-center !pb-0">
            <div
              className="pr-4 leading-7 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <p>C</p>
              <p>o</p>
              <p>n</p>
              <p>s</p>
              <p>o</p>
              <p>n</p>
              <p>a</p>
              <p>n</p>
              <p>t</p>
              <p>s</p>
            </div>
            <div
              className="pr-6 leading-7 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <p>D</p>
              <p>o</p>
              <p>u</p>
              <p>b</p>
              <p>l</p>
              <p>e</p>
            </div>
            <div>
              <p>
                Imagine you&apos;re in a suspenseful movie, and there&apos;s
                that momentary pause that makes your heart skip a beat.
                That&apos;s what double consonants are in the realm of Japanese.
                They&apos;re like tiny, suspenseful hiccups in words that add a
                whole layer of drama.
              </p>
              <br />
              <p>
                Take "
                <span className={`${JapaneseFont.className} font-semibold`}>
                  がっこう
                </span>{" "}
                (gakkou - school)." Without the double &apos;k&apos;, it would
                just be a boring old "gakou." But with that extra &apos;k&apos;,
                suddenly, it&apos;s (gak-kou) a word with a bit more punch, a
                bit more{" "}
                <span className="">
                  "
                  <u>
                    <em>oomph</em>
                  </u>
                  ."
                </span>{" "}
                It&apos;s the linguistic version of adding an extra shot of
                espresso to your morning coffee - small but mighty!
              </p>
            </div>
          </div>
          <p className="!pb-0 text-center">
            *Use a little っ before the consonant character to make it a double
            consonant.
          </p>
          <h3 className="font-semibold !pb-4 !pt-16 text-center">
            Long Vowels: The Stretchy Elastic of Sounds:
          </h3>
          <div className="flex flex-row justify-center !pb-0">
            <div
              className="pr-4 leading-7 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <p>V</p>
              <p>o</p>
              <p>w</p>
              <p>e</p>
              <p>l</p>
              <p>s</p>
            </div>
            <div
              className="pr-6 leading-7 text-2xl font-bold text-center
              ![&>*]:py-0"
            >
              <p>L</p>
              <p>o</p>
              <p>n</p>
              <p>g</p>
            </div>
            <div>
              <p>
                Now, let&apos;s switch gears to long vowels. If double
                consonants are the dramatic pauses, long vowels are like
                stretching a rubber band, elongating the sound until you think
                it might just snap. But fear not, it won&apos;t!
              </p>
              <br />
              <p>
                Consider "お<u>ばあ</u>さん (o<u>baa</u>san - grandmother)." If
                you don&apos;t stretch the &apos;aa&apos;, you might end up
                calling someone " お<u>ば</u>さん (o<u>ba</u>san - aunt)," and{" "}
                <em>oh boy</em>, can that lead to some awkward family reunions.
              </p>
            </div>
          </div>
          <p className="!pb-0 text-center">*See the extra あ?</p>
          <p>
            Double consonants and long vowels are a <em>*bit*</em> tricky for
            English speakers. You&apos;ll need to be <u>extra</u> diligent about
            not forgetting double consonants and long vowels when speaking since
            they can completely change the meaning of the word. If you&apos;re
            having trouble right now, fear not! You&apos;ll be hearing and
            saying them throughout your Japanese journey.
          </p>
          <h3 className="mt-8 !pb-0 text-4xl font-bold text-center">
            <em>Why, oh </em>
            <span className="text-5xl">Why?</span>
          </h3>
          <p>
            You may ask,{" "}
            <span className="text-2xl">
              <em>"Why do these exist?"</em>
            </span>{" "}
            Well, it&apos;s all about adding <em>flavor</em>, my friends! Just
            like chefs use spices to turn bland food into culinary masterpieces,
            Japanese uses double consonants and long vowels to turn plain speech
            into <em>*melodious music*</em>.
          </p>
          <p>
            <span className="text-2xl font-bold">Mastering the Art:</span>{" "}
            Getting these sounds right might feel like trying to pat your head
            and rub your belly at the same time. But once you get the hang of
            it, you&apos;ll be weaving through Japanese conversations with the
            grace of a linguistic acrobat.
          </p>
          <p>
            So, embark on this exhilarating adventure with gusto! Embrace the
            dramatic, relish the stretchy, and remember - in the world of
            Japanese phonetics, <u>more is more</u>. Revel in the glory of
            sounding like a <em>true</em> Nihongo master, and let the double
            consonants and long vowels add that extra *zing* to your linguistic
            journey! ✨
          </p>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/hiragana-test-final" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
