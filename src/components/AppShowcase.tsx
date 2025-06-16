
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Mail } from 'lucide-react';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState('email');

  const features = [
    'Add your logo & socials',
    'Write your own thank you message', 
    'Your name, your sender email',
    'Add your socials',
    'Drop event ties or surprise perks'
  ];

  return (
    <section className="py-20 bg-bg-02">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dm-serif text-text-primary-dark mb-6">
            Customize the full experience
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            From Bitcoin purchase to portfolio management, so your 
            audience always knows it's you.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto mb-12 bg-gray-100 p-1 rounded-full">
            <TabsTrigger 
              value="shop" 
              className="rounded-full font-dm-mono data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Shop
            </TabsTrigger>
            <TabsTrigger 
              value="checkout" 
              className="rounded-full font-dm-mono data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Checkout
            </TabsTrigger>
            <TabsTrigger 
              value="email" 
              className="rounded-full font-dm-mono data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Email
            </TabsTrigger>
            <TabsTrigger 
              value="order-mail" 
              className="rounded-full font-dm-mono data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Order Mail
            </TabsTrigger>
            <TabsTrigger 
              value="scan-app" 
              className="rounded-full font-dm-mono data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Scan App
            </TabsTrigger>
          </TabsList>

          <TabsContent value="shop" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-text-primary-dark rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-text-primary-white" />
                  </div>
                  <h3 className="text-3xl font-dm-serif text-text-primary-dark">
                    Shop That Feels Like You
                  </h3>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="font-dm-mono text-text-secondary-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="max-w-sm shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 bg-brand-green rounded-lg mx-auto mb-4"></div>
                      <h4 className="font-dm-serif text-lg mb-2">Shop Preview</h4>
                      <p className="font-dm-mono text-sm text-text-secondary-dark">
                        Your Bitcoin shop experience
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="checkout" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-text-primary-dark rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-text-primary-white" />
                  </div>
                  <h3 className="text-3xl font-dm-serif text-text-primary-dark">
                    Checkout That Feels Like You
                  </h3>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="font-dm-mono text-text-secondary-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="max-w-sm shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 bg-brand-green rounded-lg mx-auto mb-4"></div>
                      <h4 className="font-dm-serif text-lg mb-2">Checkout Preview</h4>
                      <p className="font-dm-mono text-sm text-text-secondary-dark">
                        Seamless Bitcoin purchase flow
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-text-primary-dark rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-text-primary-white" />
                  </div>
                  <h3 className="text-3xl font-dm-serif text-text-primary-dark">
                    Emails That Feel Like You
                  </h3>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="font-dm-mono text-text-secondary-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/98311dc8-0354-441c-80e6-80539ebb4932.png" 
                    alt="Email interface showing customized Bitcoin transaction emails"
                    className="max-w-sm rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="order-mail" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-text-primary-dark rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-text-primary-white" />
                  </div>
                  <h3 className="text-3xl font-dm-serif text-text-primary-dark">
                    Order Mail That Feels Like You
                  </h3>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="font-dm-mono text-text-secondary-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="max-w-sm shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 bg-brand-green rounded-lg mx-auto mb-4"></div>
                      <h4 className="font-dm-serif text-lg mb-2">Order Confirmation</h4>
                      <p className="font-dm-mono text-sm text-text-secondary-dark">
                        Professional order confirmations
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scan-app" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-text-primary-dark rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-text-primary-white" />
                  </div>
                  <h3 className="text-3xl font-dm-serif text-text-primary-dark">
                    Scan App That Feels Like You
                  </h3>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="font-dm-mono text-text-secondary-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="max-w-sm shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 bg-brand-green rounded-lg mx-auto mb-4"></div>
                      <h4 className="font-dm-serif text-lg mb-2">Mobile App</h4>
                      <p className="font-dm-mono text-sm text-text-secondary-dark">
                        QR code scanning for Bitcoin
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AppShowcase;
