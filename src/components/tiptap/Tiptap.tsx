"use client"
import { EditorContent, useEditor } from "@tiptap/react"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"
import Bold from "@tiptap/extension-bold"
import Italic from "@tiptap/extension-italic"
import Underline from "@tiptap/extension-underline"
import Strike from "@tiptap/extension-strike"
import Heading from "@tiptap/extension-heading"
import TextStyle from "@tiptap/extension-text-style"
import { Color } from "@tiptap/extension-color"
// import HorizontalRule from "@tiptap/extension-horizontal-rule"
import Toolbar from "./Toolbar"
import Button from "../Button"

type TiptapProps = {
  onChange: (richText: string) => void
  updateRichText: (richText: string) => void
}

export default function Tiptap({ onChange, updateRichText }: TiptapProps) {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Strike,
      Heading,
      TextStyle,
      Color,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "min-h-10 w-full rounded-md border border-input bg-card px-4 py-3 text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-[#333333] disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
      updateRichText(editor.getHTML())
      // console.log(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}
