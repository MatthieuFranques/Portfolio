"use client";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/languageContext";

export default function CVViewer() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  const cvPath = language === "FR" ? "/cv_FR.pdf" : "/cv_EN.pdf";

  return (
    <div className="p-8 flex flex-col items-center">
      <button
        onClick={() => setOpen(!open)}
        className={`
          group relative inline-flex items-center gap-3
          px-8 py-3.5 
          text-sm font-bold uppercase tracking-widest
          transition-all duration-300 active:scale-95
          rounded-full shadow-lg
          ${open 
            ? "bg-white/5 border border-white/10 text-white hover:bg-white/10" 
            : "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-blue-600/40"
          }
        `}
      >
        {/* Texte du bouton */}
        <span>
          {open 
            ? (language === "FR" ? "Fermer" : "Close") 
            : (language === "FR" ? "Visualiser mon CV" : "View my CV")}
        </span>

        {/* Icône dynamique (Oeil ou Fermeture) */}
        {open ? (
          <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 9.073 7.645 7 12 7s8.601 2.073 9.964 4.678c.07.134.07.29 0 .424C20.601 14.927 16.355 17 12 17s-8.601-2.073-9.964-4.678z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="mt-12 w-full max-w-6xl h-[95vh] relative group">
          {/* Bordure lumineuse décorative derrière l'iframe */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-pink-500/20 rounded-2xl blur-xl opacity-50"></div>
          
          <div className="relative h-full border border-white/10 rounded-2xl shadow-2xl overflow-hidden bg-[#0a163a]/80 backdrop-blur-xl">
            <iframe 
              src={cvPath} 
              className="w-full h-full" 
              title={language === "FR" ? "Mon CV" : "My CV"} 
            />
          </div>
        </div>
      )}
    </div>
  );
}