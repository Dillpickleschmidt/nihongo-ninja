import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"

export default function Lesson8() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="h-full pb-16 overflow-y-auto overscroll-y-contain no-scrollbar text-[#F8F5E9]">
        <div
          className="text-4xl leading-[3.25rem] font-medium
        [&>*]:py-12 [&>*]:px-28"
        >
          <p className="!pt-28">
            Now, it's time to dive into something even more thrilling: numbers.
            Yes, numbers! Why, you ask? Imagine you're in Japan, walking into a
            shop. You see ten beautiful fans of yours, but you only want two.
            How do you convey this without frantically waving your arms?
            Numbers, my friend!
          </p>
          <p className="bg-white text-black w-full !mx-0">
            Or picture this: You're at a lively party in Tokyo. Someone asks
            your age. Do you start a game of charades, or do you confidently say
            "にじゅうさい" (20 years old)? Numbers save the day again!
          </p>
          <p className="bg-[#F8F5E9] text-black">
            And let's not forget about telling time. Miss your train because you
            couldn't understand "ごぜんくじ" (9 AM)? Good luck explaining that
            to your boss!
          </p>
          <p className=" !pb-16">
            Numbers in Japanese aren't just digits; they're your key to avoiding
            awkward silences, wild gestures, and the dreaded mime routine. So,
            let's count our way to greatness!
          </p>
        </div>
        <div className="mt-12 mx-12 !mb-0 flex flex-row justify-between items-center">
          <p>
            *You'll often see numbers written in kanji, but don't worry about
            the kanji just yet.
          </p>
          <div className="flex flex-row justify-end w-96">
            <Button link="/learn/chapter-1/numbers">
              Numbers Sheet {"->"}
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
