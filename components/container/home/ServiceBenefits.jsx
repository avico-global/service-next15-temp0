import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../common/Container";
import { ChevronRight, Phone, TextQuote } from "lucide-react";
import FullContainer from "@/components/common/FullContainer";
import CallButton from "@/components/CallButton";
import Heading from "@/components/common/Heading";
import QuoteButton from "@/components/QuoteButton";

export default function Benefits({ phone, data, image }) {
  const benefits = data?.list || [];

  return (
    <FullContainer className="pt-10 overflow-hidden ">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-services xl:grid-cols-services2 gap-4">
          <div className=" md:w-[111%] rounded-md relative bg-blue-500 h-full overflow-hidden">
            <Image
              src={image}
              alt="Service Background"
              fill
              className="object-cover"
            />
          </div>
          <div className=" px-4 md:px-10 py-8 flex flex-col gap-4 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.4)] bg-white z-10 my-7">
            <Heading text="Chimney Services Benefits" className="" />

            {/* Benefits List */}
            <div className="flex flex-col space-y-[6px] ">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 stroke-[4] mt-1" />
                  <span className="ml-2 text-xl text-blue-900">
                    {benefit?.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full gap-2 justify-start hidden md:flex  flex-col lg:flex-row items-start lg:items-center lg:gap-4">
              <CallButton phone={phone} />
              <QuoteButton phone={phone} />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
