import Dialog from "@/components/Dialog"
import Button from "@/components/Button"

export default function Lesson8() {
  return (
    <Dialog variant={"reading"} className="bg-[#191919] text-[#F8F5E9]">
      <div className="pb-16">
        <div
          className="text-4xl leading-[3.25rem] font-medium
        [&>*]:py-12 [&>*]:px-28"
        >
          <p className="!pt-28">
            Now, it&apos;s time to dive into something even more thrilling:
            numbers. Yes, numbers! Why, you ask? Imagine you&apos;re in Japan,
            walking into a shop. You see ten beautiful fans, but you only want
            two. How do you convey this without frantically waving your arms?
            Numbers, my friend!
          </p>
          <p className="bg-white text-black w-full !mx-0 border-b border-[#191919]">
            Or picture this: You&apos;re at a lively party in Tokyo. Someone
            asks your age. Do you start a game of charades, or do you
            confidently say &quot;にじゅうさい&quot; (20 years old)? Numbers
            save the day again!
          </p>
          <p className="bg-[#F8F5E9] text-black">
            And let&apos;s not forget about telling time. Miss your train
            because you couldn&apos;t understand &quot;ごぜんくじ&quot; (9 AM)?
            I hope your friends missed you, at the very least.
          </p>
          <p className=" !pb-16">
            Numbers in Japanese aren&apos;t just digits; they&apos;re your key
            to avoiding awkward silences, wild gestures, and the dreaded mime
            routine. So, let&apos;s count our way to greatness!
          </p>
        </div>
        <div className="mt-12 mx-12 !mb-0 flex flex-row justify-between items-center">
          <p>
            *You&apos;ll often see numbers written in kanji, but don&apos;t
            worry about the kanji just yet.
          </p>
          <div className="flex flex-row justify-end w-96">
            <Button link="/learn/chapter-1/lesson-8-2">Continue {"->"}</Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
