
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-bg-02 border-b border-color-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/605ae7b9-6314-496c-834e-b578bca5bed8.png" 
                alt="GetBit - The Bitcoin Only Company" 
                className="h-12"
              />
            </div>
            <nav className="hidden md:flex space-x-6 font-dm-mono text-sm">
              <a href="#features" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Features
              </a>
              <a href="#about" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                About
              </a>
              <a href="#contact" className="text-text-secondary-dark hover:text-text-primary-dark transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <Button className="bg-text-primary-dark text-text-primary-white font-dm-mono hover:bg-gray-800">
            Start Trading
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
