import Button from "@/components/button"
import Dialog from "@/components/dialog"
import VocabCard from "@/components/VocabCard"

export default function C7Lesson2() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 7 Lesson 2</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCard title="1. 弟 - younger brother" hiragana="おとうと">
            Sounds like "Oh, toe-toe." Imagine your younger brother always
            stubbing his toe.
          </VocabCard>
          <VocabCard
            light={true}
            title="2. 兄弟 - brothers and sisters"
            hiragana="きょうだい"
          >
            Think of "kyo-die." Picture siblings playing a video game together
            and saying, "If you lose (die) in Kyoto..."
          </VocabCard>
          <VocabCard title="3. 男の人 - man" hiragana="おとこのひと">
            Sounds like "Oh, toko no hito." Imagine a man saying, "Oh, I'm just
            a 'toko' (guy) in this place."
          </VocabCard>
          <VocabCard
            light={true}
            title="4. 女の人 - woman"
            hiragana="おんなのひと"
          >
            Sounds like "Oh, nonna hito." Picture a woman saying, "Oh, I'm nonna
            (not a) regular person."
          </VocabCard>
          <VocabCard light={true} title="5. 会社 - company" hiragana="かいしゃ">
            Sounds like "kai-sha." Imagine a company on the coast (kai) near the
            sea.
          </VocabCard>
          <VocabCard
            title="6. 食堂 - cafeteria; dining commons"
            hiragana="しょくどう"
          >
            Sounds like "shoku-dough." Picture a cafeteria where they always
            bake fresh dough.
          </VocabCard>
          <VocabCard
            light={true}
            title="7. デパート - department store"
            hiragana="デパート"
          >
            Sounds like "depart." Think of a place where you always depart with
            your money.
          </VocabCard>
          <VocabCard title="8. 髪 - hair" hiragana="かみ">
            Sounds like "kami." Imagine your hair feeling like divine (kami in
            Japanese means god) silk.
          </VocabCard>
          <VocabCard light={true} title="9. 口 - mouth" hiragana="くち">
            Sounds like "coochie." Remember by thinking of a baby's coochie-coo,
            often said while touching their mouth.
          </VocabCard>
          <VocabCard title="10. 目 - eye" hiragana="め">
            Sounds like "May." Think of your eyes always brightening up in the
            month of May.
          </VocabCard>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-7/vocab-learn-lesson-2" autoFocus={true}>
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
