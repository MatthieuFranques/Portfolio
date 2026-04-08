import Card from "@/app/components/card";
import { cards } from "@/app/data/project";
import Modal from "@/app/components/modal";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/languageContext";
import { tr } from "@/app/lib/translate";

export default function Projects() {
  const { language } = useLanguage();
  
  // On utilise le type de la donnée directement pour éviter les erreurs TS
  const [selectedCard, setSelectedCard] = useState<null | (typeof cards)[0]>(null);

  return (
    <section
      id="projects"
      className="max-w-screen-xl mx-auto px-4 py-8"
      style={{ marginBottom: "6rem" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 md:mb-20 text-center antialiased tracking-tight">
        {language === "FR" ? "Projets" : "Projects"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {cards.map((card, index) => {

    const { modalDescription, ...cardProps } = card;
          return (
            <Card
              key={index}
              {...cardProps} // On envoie tout sauf la fonction de la modale
              title={tr(card.title, language)}
              description={tr(card.description, language)}
              buttonText={card.buttonText ? tr(card.buttonText, language) : undefined}
              onClick={() => {
                setSelectedCard(card);
              }}
            />
          );
        })}
      </div>

      {selectedCard && selectedCard.modalDescription && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          // On traduit le titre au moment de l'ouverture
          title={tr(selectedCard.title, language)}
          // On exécute la fonction avec la langue actuelle pour récupérer le JSX
          description={selectedCard.modalDescription(language)}
          size={selectedCard.size as "sm" | "md" | "lg" | "xl" | undefined}
        />
      )}
    </section>
  );
}