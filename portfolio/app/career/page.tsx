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
      description:
        "Voici les plus grandes acquisitions technologiques de 2021 jusqu'à présent.",
      image: "companys/albarosa.png",
    },
    {
      title: "Alternant développeur Mobile Frontend chez Pinkin,",
      description:
        "Découvrez les dernières fonctionnalités ajoutées dans React 18.",
      image: "companys/pinkin.png",
    },
    {
      title: "Stage développeur applicatif chez AxOptim,",
      description: "Créez des interfaces modernes et responsives avec Figma.",
      image: "companys/axoptim.png",
    },
  ];

  const trainingCards = [
    {
      title: "Epitech MSC Pro ( Bac + 5) — Epitech,Toulouse",
      description:
        "Voici les plus grandes acquisitions technologiques de 2021 jusqu'à présent.",
      image: "companys/epitechToulouse.jpg",
    },
    {
      title: "Licence Pro RTAI — Université Toulouse Capitole",
      description:
        "Découvrez les dernières fonctionnalités ajoutées dans React 18.",
      image: "companys/ut1.jpg",
    },
    {
      title: "BTS SIO — Lycée Ozenne,Toulouse",
      description: "Créez des interfaces modernes et responsives avec Figma.",
      image: "companys/ozenne.png",
    },
    {
      title: "BAC Pro SN — Lycée St Joseph Rodez",
      description: "Option RSCI (Réseau Informatique et Systèmes Communicants)",
      image: "companys/louisQuerbes.png",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 gap-6">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Expérience
      </h1>

      {experienceCards.map((card, index) => (
        <CardHorizontal
          key={index}
          {...card}
          onClick={() => setSelectedCard(card)}
        />
      ))}

      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Formation
      </h1>

      {trainingCards.map((card, index) => (
        <CardHorizontal
          key={index}
          {...card}
          onClick={() => setSelectedCard(card)}
        />
      ))}

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
