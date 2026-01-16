import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M. Umair Bhatti - Full Stack Developer',
  description: 'Portfolio of M. Umair Bhatti - Experienced Full-Stack Developer passionate about building high-quality web applications',
  keywords: 'Full Stack Developer, React, Laravel, Node.js, Web Development, Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
