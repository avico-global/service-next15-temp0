import React from "react";
import Image from "next/image";
import Container from "../../common/Container";
import CallButton from "@/components/CallButton";
import QuoteButton from "@/components/QuoteButton";
import FullContainer from "@/components/common/FullContainer";
import Heading from "@/components/common/Heading";
import { Barlow } from "next/font/google";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Gallery({ phone, gallery = [], imagePath }) {
  return (
    <FullContainer className="py-8">
      <Container className="">
        <div className="text-center mx-auto mb-12">

           <Heading text="Committed to Excellence" className="mb-2" />

          <p className={`text-gray-900 text-lg md:leading-none md:text-2xl ${barlow.className}`}>
            We deliver top-quality chimney solutions with precision and care.
            From cleaning and repairs to expert installations, our skilled team
            ensures safety, comfort, and lasting results for your chimney and
            fireplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full">
          {gallery?.map((image, index) => (
            <div
              key={index}
              className="relative rounded-t-xl aspect-square overflow-hidden h-64 w-full"
            >
              <Image
                src={`${imagePath}/${image.image}`}
                title={image.title}
                alt={image.alt}
                fill
                className="object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center items-center gap-4">
          <CallButton phone={phone} />
          <QuoteButton phone={phone} />
        </div>
      </Container>
    </FullContainer>
  );
}
