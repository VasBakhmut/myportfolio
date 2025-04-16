'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface CertificationCardProps {
	name: string
	organization: string
	date: string
	logo: string
	credentialId?: string
	credentialURL?: string
}

export function CertificationCard({
	name,
	organization,
	date,
	logo,
	credentialId,
	credentialURL,
}: CertificationCardProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.div
			whileHover={{ y: -5 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<Card className='overflow-hidden h-full transition-all hover:shadow-lg'>
				<CardContent className='p-6 flex flex-col h-full'>
					<div className='flex items-center gap-4 mb-4'>
						<div className='relative w-12 h-12 rounded-md overflow-hidden bg-white p-1'>
							<Image
								src={logo || '/placeholder.svg'}
								alt={organization}
								fill
								className='object-contain'
							/>
						</div>
						<div>
							<h3 className='font-bold'>{name}</h3>
							<p className='text-sm text-muted-foreground'>{organization}</p>
						</div>
					</div>
					<div className='mt-auto pt-4 flex items-center justify-between'>
						<Badge variant='outline' className='flex items-center gap-1'>
							<Calendar className='h-3 w-3' />
							{date}
						</Badge>
						{/* {credentialURL && (
              <motion.a
                href={credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                animate={{ x: isHovered ? 0 : -5, opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.2 }}
              >
                View <ExternalLink className="h-3 w-3" />
              </motion.a>
            )} */}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	)
}
