"use client";

import { techTools } from "@/app/data/techTicker";
import { useLanguage } from "@/app/contexts/languageContext";

export default function TechTicker() {
  const { language } = useLanguage();
  // On triple pour assurer un défilement infini fluide sans coupure
  const tripled = [...techTools, ...techTools, ...techTools];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
      {/* En-tête de section cohérent */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[#84adff] font-medium text-sm uppercase tracking-[0.2em]">
            {language === "FR" ? "Mon Stack" : "My Stack"}
          </span>
          <h2 className="text-4xl font-extrabold text-[#e0e4ff] mt-2">
            {language === "FR" ? "Mes outils favoris" : "Top Tools"}
          </h2>
        </div>
        <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-[#3d466c]/30 to-transparent mx-12 mb-2"></div>
      </div>

      {/* Container du Ticker avec Glassmorphism subtle */}
      <div className="relative overflow-hidden w-full py-10">
        
        {/* Masques de fondu sur les côtés pour l'effet de disparition */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#020a2f] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#020a2f] to-transparent"></div>

        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-4">
          {tripled.map((tool, i) => (
            <div
              key={i}
              className="
                group
                inline-flex items-center gap-3 
                px-6 py-3 rounded-xl
                bg-[#122156]/20 backdrop-blur-md
                border border-[#3d466c]/30
                transition-all duration-300
                hover:border-[#84adff]/50 hover:bg-[#122156]/40
                cursor-default select-none
              "
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="h-6 w-6 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-sm font-bold text-[#a0a9d5] group-hover:text-[#e0e4ff] whitespace-nowrap tracking-wide uppercase">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}