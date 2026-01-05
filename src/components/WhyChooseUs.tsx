import { Shield, Palette, Award, HeadphonesIcon, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Quality',
    description: 'Compliant with global standards including USFDA, WHO, and CGMP certifications.',
    highlights: ['USFDA Compliant', 'WHO Standards', 'CGMP Certified'],
  },
  {
    icon: Palette,
    title: 'Customization',
    description: 'Impeccable designs based on user usage patterns and specific requirements.',
    highlights: ['Custom Designs', 'User-Centric', 'Flexible Solutions'],
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Team with wealth of experience in the pharmaceutical and cleanroom industry.',
    highlights: ['Industry Veterans', 'Technical Excellence', 'Proven Track Record'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'Knowledgeable staff available at every phase of the project lifecycle.',
    highlights: ['24/7 Support', 'Project Guidance', 'After-Sales Service'],
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why SRCEP
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose{' '}
            <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by industry leaders for quality, expertise, and unwavering commitment
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {reason.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
