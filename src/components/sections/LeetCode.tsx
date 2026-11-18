'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrophyIcon, FireIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { fetchLeetCodeStats, fetchLeetCodeStatsGraphQL, getProblemCategories, type LeetCodeStats } from '@/utils/leetcode'

export function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true)
      try {
        let data = await fetchLeetCodeStats('Akshat_Chauhan_7')
        if (!data) {
          data = await fetchLeetCodeStatsGraphQL('Akshat_Chauhan_7')
        }

        if (data) {
          setStats(data)
        }

        setLastUpdated(new Date())
      } catch (error) {
        console.error('Failed to load LeetCode data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const problemCategories = getProblemCategories()
  return (
    <section id="leetcode" className="py-20 md:py-28 lg:py-36 relative">
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
            <span className="caption text-accent">04</span>
            <h2 className="heading-1">
              LeetCode <span className="text-accent">Journey</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-xl leading-relaxed">
            My competitive programming progress and problem-solving achievements
          </p>
          {lastUpdated && (
            <div className="flex items-center justify-start gap-4 mt-6 text-sm text-fg-muted">
              <span>Last updated: {lastUpdated.toLocaleString()}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  setLoading(true)
                  try {
                    const data = await fetchLeetCodeStats('Akshat_Chauhan_7')
                    if (data) {
                      setStats(data)
                      setLastUpdated(new Date())
                    }
                  } catch (error) {
                    console.error('Refresh failed:', error)
                  } finally {
                    setLoading(false)
                  }
                }}
                className="btn-ghost px-3 py-2 text-xs"
              >
                {loading ? '⟳' : '↻'} Refresh
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* LeetCode Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: TrophyIcon,
              title: 'Problems Solved',
              value: stats?.totalSolved?.toString() || '191',
              subtitle: 'Out of 3,791 total',
              color: 'from-accent to-accent-muted'
            },
            {
              icon: FireIcon,
              title: 'Max Streak',
              value: stats?.streak?.toString() || '127',
              subtitle: 'Days consecutive',
              color: 'from-red-400 to-red-500'
            },
            {
              icon: ChartBarIcon,
              title: 'Global Rank',
              value: stats?.ranking?.toLocaleString() || '784,764',
              subtitle: 'Worldwide ranking',
              color: 'from-blue-400 to-blue-500'
            },
            {
              icon: CodeBracketIcon,
              title: 'Acceptance Rate',
              value: `${stats?.acceptanceRate?.toFixed(1) || '76.3'}%`,
              subtitle: 'Solution accuracy',
              color: 'from-green-400 to-green-500'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="card-editorial p-6 rounded-xl group"
            >
              <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div>
              {loading ? (
                <div className="h-10 w-24 bg-card border border-border animate-pulse rounded mb-2" />
              ) : (
                <h3 className="heading-1 font-bold text-fg-primary mb-2">{stat.value}</h3>
              )}
              <p className="body-sm text-fg-secondary font-medium mb-1">{stat.title}</p>
              <p className="caption text-fg-muted">{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* LeetCode Profile & Progress */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile Section - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="card-editorial p-8 rounded-2xl">
              <h3 className="heading-3 text-fg-primary mb-6">Coding Profile</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                  <div>
                    <p className="body-md font-medium text-fg-primary">LeetCode Profile</p>
                    <p className="body-sm text-fg-muted">@Akshat_Chauhan_7</p>
                  </div>
                  <motion.a
                    href="https://leetcode.com/u/Akshat_Chauhan_7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="btn-secondary px-4 py-2 text-sm"
                  >
                    View Profile
                  </motion.a>
                </div>

                {/* Problem Categories */}
                <div className="space-y-5">
                  <h4 className="heading-4 text-fg-primary">Problem Categories</h4>
                  {problemCategories.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="body-sm text-fg-secondary">{item.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="body-sm font-medium text-accent">{item.solved}/{item.total}</span>
                          <span className={`caption px-2 py-0.5 rounded ${
                            item.difficulty === 'Fundamental' ? 'bg-green-500/20 text-green-400' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-card border border-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((item.solved / item.total) * 100, 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-accent to-accent-muted rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href="https://github.com/AkshatChauhan7/My_LeetCode_Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-accent font-medium body-sm hover:gap-3 transition-all duration-300"
                >
                  View All Solutions on GitHub
                  <CodeBracketIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Difficulty Breakdown & Achievements - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Difficulty Breakdown */}
            <div className="card-editorial p-6 rounded-2xl">
              <h3 className="heading-3 text-fg-primary mb-6">Difficulty Breakdown</h3>

              <div className="space-y-6">
                {[
                  {
                    difficulty: 'Easy',
                    solved: loading ? '...' : (stats?.easySolved?.toString() || '102'),
                    total: 918,
                    color: 'from-green-400 to-green-500',
                    percentage: loading ? 0 : ((stats?.easySolved || 102) / 918) * 100
                  },
                  {
                    difficulty: 'Medium',
                    solved: loading ? '...' : (stats?.mediumSolved?.toString() || '81'),
                    total: 1977,
                    color: 'from-yellow-400 to-yellow-500',
                    percentage: loading ? 0 : ((stats?.mediumSolved || 81) / 1977) * 100
                  },
                  {
                    difficulty: 'Hard',
                    solved: loading ? '...' : (stats?.hardSolved?.toString() || '8'),
                    total: 896,
                    color: 'from-red-400 to-red-500',
                    percentage: loading ? 0 : ((stats?.hardSolved || 8) / 896) * 100
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="body-sm font-medium text-fg-primary">{item.difficulty}</span>
                      <div className="flex items-center gap-2">
                        <span className="body-sm text-fg-secondary">{item.solved}/{item.total}</span>
                        <span className="caption text-accent">({item.percentage.toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-card border border-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(item.percentage * 2.5, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="card-editorial p-6 rounded-2xl">
              <h3 className="heading-3 text-fg-primary mb-6">Achievements</h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <div className="heading-3 font-bold text-accent mb-1">
                    {loading ? '...' : (stats?.submissions?.toString() || '385')}
                  </div>
                  <div className="caption text-fg-muted">Total Submissions</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <div className="heading-3 font-bold text-green-400 mb-1">
                    {loading ? '...' : (stats?.activeDays?.toString() || '172')}
                  </div>
                  <div className="caption text-fg-muted">Active Days</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <div className="heading-3 font-bold text-yellow-400 mb-1">C++</div>
                  <div className="caption text-fg-muted">Primary Language</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <div className="heading-3 font-bold text-blue-400 mb-1">
                    {loading ? '...' : `${stats?.acceptanceRate?.toFixed(0) || '76'}%`}
                  </div>
                  <div className="caption text-fg-muted">Success Rate</div>
                </div>
              </div>

              {/* Recent Badges */}
              <div className="pt-6 border-t border-border">
                <h4 className="heading-4 text-fg-primary mb-4">Recent Badges</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-card border border-border text-center">
                    <div className="text-2xl mb-1">🏆</div>
                    <div className="caption text-fg-secondary">100 Days</div>
                  </div>
                  <div className="p-3 rounded-xl bg-card border border-border text-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="caption text-fg-secondary">50 Days</div>
                  </div>
                  <div className="p-3 rounded-xl bg-card border border-border text-center">
                    <div className="text-2xl mb-1">🐼</div>
                    <div className="caption text-fg-secondary">Pandas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}