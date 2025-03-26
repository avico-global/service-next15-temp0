import React from "react";
import Link from "next/link";
import { sanitizeUrl } from "@/lib/myFun";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import Heading from "../../common/Heading";


const chimneyIcons = [
  {
    id: "chimney-inspection",
    name: "Chimney Inspection",
    path: "M10,40 L20,5 L40,5 L50,40 Z M25,40 L25,25 M35,40 L35,25 M25,20 L35,20 M15,45 L45,45 M20,50 L40,50 M30,5 L30,0",
  },
  {
    id: "chimney-repair",
    name: "Chimney Repair",
    path: "M15,45 L15,15 L35,15 L35,45 Z M10,15 L40,15 M10,10 L40,10 M15,35 L35,35 M15,25 L35,25 M42,30 L48,24 M48,30 C45,27 42,30 45,33",
  },
  {
    id: "furnace-chimney-cleaning",
    name: "Furnace Chimney Cleaning",
    path: "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,5 L45,5 M25,10 L25,20 M35,10 L35,20 M30,20 C25,30 35,30 30,40 M25,35 L35,35",
  },
  {
    id: "chimney-lining",
    name: "Chimney Lining",
    path: "M15,45 L15,5 L35,5 L35,45 Z M10,5 L40,5 M10,45 L40,45 M20,5 L20,45 M30,5 L30,45 M15,15 L35,15 M15,25 L35,25 M15,35 L35,35",
  },
  {
    id: "chimney-cap-repair",
    name: "Chimney Cap Repair",
    path: "M10,30 L20,10 L40,10 L50,30 Z M5,30 L55,30 M20,30 L20,50 M40,30 L40,50 M15,5 L45,5 M25,5 L25,10 M35,5 L35,10",
  },
  {
    id: "fireplace-refacing",
    name: "Fireplace Refacing",
    path: "M10,10 L10,45 L50,45 L50,10 Z M15,15 L45,15 L45,40 L15,40 Z M25,40 L25,30 L35,30 L35,40 M28,25 C30,20 32,25 30,30",
  },
  {
    id: "chimney-rebuild",
    name: "Chimney Rebuild",
    path: "M15,45 L15,5 L35,5 L35,45 Z M10,5 L40,5 M10,45 L40,45 M15,15 L35,15 M15,25 L35,25 M15,35 L35,35 M45,20 L50,15 M45,25 L50,20",
  },
  {
    id: "chimney-liner",
    name: "Chimney Liner",
    path: "M15,50 L15,10 L35,10 L35,50 Z M10,10 L40,10 M10,5 L40,5 M20,10 L20,50 M30,10 L30,50 M15,20 L35,20 M15,30 L35,30 M15,40 L35,40",
  },
  {
    id: "chimney-maintenance",
    name: "Chimney Maintenance",
    path: "M15,45 L25,5 L35,5 L45,45 Z M20,45 L40,45 M15,35 L45,35 M15,25 L45,25 M15,15 L45,15 M10,45 L50,45 M48,25 L52,20 L48,15",
  },
  {
    id: "gas-fireplace-repair",
    name: "Gas Fireplace Repair",
    path: "M10,10 L10,40 L50,40 L50,10 Z M15,15 L45,15 L45,35 L15,35 Z M25,35 L25,25 L35,25 L35,35 M20,20 C25,15 35,15 40,20 M30,35 L30,45",
  },
  {
    id: "chimney-cap-installation",
    name: "Chimney Cap Installation",
    path: "M15,35 L15,15 L35,15 L35,35 Z M10,15 L40,15 M10,10 L40,10 M10,35 L40,35 M15,45 L35,45 M20,35 L20,45 M30,35 L30,45 M5,5 L15,15 M45,5 L35,15",
  },
  {
    id: "chimney-flashing-repair",
    name: "Chimney Flashing Repair",
    path: "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,50 L45,50 M15,30 L45,30 L50,25 L45,20 L15,20 L10,25 L15,30 Z M30,10 L30,0",
  },
  {
    id: "wood-fireplace-repair",
    name: "Wood Fireplace Repair",
    path: "M10,10 L10,45 L50,45 L50,10 Z M15,15 L45,15 L45,40 L15,40 Z M25,40 L25,30 L35,30 L35,40 M25,25 L30,20 L35,25 M30,25 L30,20",
  },
  {
    id: "chimney-crown-repair",
    name: "Chimney Crown Repair",
    path: "M15,45 L15,15 L35,15 L35,45 Z M10,15 L40,15 M10,10 L40,10 M5,10 L10,5 L40,5 L45,10 M45,25 L50,20 L45,15",
  },
  {
    id: "chimney-damper-repair",
    name: "Chimney Damper Repair",
    path: "M15,45 L15,10 L35,10 L35,45 Z M10,10 L40,10 M10,45 L40,45 M10,25 L40,25 M10,30 L40,30 M20,25 C25,30 30,25 35,30",
  },
  {
    id: "wood-burning-stove-cleaning",
    name: "Wood Burning Stove Cleaning",
    path: "M15,45 L15,20 L35,20 L35,45 Z M15,20 C15,15 35,15 35,20 M10,45 L40,45 M20,45 L20,30 M30,45 L30,30 M20,25 L30,25 M20,35 L30,35",
  },
  {
    id: "chimney-flue-installation",
    name: "Chimney Flue Installation",
    path: "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,5 L45,5 M25,10 L25,50 M35,10 L35,50 M25,20 L35,20 M25,30 L35,30 M25,40 L35,40",
  },
];

