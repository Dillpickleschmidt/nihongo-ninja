import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import VocabCard from "@/components/spaced-repetition/VocabCard"

export default function C2Lesson1() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
          Exhausted from dancing with digits all day? Are you feeling like a
          ninja calculator from Japan, secretly number-crunching in the shadows?
          Fear not! We&apos;ve got the perfect antidote—a single, magical word
          that&apos;s your golden ticket to broadcasting your vast knowledge to
          the world.
        </h1>
        <div className="text-xl leading-8 text-black">
          <h2 className="py-0 text-[#F8F5E9] text-center px-16 font-bold text-2xl">
            &quot;It&apos;s a state of being, man...&quot;
          </h2>
          <VocabCard title="です - is" pronunciation="desu" hiragana="です">
            です is often used to <u>connect the subject to the sentence.</u> It
            doesn&apos;t strictly mean anything by itself.
            <br /> <strong>Translation:</strong> In English, です can be
            translated as &quot;is,&quot; &quot;are,&quot; or &quot;am,&quot;
            but it doesn&apos;t carry an exact one-to-one translation as
            it&apos;s more about conveying a state of being in a polite form.
            <br />
            <br />
            <p className="text-base">
              *More often than not, Japanese speakers drop the &quot;u&quot; at
              the end of です when speaking quickly, making it sound more like
              &quot;des&quot;. We encourage you to pick up on that habit as
              well.
            </p>
          </VocabCard>
          <div className="py-0 text-[#F8F5E9] px-16">
            <div className="mx-12">
              <p className="py-4">
                <strong>Politeness Level: Expert:</strong> Using です is like
                wearing a formal suit in your speech. It&apos;s a sign of
                respect and formality. It doesn&apos;t just mean &quot;is,&quot;
                &quot;are,&quot; or &quot;am&quot;; it&apos;s more like
                &quot;is, with a respectful nod.&quot; Its mission is to add a
                dash of courtesy to your statements, making them sound more
                sophisticated. It&apos;s used in both formal and informal
                settings, but it is especially crucial in formal or polite
                conversation.
              </p>
              <p className="py-4">
                <strong>End of Sentences:</strong> &quot;Desu&quot; is typically
                used at the end of a sentence. For example, &quot;これはほんです
                (Kore wa hon desu)&quot; translates to &quot;This is a
                book.&quot;
              </p>
              <p className="py-4">
                <strong>Neutral Gender and Age:</strong> &quot;Desu&quot; is
                neutral in terms of gender and age. It&apos;s universally used
                by all speakers, making it a versatile and essential component
                of the language.
              </p>
              <p className="py-4">
                <strong>Tense-less Wonder:</strong> Unlike English verbs, which
                are obsessed with time (past, present, future), です is super
                chill about it. It&apos;s like, &quot;Time? What time? I&apos;m
                just here to be polite!&quot; To talk about the past, you do a
                quick costume change to でした (deshita), and voilà, you&apos;re
                in the past tense.
              </p>
              <p className="py-4">
                <strong>Indirectness:</strong> &quot;Desu&quot; contributes to
                the non-assertive, indirect style of Japanese. It allows
                speakers to present information or opinions without sounding too
                blunt or assertive.
              </p>
              <p className="py-4">
                <strong>Dropping in Casual Speech:</strong> In casual or
                informal speech, especially among friends or family,
                &quot;desu&quot; is often dropped to create a more relaxed tone.
                For instance, &quot;これはほん&quot; (Kore wa hon) is a more
                casual way of saying &quot;This is a book.&quot;
              </p>
            </div>
            <p className="py-4">
              In short, です is your polite, time-traveling, shape-shifting
              buddy in the Japanese language. It&apos;s more than just a word;
              it&apos;s a whole mood, setting the tone for polite and respectful
              conversations. So next time you use です, remember, you&apos;re
              not just speaking Japanese, you&apos;re being a courteous
              linguistic ninja!
            </p>
          </div>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-2/lesson-2" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
