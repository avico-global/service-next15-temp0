"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../common/Container";
import React, { useEffect, useState } from "react";
import FullContainer from "@/components/common/FullContainer";
import { Phone, TextQuote } from "lucide-react";
import { sanitizeUrl } from "@/lib/myFun";
import MarkdownIt from "markdown-it";
import Link from "next/link";

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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[700px]"
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
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
