import React from 'react'
import { AnimateInView } from '@/components/animate-in-view'

function About() {
	return (
		<section id='about' className='py-12 md:py-24 scroll-mt-16'>
			<AnimateInView className='space-y-4 text-center max-w-3xl mx-auto'>
				<h2 className='text-3xl font-bold'>About Me</h2>
				<div className='w-20 h-1 bg-primary mx-auto'></div>
				<p className='text-lg text-muted-foreground'>
					After facing a significant health challenge that led me to reevaluate
					my career path, I made the decision to transition into web
					development—a field I've always been passionate about. Highly
					motivated and detail-oriented, I've completed comprehensive diplomas
					in both Front-End and Full-Stack Development, equipping myself with
					the skills needed to build modern web applications. Through hands-on
					project experience and continuous learning, I've developed a strong
					foundation in creating responsive, accessible, and performant websites
					that deliver exceptional user experiences.
				</p>
			</AnimateInView>
		</section>
	)
}

export default About
