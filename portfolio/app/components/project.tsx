"use client";
import Card from "@/app/components/card";
import { cards } from "@/app/data/project";
import Modal from "@/app/components/modal";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";

export default function Projects() {
  const { language } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<null | (typeof cards)[0]>(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      {/* En-tête de section style "Curator" */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[#84adff] font-medium text-sm uppercase tracking-[0.2em]">
            {language === "FR" ? "Portfolio" : "Works"}
          </span>
          <h2 className="text-4xl font-extrabold text-[#e0e4ff] mt-2 text-balance">
            {language === "FR" ? "Projets" : "Projects"}
          </h2>
        </div>
        {/* Ligne de séparation horizontale */}
        <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-[#3d466c]/30 to-transparent mx-12 mb-2"></div>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const { modalDescription, ...cardProps } = card;
          return (
            <div 
              key={index}
              className="flex justify-center"
            >
              <Card
                {...cardProps}
                title={tr(card.title, language)}
                description={tr(card.description, language)}
                buttonText={card.buttonText ? tr(card.buttonText, language) : undefined}
                onClick={() => setSelectedCard(card)}
              />
            </div>
          );
        })}
      </div>

      {/* Modal de détails */}
      {selectedCard && selectedCard.modalDescription && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={tr(selectedCard.title, language)}
          description={selectedCard.modalDescription(language)}
          size={selectedCard.size as "sm" | "md" | "lg" | "xl" | undefined}
        />
      )}
    </section>
  );
}