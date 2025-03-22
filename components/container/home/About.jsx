"use client";
import FullContainer from "@/components/common/FullContainer";
import React, { useEffect, useState } from "react";
import Container from "../../common/Container";
import { sanitizeUrl } from "@/lib/myFun";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import CallButton from "@/components/CallButton";
import QuoteButton from "@/components/QuoteButton";

export default function About({ services, phone, data, image }) {
  const [parsedDescription, setParsedDescription] = useState("");

  useEffect(() => {
    if (data?.description) {
      const md = new MarkdownIt();
      setParsedDescription(md.render(data.description));
    }
  }, [data?.description]);

  return (
    <FullContainer className="py-24" id="about-us">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Image Section */}
          <div className="relative h-full min-h-[700px]">
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

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-amber-600 font-semibold tracking-wide uppercase mb-6">
                {data?.tagline}
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
                {data?.heading}
              </h2>
            </div>
            <div
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{ __html: parsedDescription }}
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {services?.slice(0, 4)?.map((service, i) => (
                <Link
                  href={sanitizeUrl(service.title)}
                  key={i}
                  className="flex items-center gap-2"
                >
                  <span className="text-amber-600">✓</span>
                  <span>{service.title}</span>
                </Link>
              ))}
            </ul>

            <div className="flex w-full items-center gap-4">
              <CallButton phone={phone} />
              <QuoteButton />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
