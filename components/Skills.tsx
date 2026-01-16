'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-sm font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-primary-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Technologies', value: '25+' },
            { label: 'Happy Clients', value: '15+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
