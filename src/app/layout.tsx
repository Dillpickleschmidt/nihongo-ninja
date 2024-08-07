import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Navbar from "@/features/navbar/Navbar"
import { GlobalContextProvider } from "@/context/GlobalContext"
import { inter, japanese, honk } from "@/utils/fonts"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Nihongo Ninja",
  description: "Learn Japanese with Nihongo Ninja",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter} ${japanese} ${honk} overflow-x-hidden font-inter text-lg scrollbar:w-2.5 scrollbar-track:bg-transparent scrollbar-thumb:bg-neutral-400 hover:scrollbar-thumb:bg-[#999999] dark:scrollbar-thumb:bg-neutral-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalContextProvider>
            <Navbar />
            {children}
            <Toaster richColors />
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
