
import React from 'react';
import { Shield, Zap, Lock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Cold storage and multi-sig protection'
    },
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Buy and sell in seconds'
    },
    {
      icon: Lock,
      title: 'Regulatory Compliant',
      description: 'Fully licensed in India'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated support'
    }
  ];

  return (
    <section id="features" className="py-24 bg-bg-02">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-dm-serif text-text-primary-dark mb-4">
            Quick and Easy Setup
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-xl mx-auto">
            "We've scaled to thousands of Bitcoin transactions daily - GetBit's 
            dashboard is the only thing that keeps us sane."
          </p>
          <p className="text-sm text-text-secondary-dark font-dm-mono mt-2">
            Jake Bird (Crypto Manager, Alpha Partners)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <feature.icon className="w-6 h-6 text-text-primary-dark" />
              </div>
              <h3 className="text-lg font-dm-serif text-text-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary-dark font-dm-mono text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
