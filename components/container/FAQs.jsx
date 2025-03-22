"use client";
import React, { useState } from "react";
import Container from "../common/Container";
import { Plus, Minus } from "lucide-react";
import FullContainer from "../common/FullContainer";

const faqs = [
  {
    question: "What is included in a chimney inspection?",
    answer:
      "Chimney inspections typically involve a thorough check of your chimney's structure, flue, and components to identify any issues like blockages, cracks, or wear. We offer three levels of inspections (Level 1, Level 2, and Level 3) based on your needs and the condition of your chimney.",
  },
  {
    question: "How often should I have my chimney cleaned?",
    answer:
      "The National Fire Protection Association recommends having your chimney inspected and cleaned at least once a year. However, if you use your fireplace frequently, you might need more frequent cleanings. A professional inspection can determine if your chimney needs cleaning.",
  },
  {
    question: "What are the signs that my chimney needs repair?",
    answer:
      "Common signs include cracked or damaged flue tiles, spalling bricks, damaged mortar joints, white staining (efflorescence), rust on the damper or firebox, and water damage. If you notice any of these signs or experience poor drafting, it's time to call a professional.",
  },
  {
    question: "Do you service gas fireplaces and furnace chimneys?",
    answer:
      "Yes, we service all types of chimneys including those for gas fireplaces and furnaces. Each type requires specific expertise and maintenance procedures, which our trained professionals are equipped to handle.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <FullContainer className="py-20 bg-gray-50" id="faqs">
      <Container>
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

          <div className="w-full max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full relative"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full flex items-center justify-between py-3 px-4 text-left transition-all duration-300
                  ${
                    openIndex === index
                      ? "bg-[#002B5B] text-white font-medium rounded-t-xl"
                      : "bg-white text-[#002B5B] font-medium rounded-xl border border-gray-100 hover:bg-blue-50"
                  }`}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <div
                    className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                      openIndex === index ? "bg-blue-400/20" : "bg-blue-100"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="bg-white border-x border-b border-gray-100 rounded-b-xl">
                    <div className="px-4 py-3">
                      <p className="text-gray-600 leading-relaxed text-left">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
