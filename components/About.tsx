'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Target, Shield, TrendingUp } from 'lucide-react'
import { fadeDuration, sectionInView } from '@/lib/motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, sectionInView)

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Systems Thinker',
      description: 'I shape flows, components, and engineering decisions as one coherent product system.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Partner',
      description: 'I work closely with founders and teams to turn rough ideas into decisive shipped outcomes.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast, Not Rushed',
      description: 'Clear priorities and pragmatic execution keep momentum high without sacrificing craft.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Outcome Focused',
      description: 'Every screen and feature is tied back to usability, performance, and business value.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliable Delivery',
      description: 'Clean architecture, testing discipline, and maintainable code are part of the visual polish.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Built To Evolve',
      description: 'I design flexible foundations so the product can grow without needing a rebuild.',
    },
  ]

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
          transition={{ duration: fadeDuration, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow text-primary-700 dark:text-primary-300 text-sm mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Craft, clarity, and shipping discipline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
            transition={{ duration: fadeDuration, ease: 'easeOut', delay: 0.05 }}
            className="glass rounded-2xl p-8 md:p-12 mb-12 text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              I help teams turn SaaS ideas and app requirements into shipped products.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Over the last 5+ years, I&apos;ve worked across healthcare, fintech, e-learning, tax, and public-sector products. A lot of that work has centered on SaaS-style platforms, operational dashboards, customer portals, and complex web workflows that need to stay fast, clear, and dependable.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I work across React, Next.js, Vue, Laravel, Symfony, and modern mobile-friendly stacks to deliver products that are usable, scalable, and ready to grow. Whether the need is a SaaS platform, a customer-facing web app, or a mobile application, the focus stays on clean UX and solid engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
                transition={{ duration: fadeDuration, ease: 'easeOut', delay: 0.08 + index * 0.04 }}
                className="glass rounded-xl p-6 card-shine"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-600 dark:text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
