import React, { useState, type ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto shadow-lg bg-primary-50 rounded-lg p-3">
      {/* Accordion Header */}
      <button
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        className={`w-full flex justify-between items-center p-4 text-left rounded-lg text-grayscale-600 transition-colors duration-300 cursor-pointer ${
          isOpen ? "bg-primary-100" : ""
        }`}
      >
        <span className="text-lg font-semibold tracking-wide">{title}</span>
        {/* Chevron Icon for visual indicator */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={`w-5 h-5 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Accordion Content Panel */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-grayscale-500 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
