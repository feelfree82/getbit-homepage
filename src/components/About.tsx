
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Founded in 2020 with a mission to democratize Bitcoin trading',
    'Over 50,000 satisfied customers across India',
    'Processed ₹1000+ Crores in Bitcoin transactions',
    'Zero security incidents since inception',
    'Regulatory compliant and fully licensed'
  ];

  return (
    <section id="about" className="py-20 bg-bg-02">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-dm-serif text-text-primary-dark mb-6">
              About GetBit.in
            </h2>
            <p className="text-lg text-text-secondary-dark font-dm-mono mb-8 leading-relaxed">
              We're India's most trusted Bitcoin exchange, built by traders for traders. 
              Our platform combines cutting-edge technology with regulatory compliance 
              to provide a secure, fast, and reliable Bitcoin trading experience.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <p className="text-text-secondary-dark font-dm-mono">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
              alt="Bitcoin trading dashboard" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-brand-green opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
