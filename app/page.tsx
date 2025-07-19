import Navigation from '@/components/Navigation'
import SpotlightHero from '@/components/SpotlightHero'
import ServicesSection from '@/components/ServicesSection'
import ProjectGallery from '@/components/ProjectGallery'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SpotlightHero />
      <ServicesSection />
      <ProjectGallery />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
