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
    // AJOUT : La nav prend un fond solide et une transition
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md 
      ${open ? "bg-white dark:bg-[#0a0a0a]" : "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md"}`}
    >
      <div className="flex justify-between items-center py-2 px-[7vw]">
        {/* BOUTON DARK MODE */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 rounded-lg transition-all duration-300 hover:scale-110 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-yellow-400 shadow-sm"
          aria-label="Changer le thème"
        >
          <span className="text-xl flex items-center justify-center w-6 h-6">
            {isDark ? "☀️" : "🌙"}
          </span>
        </button>

        {/* BOUTON HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Menu"
        >
          <span
            className={`h-1 w-8 rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-900"} ${open ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`h-1 w-8 rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-900"} ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-1 w-8 rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-900"} ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Menu déroulant mobile */}
      {open && (
        <ul className="flex flex-col items-end py-6 space-y-8 pr-[7vw] text-lg font-extrabold bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 shadow-xl relative z-50">
          {links.map(({ href, label }) => (
            <li key={href} className="w-full last:mb-4">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block text-right transition-colors duration-200 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
