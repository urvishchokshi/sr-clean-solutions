import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cleanroom.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cleanroom facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">ISO 9001:2015 Certified Company</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
            Shaping{' '}
            <span className="text-primary-light">Controlled</span>{' '}
            Environments
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-up delay-200">
            Leading Consultants & Engineers for HVAC, Cleanrooms, and Pharmaceutical Turnkey Projects. Serving Pharmaceuticals, Hospitals, Chemicals, and Food & Beverages industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Overview
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up delay-400">
            <p className="text-sm text-primary-foreground/60 mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center gap-8 text-primary-foreground/50">
              <span className="text-lg font-semibold">Sun Pharma</span>
              <span className="text-lg font-semibold">Glenmark</span>
              <span className="text-lg font-semibold">Lupin</span>
              <span className="text-lg font-semibold">Britannia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
}
