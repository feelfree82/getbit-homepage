import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Phone } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import LiveBTCPrice from './LiveBTCPrice';
import '../App.css';

const slides = [
  { id: 1, image: '/img/slider1.png', alt: 'Bitcoin App Screenshot 1' },
  { id: 2, image: '/img/slider2.png', alt: 'Bitcoin App Screenshot 2' },
  { id: 3, image: '/img/slider3.png', alt: 'Bitcoin App Screenshot 3' },
  { id: 4, image: '/img/slider4.png', alt: 'Bitcoin App Screenshot 4' },
  { id: 5, image: '/img/slider5.png', alt: 'Bitcoin App Screenshot 5' },
  { id: 6, image: '/img/slider6.png', alt: 'Bitcoin App Screenshot 6' },
  ];

const Hero = () => {

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 text-center content-container">
       

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-dm-serif text-text-primary-dark mb-6 leading-tight">
          India's First <span className="text-brand-green">Bitcoin-Only </span> App With
          <span className="text-brand-green btc-orange-bg "><br/> True Self-Custody</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto mb-6 leading-relaxed">
          Yours to withdraw, whenever you want.<br/>
          Because Bitcoin means self-custody.
        </p>

        {/* Live BTC Price */}
        <div className="flex justify-center mb-8">
          <LiveBTCPrice />
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col items-center w-full gap-3 mb-10">
          {/* Store Buttons: stacked on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto justify-center items-center">
            <a href="#" className="block opacity-50 cursor-not-allowed" aria-disabled="true" title="Coming soon">
              <img 
                src="/img/apple-download-black-btn.svg" 
                alt="Download on the App Store" 
                className="h-[64.17px] w-[200px] rounded-lg object-contain" 
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
                className="h-[64.17px] w-[200px] rounded-lg object-contain" 
              />
            </a>
          </div>
          {/* Web Version Button: always below on md+ */}
          <a 
            href="https://www.getbit.in/#/mobile_number_view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-lg w-[200px] h-[64.17px] bg-black dark:bg-white flex items-center justify-center px-4 mt-2 md:mt-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col items-start justify-center text-white dark:text-black mt-1">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                <small className="text-sm font-medium leading-none">Start on the</small>
              </div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Web version</h3>
            </div>
          </a>
        </div>

        {/* Carousel Slider - Responsive */}
        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-16 px-4">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide) => (
                <CarouselItem key={slide.id} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="flex items-center justify-center rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="max-h-[70vh] w-auto object-contain transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 h-8 w-8" />
            <CarouselNext className="right-2 md:right-4 h-8 w-8" />
          </Carousel>
        </div>

        {/* BTC Price Display - Commented out due to import error */}
        {/* <div className="mb-10">
          <LiveBTCPrice />
        </div> */}

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
