"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#aboutMe", label: "À propos" },
    { href: "#career", label: "Expériences" },
    { href: "#projects", label: "Projets" },
    { href: "#parcours", label: "Mon Parcours de Formation" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center py-2 px-[7vw]">
        {/* Logo + Nom */}
        <div className="flex items-center space-x-3">
          <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Matthieu
          </span>
        </div>

        {/* Bouton hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu déroulant */}
      {open && (
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
