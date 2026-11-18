'use client'

import { motion } from 'framer-motion'
import { SparklesIcon, CpuChipIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-36 relative">
      <div className="container-editorial">
        {/* Section Header - Asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="caption text-accent">01</span>
            <h2 className="heading-1">
              About <span className="text-accent">Me</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-xl leading-relaxed">
            Passionate about creating intelligent solutions and scalable systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-1 space-y-8"
          >
            <div className="card-editorial p-8 md:p-12 rounded-2xl">
              <h3 className="heading-3 text-fg-primary mb-6">Student & Builder</h3>
              <div className="space-y-6 text-fg-secondary leading-relaxed body-md">
                <p>
                  I'm a Computer Science student passionate about turning ideas into working, impactful solutions.
                  I believe in building real-world projects to learn deeply, solve actual problems,
                  and refine both technical and creative skills.
                </p>
                <p>
                  Currently exploring web development, competitive programming, and automation tools like n8n.
                  I focus on fitness tech applications and creating user experiences that make a difference.
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: CodeBracketIcon,
                  title: 'Web Development',
                  description: 'Building full-stack applications with JavaScript, HTML, CSS, and modern frameworks'
                },
                {
                  icon: CpuChipIcon,
                  title: 'Problem Solving',
                  description: 'Active in competitive programming and DSA using C++ on platforms like LeetCode'
                },
                {
                  icon: SparklesIcon,
                  title: 'Project Builder',
                  description: 'Creating real-world projects like fitness trackers and automation tools'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="card-editorial p-6 rounded-xl group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="heading-4 text-fg-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="body-sm text-fg-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side accent - 4 columns, offset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:col-start-9 hidden lg:block"
          >
            <div className="sticky top-32 space-y-6">
              <div className="card-editorial p-6 rounded-xl border-l-4 border-accent">
                <p className="caption text-accent mb-2">Currently</p>
                <p className="body-md text-fg-secondary leading-relaxed">
                  Exploring web development, competitive programming, and automation tools like n8n.
                  Focused on fitness tech applications.
                </p>
              </div>

              <div className="card-editorial p-6 rounded-xl">
                <p className="caption text-fg-muted mb-4">Learning Focus</p>
                <ul className="space-y-3">
                  {[
                    'Advanced React Patterns',
                    'System Design Fundamentals',
                    'n8n Workflow Automation',
                    'Competitive Programming (C++)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-fg-secondary body-sm group">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-editorial p-6 rounded-xl bg-tertiary">
                <p className="caption text-fg-muted mb-4">Philosophy</p>
                <blockquote className="body-md text-fg-secondary italic leading-relaxed border-l-2 border-accent pl-4">
                  "Be Better Everyday!"
                </blockquote>
                <p className="caption text-accent mt-4 text-right">— Personal mantra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}