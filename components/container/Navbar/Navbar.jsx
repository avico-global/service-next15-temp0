import React, { useState } from "react";
import Container from "../../common/Container";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import FullContainer from "../../common/FullContainer";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { sanitizeUrl } from "@/lib/myFun";
import { Barlow_Condensed } from "next/font/google";
import CallButton from "@/components/CallButton";

const barlow = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar({ logo, imagePath, phone, services }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const navLinks = [
    { title: "Locations", link: "locations" },
    { title: "About Us", link: "about-us" },
    { title: "Contact", link: "contact-us" },
    { title: "FAQs", link: "faqs" },
  ];

  const handleNavigation = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const newElement = document.getElementById(id);
        if (newElement) {
          const offset = 80;
          const elementPosition =
            newElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  };

  return (
    <FullContainer className="shadow-sm w-full sticky top-0 z-20 bg-white py-2 h-[80px] md:h-[112px]">
      <Container>
        <div className="flex flex-row justify-between h-full items-center w-full">
          <div className="h-full flex items-center justify-center ">
            <Logo logo={logo} imagePath={imagePath} />
          </div>

          <div className="hidden lg:flex items-center text-[26px] font-barlow justify-center font-semibold gap-4 ">
            <div
              className="relative h-full"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className={`flex items-center h-full gap-1 ${
                  showServices ? "text-[#002B5B]" : "text-black"
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className={`absolute top-full left-0 w-auto min-w-[500px] bg-white shadow-2xl py-4 px-5 rounded-md
                transition-all duration-300 ease-in-out grid grid-cols-2 gap-1
                ${
                  showServices
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-2"
                }`}
              >
                {services?.map((service, index) => (
                  <Link
                    key={index}
                    href={sanitizeUrl(service?.title)}
                    className="hover:underline text-gray-600 font-medium text-sm hover:text-primary cursor-pointer transition-all duration-100"
                  >
                    {service?.title}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.link)}
                className="cursor-pointer text-black hover:text-[#002B5B] transition-colors"
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className=" flex items-center justify-end flex-row">
            <div className="flex flex-col md:gap-2 justify-center items-center">
              <div className="">
                <CallButton phone={phone} />
              </div>
              <h2
                className={`text-primary font-bold text-lg md:text-[25px] ${barlow.className}`}
              >
                Call Us Today
              </h2>
            </div>

            <div className="lg:hidden text-gray-600 pl-5 cursor-pointer" onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="bg-primary text-white p-1">
                  <Menu className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white absolute top-[80px] left-0 right-0 w-full transition-all duration-300 ${isOpen ? 'h-screen opacity-100 visible' : 'h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="flex flex-col gap-4 p-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-[#002B5B] px-4"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          <div className="px-4">
            <div 
              className="text-gray-600 hover:text-[#002B5B] flex items-center gap-1 cursor-pointer"
              onClick={() => setShowServices(!showServices)}
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </div>
            
            {showServices && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {services?.map((service, index) => (
                  <Link
                    key={index}
                    href={sanitizeUrl(service?.title)}
                    className="text-gray-600 hover:text-primary text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {service?.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {navLinks.map((item, index) => (
            <button
              key={index}
              className="text-gray-600 hover:text-[#002B5B] px-4 text-left"
              onClick={() => {
                handleNavigation(item.link);
                setIsOpen(false);
              }}
            >
              {item.title}
            </button>
          ))}
          
          <div className="flex flex-col gap-4 px-4 mt-4">
            <button>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-md">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </FullContainer>
  );
}
