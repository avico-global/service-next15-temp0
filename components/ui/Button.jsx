import React from "react";
import { PhoneCall } from "lucide-react";
export default function Button({ children, className = "" }) {
  console.log("classname", className);
  return (
    <button
      className={`px-8 py-3 w-auto inline-flex min-w-[220px] bg-blue-900 rounded-full text-lg font-semibold text-white  transition-colors ${className}`}
    >
      {children || (
        <div className="flex items-center gap-2">
          <PhoneCall className="w-6 h-6 font-thin" /> (656) 245-0412
        </div>
      )}
    </button>
  );
}
