import React, { useState } from 'react';
import Container from '../common/Container';

// Sample testimonials data matching exactly what's in the image
const testimonialData = [
  {
    name: "Linda",
    location: "Tampa, FL",
    text: "Tampa Chimney Services saved us! They repaired our cracked chimney crown and stopped water leaks. Professional, fast, and affordable. Highly recommend!"
  },
  {
    name: "Tom Peterson",
    location: "Riverview, FL",
    text: "Great experience! They cleaned our flue, installed a new cap, and explained everything. Fair prices and top-notch service. Will definitely use them again!"
  },
  // You can add more testimonials here for pagination
];

const Testimonials = ({ testimonials = testimonialData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Calculate the number of pages (showing 2 testimonials per page)
  const pageCount = Math.ceil(testimonials.length / 2);
  
  // Generate array for pagination dots
  const paginationDots = Array.from({ length: pageCount }, (_, i) => i);
  
  // Get current page testimonials
  const getCurrentPageTestimonials = () => {
    const startIndex = activeIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };
  
  return (
    <section className="testimonials-section py-16">
      <Container className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center  text-blue-900 mb-3">Our Happy Clients</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {getCurrentPageTestimonials().map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-1 py-8 px-10 border border-primary  rounded-3xl flex flex-col"
            >
              <p className="text-center text-gray-900 italic mb-8 text-lg lg:text-xl leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto text-center">
                <h4 className="text-2xl text-blue-800 font-bold mb-1">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots */}
        {pageCount > 1 && (
          <div className="flex justify-center gap-3">
            {paginationDots.map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setActiveIndex(dotIndex)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === dotIndex 
                    ? 'bg-gray-800 w-3' 
                    : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to page ${dotIndex + 1}`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
