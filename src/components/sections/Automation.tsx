'use client'

import { motion } from 'framer-motion'
import {
  CogIcon,
  BoltIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowPathIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

const automationWorkflows = [
  {
    id: 1,
    title: 'Gmail Auto-Reply Bot',
    description: 'Advanced email automation system using Gmail API and Google Gemini AI. Monitors unread emails, analyzes content with LLM for sentiment and priority, generates contextual responses, logs tickets to Google Sheets, and handles formatting with custom JavaScript code.',
    tools: ['Gmail API', 'Google Gemini 2.5', 'Google Sheets', 'LLM Chain', 'Custom Code'],
    benefits: ['AI-powered responses', 'Automatic ticket logging', 'Sentiment analysis', '24/7 email monitoring'],
    complexity: 'Intermediate',
    status: 'Active',
    githubLink: 'https://github.com/AkshatChauhan7/workkflow/blob/main/My_workflow_2.json'
  },
  {
    id: 2,
    title: 'Telegram News Bot',
    description: 'Automated news aggregation system that monitors KDnuggets RSS feeds on a schedule, filters content by recency (configurable days back), processes feed data with custom filtering logic, and delivers curated tech news updates.',
    tools: ['RSS Feed Reader', 'Schedule Trigger', 'KDnuggets API', 'Custom Filtering'],
    benefits: ['Automated scheduling', 'Content filtering', 'Recent news focus', 'RSS processing'],
    complexity: 'Intermediate',
    status: 'Active',
    githubLink: 'https://github.com/AkshatChauhan7/workkflow/blob/main/My_workflow_3.json'
  }
]

export function Automation() {
  return (
    <section id="automation" className="py-20 md:py-28 lg:py-36 relative">
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
            <span className="caption text-accent">05</span>
            <h2 className="heading-1">
              n8n <span className="text-accent">Automation</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-2xl leading-relaxed">
            Streamlining workflows and solving real problems through intelligent automation.
            Building systems that work while I focus on what matters most.
          </p>
        </motion.div>

        {/* Automation Workflows */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {automationWorkflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="lg:col-span-6 card-editorial p-8 rounded-2xl group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4 pr-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <CogIcon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-fg-primary group-hover:text-accent transition-colors duration-300">
                      {workflow.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`caption px-2 py-1 rounded ${
                        workflow.complexity === 'Beginner'
                          ? 'bg-green-500/20 text-green-400'
                          : workflow.complexity === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {workflow.complexity}
                      </span>
                      <span className="caption px-2 py-1 bg-accent/20 text-accent rounded">
                        {workflow.status}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(workflow.githubLink, '_blank')}
                  className="p-3 rounded-lg bg-card border border-border text-fg-muted hover:text-accent hover:border-accent transition-all duration-300"
                  title="View Workflow on GitHub"
                  aria-label={`View ${workflow.title} on GitHub`}
                >
                  <PlayIcon className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Description */}
              <p className="body-md text-fg-secondary leading-relaxed mb-6">
                {workflow.description}
              </p>

              {/* Tools Used */}
              <div className="mb-6">
                <h4 className="heading-4 text-fg-primary mb-3">Tools & Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {workflow.tools.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (toolIndex * 0.04), ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-card border border-border text-fg-secondary text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="heading-4 text-fg-primary mb-3">Key Benefits</h4>
                <div className="space-y-2">
                  {workflow.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (benefitIndex * 0.08), ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="body-sm text-fg-secondary">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="card-editorial p-10 md:p-16 rounded-2xl max-w-3xl mx-auto">
            <h3 className="heading-2 text-fg-primary mb-4">Automate Your Workflow</h3>
            <p className="body-lg text-fg-secondary mb-8 max-w-xl mx-auto">
              Interested in automation solutions for your business or personal projects?
              Let's discuss how we can streamline your processes and save valuable time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Discuss Automation
              </motion.a>
              <motion.a
                href="https://github.com/AkshatChauhan7/workkflow"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                View Workflows
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}