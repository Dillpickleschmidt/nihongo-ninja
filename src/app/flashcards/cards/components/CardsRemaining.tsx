export default function CardsRemaining() {
  return (
    <div className="flex justify-center gap-6">
      <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl underline decoration-1 underline-offset-4 bg-sky-400">
        30
      </div>
      <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-red-500">
        4
      </div>
      <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-[#42c672]">
        1
      </div>
    </div>
  )
}
