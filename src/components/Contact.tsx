
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-bg-01">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-dm-serif text-text-primary-dark mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            Join thousands of traders who trust GetBit for their Bitcoin investments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-bg-02 p-8 rounded-2xl shadow-sm border border-color-border">
            <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-6">
              Get Started Today
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="font-dm-mono" />
                <Input placeholder="Last Name" className="font-dm-mono" />
              </div>
              <Input type="email" placeholder="Email Address" className="font-dm-mono" />
              <Input type="tel" placeholder="Phone Number" className="font-dm-mono" />
              <Button className="w-full bg-brand-green text-text-primary-white hover:bg-green-700 font-dm-mono py-3">
                Start Trading
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-8">
                Need Help?
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-dm-serif text-text-primary-dark">Email Support</div>
                    <div className="text-text-secondary-dark font-dm-mono">support@getbit.in</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-dm-serif text-text-primary-dark">24/7 Support</div>
                    <div className="text-text-secondary-dark font-dm-mono">+91 80 4567 8900</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
