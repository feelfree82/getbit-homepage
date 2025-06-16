
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-bg-02 border-b border-color-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold font-dm-serif text-text-primary-dark">
              GetBit.in
            </div>
            <nav className="hidden md:flex space-x-6 font-dm-mono text-sm">
              <a href="#start" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Start Here
              </a>
              <a href="#benefits" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Benefits
              </a>
              <a href="#process" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Process
              </a>
              <a href="#compare" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Compare
              </a>
              <a href="#pricing" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Pricing
              </a>
              <a href="#faqs" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                FAQs
              </a>
            </nav>
          </div>
          <Button className="bg-text-primary-dark text-text-primary-white font-dm-mono hover:bg-gray-800">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
