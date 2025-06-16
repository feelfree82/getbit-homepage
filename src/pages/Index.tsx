
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import AppShowcase from '@/components/AppShowcase';
import Features from '@/components/Features';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-01">
      <Header />
      <Hero />
      <Testimonial />
      <AppShowcase />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
