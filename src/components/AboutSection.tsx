import { Target, Users, TrendingUp, Calendar } from 'lucide-react';

const highlights = [
  { icon: Calendar, label: 'Established', value: '2019' },
  { icon: Users, label: 'Team Members', value: '52+' },
  { icon: TrendingUp, label: 'Goal by 2030', value: '₹50 Cr' },
  { icon: Target, label: 'Vision', value: 'Excellence' },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About SRCEP
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              One Vision,{' '}
              <span className="text-gradient-primary">One Team</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SR Cleanroom & Engineering Project was established in 2019 by Mr. Vraj Shah with a vision to become a superior quality product manufacturer and service provider in the cleanroom segment.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our customer-centric approach, state-of-the-art infrastructure, and commitment to excellence form the cornerstones of our philosophy. With a goal to become a Rs. 50 Crore company by 2030, we have grown to a family of 52 team members across design, production, and installation.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 border border-border text-center"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl font-display font-bold text-gradient-primary mb-4">
                    2019
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Established with a vision for excellence
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
