import React from "react";

export const experienceCards = [
  {
    title: "Alternant développeur Web chez Alb@rosa",
    description: "D'octobre 2024 à septembre 2025",
    image: "companys/albarosa.png",
    size: "lg",
    modalDescription: (
      <>
        {/* On utilise var(--card-text) pour que tout le bloc suive le thème */}
        <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Description
            </h3>
            <p className="leading-relaxed opacity-90">
              Développeur à plein temps, j'ai assuré la réalisation de multiples
              missions techniques, qu'il s'agisse de projets internes ou de
              solutions destinées aux clients.
            </p>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Mes Missions
            </h3>
            <ul className="leading-relaxed list-disc list-inside opacity-90 space-y-2">
              <li>
                Maintenance et amélioration de l’application interne de gestion
                des employés : correction de bugs, optimisation et ajout de
                nouvelles fonctionnalités.
              </li>
              <li>
                Développement d’une application no-code en .NET/Blazor pour la
                gestion des ressources IAM.
              </li>
              <li>
                Création d’une interface utilisateur ergonomique pour le pôle
                IAM d’Airbus.
              </li>
            </ul>
          </section>

          <section className="text-center pt-4">
            <a
              href="https://www.albarosa.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105"
            >
              Site web
            </a>
          </section>
        </div>
      </>
    ),
  },
  {
    title: "Alternant développeur Mobile chez Pinkin",
    description: "De novembre 2023 à août 2024",
    image: "companys/pinkin.png",
    size: "lg",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Description
            </h3>
            <p className="leading-relaxed opacity-90">
              Maintenance et amélioration d’une application Flutter et de
              l’intranet associé pour optimiser la gestion des contenus
              internes.
            </p>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Mes Missions
            </h3>
            <ul className="leading-relaxed list-disc list-inside opacity-90 space-y-2">
              <li>
                Maintenance et optimisation de l'application Flutter :
                correction de bugs et amélioration des performances.
              </li>
              <li>
                Réarchitecture de l'application Flutter pour améliorer la
                maintenabilité et la scalabilité.
              </li>
              <li>
                Développement d’un back-office avec Next.js pour simplifier la
                gestion des contenus.
              </li>
            </ul>
          </section>

          <section className="text-center pt-4">
            <a
              href="https://www.pinkin.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105"
            >
              Site web
            </a>
          </section>
        </div>
      </>
    ),
  },
  {
    title: "Stage développeur applicatif chez AxOptim",
    description: "D'avril 2023 à septembre 2023",
    image: "companys/axoptim.png",
    size: "lg",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Description
            </h3>
            <p className="leading-relaxed opacity-90">
              Développement d’un outil interne de gestion de missions pour
              améliorer le suivi des tâches et la coordination de l’équipe.
            </p>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Mes Missions
            </h3>
            <ul className="leading-relaxed list-disc list-inside opacity-90">
              <li>
                Conception et développement d'un outil de gestion de missions en
                PHP et VBA.
              </li>
            </ul>
          </section>

          <section className="text-center pt-4">
            <a
              href="https://axoptim.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105"
            >
              Site web
            </a>
          </section>
        </div>
      </>
    ),
  },
];
