import React from 'react'
import Link from 'next/link'
import { Code, Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
	return (
		<footer className='border-t py-8'>
			<div className='container flex flex-col md:flex-row justify-between items-center gap-4'>
				<div className='flex items-center gap-2'>
					<Code className='h-5 w-5 text-primary' />
					<span className='font-medium'>Vasyl Bakhmut</span>
					<span className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()}
					</span>
				</div>
				<div className='flex items-center gap-4'>
					<Link
						href='https://github.com/VasBakhmut'
						className='text-muted-foreground hover:text-primary'
					>
						<Github className='h-5 w-5' />
						<span className='sr-only'>GitHub</span>
					</Link>
					<Link
						href='https://linkedin.com/in/vasyl-bakhmut-1961a411b'
						className='text-muted-foreground hover:text-primary'
					>
						<Linkedin className='h-5 w-5' />
						<span className='sr-only'>LinkedIn</span>
					</Link>
					<Link
						href='mailto:bakhmutvas@gmail.com'
						className='text-muted-foreground hover:text-primary'
					>
						<Mail className='h-5 w-5' />
						<span className='sr-only'>Email</span>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
