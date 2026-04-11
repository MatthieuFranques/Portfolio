"use client";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/languageContext";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const copyEmail = () => {
    navigator.clipboard.writeText("matthieufranques@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      {/* En-tête de section cohérent avec "Formation" */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[#84adff] font-medium text-sm uppercase tracking-[0.2em]">
            {language === "FR" ? "Me contacter" : "Get in touch"}
          </span>
          <h2 className="text-4xl font-extrabold text-[#e0e4ff] mt-2">Contact</h2>
        </div>
        <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-[#3d466c]/30 to-transparent mx-12 mb-2"></div>
      </div>

      <div className="max-w-3xl mx-auto relative group">
        {/* Lueur d'arrière-plan pour l'effet "Curator" */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#84adff] to-[#fd6c9c] rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        {/* La Carte Glassmorphism */}
        <div className="relative bg-[#122156]/30 backdrop-blur-xl border border-[#3d466c]/30 rounded-xl p-8 shadow-2xl overflow-hidden">
          
          {/* Décoration style terminal en haut à gauche */}
          <div className="flex gap-2 mb-6 opacity-50">
            <div className="w-3 h-3 rounded-full bg-[#fd6c9c]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f288ff]"></div>
            <div className="w-3 h-3 rounded-full bg-[#84adff]"></div>
          </div>

          <h1 className="text-xl font-mono font-bold mb-6 text-[#84adff]">
            /* {language === "FR" ? "Informations de contact" : "Contact Information"} */
          </h1>

          <div className="bg-black/40 rounded-lg p-6 font-mono text-sm md:text-base leading-relaxed border border-white/5">
            <pre className="whitespace-pre-wrap break-all">
              <code>
                <span className="text-[#f288ff]">const</span>{" "}
                <span className="text-[#84adff]">contact</span> = {"{"}
                {"\n"}
                {"  "}email:{" "}
                <span
                  onClick={copyEmail}
                  className="text-[#ffc1d0] cursor-pointer hover:text-[#fd6c9c] transition-colors decoration-[#fd6c9c]/40 underline-offset-4 hover:underline"
                  title={language === "FR" ? "Cliquez pour copier" : "Click to copy"}
                >
                  "matthieufranques@gmail.com"
                </span>
                ,{"\n"}
                {"  "}linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/matthieu-franques/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffc1d0] hover:text-[#fd6c9c] transition-colors underline-offset-4 hover:underline"
                >
                  "linkedin.com/in/matthieu-franques"
                </a>
                ,{"\n"}
                {"  "}github:{" "}
                <a
                  href="https://github.com/MatthieuFranques"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffc1d0] hover:text-[#fd6c9c] transition-colors underline-offset-4 hover:underline"
                >
                  "github.com/MatthieuFranques"
                </a>
                {"\n"}
                {"};"}
                {"\n\n"}
                <span className="text-[#84adff]">console</span>.<span className="text-[#fd6c9c]">log</span>(
                <span className="text-[#a0a9d5]">
                  {" "}{language === "FR" 
                    ? "\"Disponibilité immédiate !\"" 
                    : "\"Available now!\""}
                </span>
                );
              </code>
            </pre>
          </div>

          {/* Feedback de copie et footer de carte */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="h-6">
              {copied && (
                <span className="text-[#84adff] text-sm font-mono flex items-center gap-2 animate-pulse">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {language === "FR" ? "Copié !" : "Copied!"}
                </span>
              )}
            </div>
            
            <p className="text-[#a0a9d5]/40 text-xs font-mono uppercase tracking-widest">
              {language === "FR" ? "// Compilation réussie" : "// Compilation successful"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}