import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevServices - Professional Development Services',
  description: 'Expert full-stack development services for your business. Web apps, mobile apps, cloud solutions, and API integration. 5+ years experience delivering enterprise-grade solutions.',
  keywords: 'Web Development Services, Full Stack Development, Mobile App Development, API Integration, Cloud Solutions, React Development, Laravel Development, Node.js Services',
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
