
import React from 'react';
import { Award, Users, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Traders' },
    { icon: Shield, value: '100%', label: 'Security Record' },
    { icon: Award, value: '2020', label: 'Founded' },
  ];

  return (
    <section id="about" className="py-24 bg-bg-02">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dm-serif text-text-primary-dark mb-6">
            India's Most Trusted Bitcoin Exchange
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            Built by traders, for traders. We combine cutting-edge security 
            with regulatory compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-text-primary-dark mx-auto mb-3" />
              <div className="text-2xl font-dm-serif text-text-primary-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-dm-mono text-text-secondary-dark">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
