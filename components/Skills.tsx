'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeDuration, sectionInView } from '@/lib/motion'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, sectionInView)

  const skillCategories = [
    {
      title: 'Full-Stack Frameworks',
      skills: ['MERN', 'TALL', 'RILT', 'VILT', 'MEVN', 'Next.js'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Vue.js', 'Tailwind CSS', 'Alpine.js', 'TypeScript', 'JavaScript'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Backend',
      skills: ['Laravel', 'Node.js', 'Express.js', 'Symfony', 'Livewire', 'PHP'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Mobile & PWA',
      skills: ['React Native', 'Progressive Web Apps'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'DevOps & Testing',
      skills: ['Docker', 'GitHub Actions', 'AWS EC2/S3', 'PHPUnit', 'Pest', 'Jest', 'Cypress'],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="technologies" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
          transition={{ duration: fadeDuration, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow text-primary-700 dark:text-primary-300 text-sm mb-4">Toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Tools I reach for often</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Chosen for speed of iteration, maintainability, and strong user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 1, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
              transition={{ duration: fadeDuration, ease: 'easeOut', delay: index * 0.04 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 rounded-lg border border-slate-200 dark:border-white/10 hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
          transition={{ duration: fadeDuration, ease: 'easeOut', delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Shipped', value: '20+' },
            { label: 'Technologies', value: '25+' },
            { label: 'Domains Worked In', value: '6+' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
