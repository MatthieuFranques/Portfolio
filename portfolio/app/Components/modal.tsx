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
    if (isOpen) document.body.style.overflow = "hidden";
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-screen">
      {/* Backdrop : On utilise un fond semi-transparent basé sur la couleur foreground ou background */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/40 dark:bg-black/60 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Contenu modal : Utilisation de tes variables CSS */}
      <div
        className={`relative z-10 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transition-all duration-300 ${sizeClass}`}
      >
        {/* Header : sticky avec le même fond que la carte */}
        <div className="sticky top-0 z-20 bg-[var(--card-bg)] flex items-center justify-center p-6 border-b border-[var(--card-border)] relative">
          <h2 className="text-2xl md:text-3xl font-extrabold m-0 text-[var(--card-text)] transition-colors duration-300">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="absolute right-4 text-[var(--card-text)] opacity-60 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-2 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenu textuel */}
        <div className="p-6 text-[var(--card-text)] opacity-90 leading-relaxed transition-colors duration-300">
          {description}
        </div>
      </div>
    </div>,
    document.body,
  );
}
