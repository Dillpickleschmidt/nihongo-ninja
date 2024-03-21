"use client"
import StyleDropdown from "./StyleDropdown"
import StatusBar from "../../cards/components/StatusBar"
import ShowAnswerButton from "../../cards/components/ShowAnswerButton"

type SkeletonProps = {
  children: React.ReactNode
  setStyle: any
  editable: boolean
}

export default function Skeleton({
  children,
  setStyle,
  editable,
}: SkeletonProps) {
  return (
    <>
      {editable && <StyleDropdown setStyle={setStyle} />}
      <div className="2xl:w-[50%] xl:w-[75%]">
        <div className="w-full min-h-[500px] px-12 py-10 mt-12 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed flex flex-col justify-between items-center">
          {children}
          <div className="flex flex-col gap-6 mt-2">
            <StatusBar />
            <ShowAnswerButton />
          </div>
        </div>
      </div>
    </>
  )
}
