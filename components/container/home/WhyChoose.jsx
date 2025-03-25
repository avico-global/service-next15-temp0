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
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});
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
    <FullContainer className="bg-gray-50 py-10">
      <Container className="">
        <div className="flex flex-col md:flex-row h-fit gap-8 items-center">
          <div className="w-fit md:pr-10">
            <span className="inline-block py-1 uppercase text-amber-600 font-medium rounded-full mb-4">
              {data?.tagline}
            </span>

            <h2 className={`text-2xl md:text-3xl font-bold ${montserrat.className} text-primary mb-4`}>
              {data?.heading}
            </h2>

            <div className="space-y-1">
              {data?.features?.map((feature, index) => {
                // Get the actual icon component from the mapping
                const IconComponent = iconMapping[feature.icon] || Award; // Fallback to Award if not found

                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className={`text-lg md:text-xl text-primary font-extralight mb-1`}>
                        {feature.title}
                      </h3>
                      {/* {feature.description && (
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      )} */}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap w-full justify-start items-center gap-4">
              <CallButton phone={phone} />
              <QuoteButton phone={phone} />
            </div>
          </div>

          <div className="flex-1 w-full md:w-1/2 lg:w-3/5 h-full relative">
            <div className="overflow-hidden rounded-md shadow-2xl h-[360px] w-full relative">
              <Image
                src={image}
                alt="Professional chimney services"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
