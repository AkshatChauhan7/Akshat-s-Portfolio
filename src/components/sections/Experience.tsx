'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 1,
    title: 'BTech Computer Science Engineering',
    company: 'Bennett University',
    location: 'India',
    period: '2024 - Present',
    type: 'Education',
    description: [
      'Pursuing Bachelor of Technology in Computer Science with focus on software development',
      'Active in competitive programming and DSA problem solving',
      'Built multiple full-stack projects including fitness tracking applications',
      'Maintaining strong academic performance while developing practical coding skills'
    ],
    technologies: ['C++', 'Java', 'JavaScript', 'Python', 'Data Structures', 'Algorithms', 'n8n']
  },
  {
    id: 2,
    title: 'Full-Stack Development Journey',
    company: 'Self-Learning & Projects',
    location: 'Remote',
    period: '2024 - Present',
    type: 'Learning',
    description: [
      'Developed and deployed Calorie.io - a comprehensive fitness tracking web application',
      'Built desktop applications using JavaFX with MySQL database integration',
      'Created voice assistant and automation tools using Python',
      'Focused on building real-world projects to solve actual problems'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'JavaFX', 'MySQL', 'Netlify']
  },
  {
    id: 3,
    title: 'Competitive Programming & DSA',
    company: 'LeetCode & Practice',
    location: 'Online',
    period: '2024 - Present',
    type: 'Skill Development',
    description: [
      'Active LeetCode practitioner solving algorithmic problems',
      'Building strong foundation in Data Structures and Algorithms using C++',
      'Documenting solutions and learning patterns for complex problems',
      'Preparing for technical interviews and coding competitions'
    ],
    technologies: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving', 'LeetCode']
  },
  {
    id: 4,
    title: 'Technology Exploration',
    company: 'Personal Learning',
    location: 'Self-Paced',
    period: '2024 - Present',
    type: 'Growth',
    description: [
      'Exploring AI/ML concepts and building recommendation systems',
      'Learning automation tools like n8n for workflow optimization',
      'Passionate about fitness tech and health domain applications',
      'Balancing technical skills with UI/UX design principles'
    ],
    technologies: ['Python', 'Machine Learning', 'Automation', 'n8n', 'UI/UX']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Academic & Learning Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My growth as a Computer Science student, self-learner, and project builder
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-black z-10" />

                <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 rounded-3xl group hover:glow-effect transition-all duration-500"
                  >
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 text-primary-400 text-sm font-medium mb-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span className="capitalize">{exp.type}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 text-white/70">
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-white/80 leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-glass-light rounded-full text-primary-300 text-sm font-medium border border-primary-400/20 hover:border-primary-400/40 transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}