"use client";

import { techTools } from "@/app/data/techTicker";
import { useLanguage } from "@/app/contexts/languageContext";

export default function TechTicker() {
  const { language } = useLanguage();
  const doubled = [...techTools, ...techTools];

  return (
    <section
      className="max-w-screen-xl mx-auto px-4 py-8"
      style={{ marginBottom: "6rem" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-10 md:mb-20">
        {language === "FR" ? "Mes outils favoris" : "Top Tools"}
      </h2>

      <div className="overflow-hidden w-full py-4 relative ticker-fade">
        <div className="flex animate-scroll w-max">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="ticker-pill inline-flex items-center gap-2 mx-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 transition-all duration-200 hover:bg-white/10 hover:border-white/20 cursor-default select-none"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="h-5 w-5 object-contain"
              />
              <span className="text-sm font-medium text-white/75 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}