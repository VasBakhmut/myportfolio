'use client'

import React from 'react'
import Link from 'next/link'
import { Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

function Header() {
	return (
		<header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Code className='h-6 w-6 text-primary' />
					<span className='text-xl font-bold'>Vasyl Bakhmut</span>
				</div>
				<nav className='hidden md:flex items-center gap-6'>
					<Link
						href='#about'
						className='text-sm font-medium hover:text-primary'
					>
						About
					</Link>
					<Link
						href='#skills'
						className='text-sm font-medium hover:text-primary'
					>
						Skills
					</Link>
					<Link
						href='#projects'
						className='text-sm font-medium hover:text-primary'
					>
						Projects
					</Link>
					{/* <Link
						href='#testimonials'
						className='text-sm font-medium hover:text-primary'
					>
						Testimonials
					</Link> */}
					<Link
						href='#certifications'
						className='text-sm font-medium hover:text-primary'
					>
						Certifications
					</Link>
					{/* <Link href='#blog' className='text-sm font-medium hover:text-primary'>
						Blog
					</Link> */}
					<Link
						href='#contact'
						className='text-sm font-medium hover:text-primary'
					>
						Contact
					</Link>
				</nav>
				<div className='flex items-center gap-4'>
					<ModeToggle />

					<Button
						onClick={() => window.open('/CVVasBakhmutLast.pdf', '_blank')}
					>
						Download CV
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
