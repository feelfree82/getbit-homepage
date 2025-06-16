
import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-primary-dark text-text-primary-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-dm-serif mb-4">GetBit.in</h3>
            <p className="text-gray-300 font-dm-mono text-sm leading-relaxed mb-6">
              India's most trusted Bitcoin exchange. Trade with confidence, 
              invest with security.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-300 hover:text-brand-green cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-brand-green cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-brand-green cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-300 hover:text-brand-green cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-dm-serif text-lg mb-4">Product</h4>
            <ul className="space-y-2 font-dm-mono text-sm">
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Buy Bitcoin</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Sell Bitcoin</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Trading Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-dm-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2 font-dm-mono text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-dm-serif text-lg mb-4">Support</h4>
            <ul className="space-y-2 font-dm-mono text-sm">
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-dm-mono text-sm mb-4 md:mb-0">
              © 2024 GetBit.in. All rights reserved.
            </p>
            <div className="flex space-x-6 font-dm-mono text-sm text-gray-400">
              <span>Licensed by RBI</span>
              <span>ISO 27001 Certified</span>
              <span>SEBI Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
