"use client";

import React from "react";

const title = "Développeur Web Passionné";
const description =
  "Je suis développeur fullstack avec une forte expertise en JavaScript, PHP, Python et plus. J’aime créer des interfaces modernes, performantes et maintenables. Curieux et rigoureux, je travaille aussi bien en équipe qu’en autonomie.";
const imageSrc = "/favicon.ico";
const altText = "Photo de profil";

export default function AboutMe() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        A propos de moi
      </h1>
      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-5xl w-full overflow-hidden mx-auto">
        <img
          className="object-cover w-full h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-xl"
          src={imageSrc}
          alt={altText}
        />
        <div className="flex flex-col justify-between p-6 text-gray-900 dark:text-white">
          <h2 className="mb-3 text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
