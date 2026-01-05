import { MapPin, Phone, Mail, Quote } from 'lucide-react';
import logo from '@/assets/srcep-logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Cleanroom Manufacturing',
  'HVAC Consulting',
  'Turnkey Projects',
  'Purified Water Systems',
  'Lab Furniture',
  'Process Equipment',
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="SRCEP Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
              <div>
                <h3 className="font-display font-bold text-lg">SR Cleanroom</h3>
                <p className="text-sm text-primary-foreground/60">Engineering Project</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Contamination Control Projects Co. — Leading consultants and engineers for HVAC, Cleanrooms, and Pharmaceutical Turnkey Projects.
            </p>
            <div className="flex items-start gap-2 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
              <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-sm italic text-primary-foreground/80">
                "People do not care how much you know until they know how much you care."
                <span className="block text-primary-foreground/60 mt-1">— Teddy Roosevelt</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Registered Office</p>
                  <p className="text-sm text-primary-foreground/70">
                    First Floor, Real House, Prateen Chowkdi, GIDC, Ankleshwar - 393 002 (Gujarat)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Branch Office</p>
                  <p className="text-sm text-primary-foreground/70">
                    A-810, Signature 2, Sarkhej Okaf Road, Sarkhej, Ahmedabad
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919978386858" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  +91 9978386858
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:sales.srindustrial@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  sales.srindustrial@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} SR Cleanroom & Engineering Project. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
