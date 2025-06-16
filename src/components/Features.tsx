
import React from 'react';
import { Shield, Zap, Lock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Cold storage, multi-sig wallets, and insurance protection'
    },
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Buy and sell in seconds with real-time pricing'
    },
    {
      icon: Lock,
      title: 'Regulatory Compliant',
      description: 'Fully licensed and compliant with Indian regulations'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated support team always ready to help'
    }
  ];

  return (
    <section id="features" className="py-24 bg-bg-02">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-dm-serif text-text-primary-dark mb-6">
            Why Choose GetBit?
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            Built for serious Bitcoin traders who demand security and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <feature.icon className="w-8 h-8 text-text-primary-white" />
              </div>
              <h3 className="text-xl font-dm-serif text-text-primary-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary-dark font-dm-mono">
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
