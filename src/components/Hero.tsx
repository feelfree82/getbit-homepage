
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-bg-01 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* New Feature Banner */}
        <div className="inline-flex items-center bg-text-primary-dark text-text-primary-white px-4 py-2 rounded-full mb-8 font-dm-mono text-sm">
          <span className="bg-brand-green text-text-primary-white px-2 py-1 rounded-full text-xs mr-3">
            New
          </span>
          Make your Bitcoin journey secure with{' '}
          <span className="text-brand-green ml-1 font-medium">Advanced Security →</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-dm-serif text-text-primary-dark mb-6 leading-tight">
          A Bitcoin exchange that{' '}
          <br />
          works like an{' '}
          <span className="text-brand-green">Expert</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto mb-8 leading-relaxed">
          Great traders deserve a platform that does it all, from secure Bitcoin purchases 
          to smooth transactions, helping you invest and track performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="bg-text-primary-dark text-text-primary-white hover:bg-gray-800 font-dm-mono px-8 py-3 flex items-center gap-2">
            <Star className="w-4 h-4" />
            Start Trading
          </Button>
          <Button variant="outline" className="border-text-primary-dark text-text-primary-dark hover:bg-gray-50 font-dm-mono px-8 py-3 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Book a Call
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-text-secondary-dark font-dm-mono text-sm">Trusted by 50,000+ traders</div>
          <div className="text-text-secondary-dark font-dm-mono text-sm">₹1000+ Crores traded</div>
          <div className="text-text-secondary-dark font-dm-mono text-sm">99.9% uptime</div>
          <div className="text-text-secondary-dark font-dm-mono text-sm">24/7 support</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
