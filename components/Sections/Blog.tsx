import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'
import { BlogPostCard } from '@/components/blog-post-card'
import { blogPosts } from '@/lib/data'

function Blog() {
	return (
		<section id='blog' className='py-12 md:py-24 scroll-mt-16 bg-muted/30'>
			<div className='space-y-8'>
				<AnimateInView className='space-y-4 text-center'>
					<h2 className='text-3xl font-bold'>Blog</h2>
					<div className='w-20 h-1 bg-primary mx-auto'></div>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Thoughts, tutorials, and insights about web development and design.
					</p>
				</AnimateInView>

				<AnimateInView>
					<div className='flex justify-center mb-6'>
						<div className='inline-flex items-center rounded-md border p-1 bg-background'>
							<Button variant='ghost' size='sm' className='rounded-sm'>
								All
							</Button>
							<Button variant='ghost' size='sm' className='rounded-sm'>
								React
							</Button>
							<Button variant='ghost' size='sm' className='rounded-sm'>
								TypeScript
							</Button>
							<Button variant='ghost' size='sm' className='rounded-sm'>
								Performance
							</Button>
						</div>
					</div>
				</AnimateInView>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{blogPosts.map((post, index) => (
						<AnimateInView key={index} delay={index * 0.2}>
							<BlogPostCard {...post} />
						</AnimateInView>
					))}
				</div>

				<AnimateInView>
					<div className='flex justify-center mt-8'>
						<Button variant='outline' size='lg' className='gap-2 group'>
							View All Posts
							<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-2' />
						</Button>
					</div>
				</AnimateInView>
			</div>
		</section>
	)
}

export default Blog
