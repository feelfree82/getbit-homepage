import React from 'react';

interface TestimonialProps {
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ className = '' }) => {
  const testimonials = [
    { text: "Best", highlight: "Bitcoin choice in India", rest: "." },
    { text: "Competitive prices, UPI deposits required." },
    { text: "My", highlight: "go-to app ." },
    { text: "GetBit helped me", highlight: "retire early" },
    { text: "Reduced miscommunication." },
    { text: "Managed my coins." },
    { text: "Stopped looking in multiple places for bitcoins." },
    { text: "Accountability has improved." },
    { text: "Highly recommend for", highlight: "SAT stackers", rest: "." },
    { text: "Better support across teams." },
    { text: "Able to get", highlight: "money out in record time", rest: "." },
    { text: "Ability to", highlight: "make better decisions", rest: "." },
    { text: "Great business values,", highlight: "great service." },
    { text: "Top experience for", highlight: "Bitcoin buyers", rest: "." },
    { text: "Easier to track transactions", rest: "." }
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 content-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dm-serif text-text-primary-dark mb-6">
            What our customers say
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-bg-02 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-text-primary-dark text-lg font-dm-mono leading-relaxed">
                "{testimonial.text}
                {testimonial.highlight && (
                  <span className="bg-yellow-200 px-1 rounded">
                    {testimonial.highlight}
                  </span>
                )}
                {testimonial.rest || ''}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
