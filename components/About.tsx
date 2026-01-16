'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Sparkles, Rocket } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Modern Tech',
      description: 'Leveraging cutting-edge technologies to build innovative solutions',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Delivering high-quality projects on time with attention to detail',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Senior Software Engineer with over 5 years of experience building and delivering 
              high-performance, enterprise-grade applications. I specialize in developing scalable systems using 
              modern JavaScript frameworks (React, Angular, Vue, Node.js) and PHP ecosystems (Laravel, Symfony, CodeIgniter), 
              with expertise in RESTful APIs, microservices, and full-stack development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently at <span className="text-primary-500 font-semibold">3Amigos</span> as Senior Software Engineer, 
              I lead development of enterprise applications, architect scalable solutions, and mentor junior developers. 
              My career spans multiple roles delivering impactful solutions for healthcare, e-learning, government, 
              and fintech sectors across multiple countries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-primary-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
