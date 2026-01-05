import { useEffect, useState, useRef } from 'react';
import { Package, Wind, Award, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: 35,
    suffix: '+',
    label: 'Cleanroom Equipments & Infrastructure Products',
  },
  {
    icon: Wind,
    value: 31,
    suffix: '+',
    label: 'HVAC Projects Completed',
  },
  {
    icon: Award,
    value: 'ISO 9001:2015',
    suffix: '',
    label: 'QCFI, NFPA, AIF Certified',
  },
  {
    icon: MapPin,
    value: 4,
    suffix: '',
    label: 'Pan-India Offices',
  },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export function StatsBar() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container-custom">
        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isNumber = typeof stat.value === 'number';
              const numericValue = typeof stat.value === 'number' ? stat.value : 0;
              const { count, ref } = useCountUp(numericValue);

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`p-6 md:p-8 text-center ${
                    index < stats.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-border' : ''
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                    {isNumber ? count : stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
