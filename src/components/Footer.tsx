import React from 'react';
import { Twitter, Linkedin, Instagram, Mail, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full rounded-t-lg">
      <div className="w-full px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 max-w-7xl mx-auto">
          

          {/* Center - Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-dm-mono text-gray-300">
            <a 
            href="mailto:care@getbit.in" 
            className="flex items-center gap-2 hover:text-brand-green transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Write to us: care@getbit.in</span>
          </a>
            
          </div>

          {/* Right - Social Media & App Store */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/getbitdotin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/GetBitDotMoney" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-brand-green transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/getbit.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-brand-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* App Store Badges */}
            <div className="flex gap-3">
              {/* Web Version Button */}
              <a 
                href="https://www.getbit.in/#/mobile_number_view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-md h-11 bg-black dark:bg-white flex items-center px-4 border border-gray-500 hover:opacity-90 transition-opacity"
              >
                <div className="flex flex-col items-center justify-center text-white dark:text-black">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    <small className="text-sm font-semibold tracking-tight">Web version</small>
                  </div>
                </div>
              </a>

              <a 
                href="#" 
                className="block opacity-50 cursor-not-allowed" 
                aria-disabled="true" 
                title="Coming soon"
              >
                <img 
                  src="/img/apple-download-black-btn.svg" 
                  alt="Download on the App Store" 
                  className="h-11 w-auto"
                />
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.getbitmoney.getbit&hl=en_IN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img 
                  src="/img/google-play-button.png" 
                  alt="Get it on Google Play" 
                  className="h-11 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-dm-mono max-w-7xl mx-auto">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-brand-green transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            </div>

            {/* Left - Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/img/logo-footer.svg" 
              alt="GetBit Logo" 
              className="h-8 w-auto"
            />
          </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p> 2025, All rights reserved by GetBit</p>
              <p className="text-xs mt-1">Built by GetBit Team v1.0.20</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
