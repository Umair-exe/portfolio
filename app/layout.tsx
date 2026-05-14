import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Muhammad Umair | SaaS, Web, and Mobile App Developer',
  description: 'Portfolio of Muhammad Umair, a full-stack developer building SaaS platforms, web applications, and mobile products with strong UX and scalable engineering.',
  keywords: 'Muhammad Umair, SaaS Developer, Web Application Developer, Mobile App Developer, Full Stack Developer, React Developer, Laravel Developer, Next.js Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  )
}
