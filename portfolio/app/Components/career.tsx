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
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Expériences
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceCards.map((card) => (
          <CardHorizontal
            key={card.title} // clé unique, évite index si possible
            {...card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mt-8">
        Formations
      </h1>

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
