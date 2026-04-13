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
    image: "icons/logoLL.png",
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
    FR: "SmartApply",
    EN: "SmartApply",
  },
  description: {
    FR: "Assistant IA de recherche d'emploi : scraping, enrichissement de prospects et génération de lettres de motivation.",
    EN: "AI-powered job search assistant: scraping, lead enrichment and cover letter generation.",
  },
  image: "icons/smartApply.svg",
  link: "#",
  color: "bg-indigo-600",
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
            ? "SmartApply est un outil d'optimisation de la recherche d'emploi. Il automatise le scraping d'entreprises, le filtrage des prospects, l'enrichissement des données et la génération de lettres de motivation via une IA locale."
            : "SmartApply is a job search optimization tool. It automates company scraping, prospect filtering, data enrichment, and cover letter generation using local AI inference."}
        </p>
      </section>

      <section className="mb-6 pb-4">
        <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
          {language === "FR" ? "Fonctionnalités clés" : "Key Features"}
        </h3>
        <ul className="mt-2 leading-relaxed list-disc list-inside space-y-2 opacity-90">
          {(language === "FR" ? [
            { label: "Lead Explorer", desc: "scraping ciblé et enrichissement via l'API Hunter.io." },
            { label: "Application Tracker", desc: "suivi des candidatures et interactions Gmail." },
            { label: "IA locale (Ollama)", desc: "génération de lettres de motivation 100% privée, sans envoi de données." },
            { label: "Stack Dockerisée", desc: "Angular + FastAPI, démarrage en une commande." },
          ] : [
            { label: "Lead Explorer", desc: "targeted scraping and enrichment via the Hunter.io API." },
            { label: "Application Tracker", desc: "track active applications and Gmail interactions." },
            { label: "Local AI (Ollama)", desc: "100% private cover letter generation — data never leaves your machine." },
            { label: "Dockerized Stack", desc: "Angular + FastAPI, one-command setup." },
          ]).map((item, i) => (
            <li key={i}><strong>{item.label}</strong> : {item.desc}</li>
          ))}
        </ul>
      </section>

      <section className="text-center pt-4">
        <a href="https://github.com/MatthieuFranques/SmartApply" target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-extrabold rounded-lg shadow-md hover:scale-105 transition-all">
          {language === "FR" ? "Répertoire GitHub" : "GitHub Repository"}
        </a>
      </section>
    </div>
  ),
},
{
  title: {
    FR: "Agencement Franques",
    EN: "Agencement Franques",
  },
  description: {
    FR: "Site vitrine one-page pour un artisan spécialisé en rénovation intérieure.",
    EN: "One-page showcase website for a renovation craftsman.",
  },
  image: "icons/logoAF.png", 
  link: "#",
  color: "bg-amber-700",
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
            ? "Site vitrine one-page réalisé pour un artisan spécialisé en agencement et rénovation (terrasses bois, menuiserie, finitions). L'objectif : renforcer son identité digitale et générer des conversions."
            : "One-page showcase website built for a craftsman specializing in interior and exterior renovation (wood decking, joinery, finishing work). Goal: strengthen digital identity and drive conversions."}
        </p>
      </section>

      <section className="mb-6 pb-4">
        <h3 className="text-xl font-extrabold mb-2 border-b border-[var(--card-border)] pb-1">
          {language === "FR" ? "Points techniques" : "Technical Highlights"}
        </h3>
        <ul className="mt-2 leading-relaxed list-disc list-inside space-y-2 opacity-90">
          {(language === "FR" ? [
            { label: "Zéro framework JS", desc: "HTML5 + Tailwind CSS + Vanilla JS pour une légèreté maximale." },
            { label: "Mobile first", desc: "layout entièrement responsive optimisé smartphone." },
            { label: "Déploiement Vercel", desc: "déploiement continu avec domaine personnalisé — projet livrable, en phase de finalisation client (nom de domaine, SEO, ajustements visuels)." },          ] : [
            { label: "No JS framework", desc: "HTML5 + Tailwind CSS + Vanilla JS for maximum performance." },
            { label: "Mobile first", desc: "fully responsive layout optimized for smartphones." },
            { label: "Vercel deployment", desc: "continuous deployment with custom domain — deliverable project, currently in client finalization phase (domain name, SEO, visual adjustments)." },           ]).map((item, i) => (
            <li key={i}><strong>{item.label}</strong> : {item.desc}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center pt-4">
        <a href="https://agencement-franques.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-amber-600 text-white font-extrabold rounded-lg shadow-md hover:bg-amber-700 transition-all hover:scale-105">
          {language === "FR" ? "Voir le site" : "Visit the site"}
        </a>
      </section>
    </div>
  ),
},
];