'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: '3Amigos',
      role: 'Senior Software Engineer',
      period: 'Jan 2023 - Present',
      location: 'On-site',
      duration: '1 yr',
      description: [
        'Led development of enterprise-grade applications using PHP frameworks (Laravel, Symfony, CodeIgniter) and modern JavaScript frameworks (React.js, Next.js, Angular, Vue.js)',
        'Designed and maintained scalable architectures, improving performance, security, and reliability of live systems',
        'Built and integrated RESTful APIs and microservices, enabling seamless communication across platforms',
        'Mentored junior developers, conducted code reviews, and established best practices for clean, maintainable code',
        'Collaborated with product managers and stakeholders to translate business needs into technical solutions',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'K-Optional Software, LLC',
      role: 'Software Developer',
      period: 'Jan 2022 - Dec 2022',
      location: 'Remote',
      duration: '1 yr',
      description: [
        'Designed and developed end-to-end features for production systems using PHP (Laravel, Symfony) and JavaScript frameworks (React.js, Next.js, Vue.js, Angular)',
        'Built and optimized RESTful APIs, integrating them with MySQL and NoSQL databases for scalable performance',
        'Improved application performance, security, and maintainability through clean code practices and testing',
        'Collaborated with cross-functional teams to deliver client-focused solutions within agile workflows',
        'Took ownership of modules from development to deployment, gaining strong experience in full-stack software delivery',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'OCloud Solutions',
      role: 'Associate Software Developer',
      period: 'Dec 2020 - Dec 2021',
      location: 'On-site',
      duration: '1 yr 1 mo',
      description: [
        'Contributed to live client projects, working across PHP (Laravel) and JavaScript frameworks (React.js, Angular)',
        'Developed and integrated REST APIs with MySQL and MongoDB for production-ready systems',
        'Built and optimized frontend features for user-facing applications, ensuring responsiveness and performance',
        'Collaborated in an agile team, participating in sprints, code reviews, and debugging sessions',
        'Strengthened skills in full-stack development by working on both backend logic and frontend interfaces',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      company: 'OCloud Solutions',
      role: 'Software Development Intern',
      period: 'Sep 2020 - Dec 2020',
      location: 'On-site',
      duration: '4 mos',
      description: [
        'Assisted in the development of web applications using PHP (Laravel) for backend and JavaScript (React.js, Node.js) for frontend components',
        'Gained hands-on experience with MySQL for database management and basic REST API development',
        'Contributed to UI enhancements, bug fixing, and testing under the guidance of senior developers',
        'Learned agile workflows, version control with Git, and fundamentals of collaborative software engineering',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 md:ml-20"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5.25rem] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 hidden md:block" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 md:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-primary-500 mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
