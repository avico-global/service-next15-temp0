import React, { useState } from "react";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function QuoteForm({ primaryColor }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-xl bg-white/10 backdrop-blur-md p-6 lg:p-8"
    >
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Get Your Free Quote
        </h3>
        <p className="text-white/80 text-sm">
          Fill out the form below and we'll contact you shortly
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
            text-white placeholder-white/70 focus:outline-none focus:ring-2 
            focus:ring-[#90D4E1] focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
            text-white placeholder-white/70 focus:outline-none focus:ring-2 
            focus:ring-[#90D4E1] focus:border-transparent transition-all"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
            text-white placeholder-white/70 focus:outline-none focus:ring-2 
            focus:ring-[#90D4E1] focus:border-transparent transition-all"
            required
          />
        </div>

        <select
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
          text-white placeholder-white/70 focus:outline-none focus:ring-2 
          focus:ring-[#90D4E1] focus:border-transparent transition-all"
          required
        >
          <option value="" className="text-gray-800">Select Service</option>
          <option value="cleaning" className="text-gray-800">Chimney Cleaning</option>
          <option value="inspection" className="text-gray-800">Chimney Inspection</option>
          <option value="repair" className="text-gray-800">Chimney Repair</option>
          <option value="installation" className="text-gray-800">New Installation</option>
        </select>

        <textarea
          placeholder="Tell us about your needs..."
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
          text-white placeholder-white/70 focus:outline-none focus:ring-2 
          focus:ring-[#90D4E1] focus:border-transparent transition-all resize-none h-32"
          required
        />

        <button
          type="submit"
          style={{ backgroundColor: primaryColor }}
          className="w-full py-3 rounded-lg text-white font-semibold text-lg
          hover:opacity-90 transform hover:scale-[0.99] transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#90D4E1]"
        >
          Get Free Quote
        </button>
      </div>

      <p className="text-white/60 text-xs text-center mt-4">
        We respect your privacy. Your information is safe with us.
      </p>
    </form>
  );
} 