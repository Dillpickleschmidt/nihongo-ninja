import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import VocabCard from "@/app/components/vocabulary-card"
import SpoilerButton from "@/app/components/SpoilerButton"

export default function Lesson8() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-24 pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
          Alright, get ready for a crash course in Japanese self-introduction,
          featuring the superstar words: わたし (watashi) and は (wa). Grab a
          snack, get comfortable, and let's casually stroll through the
          delightful garden of 'わたし' and 'は'. It's like a walk in the park,
          but with more Japanese and less actual walking.
        </h1>
        <div className="text-xl leading-8 text-black">
          <VocabCard
            title="1. わたし - I"
            pronunciation="wa-ta-shi"
            hiragana="わたし"
          >
            First up, we have わたし, which means "I" or "me". But, plot twist!
            It's not just about you. In Japanese, you don't just go around
            throwing "わたし" in every sentence like confetti. No, no, no. You
            use it when you really need to emphasize that it's YOU we're talking
            about. Because, let's face it, the world doesnt revolve around
            you... or does it?
          </VocabCard>
          <div className="py-0 text-[#F8F5E9] px-16">
            <div className="mx-12 my-12">
              <h3 className="text-center font-bold text-3xl">
                A quick note about particles
              </h3>
              <p className="py-4">
                In the Japanese language, you'll often use particles in
                sentences. Particles are tiny words, often just a syllable or
                two, that play a crucial role in Japanese sentence structures.
                Think of them as the grammatical glue that holds the sentence
                together, providing context and meaning to the words around
                them.
              </p>
              <p className="text-center font-semibold">
                You don't need to all know these just yet, but here's what some
                of them look like:
              </p>
              <div className="w-full flex justify-center mt-4">
                <SpoilerButton>
                  <div className="w-full flex justify-center mt-4">
                    <div>
                      <p>は (wa) - The topic marker.</p>
                      <p>も (mo) - "Also" or "too." </p>
                      <p>を (o) - The object marker. </p>
                      <p>が (ga) - The subject marker.</p>
                      <p>
                        に (ni) - destination ("to"), a point in time ("at"){" "}
                      </p>
                      <p>で (de) - Where an aciton takes place. </p>
                      <p>と (to) - "And" (listing nouns) or "with"</p>
                    </div>
                  </div>
                  <p className="mt-6">
                    <em>You'll see these in later chapters.</em>
                  </p>
                </SpoilerButton>
              </div>
            </div>
          </div>
          <VocabCard title="2. は" pronunciation="wa" hiragana="は">
            Now, let's add some spice with the particle は (wa). It's the soy
            sauce to your sushi, the wasabi to your sashimi. は is not just a
            letter; it's a particle that{" "}
            <em>
              <u>
                marks the <strong>subject</strong>
              </u>
            </em>{" "}
            of a sentence. Think of it as a big neon arrow in your sentence
            pointing at the subject, screaming, "Hey, look here!"
            <br />
            <br />
            <span className="text-base">
              *Note that the particle "は" is pronounced "wa" instead of "ha".
            </span>
          </VocabCard>
          <div className="py-0 text-[#F8F5E9] px-16">
            <div className="mx-12">
              <p className="py-4">
                Put these two together and what do you get? わたしは (watashi
                wa). It's like saying, "As for me..." and then pausing for
                dramatic effect. Everyone's on the edge of their seats, waiting
                for what amazing thing you're going to say about yourself. Will
                you reveal a secret talent? Your love for cats? The suspense is
                killing us!
              </p>
              <div className="w-full flex justify-center my-4">
                <p className="text-2xl py-4 px-8 rounded-2xl bg-[#2a2a2a]">
                  <span className="font-bold">X</span>
                  <span className="text-orange-400">は</span>
                  <span className="font-bold">Y</span>です。As for X, it is Y.
                </p>
              </div>
              <div className="w-full flex justify-center my-8">
                <p className="py-4 px-8 rounded-2xl bg-[#2a2a2a]">
                  わたし
                  <span className="text-orange-400">は</span>[your name]です。As
                  for me, I am [name].
                </p>
              </div>
              <p className="py-4">
                And here's a nifty trick about Japanese that might save you some
                breath: Japanese speakers are rather efficient in their
                speech—when they think everyone already knows what or who
                they're talking about, they just don't say it!
              </p>
              <p className="py-4">
                So, if you're chatting about your cat and suddenly start talking
                about going to the vet, you don't need to say 'My cat' every
                time.
              </p>
              <p className="py-4">
                In the same manner, if someone just intrdouced themselves to
                you, and it's your turn, you don't need to say わたしは. You can
                just say your name. They already know who you're talking about!
              </p>
              <p className="py-4 text-center">
                はたしは[name]です {"->"} [name]です
              </p>
              <p className="py-4">
                Overusing わたしは can make you sound a bit self-centered or
                overly formal in Japanese. It's like walking into a room and
                announcing, "As for me..." before every single statement you
                make.
              </p>
              <p className="py-4">
                In Japanese, dropping わたしは is like saying, 'You know who I'm
                talking about, right?' without actually saying it. It's the art
                of saying less and meaning more—something we could all learn
                from.
              </p>
              <p className="py-4">
                So, the next time you introduce yourself, remember, わたしは is
                your moment in the spotlight. Use わたしは sparingly, like a
                secret ingredient you only bring out when it's really needed to
                make your point clear.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-2/lesson-3" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
