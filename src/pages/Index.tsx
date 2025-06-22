import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import AppShowcase from '@/components/AppShowcase';
import Features from '@/components/Features';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay or wait for critical assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-01">
        <img src="/img/logo.png" alt="App Logo" className="h-16 w-auto animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-01">
      <Header />
      <Hero />
      <AppShowcase />
      <Features />
      <Testimonial className="mb-8" />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
