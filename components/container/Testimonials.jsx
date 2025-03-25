import React, { useState, useEffect, useRef } from 'react';
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
  {
    name: "Sarah Johnson",
    location: "Clearwater, FL",
    text: "We had a major chimney leak during a storm. They responded quickly, fixed the issue, and even helped with insurance paperwork. Outstanding service!"
  },
  {
    name: "Mike Davis",
    location: "St. Petersburg, FL",
    text: "They rebuilt our chimney that was damaged in a storm. The work was meticulous and the crew was professional. Very impressed with their attention to detail."
  }
];

const Testimonials = ({ testimonials = testimonialData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  
  // Calculate the number of pages (showing 2 testimonials per page)
  const pageCount = Math.ceil(testimonials.length / 2);
  
  // Generate array for pagination dots
  const paginationDots = Array.from({ length: pageCount }, (_, i) => i);

  const goToSlide = (index) => {
    // Determine slide direction
    if (index > activeIndex) {
      setSlideDirection('slide-left');
    } else if (index < activeIndex) {
      setSlideDirection('slide-right');
    }
    
    // Change slide after direction is set
    setActiveIndex(index);
  };

  // Auto-slide functionality with pause during interaction
  useEffect(() => {
    let interval;
    
    if (!isDragging) {
      interval = setInterval(() => {
        if (pageCount > 1) {
          const nextIndex = (activeIndex + 1) % pageCount;
          goToSlide(nextIndex);
        }
      }, 6000); // Change slides every 6 seconds
    }

    return () => clearInterval(interval);
  }, [activeIndex, pageCount, isDragging]);
  
  // Get current page testimonials
  const getCurrentPageTestimonials = () => {
    const startIndex = activeIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };
  
  // Touch/mouse event handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    
    // Work with both mouse and touch events
    const clientX = e.type.includes('mouse') 
      ? e.clientX 
      : e.touches[0].clientX;
    
    setStartPos(clientX);
    
    // Stop any ongoing animation
    cancelAnimationFrame(animationRef.current);
  };
  
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    // Work with both mouse and touch events
    const clientX = e.type.includes('mouse') 
      ? e.clientX 
      : e.touches[0].clientX;
    
    const currentPosition = clientX;
    const diff = currentPosition - startPos;
    
    // Update translation with some resistance at the edges
    setCurrentTranslate(diff);
    
    // Apply translation
    if (sliderRef.current) {
      const maxTranslate = 100; // Limit drag distance
      const clampedTranslate = Math.max(Math.min(diff, maxTranslate), -maxTranslate);
      sliderRef.current.style.transform = `translateX(${clampedTranslate}px)`;
    }
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const threshold = 50; // Minimum drag distance to trigger slide change
    
    if (currentTranslate < -threshold && activeIndex < pageCount - 1) {
      // Dragged left (next slide)
      goToSlide(activeIndex + 1);
    } else if (currentTranslate > threshold && activeIndex > 0) {
      // Dragged right (previous slide)
      goToSlide(activeIndex - 1);
    }
    
    // Reset slider position
    if (sliderRef.current) {
      sliderRef.current.style.transform = '';
    }
    
    // Reset drag state
    setIsDragging(false);
    setCurrentTranslate(0);
  };
  
  // Mouse-specific event handlers
  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };
  
  return (
    <section className="testimonials-section py-16 overflow-hidden">
      <Container className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Happy Clients</h2>
        
        <div 
          ref={sliderRef}
          className={`slider-container ${slideDirection} ${isDragging ? 'dragging' : ''}`}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slider-content flex flex-col borders md:flex-row gap-8 mb-10">
            {getCurrentPageTestimonials().map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-1 py-8 px-10 border border-blue-900  rounded-3xl flex flex-col"
              >
                <p className="text-center text-gray-900 italic  mb-8 text-lg md:text-xl  leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto text-center">
                  <h4 className="text-2xl text-blue-800 font-bold mb-1">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots */}
        {pageCount > 1 && (
          <div className="flex justify-center gap-3">
            {paginationDots.map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => goToSlide(dotIndex)}
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
      
      <style jsx>{`
        .testimonials-section h2 {
          color: #0a3161;
          font-size: 2.25rem;
          margin-bottom: 2.5rem;
        }
        
        .testimonials-section .flex-1 {
          border-radius: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
      
        
        .testimonials-section h4 {
          color: #0a3161;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        
        .testimonials-section p.text-gray-600 {
          color: #6b7280;
        }
        
        /* Slider animations */
        .slider-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          cursor: grab;
          user-select: none;
          touch-action: pan-y;
        }
        
        .slider-container.dragging {
          cursor: grabbing;
          transition: none;
        }
        
        .slider-content {
          transition: transform 0.5s ease-in-out;
        }
        
        .slide-left .slider-content {
          animation: slideLeft 0.5s forwards;
        }
        
        .slide-right .slider-content {
          animation: slideRight 0.5s forwards;
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-10%); opacity: 0; }
          51% { transform: translateX(10%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(10%); opacity: 0; }
          51% { transform: translateX(-10%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
