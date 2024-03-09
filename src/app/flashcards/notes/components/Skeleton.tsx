"use client"
import StyleDropdown from "./StyleDropdown"
import CardSkeleton from "../../cards/components/CardSkeleton"

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
          <CardSkeleton />
        </div>
      </div>
    </>
  )
}
