import Dialog from "@/components/Dialog"
import Button from "@/components/Button"

export default function C2Lesson2() {
  return (
    <Dialog className="bg-[#191919] text-[#F8F5E9]">
      <div className="">
        <h1 className="pt-24 pb-6 text-6xl font-medium text-center px-20">
          Meet your new AI peers!
        </h1>
        <h2 className="text-center text-2xl mt-2">
          Click on each profile to get an introduction. When you&apos;re
          finished, introduce yourself!
        </h2>
        <div
          className="mt-16 mx-24 flex justify-center items-center space-x-8
          [&>*]:w-64 [&>*]:h-64 [&>*]:rounded-full [&>*]:border-4 [&>*]:border-black"
        >
          {/* have each be a mystery icon until the user clicks on them */}
          <div className="bg-red-400 bg-opacity-80"></div>
          <div className="bg-green-400 bg-opacity-80"></div>
          <div className="bg-yellow-400 bg-opacity-80"></div>
          <div className="bg-purple-400 bg-opacity-80"></div>
        </div>
        <div
          className="mt-16 mx-24 flex justify-center items-center space-x-8
          [&>*]:w-64 [&>*]:h-64 [&>*]:rounded-full [&>*]:border-4 [&>*]:border-black"
        >
          <div className="bg-sky-300 bg-opacity-80"></div>
          <div className="bg-orange-300 bg-opacity-80"></div>
        </div>
        <div className="mx-24 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-2/lesson-1">Next Lesson {"->"}</Button>
        </div>
      </div>
    </Dialog>
  )
}
