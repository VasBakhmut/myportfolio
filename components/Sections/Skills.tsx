import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SkillProgress } from '@/components/skill-progress'
import { AnimateInView } from '@/components/animate-in-view'
import { skills } from '@/lib/data'

function Skills() {
	return (
		<section id='skills' className='py-12 md:py-24 scroll-mt-16'>
			<div className='space-y-8'>
				<AnimateInView className='space-y-4 text-center'>
					<h2 className='text-3xl font-wbold'>Skills</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
				</AnimateInView>

				<div className='grid md:grid-cols-2 gap-6 md:gap-10'>
					{skills.map((skill, index) => (
						<AnimateInView key={skill.name} delay={index * 0.1}>
							<SkillProgress
								name={skill.name}
								percentage={skill.percentage}
								color={skill.color}
								icon={skill.icon}
								delay={index * 0.1}
							/>
						</AnimateInView>
					))}
				</div>

				<AnimateInView delay={0.5}>
					<Card className='bg-muted/30 border-none shadow-sm'>
						<CardContent className='p-6'>
							<h3 className='text-lg font-medium mb-2'>
								Other Technologies & Tools
							</h3>
							<div className='flex flex-wrap gap-2'>
								{[
									'Git',
									'GitHub',
									'VS Code',
									'Figma',
									'Docker',
									'AWS',
									'Express.js',
									'MongoDB',
									'GraphQL',
									'Redux',
									'Bootstrap',
									'Tailwind CSS',
									'PostgreSQL',
									'Webpack',
									'Vite',
								].map(tech => (
									<Badge key={tech} variant='outline' className='bg-background'>
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				</AnimateInView>
			</div>
		</section>
	)
}

export default Skills
