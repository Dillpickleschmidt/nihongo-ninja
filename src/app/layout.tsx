import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin-ext"] })

export const metadata: Metadata = {
  title: "Nihongo Ninja",
  description: "Learn Japanese with Nihongo Ninja",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-thin scrollbar-thumb-neutral-500 hover:scrollbar-thumb-[#999999] overscroll-x-none`}
      >
        {children}
      </body>
    </html>
  )
}
