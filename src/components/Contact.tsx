
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-bg-01">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dm-serif text-text-primary-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            Have questions about Bitcoin trading? Our expert team is here to help you 
            navigate your cryptocurrency journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-bg-02 p-8 rounded-lg shadow-sm border border-color-border">
            <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="font-dm-mono"
                />
                <Input 
                  placeholder="Last Name" 
                  className="font-dm-mono"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="font-dm-mono"
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="font-dm-mono"
              />
              <textarea 
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-3 py-2 border border-color-border rounded-md font-dm-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <Button className="w-full bg-brand-green text-text-primary-white hover:bg-green-700 font-dm-mono">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-green mt-1" />
                  <div>
                    <h4 className="font-dm-serif text-text-primary-dark mb-1">Address</h4>
                    <p className="text-text-secondary-dark font-dm-mono">
                      WeWork Galaxy, 43, Residency Road,<br />
                      Bangalore, Karnataka 560025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-green mt-1" />
                  <div>
                    <h4 className="font-dm-serif text-text-primary-dark mb-1">Phone</h4>
                    <p className="text-text-secondary-dark font-dm-mono">+91 80 4567 8900</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-green mt-1" />
                  <div>
                    <h4 className="font-dm-serif text-text-primary-dark mb-1">Email</h4>
                    <p className="text-text-secondary-dark font-dm-mono">support@getbit.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-green mt-1" />
                  <div>
                    <h4 className="font-dm-serif text-text-primary-dark mb-1">Business Hours</h4>
                    <p className="text-text-secondary-dark font-dm-mono">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 6:00 PM
                    </p>
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
