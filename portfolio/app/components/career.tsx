"use client";
import { useState } from "react";
import Modal from "@/app/components/modal";
import { experienceCards } from "@/app/data/career";
import { useLanguage } from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";

export default function CareerPage() {
  const { language } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<null | (typeof experienceCards)[0]>(null);

  const themeColors = [
    { primary: "#84adff", secondary: "rgba(132, 173, 255, 0.1)", shadow: "0 0 15px rgba(132, 173, 255, 0.5)" },
    { primary: "#fd6c9c", secondary: "rgba(253, 108, 156, 0.1)", shadow: "0 0 15px rgba(253, 108, 156, 0.5)" },
    { primary: "#f288ff", secondary: "rgba(242, 136, 255, 0.1)", shadow: "0 0 15px rgba(242, 136, 255, 0.5)" },
  ];

  const parseTitle = (fullTitle: string) => {
    const parts = fullTitle.split(/ chez | at /);
    return {
      role: parts[0],
      company: parts[1] || ""
    };
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="career">
      
      {/* En-tête style Curator */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[#84adff] font-medium text-sm uppercase tracking-[0.2em]">
            {language === "FR" ? "Mon Parcours" : "My Journey"}
          </span>
          <h2 className="text-4xl font-extrabold text-[#e0e4ff] mt-2">
            {language === "FR" ? "Expériences" : "Experience"}
          </h2>
        </div>
        <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-[#3d466c]/30 to-transparent mx-12 mb-2"></div>
      </div>

      <div className="relative">
        {/* LIGNE DE TEMPS (Fixée à gauche via Tailwind) */}
        <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[#84adff]/50 via-[#fd6c9c]/50 to-transparent shadow-[0_0_10px_rgba(132,173,255,0.2)]"></div>

        <div className="space-y-12">
          {experienceCards.map((card, index) => {
            const { role, company } = parseTitle(tr(card.title, language));
            const theme = themeColors[index % themeColors.length];
            const initials = company.substring(0, 2).toUpperCase();

            return (
              <div key={index} className="relative pl-10 group">
                
                {/* POINT (Marker) Aligné sur la ligne */}
                <div 
                  className="absolute left-0 top-6 w-6 h-6 rounded-full border-4 border-[#020a2f] z-10 transition-transform group-hover:scale-125"
                  style={{ 
                    backgroundColor: theme.primary,
                    boxShadow: theme.shadow 
                  }}
                ></div>

                {/* CARTE (Tout à droite de la ligne) */}
                <div 
                  onClick={() => setSelectedCard(card)}
                  className="bg-[#122156]/30 backdrop-blur-xl rounded-xl p-6 border border-[#3d466c]/20 transition-all cursor-pointer hover:border-white/20 hover:-translate-y-1 shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {/* Logo / Initiales */}
                      <div 
                        className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center font-bold text-sm border"
                        style={{ 
                          color: theme.primary, 
                          backgroundColor: theme.secondary,
                          borderColor: `${theme.primary}40` 
                        }}
                      >
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#e0e4ff] group-hover:text-white transition-colors">
                          {role}
                        </h3>
                        <span className="text-sm font-medium" style={{ color: theme.primary }}>
                          {company}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#a0a9d5]/60 text-sm font-mono md:text-right">
                      {tr(card.description, language)}
                    </div>
                  </div>

                  <p className="text-[#a0a9d5]/80 text-sm leading-relaxed mb-6">
                    {language === "FR" 
                      ? "Cliquez pour voir le détail des missions et technologies utilisées."
                      : "Click to view mission details and technologies used."}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }}></span>
                      <span className="text-[10px] text-[#e0e4ff] uppercase tracking-widest font-bold">
                        {card.size === "lg" ? "Full-time" : "Project"}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs font-bold transition-all group-hover:gap-3" style={{ color: theme.primary }}>
                      {language === "FR" ? "VOIR DÉTAILS" : "VIEW DETAILS"}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={tr(selectedCard.title, language)}
          description={selectedCard.modalDescription(language)}
          size={selectedCard.size as "sm" | "md" | "lg" | "xl" | undefined}
        />
      )}
    </section>
  );
}