import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/testimonials-demo'
import { PricingSection } from '@/components/PricingSection'
import { Footerdemo } from '@/components/ui/footer-section'
import { Navbar1 } from '@/components/ui/navbar-1'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-white to-[#e3f2fd] text-[#1a237e] flex flex-col">
      <Navbar1 />
      <main className="flex flex-col pt-20">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footerdemo />
    </div>
  );
}
