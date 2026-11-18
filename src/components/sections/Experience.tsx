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
			'Maintaining strong academic performance while developing practical coding skills',
		],
		technologies: [
			'C++',
			'Java',
			'JavaScript',
			'Python',
			'Data Structures',
			'Algorithms',
			'n8n',
		],
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
			'Focused on building real-world projects to solve actual problems',
		],
		technologies: [
			'JavaScript',
			'HTML',
			'CSS',
			'Node.js',
			'JavaFX',
			'MySQL',
			'Netlify',
		],
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
			'Preparing for technical interviews and coding competitions',
		],
		technologies: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving', 'LeetCode'],
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
			'Balancing technical skills with UI/UX design principles',
		],
		technologies: ['Python', 'Machine Learning', 'Automation', 'n8n', 'UI/UX'],
	},
]

export function Experience() {
	return (
		<section id="experience" className="py-20 md:py-28 lg:py-36 relative">
			<div className="container-editorial">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="mb-16 md:mb-24"
				>
					<div className="flex items-baseline gap-4 mb-6">
						<span className="caption text-accent">08</span>
						<h2 className="heading-1">
							Academic & <span className="text-accent">Learning</span> Journey
						</h2>
					</div>
					<p className="body-lg text-fg-secondary max-w-2xl leading-relaxed">
						My growth as a Computer Science student, self-learner, and project
						builder
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border-light to-border -translate-x-1/2" />

					<div className="space-y-12 lg:space-y-16">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{
									duration: 0.6,
									delay: index * 0.15,
									ease: [0.16, 1, 0.3, 1],
								}}
								className={`relative ${
									index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'
								} lg:w-1/2 ${
									index % 2 === 0 ? '' : 'lg:ml-auto'
								}`}
							>
								{/* Timeline dot */}
								<div
									className="hidden lg:block absolute lg:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary z-10 -translate-x-1/2"
									style={{ top: '2rem' }}
								/>

								<div className="card-editorial p-6 md:p-8 rounded-2xl group relative">
									<div className="mb-6">
										<div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted mb-3">
											<span className="flex items-center gap-1">
												<CalendarDaysIcon className="w-4 h-4" />
												<span>{exp.period}</span>
											</span>
											<span>•</span>
											<span className="capitalize text-accent font-medium">
												{exp.type}
											</span>
										</div>

										<h3 className="heading-2 text-fg-primary group-hover:text-accent transition-colors duration-300 mb-2">
											{exp.title}
										</h3>

										<div className="flex flex-wrap items-center gap-3 text-fg-secondary body-sm">
											<span className="font-medium text-fg-primary">
												{exp.company}
											</span>
											<span>•</span>
											<div className="flex items-center gap-1">
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
												transition={{
													duration: 0.4,
													delay: (index * 0.15) + (itemIndex * 0.08),
													ease: [0.16, 1, 0.3, 1],
												}}
												className="flex items-start gap-3"
											>
												<div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
												<p className="body-sm text-fg-secondary leading-relaxed">
													{item}
												</p>
											</motion.div>
										))}
									</div>

									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech, techIndex) => (
											<motion.span
												key={tech}
												initial={{ opacity: 0, scale: 0.9 }}
												whileInView={{ opacity: 1, scale: 1 }}
												viewport={{ once: true }}
												transition={{
													duration: 0.3,
													delay: (index * 0.15) + (techIndex * 0.04),
													ease: [0.16, 1, 0.3, 1],
												}}
												whileHover={{ scale: 1.05 }}
												className="px-3 py-1.5 rounded-full bg-card border border-border text-fg-secondary text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Mobile timeline - simplified */}
				<div className="lg:hidden space-y-8 mt-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{
								duration: 0.6,
								delay: index * 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="card-editorial p-6 rounded-2xl relative"
						>
							<div className="relative pl-10">
								<div className="absolute left-3 top-3 w-3 h-3 bg-accent rounded-full border-2 border-bg-primary" />
								<div className="absolute left-3 top-8 bottom-0 w-px bg-gradient-to-b from-border to-transparent" />

								<div className="mb-4">
									<div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted mb-3">
										<span className="flex items-center gap-1">
											<CalendarDaysIcon className="w-4 h-4" />
											<span>{exp.period}</span>
										</span>
										<span>•</span>
										<span className="capitalize text-accent font-medium">
											{exp.type}
										</span>
									</div>

									<h3 className="heading-3 text-fg-primary mb-2">
										{exp.title}
									</h3>

									<div className="flex flex-wrap items-center gap-3 text-fg-secondary body-sm">
										<span className="font-medium text-fg-primary">
											{exp.company}
										</span>
										<span>•</span>
										<div className="flex items-center gap-1">
											<MapPinIcon className="w-4 h-4" />
											<span>{exp.location}</span>
										</div>
									</div>
								</div>

								<div className="space-y-2 mb-4">
									{exp.description.map((item, itemIndex) => (
										<motion.div
											key={itemIndex}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.4,
												delay: (index * 0.15) + (itemIndex * 0.08),
												ease: [0.16, 1, 0.3, 1],
											}}
											className="flex items-start gap-3"
										>
											<div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
											<p className="body-sm text-fg-secondary leading-relaxed">
												{item}
											</p>
										</motion.div>
									))}
								</div>

								<div className="flex flex-wrap gap-2">
									{exp.technologies.map((tech, techIndex) => (
										<motion.span
											key={tech}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.3,
												delay: (index * 0.15) + (techIndex * 0.04),
												ease: [0.16, 1, 0.3, 1],
											}}
											whileHover={{ scale: 1.05 }}
											className="px-3 py-1.5 rounded-full bg-card border border-border text-fg-secondary text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
										>
											{tech}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}