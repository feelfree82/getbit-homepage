
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-bg-01 py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Security Badge */}
        <div className="inline-flex items-center bg-brand-green text-text-primary-white px-6 py-3 rounded-full mb-12 font-dm-mono text-sm">
          <Shield className="w-4 h-4 mr-2" />
          Bank-Grade Security
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-dm-serif text-text-primary-dark mb-8 leading-tight">
          Bitcoin Made{' '}
          <span className="text-brand-green">Simple</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl text-text-secondary-dark font-dm-mono max-w-xl mx-auto mb-12">
          Secure. Fast. Trusted by 50,000+ traders across India.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button className="bg-brand-green text-text-primary-white hover:bg-green-700 font-dm-mono px-12 py-4 text-lg">
            Buy Bitcoin Now
          </Button>
          <Button variant="outline" className="border-text-primary-dark text-text-primary-dark hover:bg-gray-50 font-dm-mono px-12 py-4 text-lg">
            Learn More
          </Button>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-dm-serif text-text-primary-dark mb-2">50K+</div>
            <div className="text-text-secondary-dark font-dm-mono text-sm">Active Traders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-dm-serif text-text-primary-dark mb-2">₹1000Cr+</div>
            <div className="text-text-secondary-dark font-dm-mono text-sm">Volume Traded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-dm-serif text-text-primary-dark mb-2">99.9%</div>
            <div className="text-text-secondary-dark font-dm-mono text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-dm-serif text-text-primary-dark mb-2">24/7</div>
            <div className="text-text-secondary-dark font-dm-mono text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
