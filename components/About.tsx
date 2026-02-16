'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Target, Shield, TrendingUp } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Expertise',
      description: '5+ years delivering enterprise-grade solutions across multiple industries',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Dedicated to understanding your business needs and exceeding expectations',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      description: 'Agile methodology ensuring timely delivery without compromising quality',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'Focused on measurable outcomes that drive business growth',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and best practices for secure, reliable applications',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Future-Proof',
      description: 'Scalable architecture designed to grow with your business',
    },
  ]

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12 mb-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Building Digital Solutions That Drive Success
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              With over 5 years of experience in full-stack development, we specialize in transforming 
              complex business requirements into elegant, high-performance software solutions. From startups 
              to enterprises, we've delivered impactful projects across healthcare, fintech, e-learning, 
              and government sectors.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our expertise spans modern frameworks including React, Vue.js, Angular, Node.js, Laravel, 
              and Symfony. We don't just write code—we architect scalable systems, implement best practices, 
              and deliver solutions that are secure, maintainable, and ready to scale with your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
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
