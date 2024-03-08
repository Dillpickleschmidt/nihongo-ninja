import Button from "@/components/Button"

export default function DifficultyButtons() {
  return (
    <div className="flex justify-center gap-6">
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-red-500"
      >
        <div className="flex flex-row items-center">
          Again
          <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
            1
          </span>
        </div>
      </Button>
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-yellow-400"
      >
        Hard
        <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-55 rounded-md inline-flex items-center justify-center text-sm">
          2
        </span>
      </Button>
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-sky-400"
      >
        Good
        <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-45 rounded-md inline-flex items-center justify-center text-sm">
          3
        </span>
      </Button>
      <Button
        variant="card"
        className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-[#42c672]"
      >
        Easy
        <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
          4
        </span>
      </Button>
    </div>
  )
}
