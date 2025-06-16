
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-dm-serif text-text-primary-dark mb-8">
              India's Most Trusted Bitcoin Exchange
            </h2>
            <p className="text-xl text-text-secondary-dark font-dm-mono mb-12 leading-relaxed">
              Built by traders, for traders. We combine cutting-edge security 
              with regulatory compliance to deliver the most reliable Bitcoin 
              trading experience in India.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-brand-green mx-auto mb-3" />
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
          
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-green to-green-700 rounded-2xl p-12 text-white text-center">
              <div className="text-6xl mb-4">₿</div>
              <div className="text-2xl font-dm-serif mb-2">Secure Trading</div>
              <div className="font-dm-mono opacity-90">Zero security incidents since 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
