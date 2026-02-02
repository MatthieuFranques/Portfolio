"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#aboutMe", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#career", label: "Expériences" },
    { href: "#parcours", label: "Mon Parcours de Formation" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center py-2 px-[7vw]">
        {/* Logo + Nom */}
        <div className="flex items-center space-x-3"></div>

        {/* Bouton hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          aria-label="Menu"
        >
          <span
            className={`h-1 w-8 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-8 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-8 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu déroulant */}
      {open && (
        <ul className="flex flex-col items-end py-6 space-y-8 text-lg font-medium pr-[7vw] bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-inner">
          {links.map(({ href, label }) => (
            <li key={href} className="w-full last:mb-4">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block text-right text-gray-700 font-extrabold dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
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
