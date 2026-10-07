'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { fadeDuration, sectionInView } from '@/lib/motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, sectionInView)

  const projects = [
    {
      title: 'Taxtim',
      description: 'Web application for South Africans to file tax returns with custom calculators and automated workflows.',
      tech: ['PHP', 'Symfony', 'Vue.js', 'Mysql'],
      highlights: [
        'Custom tax calculators',
        'Automated filing system',
        'Performance optimizations',
      ],
      gradient: 'from-primary-500 to-accent-500',
    },
    {
      title: 'Everwell Edge',
      description: 'Healthcare platform providing dynamic content and technology to enhance patient experience. Built a 3D model viewer and editor using canvas.',
      tech: ['React', 'Laravel', 'MySQL', 'Canvas API', 'JWT'],
      highlights: [
        'Developed 3D model viewer/editor with Canvas',
        'Implemented JWT authentication',
        'Role-based access controls',
      ],
      gradient: 'from-accent-500 to-primary-400',
    },
    {
      title: 'SNP - Solidarity Network Platform',
      description: 'Community support platform connecting NGOs with donors in South Africa with real-time features.',
      tech: ['Tailwind', 'Alpine.js', 'Laravel', 'Livewire', 'WebSockets'],
      highlights: [
        'Real-time notifications with Laravel Echo',
        'Dynamic form builder with Livewire',
        'Optimized for 10k+ daily transactions',
      ],
      gradient: 'from-primary-400 to-accent-400',
    },
    {
      title: 'Mindskiller',
      description: 'E-learning platform offering cognitive behavioral therapy courses with SCORM compliance.',
      tech: ['Symfony', 'October CMS', 'Vue.js', 'Zoom API'],
      highlights: [
        'Migrated legacy system with 99.9% uptime',
        'SCORM-compliant course player',
        'Integrated Zoom for live sessions',
      ],
      gradient: 'from-accent-400 to-primary-500',
    },
    {
      title: 'PMU Health Application',
      description: 'Government health portal for Punjab Medical Unit serving 50k+ users with real-time monitoring.',
      tech: ['Laravel', 'Filament', 'Tailwind CSS', 'MySQL'],
      highlights: [
        'Real-time health data dashboard',
        'Vaccination scheduling system',
        'Reduced report time from 15 to 2 minutes',
      ],
      gradient: 'from-primary-600 to-accent-500',
    },
  ]

  return (
    <section id="portfolio" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
          transition={{ duration: fadeDuration, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow text-primary-700 dark:text-primary-300 text-sm mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects with product weight</h2>
          <div className="section-rule mx-auto" />
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            SaaS-style workflows, operational platforms, web products, and app-connected systems across multiple industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
              transition={{ duration: fadeDuration, ease: 'easeOut', delay: index * 0.04 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 rounded-lg border border-primary-200/80 dark:border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Project snapshot</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
