import { ArrowRight, CheckCircle2, Code2, Palette, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      <div className="hero-orbs absolute inset-0 overflow-hidden pointer-events-none" aria-hidden />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="px-4 py-2 glass rounded-full text-sm font-semibold text-primary-700 dark:text-primary-300 section-eyebrow">
              SaaS platforms. Web apps. Mobile apps.
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white max-w-5xl">
            I build
            <span className="gradient-text"> SaaS platforms </span>
            and modern apps people rely on.
          </h1>

          <p className="text-xl md:text-2xl mb-6 font-semibold gradient-text">
            SaaS · Web · Mobile · Product engineering
          </p>

          <p className="text-gray-700 dark:text-slate-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            I&apos;m Muhammad Umair, a full-stack developer focused on SaaS platforms, web applications, and mobile experiences for startups, product teams, and growing businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl">
            <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300 justify-center">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>5+ years building products</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300 justify-center">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>SaaS and workflow-heavy systems</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300 justify-center">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>Web and mobile delivery</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-shadow flex items-center gap-2 group btn-glow"
            >
              Let&apos;s work together
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 glass text-slate-900 dark:text-white rounded-full font-semibold hover:bg-primary-500/10 transition-colors"
            >
              View selected work
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full">
            <div className="glass p-6 rounded-xl">
              <Code2 className="w-10 h-10 text-primary-500 mb-3 mx-auto" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">SaaS Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Multi-role flows, dashboards, APIs, and product foundations that scale cleanly</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Palette className="w-10 h-10 text-accent-400 mb-3 mx-auto" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Web Experiences</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Responsive interfaces with strong UX, motion, and conversion clarity</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Sparkles className="w-10 h-10 text-yellow-500 mb-3 mx-auto" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Mobile Products</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Cross-platform app experiences built with performance and usability in mind</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue" aria-hidden>
        <div className="w-6 h-10 border-2 border-gray-400/70 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 scroll-cue-dot" />
        </div>
      </div>
    </section>
  )
}

export default Hero
