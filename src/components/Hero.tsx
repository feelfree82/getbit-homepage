
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ExternalLink } from 'lucide-react';

const Hero = () => {
  const handleWebAppClick = () => {
    window.open('https://app.getbit.com', '_blank');
  };

  const handleiOSClick = () => {
    window.open('https://apps.apple.com/app/getbit', '_blank');
  };

  const handleAndroidClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.getbit', '_blank');
  };

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
          Bitcoin trading
          <br />
          <span className="text-brand-green">everywhere</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl text-text-secondary-dark font-dm-mono max-w-2xl mx-auto mb-12">
          Trade Bitcoin securely on any device. iOS, Android, or Web - 
          your portfolio follows you everywhere.
        </p>

        {/* Platform Download Buttons */}
        <div className="mb-8">
          <p className="text-sm font-dm-mono text-text-secondary-dark mb-6">
            Choose your platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* iOS App */}
            <Button 
              onClick={handleiOSClick}
              className="bg-text-primary-dark text-text-primary-white hover:bg-gray-800 font-dm-mono px-8 py-4 text-base flex items-center"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </Button>

            {/* Android App */}
            <Button 
              onClick={handleAndroidClick}
              className="bg-text-primary-dark text-text-primary-white hover:bg-gray-800 font-dm-mono px-8 py-4 text-base flex items-center"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5695.416.416 0 00-.5695.1518l-2.0266 3.5084C15.5027 8.2439 13.8204 7.8508 12.0003 7.8508s-3.5024.3931-5.1711 1.0221L4.8026 5.3645a.4161.4161 0 00-.5695-.1518.4161.4161 0 00-.1518.5695l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
              </svg>
              Download for Android
            </Button>

            {/* Web App */}
            <Button 
              onClick={handleWebAppClick}
              variant="outline" 
              className="border-text-primary-dark text-text-primary-dark hover:bg-gray-50 font-dm-mono px-8 py-4 text-base flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Open Web App
            </Button>
          </div>
        </div>

        {/* HNI CTA */}
        <div className="border-t border-color-border pt-8">
          <p className="text-sm font-dm-mono text-text-secondary-dark mb-4">
            High-volume trader?
          </p>
          <Button 
            variant="outline" 
            className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-dm-mono px-8 py-3"
          >
            Book Premium Consultation
          </Button>
        </div>

        {/* Trust Logos */}
        <div className="flex justify-center items-center space-x-12 opacity-60 mt-16">
          <div className="text-2xl font-dm-serif text-text-secondary-dark">RBI</div>
          <div className="text-2xl font-dm-serif text-text-secondary-dark">SEBI</div>
          <div className="text-2xl font-dm-serif text-text-secondary-dark">ISO</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
