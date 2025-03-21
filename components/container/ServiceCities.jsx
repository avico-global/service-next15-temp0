import React from "react";
import Container from "../common/Container";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import FullContainer from "../common/FullContainer";

export default function ServiceCities({ data }) {
  const cities = data?.list || [];

  return (
    <FullContainer
      className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
      id="locations"
    >
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map.webp"
          alt="Service Cities"
          className="w-full h-full object-cover object-center opacity-10"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/50"></div>
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block uppercase text-amber-600 font-semibold mb-5">
            {data?.tagline}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-5">
            {data?.heading}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">{data?.description}</p>
        </motion.div>

        {/* Simple City Listing with grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group flex items-center gap-3"
            >
              <div
                className="min-w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 
                  group-hover:bg-[#002B5B] transition-all duration-300 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#002B5B] group-hover:text-white transition-colors" />
              </div>
              <span className="text-gray-700 group-hover:text-[#002B5B] font-medium transition-all duration-300">
                {city}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 pt-6 border-t border-gray-100 bg-white rounded-xl shadow-lg p-8 md:p-10 w-full">
          <p className="text-gray-500">
            <span className="font-semibold text-[#002B5B]">
              {cities.length}
            </span>{" "}
            cities served across Florida
          </p>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-[#002B5B]/80 font-medium">
            Don't see your city?{" "}
            <a
              href="#contact"
              className="text-amber-600 hover:underline cursor-pointer font-semibold"
            >
              Contact us
            </a>{" "}
            to check if we serve your area!
          </p>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
