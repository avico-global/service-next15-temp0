import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";
import Image from "next/image";
import { Clock4, Mail, Phone } from "lucide-react";
import Logo from "../Logo";
import image1 from "../../public/st-images/footer1.png";
import image2 from "../../public/st-images/footer2.png";
import image3 from "../../public/st-images/footer3.png";
import image4 from "../../public/st-images/footer4.png";
import image5 from "../../public/st-images/footer5.png";
import { Barlow_Condensed, Montserrat, Inter } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Footer({ logo, imagePath, data, contact_info }) {
  console.log("contact_info", contact_info);
  const companies = [image1, image2, image3, image4, image5];
  return (
    <footer>
      <FullContainer
        className={`bg-[#1E1B21] py-6 md:py-[52px] md:pb-[52px] relative ${inter.className}`}
      >
        <Image
          title="Footer Image"
          src={`${imagePath}/${data?.file_name}`}
          alt="Footer Image"
          className="w-full absolute top-0 left-0 h-full object-cover opacity-35"
          fill
        />
        <Container className="relative z-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-24 justify-between w-full">
            {/* Company Logos and Statement */}
            <div className="max-w-[395px] md:px-2">
              <div className="flex gap-1 mb-2">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="w-full h-full  aspect-square flex items-center justify-center overflow-hidden bg-white rounded-full"
                  >
                    <Image
                      title="company logo"
                      src={company}
                      alt="Company Logo"
                      className="h-[80%] w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-white text-sm md:text-[15px] leading-relaxed">
                {data?.value}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-row justify-center items-center md:px-2">
              <div className=" lg:pl-[170px] w-full">
                <h3 className="text-xl font-bold text-white relative">
                  Contact Info
                </h3>
                <ul className="space-y-2 md:space-y-3  mt-5">
                  <li className="flex items-center gap-1.5">
                    <div className=" text-white">
                      <Phone className="w-5 h-5 " />
                    </div>
                    <Link
                      title="Call Button"
                      href={`tel:${contact_info?.phone}`}
                      className="text-white text-sm md:text-[15px]"
                    >
                      {contact_info?.phone || "(656) 245-0412"}
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className=" text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Link
                      title="Email Button"
                      href={`mailto:${contact_info?.email}`}
                      className="text-white  text-sm md:text-[15px]"
                    >
                      {contact_info?.email || "sales@tampa-chimney.com"}
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className=" text-white">
                      <Clock4 className="w-5 h-5" />
                    </div>
                    <span className="text-white text-sm md:text-[15px]">
                      {contact_info?.working_hours || "Monday - Friday: 7AM - 8PM"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-4 border-t border-white/30 w-full">
            <div className="flex flex-row justify-start items-start  gap-6">
              <div className="flex gap-6">
                <Link
                  title="Privacy Policy"
                  href="/privacy-policy"
                  className="text-white text-sm md:text-[15px]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </footer>
  );
}
