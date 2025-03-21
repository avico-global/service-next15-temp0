import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../common/Container";
import {
  Clock,
  Star,
  Shield,
  Award,
  CheckCircle,
  Trophy,
  ThumbsUp,
  Phone,
  TextQuote,
} from "lucide-react";
import FullContainer from "@/components/common/FullContainer";
import Link from "next/link";

const iconMapping = {
  Award: Award,
  Clock: Clock,
  Star: Star,
  Shield: Shield,
  CheckCircle: CheckCircle,
  Trophy: Trophy,
  ThumbsUp: ThumbsUp,
};

export default function WhyChoose({ data, image, phone }) {
  return (
    <FullContainer className="bg-gray-50 py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-6 p-8 md:p-10"
          >
            <span className="inline-block py-1 uppercase text-amber-600 font-medium rounded-full mb-4">
              {data?.tagline}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {data?.heading}
            </h2>

            <div className="space-y-6">
              {data?.features?.map((feature, index) => {
                // Get the actual icon component from the mapping
                const IconComponent = iconMapping[feature.icon] || Award; // Fallback to Award if not found

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap w-full justify-start items-center gap-4 mt-10">
              <Link
                href={`tel:${phone}`}
                className="bg-primary hover:bg-secondary text-white py-3 px-6 font-bold rounded-full items-center text-xl w-fit my-6 hidden md:flex gap-3"
              >
                <Phone className="w-6 h-6" />
                {phone}
              </Link>
              <button
                className={`px-8 py-3 w-auto inline-flex min-w-[220px] bg-[#6B9FE4] rounded-full text-lg font-semibold text-black  transition-colors`}
              >
                <div className="flex items-center gap-2">
                  <TextQuote className="w-6 h-6 font-thin" /> GET A QUOTE
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-6 relative h-full min-h-[500px]"
          >
            <div className="absolute top-6 left-6 right-6 bottom-6 z-10 border-4 border-white/80 rounded-3xl"></div>
            <div className="overflow-hidden rounded-3xl shadow-2xl h-full relative">
              <Image
                src={image}
                alt="Professional chimney services"
                className="object-cover h-full w-full transition-transform duration-700 hover:scale-105"
                priority
                fill
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </FullContainer>
  );
}
