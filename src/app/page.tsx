import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import PartnersSection from "@/components/sections/partners";
import AboutUs from "@/components/sections/about-us";
// import BrandLogos from "@/components/sections/brand-logos";
import ServicesSection from "@/components/sections/services-cards";
import PricingSection from "@/components/sections/pricing";
import TestimonialsSection from "@/components/sections/testimonials";
import CTABottom from "@/components/sections/cta-bottom";
import Footer from "@/components/sections/footer";
import FloatingActions from "@/components/sections/FloatingActions";
import dynamic from 'next/dynamic';

const BrandLogos = dynamic(() => import('@/components//sections/brand-logos'), {
  ssr: true,
  loading: () => <div className="h-96 bg-black" aria-hidden="true" />
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <PortfolioGrid />
      <PartnersSection />
      <AboutUs />
      <ServicesSection />
      <BrandLogos />
      <PricingSection />
      <TestimonialsSection />
      <CTABottom />
      <Footer />
      <FloatingActions />
    </main>
  );
}
