import React from "react";

export const cards = [
  {
    title: "Développement Web",
    description:
      "Création de sites web modernes, responsives et performants avec Next.js et Tailwind CSS.",
    image: "/favicon.ico",
    link: "#",
    color: "bg-blue-700",
    size: "xl",
  },
  {
    title: "ShopForMe",
    description:
      "Développement d’une application pour aider les malvoyants et aveugles à faire leurs courses en autonomie.",
    image: "/logoShop4Me.svg",
    link: "#",
    color: "bg-green-600",
    buttonText: "En savoir plus",
    size: "xl",
    modalDescription: (
      <>
        {/* On remplace dark:text-gray-100 par var(--card-text) */}
        <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Description
            </h3>
            <p className="leading-relaxed opacity-90">
              ShopForMe est une application mobile associée à des dispositifs
              IoT, conçue pour aider les personnes aveugles ou malvoyantes à
              faire leurs courses en toute autonomie.
            </p>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Démo vidéo
            </h3>
            <div className="flex justify-center mb-4">
              <video
                className="h-80 rounded-lg shadow-md border border-[var(--card-border)]"
                muted
                autoPlay
                loop
              >
                <source src="/video/Shop4Me_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Contexte & équipe
            </h3>
            <p className="leading-relaxed opacity-90">
              Ce projet a été réalisé dans le cadre de ma formation à Epitech.
              Équipe de 11 membres. J'occupais le poste de PO et développeur
              mobile.
            </p>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Architecture globale (App + IoT)
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src="/Shop4Me/ArchitectureHardwaire.png"
                alt="Schéma de fonctionnement global"
                className="rounded-lg shadow-md max-h-96 object-contain bg-white/5 p-2"
              />
            </div>
          </section>

          <section className="text-center pt-4">
            <a
              href="https://github.com/MatthieuFranques/ShopForMe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all"
            >
              Répertoire GitHub
            </a>
          </section>
        </div>
      </>
    ),
  },
  {
    title: "LearnALanguage",
    description:
      "Application mobile pour apprendre les bases de nouvelles langues de manière ludique.",
    image: "/logoLL.png",
    link: "#",
    color: "bg-purple-600",
    buttonText: "En savoir plus",
    size: "xl",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Description
            </h3>
            <p className="leading-relaxed opacity-90">
              LearnALanguage propose une approche ludique et complète pour
              apprendre l’anglais à ton rythme :
            </p>
            <ul className="mt-4 leading-relaxed list-disc list-inside space-y-2 opacity-90">
              <li>
                <strong>Quiz</strong> : vocabulaire et grammaire.
              </li>
              <li>
                <strong>Rapidité</strong> : challenge contre la montre.
              </li>
              <li>
                <strong>Compréhension</strong> : travail de l'écoute.
              </li>
            </ul>
          </section>

          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Aperçu
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src="/LearnLanguage/screenLL.jpg"
                className="rounded-lg shadow-md max-h-96 object-contain"
                alt="Aperçu LearnALanguage"
              />
            </div>
          </section>

          <section className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center pt-4">
            <a
              href="https://learn-language-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105"
            >
              Découvrir l’application
            </a>
            <a
              href="https://github.com/MatthieuFranques/LearnLanguage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all"
            >
              GitHub
            </a>
          </section>
        </div>
      </>
    ),
  },
  {
    title: "LegalTech",
    description:
      "Conception et création d'un outil de gestion de fichier juridique (prototype).",
    image: "/icons/legalTech.png",
    link: "#",
    color: "bg-purple-600",
    buttonText: "En savoir plus",
    size: "xl",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
          <section className="mb-6 pb-4">
            <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
              Description
            </h3>
            <p className="leading-relaxed opacity-90">
              LegalTech vise à simplifier l’accès aux services juridiques grâce
              à une plateforme numérique innovante.
            </p>
          </section>

          <section className="text-center pt-4">
            <a
              href="https://github.com/MatthieuFranques/LegalTech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all"
            >
              Répertoire GitHub
            </a>
          </section>
        </div>
      </>
    ),
  },
];
