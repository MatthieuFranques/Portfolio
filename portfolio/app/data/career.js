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
            ? "Développeur à plein temps au sein d'une petite ESN, j'ai mené des missions techniques variées : développement de solutions internes, outillage sécurité et contributions à un projet client stratégique pour Airbus."
            : "Full-time developer within a small consulting firm, I handled varied technical assignments: internal solutions, security tooling, and contributions to a strategic client project for Airbus."}
        </p>
      </section>

      <section className="mb-6 pb-4">
        <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
          {language === "FR" ? "Mes Missions" : "My Responsibilities"}
        </h3>
        <ul className="leading-relaxed list-disc list-inside opacity-90 space-y-2">
          {(language === "FR" ? [
            "Développement d'un Worker Service .NET et d'une interface Blazor pour automatiser les workflows (Airbus).",
            "Création d'un générateur de politiques Rego Low-Code pour permettre aux profils non-techniques de gérer la sécurité en autonomie.",
            "Maintenance, optimisation et évolutions fonctionnelles de l'ERP interne de gestion de l'entreprise.",
          ] : [
            "Development of a .NET Worker Service and a Blazor interface to automate workflows (Airbus).",
            "Creation of a Low-Code Rego policy generator to empower non-technical profiles to manage security independently.",
            "Maintenance, optimization and functional evolutions of the core internal ERP management system.",
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
            ? "Développement et maintenance d'une application mobile Flutter, avec une mission transverse de refonte architecturale et la création d'un back-office dédié à la gestion des contenus."
            : "Development and maintenance of a Flutter mobile application, including an architectural refactoring mission and the creation of a dedicated back-office for content management."}
        </p>
      </section>

      <section className="mb-6 pb-4">
        <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
          {language === "FR" ? "Mes Missions" : "My Responsibilities"}
        </h3>
        <ul className="leading-relaxed list-disc list-inside opacity-90 space-y-2">
          {(language === "FR" ? [
            "Intégration de nouvelles fonctionnalités et résolution de bugs complexes pour garantir la stabilité de l'application.",
            "Optimisation de l'expérience utilisateur : réduction des temps de chargement et compression des assets media.",
            "Réarchitecture de l'application avec GetX pour découpler la logique métier de l'interface et améliorer la maintenabilité long terme.",
            "Développement d'un back-office en Next.js pour fluidifier la saisie de données et la modération de contenus.",
          ] : [
            "Integration of new features and resolution of complex bugs to ensure application stability.",
            "UX optimization: reduced load times and compressed media assets for better performance.",
            "Re-architecture of the app using GetX to decouple business logic from the UI, improving long-term maintainability.",
            "Development of a Next.js back-office to streamline data entry workflows and content moderation.",
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