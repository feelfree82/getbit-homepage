
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState('email');

  return (
    <section className="py-24 bg-bg-01">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-dm-serif text-text-primary-dark mb-6">
            Complete Bitcoin Experience
          </h2>
          <p className="text-lg text-text-secondary-dark font-dm-mono max-w-2xl mx-auto">
            From purchase to portfolio management, everything you need in one place.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 bg-gray-100 p-2 rounded-full h-14">
            <TabsTrigger 
              value="trading" 
              className="rounded-full font-dm-mono text-base data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Trading
            </TabsTrigger>
            <TabsTrigger 
              value="email" 
              className="rounded-full font-dm-mono text-base data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Communications
            </TabsTrigger>
            <TabsTrigger 
              value="mobile" 
              className="rounded-full font-dm-mono text-base data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Mobile App
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trading" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-4xl font-dm-serif text-text-primary-dark">
                  Professional Trading Platform
                </h3>
                <p className="text-lg font-dm-mono text-text-secondary-dark">
                  Advanced charting, real-time data, and institutional-grade execution.
                </p>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-md shadow-xl">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-brand-green to-green-700 rounded-xl p-8 text-center text-white">
                      <div className="text-3xl font-dm-serif mb-4">₹4,32,000</div>
                      <div className="font-dm-mono text-sm opacity-90">Current BTC Price</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-4xl font-dm-serif text-text-primary-dark">
                  Branded Communications
                </h3>
                <p className="text-lg font-dm-mono text-text-secondary-dark">
                  Professional emails and notifications that build trust.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/98311dc8-0354-441c-80e6-80539ebb4932.png" 
                  alt="Professional email communications"
                  className="max-w-md rounded-xl shadow-xl"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-4xl font-dm-serif text-text-primary-dark">
                  Mobile-First Experience
                </h3>
                <p className="text-lg font-dm-mono text-text-secondary-dark">
                  Trade Bitcoin anywhere with our secure mobile application.
                </p>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-md shadow-xl">
                  <CardContent className="p-8">
                    <div className="bg-gray-100 rounded-xl p-8 text-center">
                      <div className="w-16 h-16 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-white text-2xl">📱</div>
                      </div>
                      <div className="font-dm-serif text-lg mb-2">Mobile App</div>
                      <div className="font-dm-mono text-sm text-text-secondary-dark">
                        Available on iOS & Android
                      </div>
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
