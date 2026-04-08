type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  buttonText?: string;
  modalDescription?: React.ReactNode;
  onClick?: () => void;
  size?: string;
};

export default function Card({
  title,
  description,
  image,
  link,
  color,
  buttonText,
  onClick,
}: CardProps) {
  return (
    /* On remplace bg-white dark:bg-gray-800 par var(--card-bg)
       On remplace border-gray-200 dark:border-gray-700 par var(--card-border)
    */
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-sm transition-all duration-300 overflow-hidden">
      <img
        className="rounded-t-lg w-full h-[375px] object-cover"
        src={image}
        alt={title}
      />

      <div className="p-5">
        {/* On utilise var(--card-text) pour le titre */}
        <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-[var(--card-text)] transition-colors duration-300">
          {title}
        </h5>

        {/* On utilise var(--card-text) avec une légère opacité pour la description */}
        <p className="mb-3 font-normal text-[var(--card-text)] opacity-80 h-[100px] transition-colors duration-300">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onClick}
            className={`inline-flex items-center px-4 py-2 text-sm font-bold text-white ${color} rounded-lg hover:brightness-110 transition-all shadow-md focus:ring-4 focus:outline-none`}
          >
            <span>{buttonText}</span>
            <svg
              className="w-3.5 h-3.5 ms-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 14 10"
            >
              <path d="M1 5h12M9 1l4 4-4 4" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
