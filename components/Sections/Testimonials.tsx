import React from 'react'
import Image from 'next/image'
import { AnimateInView } from '@/components/animate-in-view'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { testimonials } from '@/lib/data'

function Testimonials() {
	return (
		<section
			id='testimonials'
			className='py-12 md:py-24 scroll-mt-16 bg-muted/30'
		>
			<div className='container px-4 md:px-6'>
				<AnimateInView className='space-y-4 text-center mb-8'>
					<h2 className='text-3xl font-bold'>Testimonials</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Here's what clients and colleagues have to say about working with
						me.
					</p>
				</AnimateInView>
				<AnimateInView>
					<TestimonialCarousel testimonials={testimonials} />
				</AnimateInView>
			</div>
		</section>
	)
}

export default Testimonials
