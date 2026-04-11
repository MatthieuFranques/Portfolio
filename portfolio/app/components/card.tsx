"use client";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string; // On l'utilise pour la lueur au hover
  buttonText?: string;
  modalDescription?: React.ReactNode;
  onClick?: () => void;
  size?: string;
  badge?: string;
};

export default function Card({
  title,
  description,
  image,
  buttonText,
  onClick,
  badge,
}: CardProps) {
  return (
    <div className="group relative w-full">
      {/* Lueur d'arrière-plan au hover (effet Curator) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#84adff] to-[#fd6c9c] rounded-2xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>

      <div
        className="
          relative
          bg-[#122156]/30 backdrop-blur-xl 
          border border-[#3d466c]/30
          rounded-2xl overflow-hidden
          w-full h-full
          hover:-translate-y-2
          transition-all duration-500 ease-out
          shadow-2xl
        "
      >
        {/* Image avec zoom et overlay subtil */}
        <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            alt={title}
          />
          {/* Overlay sombre pour faire ressortir l'image dans le glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020a2f]/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Contenu */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            {badge && (
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#84adff]/10 text-[#84adff] border border-[#84adff]/20 uppercase tracking-widest">
                {badge}
              </span>
            )}
            {/* Décoration style "code" discrète */}
            <span className="text-[#a0a9d5]/20 font-mono text-xs hidden group-hover:block transition-all">
              ./project_files
            </span>
          </div>

          <h5 className="mb-3 text-xl md:text-2xl font-extrabold text-[#e0e4ff] group-hover:text-white transition-colors duration-300">
            {title}
          </h5>

          <p className="mb-6 font-medium text-sm md:text-base leading-relaxed text-[#a0a9d5] opacity-80 line-clamp-3">
            {description}
          </p>

          {buttonText && (
            <button
              onClick={onClick}
              className="
                group/btn
                inline-flex items-center gap-3
                px-5 py-2.5
                text-xs font-bold text-[#e0e4ff]
                bg-white/5 border border-white/10
                rounded-xl
                hover:bg-[#84adff] hover:text-[#020a2f] hover:border-[#84adff]
                transition-all duration-300
                shadow-lg
              "
            >
              <span className="uppercase tracking-widest">{buttonText}</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Ligne décorative en bas qui s'illumine au hover */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#84adff] to-[#fd6c9c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  );
}