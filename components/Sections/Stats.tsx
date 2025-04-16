import React from 'react'
import { CheckCircle, Coffee, Clock, FileCode } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

import { Card3D } from '@/components/card-3d'
import { AnimatedCounter } from '@/components/animated-counter'

function Stats() {
	return (
		<section className='py-8 md:py-12'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
				{[
					{
						icon: <CheckCircle className='h-8 w-8 text-primary' />,
						value: 67,
						label: 'Modules Completed',
					},
					{
						icon: <FileCode className='h-8 w-8 text-primary' />,
						value: 16,
						label: 'Personal Projects',
					},
					{
						icon: <Coffee className='h-8 w-8 text-primary' />,
						value: 730,
						label: 'Coffee Cups',
					},
					{
						icon: <Clock className='h-8 w-8 text-primary' />,
						value: 2,
						label: 'Years Experience',
					},
				].map((stat, index) => (
					<Card3D key={index} className='h-full'>
						<Card className='h-full border-none shadow-md bg-gradient-to-br from-background to-muted/30'>
							<CardContent className='flex flex-col items-center justify-center p-6 text-center'>
								<div className='mb-2'>{stat.icon}</div>
								<div className='text-3xl md:text-4xl font-bold mb-1'>
									<AnimatedCounter end={stat.value} duration={2000} />
								</div>
								<div className='text-sm text-muted-foreground'>
									{stat.label}
								</div>
							</CardContent>
						</Card>
					</Card3D>
				))}
			</div>
		</section>
	)
}

export default Stats
