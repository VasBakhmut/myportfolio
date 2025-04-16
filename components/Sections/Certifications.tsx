import React from 'react'
import { AnimateInView } from '@/components/animate-in-view'
import { CertificationCard } from '@/components/certification-card'
import { certifications } from '@/lib/data'

function Certifications() {
	return (
		<section id='certifications' className='py-12 md:py-24 scroll-mt-16'>
			<div className='space-y-8'>
				<AnimateInView className='space-y-4 text-center'>
					<h2 className='text-3xl font-bold'>Certifications</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Professional certifications and courses I've completed to expand my
						skills.
					</p>
				</AnimateInView>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{certifications.map((cert, index) => (
						<AnimateInView key={index} delay={index * 0.1}>
							<CertificationCard {...cert} />
						</AnimateInView>
					))}
				</div>
			</div>
		</section>
	)
}

export default Certifications
