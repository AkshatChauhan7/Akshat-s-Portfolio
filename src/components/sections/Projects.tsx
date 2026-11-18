'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Calorie.io',
    description: 'Full-stack MERN application that processes real-time nutritional data, featuring secure user authentication and custom recipe scaling.',
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/AkshatChauhan7/Calorie.io',
    demoUrl: 'https://calorieio.netlify.app/',
    featured: true
  },
  {
    id: 2,
    title: 'Fitness Tracker - BeFit',
    description: 'A JavaFX application with MySQL backend for comprehensive fitness tracking. Log workouts, meals, and fitness data with an intuitive desktop interface.',
    techStack: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    githubUrl: 'https://github.com/AkshatChauhan7/Fitness-Tracker---BeFit',
    demoUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'The Voice Assistant - Oggy',
    description: 'An intelligent voice assistant built with Python, featuring voice recognition, natural language processing, and various automated tasks.',
    techStack: ['Python', 'Speech Recognition', 'NLP', 'Automation'],
    githubUrl: 'https://github.com/AkshatChauhan7/The-Voice-Assistant-Oggy',
    demoUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Time Tracker Pro',
    description: 'A productivity application to track time spent on various tasks and projects, helping users optimize their workflow and productivity.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'LocalStorage API', 'Chart.js'],
    githubUrl: 'https://github.com/AkshatChauhan7/Time-Tracker-Pro',
    demoUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'My LeetCode Solutions',
    description: 'A comprehensive collection of LeetCode problem solutions implemented in C++, showcasing algorithmic thinking and problem-solving skills.',
    techStack: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
    githubUrl: 'https://github.com/AkshatChauhan7/My_LeetCode_Solutions',
    demoUrl: 'https://leetcode.com/u/Akshat_Chauhan_7/',
    featured: false
  },
  {
    id: 6,
    title: 'Anime Recommendation System',
    description: 'Machine learning project for recommending anime based on user preferences and viewing history, using collaborative filtering techniques.',
    techStack: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    githubUrl: 'https://github.com/AkshatChauhan7/Anime-Recommendation',
    demoUrl: '#',
    featured: false
  }
]

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-28 lg:py-36 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="caption text-accent">03</span>
            <h2 className="heading-1">
              Featured <span className="text-accent">Projects</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-xl leading-relaxed">
            A selection of my most impactful work showcasing technical expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Featured Projects - Large showcase cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="card-editorial rounded-2xl overflow-hidden group"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual placeholder area - 5 columns */}
                <div className="lg:col-span-5 relative bg-tertiary hidden lg:block overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <CodeBracketIcon className="w-16 h-16 mx-auto mb-4 text-accent/30" aria-hidden="true" />
                      <p className="caption text-accent/50">{project.title}</p>
                      <p className="body-sm text-fg-muted mt-2 max-w-xs mx-auto">Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Content - 7 columns */}
                <div className="lg:col-span-7 p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="heading-2 text-fg-primary group-hover:text-accent transition-colors duration-300 pr-8">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg bg-card border border-border text-fg-secondary hover:text-accent hover:border-accent transition-all duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </motion.a>
                      {project.demoUrl !== '#' && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-lg bg-card border border-border text-fg-secondary hover:text-accent hover:border-accent transition-all duration-300"
                          aria-label={`View ${project.title} demo`}
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="body-md text-fg-secondary leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.15) + (techIndex * 0.04), ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-full bg-card border border-border text-fg-secondary text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-baseline justify-between gap-4 mb-10">
            <span className="caption text-accent">More Work</span>
            <h3 className="heading-3 font-medium text-fg-secondary">
              Other Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="card-editorial p-6 rounded-xl group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="heading-4 text-fg-primary group-hover:text-accent transition-colors duration-300 pr-4">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-card border border-border text-fg-muted hover:text-accent hover:border-accent transition-all duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                    </motion.a>
                    {project.demoUrl !== '#' && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg bg-card border border-border text-fg-muted hover:text-accent hover:border-accent transition-all duration-200"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="body-sm text-fg-secondary leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-card border border-border text-fg-muted text-xs font-medium hover:border-accent hover:text-fg-secondary transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 text-fg-muted text-xs">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}