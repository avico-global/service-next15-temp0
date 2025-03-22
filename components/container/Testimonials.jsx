import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";

// Helper function to render star ratings
const StarRating = ({ rating }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "#FBBF24" : "none"}
          stroke={i < rating ? "#FBBF24" : "#D1D5DB"}
          className="mr-1"
        />
      ))}
    </div>
  );
};

export default function Testimonials({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Number of testimonials to show per page based on screen size
  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 3,
  };

  const testimonials = data?.list || [];

  // Calculate total pages
  const totalPages = Math.ceil(testimonials?.length / itemsPerPage.lg) || 0;

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    const startIdx = currentIndex * itemsPerPage.lg;
    return testimonials?.slice(startIdx, startIdx + itemsPerPage.lg);
  };

  return (
    <FullContainer
      id="testimonials"
      className="bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block uppercase text-amber-600 font-medium rounded-full mb-4">
            {data?.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {data?.heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data?.description}</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials()?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-[0_20px_50px_rgba(0,43,91,0.1)] overflow-hidden hover:shadow-[0_25px_60px_rgba(0,43,91,0.15)] transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>

                <p className="text-gray-700 italic relative">
                  <span className="text-[#E56B6F] text-4xl absolute -top-2 -left-1 opacity-20">
                    "
                  </span>
                  <span className="pl-4">{testimonial.quote}</span>
                  <span className="text-[#E56B6F] text-4xl absolute bottom-0 right-0 opacity-20">
                    "
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#002B5B]/80 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2 items-center">
              {[...Array(totalPages)]?.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#002B5B]"
                      : "w-2.5 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#002B5B]/80 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
