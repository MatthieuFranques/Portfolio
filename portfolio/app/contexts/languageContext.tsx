// contexts/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "FR" | "EN";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("FR");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));

  const t = (fr: string, en: string) => (language === "FR" ? fr : en);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}