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
  // State pour vérifier si le composant est monté côté client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // On monte le composant côté client

    // Bloquer le scroll du body quand la modal est ouverte
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null; // Ne rien rendre côté serveur

  const sizeClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  }[size || "md"];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-screen">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Contenu modal */}
      <div
        className={`relative z-10 bg-white dark:bg-gray-700 rounded-lg shadow w-full mx-4 max-h-[90vh] overflow-y-auto ${sizeClass}`}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white dark:bg-gray-700 flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-600 relative">
          <h2 className="text-3xl font-bold m-0 text-gray-600 dark:text-gray-300">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="absolute right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg p-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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

        {/* Contenu */}
        <div className="p-4 space-y-4 text-gray-600 dark:text-gray-300">
          {description}
        </div>
      </div>
    </div>,
    document.body,
  );
}
