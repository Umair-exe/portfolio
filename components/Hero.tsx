'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Code2, Zap, Shield } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-4 py-2 glass rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400">
              Professional Development Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white max-w-5xl"
          >
            Transform Your Ideas Into{' '}
            <span className="gradient-text">Digital Reality</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-6 h-16"
          >
            <TypeAnimation
              sequence={[
                'Web Development',
                2000,
                'Mobile Applications',
                2000,
                'Cloud Solutions',
                2000,
                'API Integration',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="gradient-text font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mb-8"
          >
            Expert full-stack development services to bring your business vision to life. 
            From concept to deployment, we build scalable, secure, and high-performance applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 justify-center">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 justify-center">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 justify-center">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>100% Client Satisfaction</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center gap-2 group btn-glow"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="px-8 py-4 glass text-slate-900 dark:text-white rounded-full font-semibold hover:bg-primary-500/10 transition-all"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl"
          >
            <div className="glass p-6 rounded-xl">
              <Code2 className="w-10 h-10 text-primary-500 mb-3 mx-auto" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Modern Stack</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Latest technologies & frameworks</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Zap className="w-10 h-10 text-yellow-500 mb-3 mx-auto" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Agile development approach</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <Shield className="w-10 h-10 text-green-500 mb-3 mx-auto" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Secure & Scalable</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Enterprise-grade solutions</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-2 h-2 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
