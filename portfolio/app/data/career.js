import React from "react";

export const experienceCards = [
  {
    title: {
      FR: "Alternant développeur Web chez Alb@rosa",
      EN: "Web Developer Apprentice at Alb@rosa",
    },
    description: {
      FR: "D'octobre 2024 à septembre 2025",
      EN: "October 2024 to September 2025",
    },
    image: "companys/albarosa.png",
    size: "lg",
    modalDescription: (language) => (
      <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Description" : "Overview"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "Développeur à plein temps, j'ai assuré la réalisation de multiples missions techniques, qu'il s'agisse de projets internes ou de solutions destinées aux clients."
              : "Full-time developer, I handled multiple technical assignments, both internal projects and client-facing solutions."}
          </p>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Mes Missions" : "My Responsibilities"}
          </h3>
          <ul className="leading-relaxed list-disc list-inside opacity-90 space-y-2">
            {(language === "FR" ? [
              "Maintenance et amélioration de l'application interne de gestion des employés : correction de bugs, optimisation et ajout de nouvelles fonctionnalités.",
              "Développement d'une application no-code en .NET/Blazor pour la gestion des ressources IAM.",
              "Création d'une interface utilisateur ergonomique pour le pôle IAM d'Airbus.",
            ] : [
              "Maintenance and improvement of the internal employee management app: bug fixes, optimization, and new features.",
              "Development of a no-code .NET/Blazor application for IAM resource management.",
              "Creation of an ergonomic UI for the Airbus IAM team.",
            ]).map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="text-center pt-4">
          <a href="https://www.albarosa.fr/" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105">
            {language === "FR" ? "Site web" : "Website"}
          </a>
        </section>
      </div>
    ),
  },
  {
    title: {
      FR: "Alternant développeur Mobile chez Pinkin",
      EN: "Mobile Developer Apprentice at Pinkin",
    },
    description: {
      FR: "De novembre 2023 à août 2024",
      EN: "November 2023 to August 2024",
    },
    image: "companys/pinkin.png",
    size: "lg",
    modalDescription: (language) => (
      <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Description" : "Overview"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "Maintenance et amélioration d'une application Flutter et de l'intranet associé pour optimiser la gestion des contenus internes."
              : "Maintenance and improvement of a Flutter application and its associated intranet to optimize internal content management."}
          </p>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Mes Missions" : "My Responsibilities"}
          </h3>
          <ul className="leading-relaxed list-disc list-inside opacity-90 space-y-2">
            {(language === "FR" ? [
              "Maintenance et optimisation de l'application Flutter : correction de bugs et amélioration des performances.",
              "Réarchitecture de l'application Flutter pour améliorer la maintenabilité et la scalabilité.",
              "Développement d'un back-office avec Next.js pour simplifier la gestion des contenus.",
            ] : [
              "Maintenance and optimization of the Flutter app: bug fixes and performance improvements.",
              "Re-architecture of the Flutter app to improve maintainability and scalability.",
              "Development of a back-office with Next.js to simplify content management.",
            ]).map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="text-center pt-4">
          <a href="https://www.pinkin.fr/" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105">
            {language === "FR" ? "Site web" : "Website"}
          </a>
        </section>
      </div>
    ),
  },
  {
    title: {
      FR: "Stage développeur applicatif chez AxOptim",
      EN: "Application Developer Intern at AxOptim",
    },
    description: {
      FR: "D'avril 2023 à septembre 2023",
      EN: "April 2023 to September 2023",
    },
    image: "companys/axoptim.png",
    size: "lg",
    modalDescription: (language) => (
      <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Description" : "Overview"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "Développement d'un outil interne de gestion de missions pour améliorer le suivi des tâches et la coordination de l'équipe."
              : "Development of an internal mission management tool to improve task tracking and team coordination."}
          </p>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Mes Missions" : "My Responsibilities"}
          </h3>
          <ul className="leading-relaxed list-disc list-inside opacity-90">
            <li>
              {language === "FR"
                ? "Conception et développement d'un outil de gestion de missions en PHP et VBA."
                : "Design and development of a mission management tool using PHP and VBA."}
            </li>
          </ul>
        </section>

        <section className="text-center pt-4">
          <a href="https://axoptim.com/" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105">
            {language === "FR" ? "Site web" : "Website"}
          </a>
        </section>
      </div>
    ),
  },
];