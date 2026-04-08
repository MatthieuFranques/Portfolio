import { useState } from "react";
import { useLanguage } from "@/app/contexts/languageContext"; // Import du context

export default function CVViewer() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage(); // Récupération de la langue ("FR" ou "EN")

  // On définit le chemin du CV en fonction de la langue
  const cvPath = language === "FR" ? "/cv_FR.pdf" : "/cv_EN.pdf";

  return (
    <div className="p-8 flex flex-col items-center font-mono">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-500 text-white font-extrabold hover:bg-blue-600 transition rounded-md"
      >
        {open 
          ? (language === "FR" ? "Fermer la visualisation" : "Close Preview") 
          : (language === "FR" ? "Visualiser mon CV" : "View my CV")}
      </button>

      {open && (
        <div className="mt-8 w-full max-w-6xl h-[95vh] border rounded-lg shadow-2xl overflow-hidden bg-gray-900">
          <iframe 
            src={cvPath} 
            className="w-full h-full" 
            title={language === "FR" ? "Mon CV" : "My CV"} 
          />
        </div>
      )}
    </div>
  );
}