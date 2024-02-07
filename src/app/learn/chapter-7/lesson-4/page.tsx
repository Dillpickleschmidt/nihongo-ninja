import Button from "@/components/Button"
import Dialog from "@/components/Dialog"
import VocabCard from "@/components/spaced-repetition/VocabCard"

export default function C7Lesson4() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 7 Lesson 4</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCard title="1. 可愛い - cute" hiragana="かわいい">
            Sounds like &quot;kawaii.&quot; This is similar to the English word
            &quot;cawaii&quot; for cute.
          </VocabCard>
          <VocabCard light={true} title="2. 親切 - kind" hiragana="しんせつ">
            Sounds like &quot;shin-sets.&quot; Picture a kind person who always
            sets their heart (shin) on doing good.
          </VocabCard>
          <VocabCard title="3. 便利 - convenient" hiragana="べんり">
            Sounds like &quot;ben-ri.&quot; Imagine Ben, who is always handy and
            convenient to have around.
          </VocabCard>
          <VocabCard light={true} title="4. 歌う - to sing" hiragana="うたう">
            Sounds like &quot;ooh-ta-oo.&quot; Picture singing a song with
            &quot;ooh&quot; sounds.
          </VocabCard>
          <VocabCard title="5. 被る - to put on a hat" hiragana="かぶる">
            Sounds like &quot;cab-ru.&quot; Imagine putting on a hat before
            getting into a cab.
          </VocabCard>
          <VocabCard
            light={true}
            title="6. 履く - to put on items below your waist"
            hiragana="はく"
          >
            Sounds like &quot;huck.&quot; Think of &quot;hucking&quot; on your
            pants or shoes.
          </VocabCard>
          <VocabCard title="7. 知る - to get to know" hiragana="しる">
            Sounds like &quot;sheer.&quot; Picture getting to know something as
            clearly as seeing through sheer fabric.
          </VocabCard>
          <VocabCard
            light={true}
            title="8. 知っています - I know"
            hiragana="しっています"
          >
            Sounds like &quot;sheet-tea-mass.&quot; Imagine confidently saying
            &quot;I know&quot; as you sip a cup of tea.
          </VocabCard>
          <VocabCard
            title="9. 知りません - I do not know"
            hiragana="しりません"
          >
            Sounds like &quot;sheer-ma-sen.&quot; Picture saying &quot;I
            don&apos;t know&quot; with a sheer look of confusion.
          </VocabCard>
          <VocabCard light={true} title="10. 住む - to live" hiragana="すむ">
            Sounds like &quot;sum.&quot; Think of where you live as the sum of
            your home life.
          </VocabCard>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-7/vocab-learn-lesson-4" autoFocus={true}>
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
