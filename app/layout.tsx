import type { Metadata } from "next"
import { Geist, Nunito, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Rhenan Bruzzo — Product Designer",
  description:
    "Product designer com 15 anos de experiência criando interfaces para times que se importam com os detalhes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${nunito.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}