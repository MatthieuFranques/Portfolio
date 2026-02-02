"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "#aboutMe", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#career", label: "Expériences" },
    { href: "#parcours", label: "Mon Parcours de Formation" },
    { href: "#contact", label: "Contact" },
  ];

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-md 
      ${
        open
          ? "bg-[var(--background)]"
          : "bg-[var(--background)]/80 backdrop-blur-md" // Utilisation de ta variable de fond avec opacité
      } border-b border-[var(--card-border)]`}
    >
      <div className="flex justify-between items-center py-3 px-[7vw]">
        {/* BOUTON DARK MODE - Stylisé avec tes variables */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 rounded-xl transition-all duration-300 hover:scale-110 bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--card-text)] shadow-sm"
          aria-label="Changer le thème"
        >
          <span className="text-xl flex items-center justify-center w-6 h-6">
            {isDark ? "☀️" : "🌙"}
          </span>
        </button>

        {/* BOUTON HAMBURGER - Dynamique selon foreground */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none group"
          aria-label="Menu"
        >
          <span
            className={`h-1 w-8 rounded-full transition-all duration-300 bg-[var(--foreground)] ${open ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`h-1 w-8 rounded-full transition-all duration-300 bg-[var(--foreground)] ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-1 w-8 rounded-full transition-all duration-300 bg-[var(--foreground)] ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Menu déroulant mobile */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-end py-8 space-y-6 pr-[7vw] text-lg font-extrabold bg-[var(--background)] border-t border-[var(--card-border)] shadow-2xl">
          {links.map(({ href, label }) => (
            <li key={href} className="w-full">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block text-right transition-colors duration-200 text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
