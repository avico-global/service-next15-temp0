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
      className="pt-6 overflow-hidden"
      id="locations"
    >
      {/* Background Map */}

      <Container className="relative pb-14">
        <div className="absolute inset-0 z-0">
          <Image
            title="Service Cities Map"
            src="https://tampa-chimney.com/wp-content/uploads/2025/02/172991-map-usa-png-download-free1-1.webp"
            alt="Service Cities"
            className="w-full h-full object-cover object-center opacity-10"
            fill
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        {/* Header Section */}
        <div className="relative ">
          <Heading text="Service Cities" className="pb-4 pt-12" />

          <div className="grid md:px-2 z-30 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  ">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 md:w-5 md:h-5 text-primary mr-2 flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-primary text-sm md:text-lg font-[500] leading-none transition-colors cursor-pointer">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
