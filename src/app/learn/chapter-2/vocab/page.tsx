import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import JapaneseFont from "@/components/text/JapaneseFont"

export default function Numbers() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-20 text-xl text-[#F8F5E9]">
        {/* Numbers Title */}
        <h1 className="mx-auto mt-20 mb-8 text-6xl text-center font-semibold tracking-wide underline-offset-8">
          <u>
            <em>Vocabulary</em>
          </u>
        </h1>
        <div className="mx-24 pb-12 border-b border-neutral-600">
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Greetings
          </h3>
          <div className="[&>*]:flex [&>*]:justify-between leading-[2.75rem]">
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  おはよう。
                </JapaneseFont>
              </ul>
              <ul>Ohayou.</ul>
              <ul>Good morning.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  おはようございます。
                </JapaneseFont>
              </ul>
              <ul>Ohayou gozaimasu.</ul>
              <ul>Good morning. (polite)</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  こんにちは。
                </JapaneseFont>
              </ul>
              <ul>Konnichiwa.</ul>
              <ul>Good afternoon.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  こんばんは。
                </JapaneseFont>
              </ul>
              <ul>Konbanwa.</ul>
              <ul>Good evening.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  またね。
                </JapaneseFont>
              </ul>
              <ul>Mata ne.</ul>
              <ul>See you later.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  じゃあね。
                </JapaneseFont>
              </ul>
              <ul>Jaa ne.</ul>
              <ul>See you later.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  さようなら。
                </JapaneseFont>
              </ul>
              <ul>Sayounara.</ul>
              <ul>Goodbye.</ul>
            </div>
          </div>
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Common Phrases
          </h3>
        </div>
        <div className="mt-12 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-2/lesson-1" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
