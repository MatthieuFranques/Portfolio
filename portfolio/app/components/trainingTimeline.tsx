import { trainingCards } from "@/app/data/trainingTimeline";
import { useState } from "react";
import Modal from "@/app/components/modal";
import { useLanguage } from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";

export default function TrainingTimeline() {
  const { language } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<null | (typeof trainingCards)[0]>(null);

  // Couleurs indexées pour correspondre aux points lumineux du design
  const colors = [
    { text: "text-[#84adff]", bg: "bg-[#84adff]", shadow: "shadow-[0_0_15px_rgba(132,173,255,0.8)]", border: "hover:border-[#84adff]/50" },
    { text: "text-[#fd6c9c]", bg: "bg-[#fd6c9c]", shadow: "shadow-[0_0_15px_rgba(253,108,156,0.8)]", border: "hover:border-[#fd6c9c]/50" },
    { text: "text-[#f288ff]", bg: "bg-[#f288ff]", shadow: "shadow-[0_0_15px_rgba(234,115,251,0.8)]", border: "hover:border-[#f288ff]/50" },
  ];

  const renderModalDescription = (card: typeof trainingCards[0]) => {
    const desc = card.modalDescription[language];
    return (
      <div className="space-y-4">
        <p className="text-on-surface-variant">{desc.intro}</p>
        <ul className="list-disc list-inside space-y-2 text-on-surface-variant/80">
          {desc.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="mb-32 max-w-7xl mx-auto px-6" id="parcours">
      {/* En-tête de section style "Curator" */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[#fd6c9c] font-medium text-sm uppercase tracking-[0.2em]">
            {language === "FR" ? "Mon Parcours" : "My Journey"}
          </span>
          <h2 className="text-4xl font-extrabold text-[#e0e4ff] mt-2">
            {language === "FR" ? "Formation" : "Education"}
          </h2>
        </div>
        <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-[#3d466c]/30 to-transparent mx-12 mb-2"></div>
      </div>

      <div className="relative pl-8 md:pl-0">
        {/* Ligne centrale verticale */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#84adff]/50 via-[#fd6c9c]/50 to-[#f288ff]/20 shadow-[0_0_15px_rgba(132,173,255,0.3)]"></div>

        <div className="space-y-16">
          {trainingCards.map((card, index) => {
            const isLeft = index % 2 === 0;
            const theme = colors[index % colors.length];

            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center justify-between ${isLeft ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Espace vide pour l'alternance */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Point lumineux (Marker) */}
                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#020a2f] ${theme.bg} ${theme.shadow} z-10`}></div>

                {/* Carte de contenu */}
                <div 
                  onClick={() => setSelectedCard(card)}
                  className={`w-full md:w-[45%] bg-[#122156]/30 backdrop-blur-xl rounded-xl p-6 border border-[#3d466c]/20 transition-all cursor-pointer group ${theme.border} hover:-translate-y-1`}
                >
                  <span className={`${theme.text} text-xs font-bold uppercase tracking-widest block mb-2`}>
                    {card.date} 
                  </span>
                  <h3 className="text-xl font-extrabold text-[#e0e4ff] group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#a0a9d5] font-medium mt-1 italic">
                    {tr(card.subtitle, language)}
                  </p>
                  <p className="text-[#a0a9d5]/70 text-sm mt-4 leading-relaxed line-clamp-2">
                    {card.modalDescription[language].intro}
                  </p>
                  
                  <div className={`mt-4 flex items-center gap-2 text-xs font-bold ${theme.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {language === "FR" ? "VOIR LES DÉTAILS" : "VIEW DETAILS"}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <Modal
          size="lg"
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          description={renderModalDescription(selectedCard)}
        />
      )}
    </section>
  );
}