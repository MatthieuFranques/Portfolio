import React from "react";

export const cards = [
  {
    title: {
      FR: "Développement Web",
      EN: "Web Development",
    },
    description: {
      FR: "Création de sites web modernes, responsives et performants avec Next.js et Tailwind CSS.",
      EN: "Building modern, responsive and performant websites with Next.js and Tailwind CSS.",
    },
    image: "/favicon.ico",
    link: "#",
    color: "bg-blue-700",
    size: "xl",
  },
  {
    title: {
      FR: "ShopForMe",
      EN: "ShopForMe",
    },
    description: {
      FR: "Développement d'une application pour aider les malvoyants et aveugles à faire leurs courses en autonomie.",
      EN: "Development of an app to help visually impaired and blind people shop independently.",
    },
    image: "/logoShop4Me.svg",
    link: "#",
    color: "bg-green-600",
    buttonText: {
      FR: "En savoir plus",
      EN: "Learn more",
    },
    size: "xl",
    modalDescription: (language) => (
      <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Description" : "Overview"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "ShopForMe est une application mobile associée à des dispositifs IoT, conçue pour aider les personnes aveugles ou malvoyantes à faire leurs courses en toute autonomie."
              : "ShopForMe is a mobile app paired with IoT devices, designed to help blind or visually impaired people shop independently."}
          </p>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Démo vidéo" : "Video demo"}
          </h3>
          <div className="flex justify-center mb-4">
            <video className="h-80 rounded-lg shadow-md border border-[var(--card-border)]" muted autoPlay loop>
              <source src="/video/Shop4Me_demo.mp4" type="video/mp4" />
              {language === "FR" ? "Votre navigateur ne supporte pas la vidéo." : "Your browser does not support the video tag."}
            </video>
          </div>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Contexte & équipe" : "Context & team"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "Ce projet a été réalisé dans le cadre de ma formation à Epitech. Équipe de 11 membres. J'occupais le poste de PO et développeur mobile."
              : "This project was built as part of my Epitech curriculum. 11-member team. I served as PO and mobile developer."}
          </p>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Architecture globale (App + IoT)" : "Global architecture (App + IoT)"}
          </h3>
          <div className="flex justify-center mb-4">
            <img
              src="/Shop4Me/ArchitectureHardwaire.png"
              alt={language === "FR" ? "Schéma de fonctionnement global" : "Global architecture diagram"}
              className="rounded-lg shadow-md max-h-96 object-contain bg-white/5 p-2"
            />
          </div>
        </section>

        <section className="text-center pt-4">
          <a href="https://github.com/MatthieuFranques/ShopForMe" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all">
            {language === "FR" ? "Répertoire GitHub" : "GitHub Repository"}
          </a>
        </section>
      </div>
    ),
  },
  {
    title: {
      FR: "LearnALanguage",
      EN: "LearnALanguage",
    },
    description: {
      FR: "Application mobile pour apprendre les bases de nouvelles langues de manière ludique.",
      EN: "Mobile app to learn the basics of new languages in a fun and interactive way.",
    },
    image: "/logoLL.png",
    link: "#",
    color: "bg-purple-600",
    buttonText: {
      FR: "En savoir plus",
      EN: "Learn more",
    },
    size: "xl",
    modalDescription: (language) => (
      <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Description" : "Overview"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "LearnALanguage propose une approche ludique et complète pour apprendre l'anglais à ton rythme :"
              : "LearnALanguage offers a fun and comprehensive approach to learning English at your own pace:"}
          </p>
          <ul className="mt-4 leading-relaxed list-disc list-inside space-y-2 opacity-90">
            {(language === "FR" ? [
              { label: "Quiz", desc: "vocabulaire et grammaire." },
              { label: "Rapidité", desc: "challenge contre la montre." },
              { label: "Compréhension", desc: "travail de l'écoute." },
            ] : [
              { label: "Quiz", desc: "vocabulary and grammar." },
              { label: "Speed", desc: "race against the clock." },
              { label: "Listening", desc: "audio comprehension." },
            ]).map((item, i) => (
              <li key={i}><strong>{item.label}</strong> : {item.desc}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Aperçu" : "Preview"}
          </h3>
          <div className="flex justify-center mb-4">
            <img src="/LearnLanguage/screenLL.jpg"
              className="rounded-lg shadow-md max-h-96 object-contain"
              alt={language === "FR" ? "Aperçu LearnALanguage" : "LearnALanguage preview"} />
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center pt-4">
          <a href="https://learn-language-ten.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-700 transition-all hover:scale-105">
            {language === "FR" ? "Découvrir l'application" : "Try the app"}
          </a>
          <a href="https://github.com/MatthieuFranques/LearnLanguage" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all">
            GitHub
          </a>
        </section>
      </div>
    ),
  },
  {
    title: {
      FR: "LegalTech",
      EN: "LegalTech",
    },
    description: {
      FR: "Conception et création d'un outil de gestion de fichier juridique (prototype).",
      EN: "Design and development of a legal file management tool (prototype).",
    },
    image: "/icons/legalTech.png",
    link: "#",
    color: "bg-purple-600",
    buttonText: {
      FR: "En savoir plus",
      EN: "Learn more",
    },
    size: "xl",
    modalDescription: (language) => (
      <div className="max-w-4xl mx-auto p-6 text-[var(--card-text)] transition-colors duration-300">
        <section className="mb-6 pb-4">
          <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
            {language === "FR" ? "Description" : "Overview"}
          </h3>
          <p className="leading-relaxed opacity-90">
            {language === "FR"
              ? "LegalTech vise à simplifier l'accès aux services juridiques grâce à une plateforme numérique innovante."
              : "LegalTech aims to simplify access to legal services through an innovative digital platform."}
          </p>
        </section>

        <section className="text-center pt-4">
          <a href="https://github.com/MatthieuFranques/LegalTech" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all">
            {language === "FR" ? "Répertoire GitHub" : "GitHub Repository"}
          </a>
        </section>
      </div>
    ),
  },
];