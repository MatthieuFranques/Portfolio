import React, { useState } from "react";
import { aboutMeData } from "@/app/data/aboutMe";
import { useLanguage }  from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";

export default function AboutMe() {
  const { imageSrc, altText, tabs } = aboutMeData;
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();

  return (
    <section className="max-w-4xl mx-auto my-24 px-6">
      <div className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[40px] shadow-2xl p-8 pt-24 md:pt-32 transition-all duration-300">
        
        {/* Image de profil */}
        <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2">
          <div className="relative p-1.5 bg-[var(--card-bg)] rounded-full transition-all duration-300 shadow-lg">
            <img
              src={imageSrc}
              alt={tr(altText, language)}
              className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full border-[6px] border-blue-600 shadow-xl"
            />
          </div>
        </div>

        {/* Titre */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--card-text)] mb-2 transition-colors duration-300">
            {language === "FR" ? "À propos de moi" : "About me"}
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Contenu */}
        <div className="max-w-2xl mx-auto text-center animate-fadeIn">
          <div className="text-[var(--card-text)] opacity-90 dark:opacity-80 leading-relaxed text-lg md:text-xl font-medium transition-colors duration-300">
            {tr(tabs[activeIndex].content, language)}
          </div>
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeIndex === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                }`}
              >
                {tr(tab.label, language) || `Option ${index + 1}`}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}