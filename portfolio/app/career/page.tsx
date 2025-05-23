"use client";

import { useState } from "react";
import CardHorizontal from "@/app/Components/CardHorizontal";
import Modal from "@/app/Components/Modal";

export default function CareerPage() {
  const [selectedCard, setSelectedCard] = useState<null | {
    title: string;
    description: string;
  }>(null);

  const experienceCards = [
    {
      title: "Alternant développeur Web chez Alb@rosa",
      description: "D'octobre 2024 à septembre 2025",
      image: "companys/albarosa.png",
      modalDescription: "",
    },
    {
      title: "Alternant développeur Mobile Frontend chez Pinkin,",
      description: "De novembre 2023 à août 2024",
      image: "companys/pinkin.png",
      modalDescription: "",
    },
    {
      title: "Stage développeur applicatif chez AxOptim,",
      description: "D'avril 2023 à septembre 2023",
      image: "companys/axoptim.png",
      modalDescription: "",
    },
  ];

  const trainingCards = [
    {
      title: "Epitech MSC Pro ( Bac + 5) — Epitech,Toulouse",
      description:
        "Voici les plus grandes acquisitions technologiques de 2021 jusqu'à présent.",
      image: "companys/epitechToulouse.jpg",
      modalDescription: "",
    },
    {
      title: "Licence Pro RTAI — Université Toulouse Capitole",
      description:
        "Découvrez les dernières fonctionnalités ajoutées dans React 18.",
      image: "companys/ut1.jpg",
      modalDescription: "",
    },
    {
      title: "BTS SIO — Lycée Ozenne,Toulouse",
      description: "Créez des interfaces modernes et responsives avec Figma.",
      image: "companys/ozenne.png",
      modalDescription: "",
    },
    {
      title: "BAC Pro SN — Lycée St Joseph Rodez",
      description: "Option RSCI (Réseau Informatique et Systèmes Communicants)",
      image: "companys/louisQuerbes.png",
      modalDescription: "",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 gap-6">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Expériences
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceCards.map((card, index) => (
          <CardHorizontal
            key={index}
            {...card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Formations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trainingCards.map((card, index) => (
          <CardHorizontal
            key={index}
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
