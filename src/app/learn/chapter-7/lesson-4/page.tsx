import Button from "@/components/button"
import Dialog from "@/components/dialog"
import VocabCard from "@/components/VocabCard"

export default function C7Lesson4() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 7 Lesson 4</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCard title="1. 可愛い - cute" hiragana="かわいい">
            Sounds like "kawaii." This is similar to the English word "cawaii"
            for cute.
          </VocabCard>
          <VocabCard light={true} title="2. 親切 - kind" hiragana="しんせつ">
            Sounds like "shin-sets." Picture a kind person who always sets their
            heart (shin) on doing good.
          </VocabCard>
          <VocabCard title="3. 便利 - convenient" hiragana="べんり">
            Sounds like "ben-ri." Imagine Ben, who is always handy and
            convenient to have around.
          </VocabCard>
          <VocabCard light={true} title="4. 歌う - to sing" hiragana="うたう">
            Sounds like "ooh-ta-oo." Picture singing a song with "ooh" sounds.
          </VocabCard>
          <VocabCard title="5. 被る - to put on a hat" hiragana="かぶる">
            Sounds like "cab-ru." Imagine putting on a hat before getting into a
            cab.
          </VocabCard>
          <VocabCard
            light={true}
            title="6. 履く - to put on items below your waist"
            hiragana="はく"
          >
            Sounds like "huck." Think of "hucking" on your pants or shoes.
          </VocabCard>
          <VocabCard title="7. 知る - to get to know" hiragana="しる">
            Sounds like "sheer." Picture getting to know something as clearly as
            seeing through sheer fabric.
          </VocabCard>
          <VocabCard
            light={true}
            title="8. 知っています - I know"
            hiragana="しっています"
          >
            Sounds like "sheet-tea-mass." Imagine confidently saying "I know" as
            you sip a cup of tea.
          </VocabCard>
          <VocabCard
            title="9. 知りません - I do not know"
            hiragana="しりません"
          >
            Sounds like "sheer-ma-sen." Picture saying "I don&apos;t know" with
            a sheer look of confusion.
          </VocabCard>
          <VocabCard light={true} title="10. 住む - to live" hiragana="すむ">
            Sounds like "sum." Think of where you live as the sum of your home
            life.
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
