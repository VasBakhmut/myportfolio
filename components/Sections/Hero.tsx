import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'
import { AnimatedBackground } from '@/components/animated-background'
import { TypingText } from '@/components/typing-text'

function Hero() {
	return (
		<section
			id='hero'
			className='py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative'
		>
			<AnimatedBackground />
			<AnimateInView className='flex-1 space-y-4'>
				<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
					Hi, I'm <span className='text-primary'>Vasyl Bakhmut</span>
				</h1>
				<h2 className='text-2xl md:text-3xl font-medium text-muted-foreground'>
					<TypingText text='Full-Stack Web Developer' speed={70} />
				</h2>
				<p className='text-lg text-muted-foreground max-w-md'>
					I build responsive, accessible, and performant web applications with
					modern technologies. Passionate about creating intuitive user
					experiences and clean code.
				</p>
				<div className='flex flex-wrap gap-4 pt-4'>
					{/* <Button
						size='lg'
						className='transition-transform hover:scale-105 group'
					>
						Hire Me
						<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
					</Button>
					<Button
						size='lg'
						variant='outline'
						className='transition-transform hover:scale-105'
					>
						View Projects
					</Button> */}
				</div>
			</AnimateInView>
			<AnimateInView
				className='flex-1 flex justify-center md:justify-end'
				delay={0.2}
			>
				<div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-pulse'>
					<Image
						src='/About.png'
						alt='Vasyl Bakhmut'
						width={384}
						height={256}
						className='object-cover'
						priority
					/>
				</div>
			</AnimateInView>
		</section>
	)
}

export default Hero
