import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import EditorialSection from '@/components/EditorialSection/EditorialSection';
import ScienceSection from '@/components/ScienceSection/ScienceSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import CTABanner from '@/components/CTABanner/CTABanner';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <EditorialSection />
      <ScienceSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
