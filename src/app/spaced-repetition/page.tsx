import Navbar from "../components/navbar"
import Dropdown from "./Dropdown"

export default function page() {
  return (
    <div className="h-full scrollbar-thin scrollbar-thumb-[#999999] hover:scrollbar-thumb-neutral-400">
      <Navbar />
      <div className="text-xl mt-32">
        <div className="w-full flex flex-col items-center">
          <Dropdown text="Lesson 0">
            <div>Yo</div>
            <div>Hi</div>
            <div>Hello</div>
          </Dropdown>
          <Dropdown text="Lesson 1">
            <div>Yo</div>
            <div>Hi</div>
            <div>Hello</div>
          </Dropdown>
          <Dropdown text="Lesson 2">
            <div>Yo</div>
            <div>Hi</div>
            <div>Hello</div>
          </Dropdown>
          <Dropdown text="Lesson 3">
            <div>Yo</div>
            <div>Hi</div>
            <div>Hello</div>
          </Dropdown>
          <Dropdown text="Lesson 4">
            <div>Yo</div>
            <div>Hi</div>
            <div>Hello</div>
          </Dropdown>
          <Dropdown text="Lesson 5">
            <div>Yo</div>
            <div>Hi</div>
            <div>Hello</div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
