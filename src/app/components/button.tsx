"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"
import Link from "next/link"
import { VariantProps, cva } from "class-variance-authority"
import cn from "../util/cn"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode
    link?: string
  }

const Button = ({
  children,
  className,
  variant,
  link,
  ...props
}: ButtonProps) => {
  if (link) {
    return (
      <Link
        href={link}
        scroll={false}
        className={cn(buttonVariants({ variant, className }))}
      >
        {children}
      </Link>
    )
  } else {
    // Doesn't do anything right now, for future use
    return (
      <button {...props} className={cn(buttonVariants({ variant, className }))}>
        {children}
      </button>
    )
  }
}

const buttonVariants = cva("cursor-pointer", {
  variants: {
    variant: {
      main: "bg-white rounded-full border-2 border-black text-black font-medium hover:bg-neutral-200 px-9 py-3 text-xl shadow-md drop-shadow-lg",
      system: "px-2 py-2 hover:text-white text-black text-2xl",
      card: "text-white font-medium hover:brightness-125 text-5xl",
      vocab:
        "bg-[#191919] rounded-xl border border-neutral-700 py-5 px-8 text-xl text-start font-light hover:bg-[#222222] hover:shadow-md",
    },
  },
  defaultVariants: {
    variant: "main",
  },
})

export default Button
