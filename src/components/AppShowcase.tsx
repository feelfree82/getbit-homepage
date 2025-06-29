import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AlignCenter, Check, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isVisible, setIsVisible] = useState(false);
  const tabValues = ['dashboard', 'checkout', 'email', 'order-mail', 'scan-app'];
  const sectionRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<any>(null);

  // App screenshots for the carousel
  const appScreenshots = [
    { id: 1, src: '/img/1.jpg', alt: 'App Screenshot 1' },
    { id: 2, src: '/img/2.jpg', alt: 'App Screenshot 2' },
    { id: 3, src: '/img/3.jpg', alt: 'App Screenshot 3' },
    { id: 4, src: '/img/4.jpg', alt: 'App Screenshot 4' },
    { id: 5, src: '/img/5.jpg', alt: 'App Screenshot 5' },
    { id: 6, src: '/img/6.jpg', alt: 'App Screenshot 6' },
    { id: 7, src: '/img/7.jpg', alt: 'App Screenshot 7' },
    { id: 8, src: '/img/8.jpg', alt: 'App Screenshot 8' },
    { id: 9, src: '/img/9.jpg', alt: 'App Screenshot 9' },
    { id: 10, src: '/img/10.jpg', alt: 'App Screenshot 10' },
    { id: 11, src: '/img/11.jpg', alt: 'App Screenshot 11' },
    { id: 12, src: '/img/12.jpg', alt: 'App Screenshot 12' },
  ];

  // Map tabs to background colors
  const backgroundColors = {
    'dashboard': 'bg-green-50',
    'checkout': 'bg-pink-50',
    'email': 'bg-blue-50',
    'order-mail': 'bg-gray-50',
    'scan-app': 'bg-purple-50'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      const currentIndex = tabValues.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabValues.length;
      setActiveTab(tabValues[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeTab, tabValues, isVisible]);

  // Auto-scroll carousel effect
  useEffect(() => {
    if (!api || !isVisible) return;
    
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    
    return () => clearInterval(autoScrollInterval);
  }, [api, isVisible]);

  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Variants for child animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.2
      }
    }
  };

  // Tab animation variants
  const tabVariants = {
    hover: { 
      scale: 1.05, 
      transition: { 
        duration: 0.2 
      } 
    },
    tap: { 
      scale: 0.95, 
      transition: { 
        duration: 0.1 
      } 
    }
  };

  // Custom hook to check if element is in view
  function useScrollInView(ref) {
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    return { isInView };
  }

  const { isInView } = useScrollInView(sectionRef);

  const features = [
    'Add your logo & socials',
    'Write your own thank you message', 
    'Your name, your sender email',
    'Add your socials',
    'Drop event ties or surprise perks'
  ];

  return (
    <section className={`py-10 rounded-xl ${backgroundColors[activeTab]}`} ref={sectionRef}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-dm-serif text-text-primary-dark mb-6">
          Built for Bitcoiners, Designed to Impress.
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full relative">
          <div className="mb-10 sm:mb-0">
            <TabsList className="bg-white/20 px-4 sm:px-8 py-4 rounded-full flex flex-wrap justify-center items-center gap-3 mx-auto w-full sm:w-auto">
            {/* Tab items */}
            {/* Tab items */}
            {/* Tab items */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabsTrigger 
                value="dashboard" 
                className="rounded-full font-dm-mono text-black bg-white data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Buy & Sell
              </TabsTrigger>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabsTrigger 
                value="checkout" 
                className="rounded-full font-dm-mono text-black bg-white data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                BTC SIP
              </TabsTrigger>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabsTrigger 
                value="email" 
                className="rounded-full font-dm-mono text-black bg-white data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Self Custody
              </TabsTrigger>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabsTrigger 
                value="order-mail" 
                className="rounded-full font-dm-mono text-black bg-white data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                KYC
              </TabsTrigger>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabsTrigger 
                value="scan-app" 
                className="rounded-full font-dm-mono text-black bg-white data-[state=active]:bg-brand-green data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Support
              </TabsTrigger>
            </motion.div>
          </TabsList>
          </div>

          <TabsContent value="dashboard" className="relative z-10">
            <div className="pt-10 sm:pt-0 min-h-[120px] sm:min-h-[100px] md:min-h-0">
              <motion.div 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants as any}
                className="container mx-auto px-4"
              >
                <motion.div variants={itemVariants as any} className="max-w-4xl mx-auto text-center">
                  <motion.h3 
                    variants={itemVariants as any}
                    className="text-2xl font-dm-serif text-text-secondary-dark mb-2 mt-6"
                  >
                    Buy & Sell Instantly
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants as any}
                    className="text-lg text-text-secondary-dark font-dm-mono"
                  >
                    Best Bitcoin Prices, Zero Surprises.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="checkout" className="relative z-10">
            <div className="pt-10 sm:pt-0 min-h-[120px] sm:min-h-[100px] md:min-h-0">
              <motion.div 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants as any}
                className="container mx-auto px-4"
              >
                <motion.div variants={itemVariants as any} className="max-w-4xl mx-auto text-center">
                  <motion.h3 
                    variants={itemVariants as any}
                    className="text-2xl font-dm-serif text-text-secondary-dark mb-2 mt-6"
                  >
                    SIP That Grows With You
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants as any}
                    className="text-lg text-text-secondary-dark font-dm-mono"
                  >
                    Start small, go long.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="relative z-10">
            <div className="pt-10 sm:pt-0 min-h-[120px] sm:min-h-[100px] md:min-h-0">
              <motion.div 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants as any}
                className="container mx-auto px-4"
              >
                <motion.div variants={itemVariants as any} className="max-w-4xl mx-auto text-center">
                  <motion.h3 
                    variants={itemVariants as any}
                    className="text-2xl font-dm-serif text-text-secondary-dark mb-2 mt-6"
                  >
                    Self Custodial Wallet
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants as any}
                    className="text-lg text-text-secondary-dark font-dm-mono"
                  >
                    We do not store your Bitcoin, you do.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="order-mail" className="relative z-10">
            <div className="pt-10 sm:pt-0 min-h-[120px] sm:min-h-[100px] md:min-h-0">
              <motion.div 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants as any}
                className="container mx-auto px-4"
              >
                <motion.div variants={itemVariants as any} className="max-w-4xl mx-auto text-center">
                  <motion.h3 
                    variants={itemVariants as any}
                    className="text-2xl font-dm-serif text-text-secondary-dark mb-2 mt-6"
                  >
                    KYC & Wallet Setup
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants as any}
                    className="text-lg text-text-secondary-dark font-dm-mono"
                  >
                    Quick and secure identity verification.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="scan-app" className="relative z-10">
            <div className="pt-10 sm:pt-0 min-h-[120px] sm:min-h-[100px] md:min-h-0">
              <motion.div 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants as any}
                className="container mx-auto px-4"
              >
                <motion.div variants={itemVariants as any} className="max-w-4xl mx-auto text-center">
                  <motion.h3 
                    variants={itemVariants as any}
                    className="text-2xl font-dm-serif text-text-secondary-dark mb-2 mt-6"
                  >
                    24/7 Support
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants as any}
                    className="text-lg text-text-secondary-dark font-dm-mono"
                  >
                    We're here to help, anytime.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Carousel outside container for edge-to-edge display */}
      <div className="w-full mt-12 relative px-4" ref={carouselRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants as any}
          className="w-full max-w-6xl mx-auto"
        >
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {appScreenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl shadow-lg aspect-[9/16] bg-gray-100 dark:bg-gray-800">
                      <motion.img
                        variants={imageVariants as any}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-full object-cover transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 h-8 w-8" />
            <CarouselNext className="right-2 md:right-4 h-8 w-8" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
