export default function ShortcutsList() {
  return (
    <div className="mt-6 2xl:w-[50%] xl:w-[75%]">
      <div className="px-12 py-10 mt-12 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed flex flex-col justify-between items-center">
        <div className="w-full mb-2 mx-16">
          <ul className="list-disc space-y-6">
            <li>
              <div className="flex h-full items-center">
                <span className="text-2xl font-medium mr-2">ctrl+shift+l</span>{" "}
                - text align left
              </div>
            </li>
            <li>
              <div className="flex h-full items-center">
                <span className="text-2xl font-medium mr-2">ctrl+shift+e</span>{" "}
                - text align center
              </div>
            </li>
            <li>
              <div className="flex h-full items-center">
                <span className="text-2xl font-medium mr-2">ctrl+shift+r</span>{" "}
                - text align right
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
