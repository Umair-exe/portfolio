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

const siteUrl = 'https://portfolio-umair-exe.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Muhammad Umair | SaaS, Web, and Mobile App Developer',
  description:
    'Full-stack developer building SaaS platforms, web applications, and mobile products with Laravel, Symfony, React, Next.js, and Vue.',
  keywords: [
    'Muhammad Umair',
    'SaaS Developer',
    'Full Stack Developer',
    'Laravel',
    'Symfony',
    'React',
    'Next.js',
    'Vue',
  ],
  authors: [{ name: 'Muhammad Umair' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Muhammad Umair Portfolio',
    title: 'Muhammad Umair | SaaS, Web, and Mobile App Developer',
    description:
      'Full-stack engineer shipping workflow-heavy SaaS — Laravel, Symfony, React, Next.js, Vue.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Umair | SaaS, Web, and Mobile App Developer',
    description:
      'Full-stack engineer shipping workflow-heavy SaaS — Laravel, Symfony, React, Next.js, Vue.',
  },
  alternates: {
    canonical: siteUrl,
  },
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
