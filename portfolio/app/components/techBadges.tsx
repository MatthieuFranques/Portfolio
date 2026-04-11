"use client";
import { techCategories } from "@/app/data/techBadges";
import { useLanguage } from "@/app/contexts/languageContext";
import React from "react";

export default function TechBadges() {
  const { language } = useLanguage();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="competences">
      {/* En-tête de section cohérent */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[#84adff] font-medium text-sm uppercase tracking-[0.2em]">
            {language === "FR" ? "Expertise" : "Expertise"}
          </span>
          <h2 className="text-4xl font-extrabold text-[#e0e4ff] mt-2">
            {language === "FR" ? "Mes compétences" : "My Skills"}
          </h2>
        </div>
        <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-[#3d466c]/30 to-transparent mx-12 mb-2"></div>
      </div>

      {/* Conteneur Principal Glassmorphism */}
      <div className="relative group max-w-4xl mx-auto">
        {/* Lueur d'arrière-plan discrète au hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#84adff] to-[#f288ff] rounded-2xl blur opacity-5 group-hover:opacity-10 transition duration-1000"></div>
        
        <div className="relative border border-[#3d466c]/30 rounded-2xl p-8 md:p-12 bg-[#122156]/30 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-10">
            {techCategories.map((category, index) => (
              <React.Fragment key={category.labelFR}>
                {index > 0 && (
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#3d466c]/50 to-transparent" />
                )}
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84adff] shadow-[0_0_8px_#84adff]"></span>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#84adff]">
                      {language === "FR" ? category.labelFR : category.labelEN}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {category.badges.map((badge) => (
                      <div key={badge.name} className="relative group/badge">
                        <img
                          src={badge.url}
                          alt={badge.name}
                          title={badge.name}
                          className="h-8 md:h-9 rounded-md transition-all duration-300 group-hover/badge:-translate-y-1 group-hover/badge:brightness-110 group-hover/badge:drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}