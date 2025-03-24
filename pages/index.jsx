import Head from "next/head";
import Banner from "../components/container/home/Banner";
import Navbar from "../components/container/Navbar/Navbar";
import WhyChoose from "../components/container/home/WhyChoose";
import OurServices from "../components/container/home/OurServices";
import { useInView } from "react-intersection-observer";
import ServiceCities from "../components/container/ServiceCities";
import FAQs from "../components/container/FAQs";
import Testimonials from "../components/container/Testimonials";
import About from "../components/container/home/About";
import Footer from "../components/container/Footer";
import Contact from "../components/container/Contact";
import ServiceBenefits from "../components/container/home/ServiceBenefits";
import { useEffect, useState } from "react";

import Gallery from "@/components/container/home/Gallery";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";

import {
  callBackendApi,
  getDomain,
  getImagePath,
  robotsTxt,
} from "@/lib/myFun";
import GoogleTagManager from "@/lib/GoogleTagManager";

export default function Home({
  logo,
  imagePath,
  banner,
  phone,
  services,
  features,
  gallery,
  about,
  benefits,
  testimonials,
  meta,
  domain,
  favicon,
  footer,
  locations,
}) {
  return (
    <div className="bg-white">
      <Head>
        <meta charSet="UTF-8" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="author" href={`https://www.${domain}`} />
        <link rel="publisher" href={`https://www.${domain}`} />
        <link rel="canonical" href={`https://www.${domain}`} />
        <meta name="theme-color" content="#008DE5" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleTagManager />
        <meta
          name="google-site-verification"
          content="zbriSQArMtpCR3s5simGqO5aZTDqEZZi9qwinSrsRPk"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
      </Head>

      <Navbar
        logo={logo}
        imagePath={imagePath}
        phone={phone}
        services={services?.list}
      />
      <Banner
        data={banner?.value}
        image={`${imagePath}/${banner?.file_name}`}
        imagePath={imagePath}
        phone={phone}
      />
      <OurServices data={services} />
      <WhyChoose
        data={features?.value}
        image={`${imagePath}/${features?.file_name}`}
        phone={phone}
      />
      <Gallery phone={phone} gallery={gallery} imagePath={imagePath} />
      <FullContainer className="py-20 bg-gray-50">
        <Container className="flex t md:flex-row md:justify-between">
          {[
            {
              title: "Number Of Clients",
              number: 1200,
            },
            {
              title: "Years of Experience",
              number: 10,
            },
            {
              title: "Locations Served",
              number: 21,
            },
            {
              title: "Certifications Or Awards",
              number: 14,
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold text-center text-primary relative z-10">
                  <Counter targetNumber={item.number} duration={3000} />
                </h3>
                <h2 className="text-base sm:text-lg md:text-xl font-medium text-center text-[#002B5B] relative z-10 mt-2">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </Container>
      </FullContainer>

      <About
        services={services?.list}
        phone={phone}
        data={about?.value}
        image={`${imagePath}/${about?.file_name}`}
      />
      <ServiceBenefits
        phone={phone}
        data={benefits?.value}
        image={`${imagePath}/${benefits?.file_name}`}
      />
      <Testimonials data={testimonials} />
      <Contact phone={phone} />
      <FAQs />
      <ServiceCities data={locations} />
      <Footer data={footer} logo={logo} imagePath={imagePath} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const domain = getDomain(req?.headers?.host);
  const logo = await callBackendApi({ domain, tag: "logo" });
  const project_id = logo?.data[0]?.project_id || null;
  const imagePath = await getImagePath(project_id, domain);

  const banner = await callBackendApi({ domain, tag: "banner" });
  const phone = await callBackendApi({ domain, tag: "phone" });
  const services = await callBackendApi({ domain, tag: "services_list" });
  const features = await callBackendApi({ domain, tag: "features" });
  const gallery = await callBackendApi({ domain, tag: "gallery" });
  const about = await callBackendApi({ domain, tag: "about" });
  const benefits = await callBackendApi({ domain, tag: "benefits" });
  const testimonials = await callBackendApi({ domain, tag: "testimonials" });
  const meta = await callBackendApi({ domain, tag: "meta_home" });
  const favicon = await callBackendApi({ domain, tag: "favicon" });
  const footer = await callBackendApi({ domain, tag: "footer" });
  const locations = await callBackendApi({ domain, tag: "locations" });

  robotsTxt({ domain });

  return {
    props: {
      domain,
      imagePath,
      logo: logo?.data[0] || null,
      banner: banner?.data[0] || null,
      phone: phone?.data[0]?.value || null,
      services: services?.data[0]?.value || [],
      features: features?.data[0] || [],
      gallery: gallery?.data[0]?.value || [],
      about: about?.data[0] || null,
      benefits: benefits?.data[0] || [],
      testimonials: testimonials?.data[0]?.value || [],
      meta: meta?.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      footer: footer?.data[0] || null,
      locations: locations?.data[0]?.value || [],
    },
  };
}

const Counter = ({ targetNumber, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = targetNumber / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [inView, targetNumber, duration]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl md:text-7xl font-bold">
      {count}+
    </span>
  );
};
