"use client";
import React, { useState } from "react";
import Container from "../common/Container";
import { Plus, Minus } from "lucide-react";
import FullContainer from "../common/FullContainer";

const faqs = [
  {
    question: "What is included in a chimney inspection?",
    answer: "Our comprehensive chimney inspection includes examining the exterior and interior structure, checking for cracks, leaks, or damage, inspecting the chimney cap and crown, evaluating the flue lining, and assessing overall safety and functionality."
  },
  {
    question: "How often should I have my chimney cleaned?",
    answer: "Most homeowners should have their chimneys cleaned and inspected at least once per year, ideally before the heating season begins. However, if you use your fireplace frequently (more than 3 times per week during winter), more frequent cleanings may be necessary."
  },
  {
    question: "What are the signs that my chimney needs repair?",
    answer: "Common signs include water damage or leaks, white staining (efflorescence), cracked or damaged masonry, rusted damper or firebox, damaged chimney crown, and a smoky fireplace or poor drafting. If you notice any of these signs, it's best to schedule an inspection."
  },
  {
    question: "Do you service gas fireplaces and furnace chimneys?",
    answer: "Yes, we service all types of chimneys including those for gas fireplaces and furnaces. While gas burns cleaner than wood, these systems still require regular maintenance to ensure proper venting and to prevent potential hazards."
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FullContainer className="py-20 bg-gray-50" id="faqs">
      <Container className="px-4">
        <div className="text-center mb-14">
          <span className="inline-block uppercase text-amber-600 font-semibold rounded-full mb-5">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#002B5B] mb-6">
            Got Questions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Find answers to the most common questions about our chimney services
            and maintenance below.
          </p>

          <div className="mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`w-full text-left py-3 px-4 bg-blue-900 text-white rounded-md flex items-center focus:outline-none ${
                    activeIndex === index ? 'bg-blue-800' : 'bg-blue-900'
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="flex-shrink-0 mr-3 text-lg">
                    {activeIndex === index ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </span>
                  <span className="font-medium">{faq.question}</span>
                </button>
                
                {/* Answer panel with smooth transition */}
                <div 
                  className={`transition-all bduration-500 ease-in-out overflow-hidden  ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b">
                    <p className="text-gray-700 text-start">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
