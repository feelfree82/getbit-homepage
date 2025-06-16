import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState('email');

  return (
    <section className="py-24 bg-bg-01">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-dm-mono text-text-secondary-dark mb-4">Branding</div>
          <h2 className="text-4xl font-dm-serif text-text-primary-dark mb-6">
            Customize the full experience
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            From trading interface to confirmation emails, so your 
            users always know it's you.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12 bg-gray-100 p-1 rounded-lg h-12">
            <TabsTrigger 
              value="trading" 
              className="rounded font-dm-mono text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Trading
            </TabsTrigger>
            <TabsTrigger 
              value="checkout" 
              className="rounded font-dm-mono text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Checkout
            </TabsTrigger>
            <TabsTrigger 
              value="email" 
              className="rounded font-dm-mono text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Email
            </TabsTrigger>
            <TabsTrigger 
              value="order" 
              className="rounded font-dm-mono text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Order Mail
            </TabsTrigger>
            <TabsTrigger 
              value="mobile" 
              className="rounded font-dm-mono text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Scan App
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-dm-serif text-text-primary-dark">
                  Emails That Feel Like You
                </h3>
                <div className="space-y-4 font-dm-mono text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border-2 border-text-primary-dark flex items-center justify-center">
                      <div className="w-2 h-2 bg-text-primary-dark rounded-sm"></div>
                    </div>
                    <span className="text-text-secondary-dark">Add your logo & socials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border-2 border-text-primary-dark flex items-center justify-center">
                      <div className="w-2 h-2 bg-text-primary-dark rounded-sm"></div>
                    </div>
                    <span className="text-text-secondary-dark">Write your own thank you message</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border-2 border-text-primary-dark flex items-center justify-center">
                      <div className="w-2 h-2 bg-text-primary-dark rounded-sm"></div>
                    </div>
                    <span className="text-text-secondary-dark">Your name, your sender email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border-2 border-text-primary-dark flex items-center justify-center">
                      <div className="w-2 h-2 bg-text-primary-dark rounded-sm"></div>
                    </div>
                    <span className="text-text-secondary-dark">Add your socials</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/98311dc8-0354-441c-80e6-80539ebb4932.png" 
                  alt="Professional email communications"
                  className="max-w-md rounded-xl shadow-lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trading" className="mt-8">
            <div className="text-center py-16">
              <div className="text-6xl mb-4">₿</div>
              <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-2">Trading Interface</h3>
              <p className="text-text-secondary-dark font-dm-mono">Professional trading tools</p>
            </div>
          </TabsContent>

          <TabsContent value="checkout" className="mt-8">
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💳</div>
              <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-2">Checkout Process</h3>
              <p className="text-text-secondary-dark font-dm-mono">Seamless payment experience</p>
            </div>
          </TabsContent>

          <TabsContent value="order" className="mt-8">
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-2">Order Confirmations</h3>
              <p className="text-text-secondary-dark font-dm-mono">Automated order updates</p>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-dm-serif text-text-primary-dark mb-2">Mobile App</h3>
              <p className="text-text-secondary-dark font-dm-mono">Trade on the go</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AppShowcase;
