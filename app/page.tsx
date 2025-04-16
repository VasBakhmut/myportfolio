import { ScrollProgress } from '@/components/scroll-progress'

import { SectionDivider } from '@/components/section-divider'

import Header from '@/components/Sections/Header'
import Hero from '@/components/Sections/Hero'
import Stats from '@/components/Sections/Stats'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Projects from '@/components/Sections/Projects'
import Testimonials from '@/components/Sections/Testimonials'
import Certifications from '@/components/Sections/Certifications'
import Experience from '@/components/Sections/Experience'
import Blog from '@/components/Sections/Blog'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Sections/Footer'

export default function Portfolio() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Scroll Progress Indicator */}
			<ScrollProgress />
			{/* Header */}
			<Header />
			<main className='container py-8 md:py-12'>
				{/* Hero Section with Animated Background */}
				<Hero />
				{/* Stats Section */}
				<Stats />
				<SectionDivider />
				{/* About Me Section */}
				<About />
				<SectionDivider />
				{/* Skills Section with Progress Bars */}
				<Skills />
				<SectionDivider />
				{/* Projects Section with 3D Cards */}
				<Projects />
				<SectionDivider />
				{/* Testimonials Section */}
				{/* <Testimonials />
				<SectionDivider /> */}
				{/* Certifications Section */}
				<Certifications />
				<SectionDivider />
				{/* Experience & Education Section */}
				<Experience />
				<SectionDivider />
				{/* Blog Section */}
				{/* <Blog />
				<SectionDivider /> */}
				{/* Contact Section */}
				<Contact />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	)
}
