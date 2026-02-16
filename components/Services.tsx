'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
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

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Full-Stack Web Development',
      description: 'Build powerful, scalable web applications using modern frameworks and technologies.',
      features: [
        'Custom web applications with React, Vue.js, or Angular',
        'Backend development with Node.js, Laravel, or Symfony',
        'RESTful API design and implementation',
        'Database architecture (MySQL, PostgreSQL, MongoDB)',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile App Development',
      description: 'Create native-quality mobile applications for iOS and Android platforms.',
      features: [
        'Cross-platform apps with React Native',
        'Progressive Web Apps (PWA)',
        'Native mobile UI/UX implementation',
        'App store deployment and optimization',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'API Integration & Development',
      description: 'Design and integrate robust APIs to connect your systems seamlessly.',
      features: [
        'RESTful and GraphQL API development',
        'Third-party API integration (Stripe, Twilio, etc.)',
        'Microservices architecture',
        'API documentation and versioning',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud & DevOps Solutions',
      description: 'Deploy and manage your applications on cloud infrastructure efficiently.',
      features: [
        'AWS/Azure cloud deployment and management',
        'Docker containerization',
        'CI/CD pipeline setup with GitHub Actions',
        'Performance monitoring and optimization',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Maintenance & Support',
      description: 'Keep your applications running smoothly with ongoing maintenance and updates.',
      features: [
        'Bug fixes and troubleshooting',
        'Performance optimization',
        'Security updates and patches',
        'Feature enhancements and upgrades',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'MVP Development',
      description: 'Launch your startup idea quickly with a Minimum Viable Product.',
      features: [
        'Rapid prototyping and development',
        'Technology stack consulting',
        'Scalable architecture planning',
        'Launch strategy and deployment',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive development services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-all card-shine"
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Don't see what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
