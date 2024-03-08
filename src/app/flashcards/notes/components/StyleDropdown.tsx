"use client"
import { useState } from "react"

interface StyleDropdownProps {
  setStyle: React.Dispatch<React.SetStateAction<string>>
}

export default function StyleDropdown({ setStyle }: StyleDropdownProps) {
  return (
    <>
      <label className="text-base flex items-center cursor-pointer origin-bottom-left hover:scale-[102%] ease-in duration-100 select-none">
        <span className="">Preset</span>
        <input
          type="checkbox"
          name="advancedAnswer"
          onClick={() => {
            setStyle("standard")
          }}
          className="mx-2 text-red-400 rounded ring-offset-gray-800 bg-gray-700 border-gray-600 cursor-pointer"
          style={{ boxShadow: "none" }}
        />
      </label>
    </>
  )
}
