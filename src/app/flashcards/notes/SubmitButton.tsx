"use client"

import Button from "@/components/Button"

export function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="h-full flex justify-between items-center">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex justify-center">
        <Button
          className="rounded-lg"
          type="submit"
          disabled={isLoading}
          aria-disabled={isLoading}
        >
          Add Note
        </Button>
      </div>
      <div className="w-1/3 flex justify-end text-xl">
        {isLoading && "Adding note..."}
      </div>
    </div>
  )
}
