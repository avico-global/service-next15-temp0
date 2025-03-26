import FAQs from "../../components/container/FAQs";
import Contact from "../../components/container/Contact";
import Navbar from "../../components/container/Navbar/Navbar";
import ServiceCities from "../../components/container/ServiceCities";
import Footer from "../../components/container/Footer";
import ServiceBenefits from "../../components/container/home/ServiceBenefits";
import Breadcrumbs from "@/components/common/Breadcrumbs";

import {
  callBackendApi,
  getDomain,
  getImagePath,
  robotsTxt,
} from "@/lib/myFun";
import ServiceBanner from "@/components/container/ServiceBanner";
import Gallery from "@/components/container/home/Gallery";
import About from "@/components/container/home/About";
import { useRouter } from "next/router";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";
import useBreadcrumbs from "@/lib/useBreadcrumbs";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";

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
  meta,
  domain,
  favicon,
  locations,
  service_banner,
}) {

  const router = useRouter();
  const { service } = router.query;
  const breadcrumbs = useBreadcrumbs();

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>
          {meta?.title?.replaceAll(
            "##service##",
            service?.replaceAll("-", " ")
          )}
        </title>
        <meta
          name="description"
          content={meta?.description.replaceAll(
            "##service##",
            service?.replaceAll("-", " ")
          )}
        />
        <link rel="author" href={`https://www.${domain}`} />
        <link rel="publisher" href={`https://www.${domain}`} />
        <link rel="canonical" href={`https://www.${domain}/${service}`} />
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
      <ServiceBanner
        data={service_banner?.value}
        image={`${imagePath}/${service_banner?.file_name}`}
        imagePath={imagePath}
        phone={phone}
      />
      <FullContainer>
        <Container>
          <Breadcrumbs breadcrumbs={breadcrumbs} className="pt-7" />
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
      <Gallery phone={phone} gallery={gallery} imagePath={imagePath} />

      <Contact phone={phone} />
      <FAQs />
      <ServiceCities data={locations} />
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
  const service_banner = await callBackendApi({ domain, tag: "service_banner" });
  

  robotsTxt({ domain });

  return {
    props: {
      service_banner: service_banner?.data[0] || null,
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

