import type { Metadata } from 'next'
import { Figtree, Sora } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
})

const sora = Sora({
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${figtree.variable} ${sora.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
