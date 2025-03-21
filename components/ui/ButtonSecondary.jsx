import React from "react";
import { TextQuote } from "lucide-react";
export default function ButtonSecondary({ children, className = "" }) {
  return (
    <button 
      className={`px-8 py-3 w-auto inline-flex min-w-[220px] bg-[#6B9FE4] rounded-full text-lg font-semibold text-black  transition-colors ${className}`}
    >
      {children || <div className="flex items-center gap-2"><TextQuote className="w-6 h-6 font-thin" /> GET A QUOTE</div>}
    </button>
  );
}