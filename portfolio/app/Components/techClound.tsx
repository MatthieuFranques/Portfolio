import React, { useEffect, useRef } from "react";
import { techs } from "@/app/data/techClound";

export default function TechCloud() {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const children = cloudRef.current?.children;
    if (!children) return;

    Array.from(children).forEach((el) => {
      const element = el as HTMLElement;

      // Décalage initial aléatoire
      const x = (Math.random() - 0.5) * 40; // -20px à +20px
      const y = (Math.random() - 0.5) * 40;
      element.style.transform = `translate(${x}px, ${y}px)`;

      // Délai pour désynchroniser les animations
      element.style.animationDelay = `${Math.random() * 3}s`;
    });
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12" id="competences">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-20 text-center text-gray-900 antialiased tracking-tight">
        Mes compétences
      </h2>{" "}
      <div
        ref={cloudRef}
        className="relative flex flex-wrap justify-center items-center gap-6 p-8"
      >
        {techs.map((tech, i) => (
          <span
            key={i}
            className="text-2xl font-semibold float inline-block transition-transform duration-1000"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
