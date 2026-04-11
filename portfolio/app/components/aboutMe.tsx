"use client";
import React from "react";
import { aboutMeData } from "@/app/data/aboutMe";
import { useLanguage } from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";
import CVViewer from "./cvView";

export default function AboutMe() {
  const { language } = useLanguage();
  const data = aboutMeData;

  const nameObj = language === "FR" ? data.title.FR : data.title.EN;

  return (
    <section className="max-w-7xl mx-auto py-24 px-6 space-y-20" id="about">
      
      {/* --- SECTION HERO --- */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Avatar avec halo lumineux */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-white/10 p-2 bg-[#0a163a]/40 backdrop-blur-md overflow-hidden shadow-2xl">
            <img
              src={data.avatarSrc}
              alt={tr(data.altText, language)}
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Texte de présentation principal */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-[10px] uppercase tracking-[0.2em] font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Available for Hire
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
              {nameObj.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-300">{nameObj.surname}</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300/80 leading-relaxed max-w-2xl font-medium">
            {tr(data.introText, language)}
          </p>
        </div>
      </div>
          <CVViewer/>

      {/* --- BENTO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Carte Description Détaillée */}
        <div className="md:col-span-8 bg-[#122156]/30 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/5 flex flex-col justify-between group shadow-2xl">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                {language === "FR" ? "À propos de moi" : "About me"}
              </h2>
            </div>
            
            <p className="text-slate-300/90 text-lg md:text-xl leading-relaxed font-medium">
              {tr(data.detailedText, language)}
            </p>
          </div>

          {/* Statistiques */}
          <div className="mt-12 flex items-center gap-12 md:gap-20 border-t border-white/5 pt-10">
            {data.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className={`text-4xl md:text-5xl font-extrabold tracking-tighter ${index === 0 ? 'text-blue-400' : 'text-pink-400'}`}>
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {tr(stat.label, language)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Carte Image / Projet */}
        <div className="md:col-span-4 bg-[#122156]/30 backdrop-blur-xl rounded-[32px] border border-white/5 overflow-hidden flex flex-col group shadow-2xl transition-all hover:border-white/10">
          <div className="relative flex-1 overflow-hidden">
            <img 
              src={data.projectImageSrc} 
              alt="Latest Work"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081131] via-[#081131]/20 to-transparent opacity-90" />
          </div>
          
          <div className="p-8 space-y-2">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
              {tr(data.latestWork.title, language)}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium line-clamp-2 italic">
              {tr(data.latestWork.desc, language)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}