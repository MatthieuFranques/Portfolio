import Card from "@/app/Components/card";
import { cards } from "@/app/data/project";
import Modal from "@/app/Components/modal";
import { useState } from "react";

export default function Projects() {
  const [selectedCard, setSelectedCard] = useState<null | {
    title: string;
    description: string;
    modalDescription?: React.ReactNode;
    size?: string;
  }>(null);
  return (
    <section
      id="projects"
      className="max-w-screen-xl mx-auto px-4 py-8"
      style={{ marginBottom: "6rem" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold  mb-10 md:mb-20 text-center antialiased tracking-tight">
        Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            onClick={() => {
              setSelectedCard(card);
            }}
          />
        ))}
      </div>

      {selectedCard?.modalDescription && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          description={selectedCard.modalDescription}
          size={selectedCard.size as "sm" | "md" | "lg" | "xl" | undefined}
        />
      )}
    </section>
  );
}
