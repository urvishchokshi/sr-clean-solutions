import { useState } from 'react';
import { Beaker, Wind, Cog, FlaskConical, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'lab',
    name: 'Lab Furniture',
    icon: Beaker,
    products: ['Fume Hoods', 'Lab Benches', 'Storage Cabinets', 'Workstations', 'Chemical Storage'],
  },
  {
    id: 'cleanroom',
    name: 'Cleanroom Equipments',
    icon: FlaskConical,
    products: ['Passbox', 'LAF/RLAF', 'Air Showers', 'Bio Safety Cabinets', 'Sampling Booths'],
  },
  {
    id: 'ducting',
    name: 'Pre-Fabricated Ducting (DUCTLY)',
    icon: Wind,
    products: ['Galvanized Iron Ducts', 'UV Stabilized Plastic', 'Stainless Steel Ducts', 'Fabric Ducts'],
  },
  {
    id: 'process',
    name: 'Process Equipment',
    icon: Cog,
    products: ['Reactors & Vessels', 'Double Cone Blenders', 'Fluid Bed Dryers', 'Tablet Lines', 'Capsule Lines'],
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('lab');

  const activeProducts = categories.find(c => c.id === activeCategory);

  return (
    <section id="products" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Product{' '}
            <span className="text-gradient-primary">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            35+ specialized products for cleanroom and pharmaceutical applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Display */}
        {activeProducts && (
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              {(() => {
                const Icon = activeProducts.icon;
                return <Icon className="w-8 h-8 text-primary" />;
              })()}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {activeProducts.name}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {activeProducts.products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-muted/50 rounded-xl p-5 text-center hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {product}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">
                Looking for custom solutions? We specialize in tailored products.
              </p>
              <Button variant="cta">
                Request Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
