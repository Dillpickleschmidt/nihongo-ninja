import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import Romaji from "@/components/text/Romaji"

export default function C2Preview() {
  return (
    <Dialog className="border-4 border-black bg-[#191919]">
      <div className="pb-20 text-[#F8F5E9]">
        <h1 className="pt-16 text-6xl font-medium leading-[3.25rem] text-center px-20">
          Chapter 2 - New friends!
        </h1>
        <h2 className="my-6 text-xl text-center">
          Here&apos;s a quick preview of what you&apos;ll be able to say by the
          end of this chapter.
        </h2>
        <div className="px-28 text-2xl leading-8 [&>*]:py-6">
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-400 mr-12">
                <Romaji romaji="Aiko">アイコ</Romaji>:
              </div>
              <div>
                <Romaji romaji="hajimemashite">はじめまして</Romaji>。
                <Romaji romaji="watashi">わたし</Romaji>
                {"\u2000"}
                <Romaji romaji="wa">は</Romaji>
                {"\u2000"}
                <Romaji romaji="Aiko">アイコ</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>。
                <Romaji romaji="ichi">いち</Romaji>
                <Romaji romaji="nensei">ねんせい</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">
              Nice to meet you. I&apos;m Aiko. I&apos;m a first-year student.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-100 mr-12">
                <Romaji romaji="Hiroto">ヒロト</Romaji>:
              </div>
              <div>
                <Romaji romaji="hajimemashite">はじめまして</Romaji>。
                <Romaji romaji="watashi">わたし</Romaji>
                {"\u2000"}
                <Romaji romaji="wa">は</Romaji>
                {"\u2000"}
                <Romaji romaji="Hiroto">ヒロト</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>。
                <Romaji romaji="ni">に</Romaji>
                <Romaji romaji="nensei">ねんせい</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">
              Nice to meet you. I&apos;m Hiroto. I&apos;m a second-year student.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-400 mr-12">
                <Romaji romaji="Aiko">アイコ</Romaji>:
              </div>
              <div>
                <Romaji romaji="senkou">せんこう</Romaji>
                {"\u2000"}
                <Romaji romaji="wa">は</Romaji>
                {"\u2000"}
                <Romaji romaji="nan">なん</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>
                {"\u2000"}
                <Romaji romaji="ka">か</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">What is your major?</p>
          </div>
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-100 mr-12">
                <Romaji romaji="Hiroto">ヒロト</Romaji>:
              </div>
              <div>
                <Romaji romaji="kougaku">こうがく</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>。
                <Romaji romaji="Aiko">アイコ</Romaji>
                {"\u2000"}
                <Romaji romaji="san">さん</Romaji>
                {"\u2000"}
                <Romaji romaji="no">の</Romaji>
                {"\u2000"}
                <Romaji romaji="senkou">せんこう</Romaji>
                {"\u2000"}
                <Romaji romaji="wa">は</Romaji>
                {"\u2000"}
                <Romaji romaji="nan">なん</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>
                {"\u2000"}
                <Romaji romaji="ka">か</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">
              It&apos;s engineering. What is your major?
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-400 mr-12">
                <Romaji romaji="Aiko">アイコ</Romaji>:
              </div>
              <div>
                <Romaji romaji="kokusaikankei">こくさいかんけい</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">
              It&apos;s international relations.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-100 mr-12">
                <Romaji romaji="Hiroto">ヒロト</Romaji>:
              </div>
              <div>
                <Romaji romaji="sou">そう</Romaji>
                {"\u2000"}
                <Romaji romaji="desu">です</Romaji>
                <Romaji romaji="ka">か</Romaji>。
                <Romaji romaji="jyaa">じゃあ</Romaji>、
                <Romaji romaji="ganbatte">がんばって</Romaji>
                {"\u2000"}
                <Romaji romaji="kudasai">ください</Romaji>。
                <Romaji romaji="yoroshiku">よろしく</Romaji>
                {"\u2000"}
                <Romaji romaji="onegaishimasu">おねがいします</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">
              Is that so? Well then, please do your best. I look forward to
              working with you.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="text-3xl text-orange-400 mr-12">
                <Romaji romaji="Aiko">アイコ</Romaji>:
              </div>
              <div>
                <Romaji romaji="arigatou">ありがとう</Romaji>
                {"\u2000"}
                <Romaji romaji="gozaimasu">ございます</Romaji>。
                <Romaji romaji="yoroshiku">よろしく</Romaji>
                {"\u2000"}
                <Romaji romaji="onegaishimasu">おねがいします</Romaji>。
              </div>
            </div>
            <p className="mt-2 text-xl ml-[9.5rem]">
              Thank you. I look forward to working with you.
            </p>
          </div>
        </div>
        <h1 className="mt-20 mb-12 text-6xl font-medium leading-[5rem] text-center px-20">
          You&apos;ll be able to say this and much more!
          <br />
          🥷
        </h1>
        <div className="mt-12 mx-24 !mb-0 flex flex-row justify-center">
          <Button link="/learn/chapter-2/vocab" autoFocus={true}>
            Continue {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
