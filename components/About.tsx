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
              Welcome to my website — I’m Umair, a Senior Software Engineer and Full Stack Developer with over 5 years of experience building high-performance, enterprise-grade applications. I enjoy solving complex problems and creating reliable, scalable software that delivers real business value.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I specialize in modern web development using React, Angular, Vue.js, and Node.js, along with strong expertise in PHP frameworks such as Laravel and Symfony. My work includes building RESTful APIs, designing microservices, and delivering complete end-to-end solutions with a focus on performance, maintainability, and clean architecture.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently, I work at 3Amigos as a Senior Software Engineer, where I lead the development of enterprise applications, architect scalable solutions, and mentor junior developers. Over the years, I’ve contributed to impactful products across multiple industries, including healthcare, e-learning, government, and fintech, working with teams and clients across different countries.  
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              If you’d like to collaborate or discuss a project, feel free to reach out — I’m always open to exciting opportunities and meaningful work.
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
