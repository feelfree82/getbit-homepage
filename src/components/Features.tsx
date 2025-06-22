import React from 'react';
import { Shield, Zap, TrendingUp, Users, Clock, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Multi-layer security with cold storage and insurance protection'
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Buy and sell Bitcoin in seconds with real-time price updates'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Professional trading tools and market insights for better decisions'
    },
    {
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Dedicated support team available round the clock'
    },
    {
      icon: Clock,
      title: 'Quick Verification',
      description: 'Get verified in minutes, not days with our streamlined KYC'
    },
    {
      icon: Lock,
      title: 'Regulatory Compliant',
      description: 'Fully compliant with Indian cryptocurrency regulations'
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 content-container">
        <div className="text-center mb-16">

          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            From Bitcoin purchase to portfolio management, so your 
            investment journey is always smooth and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-lg shadow-sm border border-color-border hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <feature.icon className={`w-10 h-10 text-brand-green animate-icon-${index}`} />
              </div>
              <h3 className="text-xl font-dm-serif text-text-primary-dark mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-text-secondary-dark font-dm-mono leading-relaxed text-center">
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
