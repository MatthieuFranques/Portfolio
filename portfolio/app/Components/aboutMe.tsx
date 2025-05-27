import React, { useState } from "react";
import { aboutMeData } from "@/app/data/aboutMe";

export default function AboutMe() {
  const { imageSrc, altText, tabs } = aboutMeData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-start bg-white border border-gray-200 rounded-xl shadow-md dark:border-gray-700 dark:bg-gray-800 max-w-6xl w-full overflow-hidden mx-auto p-6">
      <img
        className="object-cover w-full h-80 md:h-[420px] md:w-72 md:rounded-none md:rounded-s-xl"
        src={imageSrc}
        alt={altText}
      />
      <div className="flex flex-col p-6 text-gray-900 dark:text-white w-full">
        {/* Menu onglets */}
        <nav className="mb-5 flex space-x-5 border-b-2 border-gray-300 dark:border-gray-600">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveIndex(index)}
              className={`py-2.5 px-5 -mb-px font-semibold text-sm rounded-t-lg focus:outline-none
                ${
                  index === activeIndex
                    ? "border-b-4 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Contenu actif */}
        <div className="text-lg text-gray-700 dark:text-gray-300 min-h-[140px]">
          {tabs[activeIndex].content}
        </div>
      </div>
    </div>
  );
}
