"use client";
import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import CallButton from "../CallButton";
import QuoteButton from "../QuoteButton";
import { useRouter } from "next/router";

export default function ServiceBanner({ phone, data, image }) {
  const router = useRouter();
  const { service } = router.query;

  return (
    <FullContainer
      className="relative overflow-hidden"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${data?.opacity / 100})`,
        color: data?.textColor || "white",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 to-blue-950/80"></div>
      <Image
        src={image}
        title={data?.imageTitle || data?.title || "Banner"}
        alt={data?.altImage || data?.tagline || "No Banner Found"}
        priority={true}
        fill={true}
        loading="eager"
        className="-z-10 w-full h-52 transition-transform duration-700 hover:scale-105"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 320px) 320px,
             (max-width: 480px) 480px,
             (max-width: 768px) 768px,
             (max-width: 1024px) 1024px,
             (max-width: 1280px) 1280px,
             (max-width: 1600px) 1600px,
             (max-width: 1920px) 1920px,
             (max-width: 2560px) 2560px,
             (max-width: 3840px) 3840px,
             100vw"
      />
      <Container className="h-full py-16 flex items-center relative z-10 gap-8 text-center">
        <div className="flex items-center justify-center lg:justify-start">
          <Image
            src="/st-images/google.webp"
            width={100}
            height={30}
            alt="Google"
          />

          <Image
            src="/st-images/trustpilot.webp"
            width={100}
            height={30}
            alt="Trustpilot"
            className="ml-6"
          />

          <Image
            src="/st-images/capterra.webp"
            width={100}
            height={30}
            alt="Capterra"
            className="ml-6"
          />
        </div>

        <h1 className="flex flex-col gap-4 text-4xl md:text-5xl lg:text-6xl font-bold ">
          <span className="text-amber-400 drop-shadow-lg animate-fadeIn capitalize">
            {service?.replace(/-/g, " ")}
          </span>
        </h1>

        <span className="block mb-3 text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg text-white">
          <span className="text-white">
            {data?.heading?.replaceAll(
              "##service##",
              service?.replace(/-/g, " ")
            )}
          </span>
        </span>

        <p className="text-xl md:text-2xl text-white font-light drop-shadow-md max-w-2xl">
          {data?.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-2 justify-start md:justify-center">
          {[
            { text: "Licensed", color: "amber" },
            { text: "Insured", color: "blue" },
            { text: "24/7 Service", color: "amber" },
            { text: "Free Estimates", color: "blue" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <div
                className={`${
                  item.color === "amber" ? "text-amber-400" : "text-[#90D4E1]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white/90 text-sm font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-[#90D4E1]/0 mt-10"></div>
        <div className="flex items-center justify-center gap-6">
          <CallButton phone={phone} />
          <QuoteButton phone={phone} />
        </div>
      </Container>
    </FullContainer>
  );
}
