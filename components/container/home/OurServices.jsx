import React from "react";
import Link from "next/link";
import { sanitizeUrl } from "@/lib/myFun";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";

export default function OurServices({ data }) {
  const services = data?.list;

  return (
    <FullContainer className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block uppercase text-amber-600 font-medium rounded-full mb-4">
            {data?.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {data?.heading}
          </h2>
          <p className="text-gray-600 text-lg">{data?.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {services?.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-lg shadow border border-blue-700/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <Link href={sanitizeUrl(service.title)}>
                <button className="p-3 flex flex-col items-center justify-center text-center w-full">
                  <h3 className="=font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                    {service?.title}
                  </h3>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
