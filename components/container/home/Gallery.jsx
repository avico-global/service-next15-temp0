import React from "react";
import Image from "next/image";
import Container from "../../common/Container";
import CallButton from "@/components/CallButton";
import QuoteButton from "@/components/QuoteButton";
import FullContainer from "@/components/common/FullContainer";
import Heading from "@/components/common/Heading";


export default function Gallery({ contact_info, gallery = [], imagePath, gallery_head }) {
  return (
    <FullContainer className="pt-10 md:pt-4 pb-0 md:pb-12 ">
      <Container className="!px-2 md:!px-4">
        <div className="text-center mx-auto mb-4 md:mb-10">
           <Heading text={gallery_head?.title} className="mb-2 md:mb-6" />
          <p className={`font-barlow text-gray-900 leading-none text-[22px]`}>
            {gallery_head?.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-4 md:gap-y-6 md:gap-5 mb-4 md:mb-12 w-full md:px-5">
          {gallery?.map((image, index) => (
            <div
              key={index}
              className="relative rounded-t-2xl aspect-[4/2.71] overflow-hidden w-full"
            >
              <Image
                title={`Gallery Image ${index + 1}`}
                src={`${imagePath}/${image.image}`}
                alt={`Gallery Image ${index + 1}`}
                height={1000}
                width={1000}
                className="object-cover hover:scale-105 h-full w-full transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-full justify-center items-center gap-4">
          <CallButton phone={contact_info?.phone} />
          <QuoteButton phone={contact_info?.phone} />
        </div>
      </Container>
    </FullContainer>
  );
}
