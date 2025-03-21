import React, { useState } from "react";
import Container from "../../common/Container";
import Link from "next/link";
import Button from "../../ui/Button";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import FullContainer from "../../common/FullContainer";
import ButtonSecondary from "../../ui/ButtonSecondary";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { sanitizeUrl } from "@/lib/myFun";

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
    <FullContainer className="shadow-sm w-full sticky top-0 z-50 bg-white py-1.5">
      <Container>
        <div className="flex flex-row justify-between h-full items-center w-full">
          <Logo logo={logo} imagePath={imagePath} />

          <div className="hidden md:flex items-center justify-center font-semibold gap-4 ">
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

          <div className=" flex items-center justify-end">
            <Link
              href={`tel:${phone}`}
              className="bg-primary hover:bg-secondary text-white py-2.5 px-6 font-bold rounded-full items-center text-xl w-fit hidden md:flex gap-2"
            >
              <Phone className="w-6 h-6 mr-2" />
              {phone}
            </Link>

            <div className="lg:hidden text-gray-600 pl-5" onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-white h-[100vh] transition-all duration-1000 ease-in-out mt-8 text-2xl pb-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#002B5B] px-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#002B5B] px-4"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-[#002B5B] px-4"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#002B5B] px-4 pb-10"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 px-4">
              <Button>
                <a
                  href="tel:(656) 245-0412"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (656) 245-0412
                </a>
              </Button>
              <ButtonSecondary>GET A QUOTE</ButtonSecondary>
            </div>
          </div>
        </div>
      )}
    </FullContainer>
  );
}
