
import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-bg-02">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Customer testimonial" 
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
          </div>
          
          <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-4">
            Quick and Secure Trading
          </h3>
          
          <blockquote className="text-lg text-text-secondary-dark font-dm-mono mb-6 leading-relaxed">
            "We've traded thousands of Bitcoin transactions daily - GetBit's 
            platform is the only thing that keeps us confident and secure."
          </blockquote>
          
          <cite className="text-sm font-dm-mono text-text-secondary-dark">
            Raj Patel, Crypto Investor, Mumbai
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
