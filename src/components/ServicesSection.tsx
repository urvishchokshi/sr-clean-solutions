import { Building2, Wind, Factory, Droplets, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building2,
    title: 'Cleanroom Manufacturers & Contractors',
    description: 'High-quality Cleanroom Wall Panels, Ceiling Panels, Light Fixtures, and Scientific Doors designed for hygiene and durability.',
    features: ['Wall Panels', 'Ceiling Panels', 'Light Fixtures', 'Scientific Doors'],
    color: 'primary',
  },
  {
    icon: Wind,
    title: 'HVAC Consultants & Contractors',
    description: 'Experts in Air Handling Units (AHU), Utility Piping, Ducting works, and Insulation. We regulate air for labs, hospitals, and commercial spaces.',
    features: ['Air Handling Units', 'Utility Piping', 'Ducting Works', 'Insulation'],
    color: 'secondary',
  },
  {
    icon: Factory,
    title: 'Pharmaceutical Turnkey Projects',
    description: 'Complete project management services including Cleanroom Design, HVAC Design, Regulatory Compliance, and Validation.',
    features: ['Cleanroom Design', 'HVAC Design', 'Regulatory Compliance', 'Validation'],
    color: 'primary',
  },
  {
    icon: Droplets,
    title: 'Purified Water Systems (PURIAX)',
    description: 'Turnkey contracts for RO-EDI, WFI Generation, Storage, and Distribution. Providing high-purity water solutions for the pharma industry.',
    features: ['RO-EDI Systems', 'WFI Generation', 'Storage', 'Distribution'],
    color: 'secondary',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Core Services &{' '}
            <span className="text-gradient-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions for pharmaceutical, healthcare, and industrial environments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'primary';
            
            return (
              <div
                key={index}
                className="group card-elevated p-6 md:p-8 hover:border-primary/30"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  isPrimary 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isPrimary
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
