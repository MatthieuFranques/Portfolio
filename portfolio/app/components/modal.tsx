"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  title: string;
  description?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Modal({
  title,
  description,
  isOpen,
  onClose,
  size,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const sizeClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  }[size || "md"];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-screen p-4">
      
      {/* Backdrop avec flou intense */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-[#020617]/60 transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Contenu de la Modal (Glassmorphism) */}
      <div
        className={`
          relative z-10 w-full 
          bg-[#0a163a]/80 backdrop-blur-2xl
          border border-white/10 rounded-[32px] 
          shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
          max-h-[90vh] overflow-hidden
          flex flex-col
          animate-fadeIn
          ${sizeClass}
        `}
      >
        {/* Header de la Modal */}
        <div className="flex items-center justify-between p-8 border-b border-white/5 bg-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-[#84adff] text-[10px] font-bold uppercase tracking-[0.2em]">Détails</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Corps de la Modal */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="text-slate-300 text-lg leading-relaxed font-medium">
            {description}
          </div>
        </div>

        {/* Footer optionnel pour fermer proprement */}
        <div className="p-6 bg-white/5 border-t border-white/5 flex justify-end">
        </div>
      </div>
    </div>,
    document.body
  );
}