import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Heading from "../common/Heading";
export default function ServiceCities({ data }) {
  const cities = data?.list || [];

  return (
    <FullContainer
      className="py-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
      id="locations"
    >
      {/* Background Map */}

      <Container className="relative z-10 ">
        <div className="absolute inset-0 z-0">
          <Image
            title="Service Cities Map"
            src="/st-images/map.webp"
            alt="Service Cities"
            className="w-full h-full object-cover object-center opacity-10"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/30"></div>
        </div>
        {/* Header Section */}
        <Heading text="Service Cities" className="py-6" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-1">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-primary mr-2 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-primary transition-colors font-semibold cursor-pointer">
                {city}
              </span>
            </div>
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
        <div className="mt-12 text-center">
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
        </div>
      </Container>
    </FullContainer>
  );
}
