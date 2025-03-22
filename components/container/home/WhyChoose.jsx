import React from "react";
import Image from "next/image";
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
import CallButton from "@/components/CallButton";
import QuoteButton from "@/components/QuoteButton";

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
          <div className="md:col-span-6 p-8 md:p-10">
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
                  <div key={index} className="flex items-start gap-4 group">
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
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap w-full justify-start items-center gap-4 mt-10">
              <CallButton phone={phone} />
              <QuoteButton />
            </div>
          </div>

          <div className="md:col-span-6 relative h-full min-h-[500px]">
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
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
