'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Pricing from '@/components/pricing'
import WhyChooseUs from '@/components/why-choose-us'
import Doctors from '@/components/doctors'
import Testimonials from '@/components/testimonials'
import Gallery from '@/components/gallery'
import Booking from '@/components/booking'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
