'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Wrench, 
  Rocket,
  CheckCircle2 
} from 'lucide-react'
import { fadeDuration, sectionInView } from '@/lib/motion'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, sectionInView)

  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'SaaS Platforms',
      description: 'End-to-end SaaS products with strong information architecture, admin tooling, and scalable backend foundations.',
      features: [
        'Multi-role dashboards and account-based workflows',
        'Billing, authentication, permissions, and API integration',
        'Clear product UX for data-heavy interfaces',
        'Scalable backend and database design for growth',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile products designed for everyday use, speed, and clean user flows.',
      features: [
        'React Native and mobile-friendly product delivery',
        'User journeys optimized for smaller screens',
        'Authentication, onboarding, and in-app workflows',
        'Shared architecture between mobile and web where it fits',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Web Applications',
      description: 'Full-stack product development for dashboards, portals, tools, and internal systems.',
      features: [
        'React, Vue, Next.js, Laravel, and Symfony delivery',
        'Authentication, roles, permissions, and API layers',
        'Workflow-heavy products with clear UX structure',
        'Scalable databases and maintainable backend logic',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Product Discovery and MVPs',
      description: 'Pragmatic first releases for startups and teams validating a SaaS or app idea.',
      features: [
        'Rapid scoping for early-stage SaaS concepts',
        'Feature prioritization around core workflows',
        'Early product validation before heavy investment',
        'Fast iteration on UX, flows, and technical direction',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Platform Refinement',
      description: 'Improving existing SaaS, web, and mobile products that need better UX or cleaner engineering.',
      features: [
        'Refactor unclear workflows and brittle frontend code',
        'Standardize components and reduce product inconsistency',
        'Improve performance, maintainability, and usability',
        'Untangle legacy features into clearer product systems',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Launch and Growth Support',
      description: 'Helping teams move from release to iteration with stable engineering and ongoing product improvements.',
      features: [
        'Deployment-ready builds and release planning',
        'Iteration after launch based on product usage',
        'Feature expansion without losing system clarity',
        'Technical support across growth stages',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: fadeDuration, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow text-primary-700 dark:text-primary-300 text-sm mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">What I can help you make</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            SaaS platforms, web products, and mobile applications built with strong UX and dependable architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: fadeDuration, ease: 'easeOut', delay: index * 0.04 }}
              className="glass rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-shadow card-shine"
            >
              <div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
              >
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: fadeDuration, ease: 'easeOut', delay: 0.12 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Building a SaaS product, a web app, or a mobile app?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
