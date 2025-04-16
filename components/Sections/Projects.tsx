import React from 'react'
import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AnimateInView } from '@/components/animate-in-view'
import { Card3D } from '@/components/card-3d'
import { ExternalLink, FileCode } from 'lucide-react'

function Projects() {
	return (
		<section id='projects' className='py-12 md:py-24 scroll-mt-16'>
			<div className='space-y-8'>
				<AnimateInView className='space-y-4 text-center'>
					<h2 className='text-3xl font-bold'>Projects</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
				</AnimateInView>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{[
						{
							title: 'E-commerce DogClub',
							description:
								'A full-stack e-commerce platform with product listings, cart functionality, and secure checkout.',
							tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
							image: '/dogclub.png',
							live: 'https://dog-club-react-front.vercel.app/',
							code: 'https://github.com/VasBakhmut/dog_club_react_front',
						},
						{
							title: 'Landing Gym',
							description:
								'Landing page as part of a practical  training project tailwind .',
							tags: ['React', 'Tailwind'],
							image: '/gym.png',
							live: 'https://tailwind-practice-landing.vercel.app/',
							code: 'https://github.com/VasBakhmut/tailwind-practice-landing',
						},
						{
							title: 'Landing Beauty Zone',
							description:
								'Landing page as part of a practical  training project. Used plain JavaScript, HTML, and SCSS for clean   and responsive designs...',
							tags: ['HTML', 'CSS', 'JS', 'SCSS'],
							image: '/zone.png',
							live: 'https://vasbakhmut.github.io/GeniusHomevork-HTML-CSS/genius-homework-4/',
							code: 'https://github.com/VasBakhmut/GeniusHomevork-HTML-CSS/tree/main/genius-homework-4',
						},

						// {
						// 	title: 'E-commerce Platform',
						// 	description:
						// 		'A full-stack e-commerce platform with product listings, cart functionality, and secure checkout.',
						// 	tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
						// 	image: '/placeholder.svg?height=200&width=400',
						// },
						// {
						// 	title: 'Task Management App',
						// 	description:
						// 		'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
						// 	tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'React DnD'],
						// 	image: '/placeholder.svg?height=200&width=400',
						// },
						// {
						// 	title: 'Weather Dashboard',
						// 	description:
						// 		'A weather dashboard that displays current conditions and forecasts for multiple locations.',
						// 	tags: ['JavaScript', 'CSS', 'Weather API', 'Chart.js'],
						// 	image: '/placeholder.svg?height=200&width=400',
						// },
					].map((project, index) => (
						<AnimateInView key={index} delay={index * 0.2}>
							<Card3D className='h-full'>
								<Card className='overflow-hidden flex flex-col h-full transition-all hover:shadow-lg'>
									<div className='relative h-48 overflow-hidden'>
										<Image
											src={project.image || '/placeholder.svg'}
											alt={project.title}
											fill
											className='object-cover transition-transform duration-500 hover:scale-110'
										/>
									</div>
									<CardHeader>
										<CardTitle>{project.title}</CardTitle>
										<CardDescription>{project.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className='flex flex-wrap gap-2'>
											{project.tags.map(tag => (
												<Badge key={tag} variant='secondary'>
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>
									<CardFooter className='flex gap-2 mt-auto'>
										<a
											href={project.live}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='sm'
												className='flex items-center gap-1 hover:bg-primary hover:text-primary-foreground transition-colors'
											>
												<ExternalLink className='h-4 w-4' />
												Live Demo
											</Button>
										</a>
										<a
											href={project.code}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='sm'
												className='flex items-center gap-1 hover:bg-primary hover:text-primary-foreground transition-colors'
											>
												<FileCode className='h-4 w-4' />
												Code
											</Button>
										</a>
									</CardFooter>
								</Card>
							</Card3D>
						</AnimateInView>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
