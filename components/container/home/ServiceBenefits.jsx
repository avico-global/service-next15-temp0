import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../common/Container";
import { ChevronRight, Phone, TextQuote } from "lucide-react";
import FullContainer from "@/components/common/FullContainer";

export default function Benefits({ phone, data, image }) {
  const benefits = data?.list || [];

  return (
    <FullContainer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Service Background"
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block uppercase text-amber-400 font-medium rounded-full mb-4">
              {data?.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {data?.heading}
            </h2>
            <p className="text-gray-100 text-lg">{data?.description}</p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-primary font-bold text-xl mb-2">
                  {benefit?.title}
                </h3>
                <p className="text-gray-600">{benefit?.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap w-full justify-center items-center gap-4 mt-10">
            <Link
              href={`tel:${phone}`}
              className="bg-secondary hover:bg-primary text-white py-3 px-6 font-bold rounded-full items-center text-xl w-fit my-6 hidden md:flex gap-3"
            >
              <Phone className="w-6 h-6" />
              {phone}
            </Link>
            <button
              className={`px-8 py-3 w-auto inline-flex min-w-[220px] bg-[#83b9fe] rounded-full text-lg font-semibold text-black  transition-colors`}
            >
              <div className="flex items-center gap-2">
                <TextQuote className="w-6 h-6 font-thin" /> GET A QUOTE
              </div>
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
