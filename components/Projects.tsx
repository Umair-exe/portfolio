'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
      gradient: 'from-green-500 to-emerald-500',
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
      gradient: 'from-blue-500 to-cyan-500',
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
      gradient: 'from-purple-500 to-pink-500',
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
      gradient: 'from-orange-500 to-red-500',
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
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
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
                      className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">View Project</span>
                  </motion.button>
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