const ChimneyServices = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {chimneyIcons.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={service.path} />
              </svg>
            </div>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define the SVG paths for each service icon
const serviceIcons = {
  "Chimney Inspection":
    "M10,40 L20,5 L40,5 L50,40 Z M25,40 L25,25 M35,40 L35,25 M25,20 L35,20 M15,45 L45,45 M20,50 L40,50 M30,5 L30,0",
  "Chimney Repair":
    "M15,45 L15,15 L35,15 L35,45 Z M10,15 L40,15 M10,10 L40,10 M15,35 L35,35 M15,25 L35,25 M42,30 L48,24 M48,30 C45,27 42,30 45,33",
  "Chimney Sweeping & Cleaning":
    "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,5 L45,5 M25,10 L25,20 M35,10 L35,20 M30,20 C25,30 35,30 30,40 M25,35 L35,35",
  "Furnace Chimney Cleaning":
    "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,5 L45,5 M25,10 L25,20 M35,10 L35,20 M30,20 C25,30 35,30 30,40 M25,35 L35,35",
  "Chimney Lining":
    "M15,45 L15,5 L35,5 L35,45 Z M10,5 L40,5 M10,45 L40,45 M20,5 L20,45 M30,5 L30,45 M15,15 L35,15 M15,25 L35,25 M15,35 L35,35",
  "Chimney Cap Repair":
    "M10,30 L20,10 L40,10 L50,30 Z M5,30 L55,30 M20,30 L20,50 M40,30 L40,50 M15,5 L45,5 M25,5 L25,10 M35,5 L35,10",
  "Fireplace Refacing":
    "M10,10 L10,45 L50,45 L50,10 Z M15,15 L45,15 L45,40 L15,40 Z M25,40 L25,30 L35,30 L35,40 M28,25 C30,20 32,25 30,30",
  "Chimney Rebuild":
    "M15,45 L15,5 L35,5 L35,45 Z M10,5 L40,5 M10,45 L40,45 M15,15 L35,15 M15,25 L35,25 M15,35 L35,35 M45,20 L50,15 M45,25 L50,20",
  "Chimney Liner":
    "M15,50 L15,10 L35,10 L35,50 Z M10,10 L40,10 M10,5 L40,5 M20,10 L20,50 M30,10 L30,50 M15,20 L35,20 M15,30 L35,30 M15,40 L35,40",
  "Chimney Maintenance":
    "M15,45 L25,5 L35,5 L45,45 Z M20,45 L40,45 M15,35 L45,35 M15,25 L45,25 M15,15 L45,15 M10,45 L50,45 M48,25 L52,20 L48,15",
  "Gas Fireplace Repair":
    "M10,10 L10,40 L50,40 L50,10 Z M15,15 L45,15 L45,35 L15,35 Z M25,35 L25,25 L35,25 L35,35 M20,20 C25,15 35,15 40,20 M30,35 L30,45",
  "Chimney Cap Installation":
    "M15,35 L15,15 L35,15 L35,35 Z M10,15 L40,15 M10,10 L40,10 M10,35 L40,35 M15,45 L35,45 M20,35 L20,45 M30,35 L30,45 M5,5 L15,15 M45,5 L35,15",
  "Chimney Flashing Repair":
    "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,50 L45,50 M15,30 L45,30 L50,25 L45,20 L15,20 L10,25 L15,30 Z M30,10 L30,0",
  "Wood Fireplace Repair":
    "M10,10 L10,45 L50,45 L50,10 Z M15,15 L45,15 L45,40 L15,40 Z M25,40 L25,30 L35,30 L35,40 M25,25 L30,20 L35,25 M30,25 L30,20",
  "Chimney Crown Repair":
    "M15,45 L15,15 L35,15 L35,45 Z M10,15 L40,15 M10,10 L40,10 M5,10 L10,5 L40,5 L45,10 M45,25 L50,20 L45,15",
  "Chimney Damper Repair":
    "M15,45 L15,10 L35,10 L35,45 Z M10,10 L40,10 M10,45 L40,45 M10,25 L40,25 M10,30 L40,30 M20,25 C25,30 30,25 35,30",
  "Wood Burning Stove Cleaning":
    "M15,45 L15,20 L35,20 L35,45 Z M15,20 C15,15 35,15 35,20 M10,45 L40,45 M20,45 L20,30 M30,45 L30,30 M20,25 L30,25 M20,35 L30,35",
  "Chimney Flue Installation":
    "M20,50 L20,10 L40,10 L40,50 Z M15,10 L45,10 M15,5 L45,5 M25,10 L25,50 M35,10 L35,50 M25,20 L35,20 M25,30 L35,30 M25,40 L35,40",
  "Chimney Insulation":
    "M15,45 L15,5 L35,5 L35,45 Z M10,5 L40,5 M10,45 L40,45 M17,10 L33,10 M17,15 L33,15 M17,20 L33,20 M17,25 L33,25 M17,30 L33,30 M17,35 L33,35 M17,40 L33,40",
  "Chimney Pointing":
    "M15,45 L15,5 L35,5 L35,45 Z M10,5 L40,5 M10,45 L40,45 M15,15 L35,15 M15,25 L35,25 M15,35 L35,35 M45,15 L42,18 M45,25 L42,28 M45,35 L42,38",
};

const OurServices = ({ data }) => {
  if (!data) return null;

  const { tagline, heading, description, list } = data;

  return (
    <section className="services-section py-12">
      <Container className="container mx-auto px-4">
      <Heading text="Services Provided" className="mb-10" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-[10px] gap-x-6">
          {list.map((service) => (
            <div
              key={service.id}
              className="service-item flex items-center bg-white text-primary rounded-full py-1 md:py-[10px] px-3 md:px-5 shadow-[0_0_15px_rgba(0,0,0,0.35)] transition-all duration-300"
            >
              <div className="service-icon mr-1 md:mr-3 text-primary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={serviceIcons[service.title] || ""} />
                </svg>
              </div>
              <span className="font-medium leading-none text-md md:text-lg">{service.title}</span>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .service-icon {
          color: #0047ab;
        }
      `}</style>
    </section>
  );
};

export default OurServices;
