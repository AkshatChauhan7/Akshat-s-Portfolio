'use client'

import { motion } from 'framer-motion'
import { SparklesIcon, CpuChipIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent solutions and scalable systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Student & Builder
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm a Computer Science student passionate about turning ideas into working, impactful solutions. 
                I believe in building real-world projects to learn deeply, solve actual problems, 
                and refine both technical and creative skills.
              </p>
              <p className="text-white/80 leading-relaxed">
                Currently exploring web development, competitive programming, and automation tools like n8n. 
                I focus on fitness tech applications and creating user experiences that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: <CodeBracketIcon className="w-8 h-8" />,
                title: 'Web Development',
                description: 'Building full-stack applications with JavaScript, HTML, CSS, and modern frameworks'
              },
              {
                icon: <CpuChipIcon className="w-8 h-8" />,
                title: 'Problem Solving',
                description: 'Active in competitive programming and DSA using C++ on platforms like LeetCode'
              },
              {
                icon: <SparklesIcon className="w-8 h-8" />,
                title: 'Project Builder',
                description: 'Creating real-world projects like fitness trackers and automation tools'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl group hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}