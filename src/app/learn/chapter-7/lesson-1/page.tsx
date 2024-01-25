import Button from "@/app/components/button"
import Dialog from "@/app/components/dialog"
import VocabCard from "@/app/components/VocabCard"

export default function C7Lesson1() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 7 Lesson 1</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCard title="1. 家族 - family" hiragana="かぞく">
            Think of "kazoku" as "ka-zone-cook." Imagine your family cooking
            together in a cozy kitchen zone.
          </VocabCard>
          <VocabCard
            title="2. おじいさん - grandfather; old man"
            hiragana="おじいさん"
            light={true}
          >
            Sounds like "Oh, gee, son!" Picture an old man saying this to his
            grandson.
          </VocabCard>
          <VocabCard
            title="3. おばあさん - grandmother; old woman"
            hiragana="おばあさん"
          >
            Sounds like "Oh, bah, son!" Imagine a grandmother knitting and
            saying this.
          </VocabCard>
          <VocabCard
            title="4. お兄さん - older brother"
            hiragana="おにいさん"
            light={true}
          >
            Sounds like "Oh, knee, son!" Imagine an older brother who always
            kneeled down to tie your shoelaces.
          </VocabCard>
          <VocabCard title="5. お姉さん - older sister" hiragana="おねえさん">
            Sounds like "Oh, neigh, son!" Imagine an older sister who loves
            horses and often mimics a horse's neigh.
          </VocabCard>
          <VocabCard title="6. 父 - my father" hiragana="ちち" light={true}>
            "Chichi" sounds like "chee-chee." Picture your father playing a game
            of chess ("chee" for chess).
          </VocabCard>
          <VocabCard title="7. 母 - my mother" hiragana="はは">
            Sounds like laughter "ha-ha." Remember your mother's laugh.
          </VocabCard>
          <VocabCard
            title="8. 兄 - my older brother"
            hiragana="あに"
            light={true}
          >
            Sounds like "Ah, knee." Imagine your older brother always hitting
            his knee on the table.
          </VocabCard>
          <VocabCard title="9. 姉 - my older sister" hiragana="あね">
            Sounds like "Ah, neh." Imagine your older sister pondering and
            saying "Ah, neh" when thinking.
          </VocabCard>
          <VocabCard
            title="10. 妹 - younger sister"
            hiragana="いもうと"
            light={true}
          >
            Sounds like "E-moto." Picture your younger sister riding an
            e-motorbike.
          </VocabCard>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-7/vocab-learn-lesson-1" autoFocus={true}>
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
