import { HeroSection } from '@/components/landing-page/hero-section'
import { FeaturesSection } from '@/components/landing-page/features-section'
import { TestimonialsSection } from '@/components/landing-page/testimonials-section'
import { PricingSection } from '@/components/landing-page/pricing-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
    </>
  )
}
