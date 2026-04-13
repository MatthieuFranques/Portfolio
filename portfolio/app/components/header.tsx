"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/contexts/languageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "#about", label: language === "FR" ? "À propos" : "About" },
    { href: "#projects", label: language === "FR" ? "Projets" : "Projects" },
    { href: "#career", label: language === "FR" ? "Expériences" : "Experience" },
    { href: "#parcours", label: language === "FR" ? "Mon Parcours" : "My Education" },
    { href: "#contact", label: "Contact" },
  ];

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 
      ${
        open
          ? "bg-[#0a163a] h-screen md:h-auto"
          : "bg-[#0a163a]/60 backdrop-blur-xl border-b border-white/5 shadow-2xl"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        
        {/* BOUTONS ACTIONS (Thème & Langue) */}
        <div className="flex gap-3">
          {/* <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2.5 rounded-full transition-all duration-300 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Changer le thème"
          >
            <span className="w-5 h-5 flex items-center justify-center text-lg">
              {isDark ? "☀️" : "🌙"}
            </span>
          </button> */}

          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full transition-all duration-300 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95 shadow-lg"
            aria-label="Changer la langue"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              {language === "FR" ? "EN" : "FR"}
            </span>
          </button>
        </div>

        {/* MENU HAMBURGER MODERNE */}
        <button
          onClick={() => setOpen(!open)}
          className="relative flex flex-col justify-center items-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all focus:outline-none"
          aria-label="Menu"
        >
          <div className="flex flex-col space-y-1.5 items-end">
            <span
              className={`h-[2px] rounded-full transition-all duration-300 bg-white ${
                open ? "w-6 rotate-45 translate-y-[8px]" : "w-6"
              }`}
            />
            <span
              className={`h-[2px] rounded-full transition-all duration-300 bg-white ${
                open ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[2px] rounded-full transition-all duration-300 bg-white ${
                open ? "w-6 -rotate-45 -translate-y-[8px]" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MENU DÉROULANT FULL-SCREEN MOBILE */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out bg-[#0a163a] md:bg-transparent ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center md:items-end py-12 md:py-8 space-y-8 px-6 max-w-7xl mx-auto">
          <ul className="flex flex-col items-center md:items-end space-y-8 w-full">
            {links.map(({ href, label }) => (
              <li key={href} className="group overflow-hidden">
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="relative block text-3xl md:text-xl font-bold tracking-tighter text-white/70 transition-all duration-300 hover:text-white group-hover:translate-x-[-10px] md:group-hover:translate-x-[-5px]"
                >
                  <span className="text-[#84adff] mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">/</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Ligne décorative style Curator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>
        </div>
      </div>
    </nav>
  );
}