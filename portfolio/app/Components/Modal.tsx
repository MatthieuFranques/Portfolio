type ModalProps = {
  title: string;
  description?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({
  title,
  description,
  isOpen,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen">
      {/* Fond semi-transparent */}
      <div className="absolute inset-0 bg-opacity-30" onClick={onClose}></div>

      {/* Contenu de la modal */}
      <div className="relative z-10 bg-white dark:bg-gray-700 rounded-lg shadow max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg p-1"
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

        {/* Body */}
        <div className="p-4 space-y-4 text-gray-600 dark:text-gray-300">
          {description}
        </div>
      </div>
    </div>
  );
}
