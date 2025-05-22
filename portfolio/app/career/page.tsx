import CardHorizontal from "@/app/Components/CardHorizontal";
const experienceCards = [
  {
    title: "Alternant développeur Web chez Alb@rosa",
    description:
      "Voici les plus grandes acquisitions technologiques de 2021 jusqu'à présent.",
    image: "companys/albarosa.png",
    link: "#",
  },
  {
    title: "Alternant développeur Mobile Frontend chez Pinkin,",
    description:
      "Découvrez les dernières fonctionnalités ajoutées dans React 18.",
    image: "companys/pinkin.png",
    link: "#",
  },
  {
    title: "Stage développeur applicatif chez AxOptim,",
    description: "Créez des interfaces modernes et responsives avec Figma.",
    image: "companys/axoptim.png",
    link: "#",
  },
];

const trainingCards = [
  {
    title: "Epitech MSC Pro ( Bac + 5) — Epitech,Toulouse",
    description:
      "Voici les plus grandes acquisitions technologiques de 2021 jusqu'à présent.",
    image: "companys/epitechToulouse.jpg",
    link: "#",
  },
  {
    title:
      "Licence Pro Responsable Technique d'Application Internet (RTAI) — Université Toulouse Capitole , Toulouse",
    description:
      "Découvrez les dernières fonctionnalités ajoutées dans React 18.",
    image: "companys/ut1.jpg",
    link: "#",
  },
  {
    title:
      "BTS SIO (Services Informatiques aux Organisations) — Lycée Ozenne,Toulouse",
    description: "Créez des interfaces modernes et responsives avec Figma.",
    image: "companys/ozenne.png",
    link: "#",
  },
  {
    title: "BAC Professionnel SN (Système Numériques) ",
    description:
      "2017-2020 lycée St Joseph Rodez, option RSCI (Réseau Informatique et Systèmes Communicants)",
    image: "companys/louisQuerbes.png",
    link: "#",
  },
];

export default function CareerPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 gap-6">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Expérience
      </h1>

      {experienceCards.map((card, index) => (
        <CardHorizontal key={index} {...card} />
      ))}

      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Formation
      </h1>

      {trainingCards.map((card, index) => (
        <CardHorizontal key={index} {...card} />
      ))}
    </div>
  );
}
