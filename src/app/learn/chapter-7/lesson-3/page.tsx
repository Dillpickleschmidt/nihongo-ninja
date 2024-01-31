import Button from "@/components/button"
import Dialog from "@/components/dialog"
import VocabCard from "@/components/VocabCard"

export default function C7Lesson3() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 7 Lesson 3</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCard title="1. 眼鏡 - glasses" hiragana="めがね">
            Sounds like "May-gah-neh." Picture someone in May going "Neh"
            because they can&apos;t see without their glasses.
          </VocabCard>
          <VocabCard light={true} title="2. 歌 - song" hiragana="うた">
            Sounds like "ooh-tah." Imagine saying "ooh" in wonder when you hear
            a beautiful song.
          </VocabCard>
          <VocabCard title="3. サークル - club activity" hiragana="サークル">
            Sounds like "circle." Picture a group of people forming a circle for
            a club meeting.
          </VocabCard>
          <VocabCard light={true} title="4. サ車 - car" hiragana="くるま">
            Sounds like "cool-ma." Imagine a really cool mom driving a fancy
            car.
          </VocabCard>
          <VocabCard title="5. 長い - long" hiragana="ながい">
            Sounds like "nag-eye." Think of a long, nagging sigh.
          </VocabCard>
          <VocabCard
            light={true}
            title="6. 短い - short (length)"
            hiragana="みじがい"
          >
            Sounds like "me-gee-guy." Imagine a short guy who always says "Me?
            Gee, I&apos;m short."
          </VocabCard>
          <VocabCard title="7. 早い - fast" hiragana="はやい">
            Sounds like "high-yai." Think of something moving so fast it goes
            high and yells "Yai!"
          </VocabCard>
          <VocabCard
            light={true}
            title="8. 背が高い - tall (stature)"
            hiragana="せがたかい"
          >
            Sounds like "sega-ta-kai." Picture a tall person who loves playing
            Sega games.
          </VocabCard>
          <VocabCard
            title="9. 背が低い - short (stature)"
            hiragana="せがひくい"
          >
            Sounds like "sega-hikui." Imagine a short person who feels low
            (hikui) when they can&apos;t reach the Sega console.
          </VocabCard>
          <VocabCard
            light={true}
            title="10. 頭がいい - bright, smart, clever"
            hiragana="あたまがいい"
          >
            Sounds like "atama guy E." Picture a smart guy named E who always
            uses his head (atama).
          </VocabCard>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-7/vocab-learn-lesson-3" autoFocus={true}>
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
