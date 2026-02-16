'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 bg-grid-pattern transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="relative border-t border-slate-200 dark:border-primary-500/20 py-12 mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-primary-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="mb-4">
            <span className="text-3xl font-bold gradient-text">DevServices</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Building digital excellence, one project at a time.</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">© {new Date().getFullYear()} Professional Development Services. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
