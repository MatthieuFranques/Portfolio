import React from "react";
import { aboutMeData } from "@/app/data/aboutMe"; //

export default function AboutMe() {
  const { title, description, imageSrc, altText } = aboutMeData;

  return (
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
  );
}
