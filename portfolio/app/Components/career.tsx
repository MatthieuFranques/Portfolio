import { useState } from "react";
import CardHorizontal from "@/app/components/cardHorizontal";
import Modal from "@/app/components/modal";
import { experienceCards } from "@/app/data/career";
import { useLanguage }  from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";

export default function CareerPage() {
  const { language } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<null | (typeof experienceCards)[0]>(null);

  return (
    <div
      id="career"
      className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 gap-6"
      style={{ marginBottom: "6rem" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center antialiased tracking-tight mb-10 md:mb-20">
        {language === "FR" ? "Expériences" : "Experience"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceCards.map((card) => (
          <CardHorizontal
            key={tr(card.title, language)}
            {...card}
            title={tr(card.title, language)}
            description={tr(card.description, language)}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>

      {selectedCard && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={tr(selectedCard.title, language)}
          description={selectedCard.modalDescription(language)}
          size={selectedCard.size as "sm" | "md" | "lg" | "xl" | undefined}
        />
      )}
    </div>
  );
}