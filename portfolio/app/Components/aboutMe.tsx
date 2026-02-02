import React, { useState } from "react";
import { aboutMeData } from "@/app/data/aboutMe";

export default function AboutMe() {
  const { imageSrc, altText, tabs } = aboutMeData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-4xl mx-auto my-24 px-6">
      {/* Conteneur principal avec fond sombre/clair selon le thème */}
      <div className="relative bg-slate-50 dark:bg-[#1a2333] rounded-[40px] shadow-2xl p-8 pt-24 md:pt-32">
        {/* Image de profil style Badge */}
        <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2">
          <div className="relative p-1.5 bg-slate-50 dark:bg-[#1a2333] rounded-full">
            <img
              src={imageSrc}
              alt={altText}
              className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full border-[6px] border-blue-600 shadow-xl"
            />
          </div>
        </div>

        {/* Titre avec espacement suffisant */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            À propos de moi
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Zone de contenu textuel */}
        <div className="max-w-2xl mx-auto text-center animate-fadeIn">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl font-medium">
            {tabs[activeIndex].content}
          </div>
        </div>
      </div>
    </section>
  );
}
