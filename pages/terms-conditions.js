"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/container/Navbar/Navbar";
import Footer from "../components/container/Footer";
import Container from '../components/common/Container';
import MarkdownIt from 'markdown-it';
import Head from "next/head";


export default function TermsConditions() {
    const [renderedContent, setRenderedContent] = useState('');
  const primaryColor = {
    default: "#01306e",
    light: "#5b88c4",
  };


    const fetchMarkdownContent = async () => {
      return `
  # Terms and Condition
  
  **Last updated:** ${new Date().toLocaleDateString()}
  
  ## 1. Information We Collect
  
  - Name, email, and contact information
  - Website interaction details
  - Any data provided via forms
  
  ## 2. How We Use Your Information
  
  - Improve our services
  - Send updates and offers (with consent)
  - Process transactions securely
  
  ## 3. Data Security
  
  - Your data is encrypted and protected.
  - We do not sell your personal information.
  
  ## 4. Contact Us
  
  For privacy concerns, email us at **support@example.com**.
      `;
    };
  
    useEffect(() => {
      const loadMarkdown = async () => {
        const markdownContent = await fetchMarkdownContent();
        const md = new MarkdownIt();
        setRenderedContent(md.render(markdownContent));
      };
  
      loadMarkdown();
    }, []);
  return (
    <main>
       <Head>
        <meta charSet="UTF-8" />
        <title>{"This is terms and condition page title "}</title>
        <meta name="description" content={"This is terms and condition page description example and loream words can do that did you know."} />
        {/* <link rel="author" href={`https://www.${domain}`} /> */}
        {/* <link rel="publisher" href={`https://www.${domain}`} /> */}
        {/* <link rel="canonical" href={`https://www.${domain}`} /> */}
        <meta name="theme-color" content="#008DE5" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <GoogleTagManager /> */}
        <meta
          name="google-site-verification"
          content="zbriSQArMtpCR3s5simGqO5aZTDqEZZi9qwinSrsRPk"
        />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${imagePath}/${favicon}`}
        /> */}
      </Head>
           <Navbar primaryColor={primaryColor} abouthidden={true} />
            <div className="py-20">
              <Container className={"justify-center flex  items-center   "} >
                <div className="w-[800px]">
                  <div
                    className="space-y-4 text-gray-700 max-w-none 
                  [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-[#002B5B] [&_h1]:mb-4
                  [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3
                  [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-2
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
                  [&_li]:mb-1
                  [&_a]:text-blue-500 [&_a]:underline
                  [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: renderedContent }}
                  />
                </div>
              </Container>
            </div>
            <Footer />
    </main>
  )
} 