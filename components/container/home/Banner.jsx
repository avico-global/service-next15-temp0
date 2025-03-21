import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";

import {
  Phone,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Loader,
  MapPin,
} from "lucide-react";
import CallButton from "@/components/CallButton";

export default function Banner({ image, data, phone }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        industry_code: "103",
        ...formData,
      };

      const response = await fetch(
        process.env.NEXT_PUBLIC_LOGICAL_CRM_API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer 202_86a297be5455",
          },
          body: JSON.stringify(payload),
        }
      );

      // Check if response is OK regardless of the response format
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Don't try to parse the response if it's not valid JSON
      try {
        const data = await response.json();
        console.log(data);
      } catch (jsonError) {
        console.warn("API didn't return valid JSON:", jsonError);
      }

      // Set form as submitted
      setFormSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          zip: "",
          message: "",
        });
      }, 2000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      <Container className="py-20 relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-banner gap-16 text-white lg:min-h-[50vh]">
          <div className="relative flex flex-col justify-center">
            <h1 className="font-extrabold uppercase text-5xl md:text-7xl leading-tight text-center lg:text-left text-shadow-lg">
              {data?.title}
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-400 text-center lg:text-left mt-2">
              {data?.tagline}
            </h2>
            <p className="text-xl text-center lg:text-left mt-4">
              {data?.description}
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-8">
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
            <div className="w-full h-px bg-gradient-to-r from-amber-500/50 to-[#90D4E1]/0 mt-12 mb-2"></div>
            <div className="flex items-center gap-5">
              <p className="text-3xl font-bold">Call Us Today</p>
              <CallButton phone={phone} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-2 text-primary">
                10% Off Total Price for Online Booking
              </h3>
              <h4 className="text-xl font-bold text-center mb-6 text-gray-800">
                Request a Quote
              </h4>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Your request has been submitted successfully. We'll contact
                    you shortly with your personalized quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-black">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm mb-1 text-gray-700 font-medium"
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-blue-500" />
                        </div>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm"
                          placeholder="First name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block text-sm mb-1 text-gray-700 font-medium"
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-blue-500" />
                        </div>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm"
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-1 text-gray-700 font-medium"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-blue-500" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm mb-1 text-gray-700 font-medium"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-blue-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm"
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm mb-1 text-gray-700 font-medium"
                    >
                      Zip Code
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-4 w-4 text-blue-500" />
                      </div>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm"
                        placeholder="Zip Code"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-1 text-gray-700 font-medium"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 shadow-sm"
                        placeholder="Describe your project needs..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white py-2.5 px-6 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin mr-2 h-4 w-4" />
                        Processing...
                      </>
                    ) : (
                      <>
                        GET A QUOTE
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
