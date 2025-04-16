import React from 'react'
import { AnimateInView } from '@/components/animate-in-view'
import { Briefcase } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import { BookOpen } from 'lucide-react'
import { Code } from 'lucide-react'
import { Award } from 'lucide-react'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

function Experience() {
	return (
		<section id='experience' className='py-12 md:py-24 scroll-mt-16'>
			<div className='space-y-8'>
				<AnimateInView className='space-y-4 text-center'>
					<h2 className='text-3xl font-bold'>Experience & Education</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
				</AnimateInView>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='space-y-6'>
						<AnimateInView>
							<div className='flex items-center gap-2 mb-6'>
								<div className='p-2 bg-primary/10 rounded-full'>
									<Briefcase className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Experience</h3>
							</div>
						</AnimateInView>
						<div className='space-y-6'>
							{[
								{
									role: 'Freelance Web Developer',
									company: 'Self-employed',
									period: '2024 - Present',
									description:
										'Designed and developed responsive websites for small businesses and startups. Implemented modern UI/UX practices and optimized for performance.',
								},
								{
									role: 'Junior Web Developer',
									company: 'Pet-Project ',
									period: '2022 - Present',
									description:
										'Physical Activity Monitoring App for Chronic Fatigue Syndrome. Developed a web application using React and Node.js. Collaborated with a team of developers to implement features and fix bugs.',
								},
								{
									role: 'Junior Back-End Practice',
									company: 'Pet-Project ',
									period: '2024',
									description:
										'Telegram Bot for Audio-to-Text Conversion Developed a bot that converts audio files to text using Google API. Built with Express, Telegraf, and several supporting librarie.',
								},
							].map((exp, index) => (
								<AnimateInView key={index} delay={index * 0.2}>
									<Card className='border-l-4 border-l-primary transition-all hover:shadow-md'>
										<CardHeader>
											<div className='flex justify-between items-start'>
												<div>
													<CardTitle>{exp.role}</CardTitle>
													<CardDescription>{exp.company}</CardDescription>
												</div>
												<Badge
													variant='outline'
													className='flex items-center gap-1'
												>
													<Calendar className='h-3 w-3' />
													{exp.period}
												</Badge>
											</div>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>{exp.description}</p>
										</CardContent>
									</Card>
								</AnimateInView>
							))}
						</div>
					</div>
					<div className='space-y-6'>
						<AnimateInView>
							<div className='flex items-center gap-2 mb-6'>
								<div className='p-2 bg-primary/10 rounded-full'>
									<GraduationCap className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Education</h3>
							</div>
						</AnimateInView>
						<div className='space-y-6'>
							{[
								{
									degree: 'Full-Stack Web Development Diploma',
									institution: 'Genius Space University',
									period: '2023-2024',
									description:
										'Comprehensive program covering both front-end and back-end technologies including React, Node.js, and database management.',
									color: 'bg-gradient-to-r from-emerald-500 to-green-500',
									icon: <Award className='h-5 w-5' />,
								},
								{
									degree: 'Front-End Web Development Diploma',
									institution: 'Meta',
									period: '2023',
									description:
										'Comprehensive program covering both front-end and back-end technologies including React, Node.js, and database management.',
									color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
									icon: <BookOpen className='h-5 w-5' />,
								},
								{
									degree: 'Front-End Web Development Diploma',
									institution: 'Genius Space University',
									period: '2022-2023',
									description:
										'Intensive course focused on HTML, CSS, JavaScript, and responsive web design principles.',
									color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
									icon: <Code className='h-5 w-5' />,
								},
							].map((edu, index) => (
								<AnimateInView key={index} delay={index * 0.2}>
									<Card className='overflow-hidden transition-all hover:shadow-md'>
										<div className={`h-2 w-full ${edu.color}`}></div>
										<CardHeader className='relative'>
											<div className='flex justify-between items-start'>
												<div>
													<CardTitle>{edu.degree}</CardTitle>
													<CardDescription>{edu.institution}</CardDescription>
												</div>
												<Badge
													className={`${edu.color} text-white flex items-center gap-1`}
												>
													<Calendar className='h-3 w-3' />
													{edu.period}
												</Badge>
											</div>
										</CardHeader>
										<CardContent>
											<div className='flex items-center gap-2 mb-2'>
												<div
													className={`p-1 rounded-full text-white ${edu.color}`}
												>
													{edu.icon}
												</div>
												{/* <span className='font-medium'>Key Focus</span> */}
											</div>
											<p className='text-muted-foreground'>{edu.description}</p>
										</CardContent>
									</Card>
								</AnimateInView>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
