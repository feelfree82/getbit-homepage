import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-01">
      <div className="container mx-auto px-4 content-container">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 text-left">
            <h2 className="text-4xl md:text-5xl font-dm-serif text-text-primary-dark mb-8 text-left">
              What makes getbit special?
            </h2>
            
            <div className="space-y-6 text-text-secondary-dark font-dm-mono leading-relaxed text-left">
              <p className="text-lg text-left">
                GetBit is the only platform in India that lets you buy Bitcoin instantly straight from your 
                bank account and take full ownership by enabling you to withdraw into your self-
                custody. No distractions, no intermediaries, just a simple, secure way to own and 
                control your Bitcoin.
              </p>
              
              <blockquote className="border-l-4 border-brand-green bg-opacity-10 pl-6 py-4 my-8 text-left">
                <p className="text-2xl md:text-3xl font-dm-serif italic leading-relaxed text-brand-green pr-4">
                  "I built GetBit because I wanted a simple, trustworthy way to 
                  buy and own Bitcoin in India. No noise, no complexity, just Bitcoin done right. It's the 
                  solution I couldn't find anywhere else. Highly recommended."
                </p>
                <div className="mt-3 text-text-secondary-dark font-dm-serif text-text-primary-dark font-semibold text-left underline text-xl">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/img/ceo-abhay.png" 
                      alt="Abhay, Founder & CEO" 
                      className="w-15 h-15 rounded-full object-cover text-text-primary-dark"
                    />
                    <a href="https://www.linkedin.com/in/aabhay" target="_blank" rel="noopener noreferrer">Abhay - Founder & CEO, getbit</a>
                  </div>
                </div>
              </blockquote>
              
              <p className="text-lg text-left">
                To buy Bitcoin on GetBit, simply create an account and add funds through your 
                preferred payment method. The process is quick and hassle-free, allowing you to start 
                purchasing Bitcoin almost immediately.
              </p>
              
              <p className="text-lg text-left">
                If you wish to withdraw funds, you'll need to complete the Know Your Customer (KYC) 
                process by submitting identification documents, such as your PAN card. Once your 
                identity is verified, you'll be able to seamlessly transfer funds to your designated bank 
                account.
              </p>
              
              <p className="text-lg text-left">
                getbit prioritizes the safety of your transactions. With industry-leading security protocols 
                in place, you can trust that your personal information and financial activities are fully 
                protected throughout the process.
              </p>
              
              <p className="text-lg text-left">
                We believe in clear pricing — no hidden transfer fees. Just complete the KYC 
                process for secure, verified access to everything GetBit has to offer.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-yellow-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-dm-serif text-text-primary-dark mb-4">
                Contact us
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:care@getbit.in" 
                  className="text-blue-600 hover:text-blue-800 font-dm-mono underline block"
                >
                  care@getbit.in
                </a>
                
                <div className="text-sm text-text-secondary-dark font-dm-mono space-y-1">
                  <p className="font-semibold">REMIZO TECHNOLOGIES INDIA PRIVATE LIMITED</p>
                  <p>Corporate office: No 74, Mess Complex, 3rd Floor,</p>
                  <p>15th Cross Road, JP Nagar 3rd Phase,</p>
                  <p>Bangalore-560078, Karnataka IN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
