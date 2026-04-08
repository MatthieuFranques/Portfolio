type CardHorizontalProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

export default function CardHorizontal({
  title,
  description,
  image,
  onClick,
}: CardHorizontalProps) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        flex flex-col md:flex-row
        items-center
        /* Utilisation de tes variables globales */
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        rounded-lg shadow-sm
        w-full
        overflow-hidden
        /* Effet au survol : on joue sur l'opacité ou la luminosité */
        hover:brightness-105 dark:hover:brightness-125
        transition-all duration-300
      "
    >
      {/* Image */}
      <img
        className="
          w-full md:w-[200px]
          h-[160px] md:h-[200px]
          object-contain
          p-4
          rounded-lg
          shrink-0
        "
        src={image}
        alt={title}
      />

      {/* Texte */}
      <div className="flex flex-col p-6 min-w-0 flex-1">
        <h5
          className="
            mb-2
            font-extrabold
            tracking-tight
            text-lg
            sm:text-xl
            md:text-2xl
            /* Couleur pilotée par le CSS global */
            text-[var(--card-text)]
            transition-colors duration-300
          "
        >
          {title}
        </h5>

        <p
          className="
            font-normal
            text-sm
            sm:text-base
            /* Couleur de texte avec légère opacité pour le corps */
            text-[var(--card-text)]
            opacity-80
            break-words
            transition-colors duration-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
