import data from "../../json/data.json";
import FAQs from "../../components/container/FAQs";
import Contact from "../../components/container/Contact";
import Navbar from "../../components/container/Navbar/Navbar";
import ServiceCities from "../../components/container/ServiceCities";
import Footer from "../../components/container/Footer";
import ServiceBenefits from "../../components/container/home/ServiceBenefits";

import {
  callBackendApi,
  getDomain,
  getImagePath,
  robotsTxt,
} from "@/lib/myFun";
import ServiceBanner from "@/components/container/ServiceBanner";
import Gallery from "@/components/container/home/Gallery";
import About from "@/components/container/home/About";

export default function Service({
  logo,
  phone,
  banner,
  services,
  imagePath,
  benefits,
  gallery,
  footer,
  about,
}) {
  return (
    <main>
      <Navbar
        logo={logo}
        imagePath={imagePath}
        phone={phone}
        services={services?.list}
      />
      <ServiceBanner
        data={banner?.value}
        image={`${imagePath}/${banner?.file_name}`}
        imagePath={imagePath}
        phone={phone}
      />
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
      <Gallery phone={phone} gallery={gallery} imagePath={imagePath} />

      <Contact phone={phone} />
      <FAQs />
      <ServiceCities />
      <Footer data={footer} logo={logo} imagePath={imagePath} />

      {/* <FullContainer>
        <Container>
          <div id="testimonials">
            <Testimonials />
          </div>
        </Container>
      </FullContainer>
      <div id="contact-us">
        <Contact />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <div id="locations">
        <ServiceCities />
      </div>
      <Footer /> */}
    </main>
  );
}

export async function getServerSideProps({ req, params }) {
  try {
    const domain = getDomain(req?.headers?.host);
    const logo = await callBackendApi({ domain, tag: "logo" });
    const project_id = logo?.data[0]?.project_id || null;
    const imagePath = await getImagePath(project_id, domain);

    const banner = await callBackendApi({ domain, tag: "service_banner" });
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

    // Get service data based on the URL parameter
    const serviceData = data.find(
      (item) =>
        item?.title?.toLowerCase().replace(/\s+/g, "-") === params?.services
    );

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
        serviceData: serviceData || null,
        footer: footer?.data[0] || null,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        serviceData: null,
        logo: null,
        imagePath: null,
        banner: null,
        phone: null,
        services: [],
      },
    };
  }
}
