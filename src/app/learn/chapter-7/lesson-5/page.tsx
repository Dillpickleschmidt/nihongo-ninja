import Button from "@/app/components/button"
import Dialog from "@/app/components/dialog"
import VocabCard from "@/app/components/vocabulary-card"

export default function C7Lesson4() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 7 Lesson 5</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCard title="1. 働く - to work" hiragana="はたらく">
            Sounds like "ha-ta-laku." Imagine working hard while saying "Ha!
            Tackle this work!"
          </VocabCard>
          <VocabCard
            light={true}
            title="2. 太る - to gain weight"
            hiragana="ふとる"
          >
            Sounds like "futo-ru." Imagine gaining weight and saying "Futo, I
            grew!"
          </VocabCard>
          <VocabCard
            title="3. 太っています - to be on the heavy side; overweight"
            hiragana="ふとっています"
          >
            Sounds like "futo-tte-mass." Picture someone who's heavy saying,
            "Futo, I'm mass!"
          </VocabCard>
          <VocabCard
            light={true}
            title="4. 眼鏡を掛ける - to put on glasses"
            hiragana="めがねをかける"
          >
            Sounds like "may-gah-neh-wo-kakeru." Imagine putting on glasses to
            see the month of May clearly.
          </VocabCard>
          <VocabCard
            title="5. 着る - to put on clothes above your waist"
            hiragana="きる"
          >
            Sounds like "keer." Picture "keering" a shirt over your head.
          </VocabCard>
          <VocabCard
            light={true}
            title="6. 痩せる - to lose weight"
            hiragana="やせる"
          >
            Sounds like "ya-sell." Imagine losing weight and saying, "Ya, I can
            sell my old clothes now!"
          </VocabCard>
          <VocabCard
            title="7. 痩せています - to be thin"
            hiragana="やせています"
          >
            Sounds like "ya-set-te-mass." Picture a thin person saying, "Ya, I'm
            set with this mass!"
          </VocabCard>
          <VocabCard
            light={true}
            title="8. 結婚する - to get married"
            hiragana="けっこんする"
          >
            Sounds like "kett-kon-suru." Picture getting married and setting a
            "ket" (contract) to connect lives.
          </VocabCard>
          <VocabCard title="9. ～が - ...but" hiragana="～が">
            Think of it as a pause, like saying "ga..." when you're about to say
            "but..."
          </VocabCard>
          <VocabCard
            light={true}
            title="10. 何も + negative - not...anything"
            hiragana="なにも + negative"
          >
            Sounds like "nani mo." Picture saying "Nani? Mo nothing?"
          </VocabCard>
          <VocabCard title="11. ～人 - counter for people" hiragana="～にん">
            Sounds like "neen." Imagine counting people and saying "One neen,
            two neen..."
          </VocabCard>
          <VocabCard
            light={true}
            title="12. 一人 - one person"
            hiragana="ひとり"
          >
            Sounds like "hitori." Picture being alone and saying "Hi, I'm just
            one here."
          </VocabCard>
          <VocabCard title="13. 二人 - two people" hiragana="ふたり">
            Sounds like "futari." Think of "two" (fu-ta-ri) people standing
            together.
          </VocabCard>
          <VocabCard
            light={true}
            title="14. 別に + negative - nothing in particular"
            hiragana="べつに + negative"
          >
            Sounds like "bet-su-ni." Imagine shrugging and saying "Bet, it's
            nothing special."
          </VocabCard>
          <VocabCard title="15. 勿論 - of course" hiragana="もちろん">
            Sounds like "mochi-ron." Picture saying "Of course!" while eating
            mochi.
          </VocabCard>
          <VocabCard
            light={true}
            title="16. よかったら - if you like"
            hiragana="よかったら"
          >
            Sounds like "yokatta-ra." Imagine saying, "If you like (yokatta),
            then ra (come on)!"
          </VocabCard>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-7/vocab-learn-lesson-5" autoFocus={true}>
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
