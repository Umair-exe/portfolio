'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="https://github.com/umair-exe.png" 
                  alt="M. Umair Bhatti"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
          >
            M. UMAIR BHATTI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-6 h-20"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Software Engineer',
                2000,
                'React Specialist',
                2000,
                'Laravel Expert',
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
            className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8"
          >
            Experienced Full-Stack Developer passionate about building high-quality web applications 
            that integrate cutting-edge technologies with seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-8 justify-center"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} className="text-primary-500" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={20} className="text-primary-500" />
              <a href="mailto:umair.shabir99@gmail.com" className="hover:text-white">
                umair.shabir99@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={20} className="text-primary-500" />
              <span>0321-4328875</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 mt-8 mb-16 md:mb-8"
          >
            <motion.a
              href="https://github.com/umair-exe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/m-umair-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
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
