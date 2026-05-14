'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
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
    <main className="mesh-background min-h-screen bg-gradient-to-br from-orange-50 via-stone-50 to-emerald-50 dark:from-slate-950 dark:via-[#0d1727] dark:to-[#132238] bg-grid-pattern transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="relative border-t border-slate-200 dark:border-primary-500/20 py-12 mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/80 dark:from-primary-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="mb-4">
            <span className="text-3xl font-display font-bold gradient-text">Muhammad Umair</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Design-led engineering for products that need both clarity and character.</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">© {new Date().getFullYear()} Muhammad Umair. Portfolio and selected work.</p>
        </div>
      </footer>
    </main>
  )
}
