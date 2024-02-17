"use client"
type InputBoxProps = {
  name: string
  required?: boolean
  showAdvancedAnswer?: boolean
}

export default function InputBox({
  name,
  required = false,
  showAdvancedAnswer,
}: InputBoxProps) {
  return (
    <>
      <label className="text-[1.35rem] font-medium">{name}</label>
      <input
        name={name
          .replace(/\s/g, "")
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
          )} // Convert name to camel case
        className="mb-2 mt-[.125rem] w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        placeholder={required && showAdvancedAnswer ? "Required" : ""}
      />
    </>
  )
}
