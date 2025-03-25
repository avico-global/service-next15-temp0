import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import Logo from "../Logo";

export default function Footer({ logo, imagePath, data }) {
  return (
    <footer>
      <FullContainer className="bg-gradient-to-b from-slate-900 to-primary py-20 relative">
        <Image
          title="Footer Image"
          src={`${imagePath}/${data?.file_name}`}
          alt="Footer Image"
          className="w-full absolute top-0 left-0 h-full object-cover opacity-15"
          fill
        />
        <Container className="relative z-10">
          {/* Logo and Company Statement Section */}
          <div className="flex md:gap-4 flex-col md:flex-row  justify-between w-full">
            {/* Company Logos and Statement */}
            <div className="max-w-lg pb-4">
              <div className="flex jjustify-start">
              <Logo logo={logo} imagePath={imagePath} />
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                {data?.value}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 relative">
                Contact Info
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-amber-400"></span>
              </h3>
              <ul className="space-y-2 md:space-y-6  mt-8">
                <li className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-2.5 rounded-full">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <Link
                    href="tel:(656) 245-0412"
                    className="text-white hover:text-amber-400 transition-colors text-lg"
                  >
                    (656) 245-0412
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-2.5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-300"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <Link
                    href="mailto:sales@tampa-chimney.com"
                    className="text-white hover:text-amber-400 transition-colors text-lg"
                  >
                    sales@tampa-chimney.com
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-2.5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-300"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">
                    Monday - Friday: 7AM - 8PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-blue-200">
                &copy; {new Date().getFullYear()} Tampa Chimney. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-blue-200 hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-blue-200 hover:text-amber-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </footer>
  );
}
