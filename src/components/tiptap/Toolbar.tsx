import { BubbleMenu } from "@tiptap/react"
import Button from "../Button"
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsTypeH1,
} from "react-icons/bs"
import { MdOutlineCancel } from "react-icons/md"

export default function Toolbar({ editor }: { editor: any }) {
  return (
    <>
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="bg-[#111111] py-1 px-2 rounded-xl border-2 space-x-2
          [&>*]:text-lg [&>*]:text-card-foreground"
      >
        <input
          type="color"
          onInput={(event) =>
            editor
              .chain()
              .focus()
              .setColor((event.target as HTMLInputElement).value)
              .run()
          }
          value={editor.getAttributes("textStyle").color}
          className="rounded-sm bg-[#111111]"
        />
        <Button
          type="button"
          variant={"system"}
          onClick={() => editor.chain().focus().unsetColor().run()}
        >
          <MdOutlineCancel />
        </Button>
        <Button
          type="button"
          variant={"system"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <BsTypeH1 />
        </Button>
        <Button
          type="button"
          variant={"system"}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${editor.isActive("bold") ? "is-active" : ""} p-1`}
        >
          <BsTypeBold />
        </Button>
        <Button
          type="button"
          variant={"system"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${editor.isActive("italic") ? "is-active" : ""} p-1`}
        >
          <BsTypeItalic />
        </Button>
        <Button
          type="button"
          variant={"system"}
          onClick={() => editor.chain().focus().toggleUnderline().run}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <BsTypeUnderline />
        </Button>
        <Button
          type="button"
          variant={"system"}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`${editor.isActive("strike") ? "is-active" : ""} p-1`}
        >
          <BsTypeStrikethrough />
        </Button>
      </BubbleMenu>
    </>
  )
}
