const clientLogos = [
  'Sun Pharma', 'Glenmark', 'Lupin', 'Britannia',
  'Cipla', 'Dr. Reddys', 'Torrent', 'Zydus',
  'Alkem', 'Intas', 'Ipca', 'Macleods',
  'Mankind', 'Jubilant', 'Hetero', 'Biocon',
  'Aurobindo', 'Cadila', 'Piramal', 'Wockhardt',
];

export function ClientsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Clientele
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            It is a Pleasure to{' '}
            <span className="text-gradient-primary">Learn & Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading names in Pharmaceuticals, Healthcare, and FMCG sectors
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="text-xl font-bold text-primary">
                    {client.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Join 50+ companies who trust SRCEP for their cleanroom and HVAC needs
          </p>
        </div>
      </div>
    </section>
  );
}
