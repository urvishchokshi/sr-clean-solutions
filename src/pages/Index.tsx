import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProductsSection } from '@/components/ProductsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ClientsSection } from '@/components/ClientsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUs />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
