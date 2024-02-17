"use client"

import Button from "@/components/Button"
import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <div className="h-full flex justify-between items-center">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex justify-center">
        <Button type="submit" disabled={pending} aria-disabled={pending}>
          Add Note
        </Button>
      </div>
      <div className="w-1/3 flex justify-end text-xl">
        {pending && "Adding note..."}
      </div>
    </div>
  )
}
