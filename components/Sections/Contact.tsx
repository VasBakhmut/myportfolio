'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimateInView } from '@/components/animate-in-view'
import { Card3D } from '@/components/card-3d'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

function Contact() {
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
		'idle'
	)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setStatus('sending')

		const form = e.currentTarget
		const data = {
			name: form.name.value,
			email: form.email.value,
			subject: form.subject.value,
			message: form.message.value,
		}

		const res = await fetch('https://formspree.io/f/mgvajkry', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (res.ok) {
			setStatus('sent')
			form.reset()
		} else {
			setStatus('error')
		}
	}

	return (
		<section id='contact' className='py-12 md:py-24 scroll-mt-16'>
			<div className='space-y-8'>
				<AnimateInView className='space-y-4 text-center'>
					<h2 className='text-3xl font-bold'>Contact Me</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Interested in working together? Fill out the form below or reach out
						through social media.
					</p>
				</AnimateInView>
				<div className='grid md:grid-cols-2 gap-8'>
					<AnimateInView>
						<Card3D className='h-full'>
							<Card className='h-full transition-all hover:shadow-md'>
								<CardHeader>
									<CardTitle>Send a Message</CardTitle>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit} className='space-y-4'>
										<div className='grid grid-cols-2 gap-4'>
											<div className='space-y-2'>
												<label htmlFor='name' className='text-sm font-medium'>
													Name
												</label>
												<Input
													id='name'
													name='name'
													required
													placeholder='Your name'
												/>
											</div>
											<div className='space-y-2'>
												<label htmlFor='email' className='text-sm font-medium'>
													Email
												</label>
												<Input
													id='email'
													name='email'
													type='email'
													required
													placeholder='Your email'
												/>
											</div>
										</div>
										<div className='space-y-2'>
											<label htmlFor='subject' className='text-sm font-medium'>
												Subject
											</label>
											<Input
												id='subject'
												name='subject'
												required
												placeholder='Subject'
											/>
										</div>
										<div className='space-y-2'>
											<label htmlFor='message' className='text-sm font-medium'>
												Message
											</label>
											<Textarea
												id='message'
												name='message'
												rows={5}
												required
												placeholder='Your message'
											/>
										</div>
										<Button
											type='submit'
											className='w-full transition-transform hover:scale-[1.02] group'
										>
											<Send className='h-4 w-4 mr-2 transition-transform group-hover:translate-x-1' />
											{status === 'sending' ? 'Sending...' : 'Send Message'}
										</Button>
										{status === 'sent' && (
											<p className='text-green-500 text-sm'>Message sent ✅</p>
										)}
										{status === 'error' && (
											<p className='text-red-500 text-sm'>
												Something went wrong ❌
											</p>
										)}
									</form>
								</CardContent>
							</Card>
						</Card3D>
					</AnimateInView>

					<div className='space-y-6'>
						<AnimateInView delay={0.1}>
							<Card className='transition-all hover:shadow-md'>
								<CardHeader>
									<CardTitle>Connect With Me</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='flex items-center gap-4 transition-transform hover:translate-x-1'>
										<div className='p-2 bg-primary/10 rounded-full'>
											<Mail className='h-6 w-6 text-primary' />
										</div>
										<div>
											<p className='font-medium'>Email</p>
											<p className='text-sm text-muted-foreground'>
												bakhmutvas@gmail.com
											</p>
										</div>
									</div>
									<div className='flex items-center gap-4 transition-transform hover:translate-x-1'>
										<div className='p-2 bg-primary/10 rounded-full'>
											<Github className='h-6 w-6 text-primary' />
										</div>
										<div>
											<p className='font-medium'>GitHub</p>
											<p className='text-sm text-muted-foreground'>
												github.com/VasBakhmut
											</p>
										</div>
									</div>
									<div className='flex items-center gap-4 transition-transform hover:translate-x-1'>
										<div className='p-2 bg-primary/10 rounded-full'>
											<Linkedin className='h-6 w-6 text-primary' />
										</div>
										<div>
											<p className='font-medium'>LinkedIn</p>
											<p className='text-sm text-muted-foreground'>
												linkedin.com/in/vasyl-bakhmut-1961a411b
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</AnimateInView>
						<AnimateInView delay={0.2}>
							<Card className='transition-all hover:shadow-md'>
								<CardHeader>
									<CardTitle>Availability</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										I'm currently available for freelance work and full-time
										opportunities. My typical response time is within 24 hours.
									</p>
									<div className='mt-4 flex items-center gap-2'>
										<div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></div>
										<span className='text-sm font-medium'>
											Available for hire
										</span>
									</div>
								</CardContent>
							</Card>
						</AnimateInView>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
