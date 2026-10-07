'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="mesh-background min-h-screen bg-gradient-to-br from-ink-50 via-white to-primary-50/40 dark:from-ink-950 dark:via-ink-900 dark:to-[#0f1a30] bg-grid-pattern transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="relative border-t border-ink-200/80 dark:border-white/10 py-12 mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-50/60 dark:from-primary-500/5 to-transparent" />
        <div className="container mx-auto px-6 text-center relative">
          <div className="mb-4">
            <span className="text-3xl font-display font-bold gradient-text">Muhammad Umair</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-2">Design-led engineering for products that need both clarity and character.</p>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Muhammad Umair. Portfolio and selected work.</p>
        </div>
      </footer>
    </main>
  )
}
