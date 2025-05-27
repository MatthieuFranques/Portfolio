import { useState } from "react";
import CardHorizontal from "@/app/Components/CardHorizontal";
import Modal from "@/app/Components/Modal";
import { experienceCards } from "@/app/data/career";

export default function CareerPage() {
  const [selectedCard, setSelectedCard] = useState<null | {
    title: string;
    description: string;
  }>(null);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 gap-6">
      <h2 className="text-4xl font-bold mb-20 text-center">Expériences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceCards.map((card) => (
          <CardHorizontal
            key={card.title} // clé unique, évite index si possible
            {...card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>

      {selectedCard && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          children={selectedCard.description}
        />
      )}
    </div>
  );
}
