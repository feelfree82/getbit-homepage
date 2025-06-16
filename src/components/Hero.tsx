
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-bg-01 py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Security Badge */}
        <div className="inline-flex items-center bg-gray-100 text-text-primary-dark px-6 py-3 rounded-full mb-12 font-dm-mono text-sm">
          <Shield className="w-4 h-4 mr-2" />
          Bank-Grade Security
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-dm-serif text-text-primary-dark mb-8 leading-tight">
          A Bitcoin platform that{' '}
          <span className="text-brand-green">works</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl text-text-secondary-dark font-dm-mono max-w-2xl mx-auto mb-12">
          Secure transactions deserve a system that does it all, from buying Bitcoin 
          to helping you track and manage your investments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button className="bg-text-primary-dark text-text-primary-white hover:bg-gray-800 font-dm-mono px-12 py-4 text-lg">
            Get an Invite
          </Button>
          <Button variant="outline" className="border-text-primary-dark text-text-primary-dark hover:bg-gray-50 font-dm-mono px-12 py-4 text-lg">
            Book a Call
          </Button>
        </div>

        {/* Trust Logos */}
        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="text-2xl font-dm-serif text-text-secondary-dark">RBI</div>
          <div className="text-2xl font-dm-serif text-text-secondary-dark">SEBI</div>
          <div className="text-2xl font-dm-serif text-text-secondary-dark">ISO</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
