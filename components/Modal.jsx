"use client";

import { X } from "lucide-react";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm top-0 left-0">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-8 right-8 text-white hover:text-blue-300 z-50 flex items-center gap-1 text-lg transition-all duration-300"
      >
        <X className="w-4 h-4 mt-[2px]" />
        Close
      </button>
      {children}
    </div>
  );
};

export default Modal;
