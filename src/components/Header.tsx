import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-bg-01 border-b">
      <div className="container mx-auto px-4 py-4 content-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="logo" style={{ width: '236px' }}>
              <img src="../img/logo.svg" alt="GetBit.in" />
            </div>
            {/* New Feature Banner 
        <div className="inline-flex items-center bg-text-primary-dark text-text-primary-white px-4 py-2 rounded-full mb-8 font-dm-mono text-sm announcement">
          <span className="bg-brand-green text-text-primary-white px-2 py-1 rounded-full text-xs mr-3">
            New
          </span>
          <span>Make your Bitcoin journey secure with{' '}</span>
          <span className="ml-1 font-medium">Multisig Theya Wallet →</span>
        </div>
             {/*<nav className="hidden md:flex space-x-6 font-dm-mono text-sm">
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
            </nav>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
