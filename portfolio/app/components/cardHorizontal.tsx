type CardHorizontalProps = {
  title: string;
  description: string;
  image: string;
  badge?: string;
  onClick?: () => void;
};

export default function CardHorizontal({
  title,
  description,
  image,
  badge,
  onClick,
}: CardHorizontalProps) {
  return (
    <div
      onClick={onClick}
      className="
        group relative
        cursor-pointer
        flex flex-col md:flex-row md:items-stretch
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        rounded-2xl overflow-hidden
        w-full
        hover:-translate-y-1
        hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Image — en haut sur mobile, à gauche sur desktop */}
      <div
        className="
          flex items-center justify-center
          h-[160px] md:h-auto
          w-full md:w-[180px]
          shrink-0
          bg-black/[0.03] dark:bg-white/[0.03]
          border-b md:border-b-0 md:border-r border-[var(--card-border)]
          p-5
        "
      >
        <img
          src={image}
          alt={title}
          className="h-16 w-16 md:h-20 md:w-20 object-contain"
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col justify-center p-6 md:p-7 min-w-0 flex-1">
        {badge && (
          <span
            className="
              self-start mb-3
              text-[11px] font-semibold px-2.5 py-0.5 rounded-full
              bg-blue-50 text-blue-500
              dark:bg-blue-500/15 dark:text-blue-300
            "
          >
            {badge}
          </span>
        )}

        <h5
          className="
            mb-2
            font-extrabold tracking-tight
            text-xl sm:text-2xl
            text-[var(--card-text)]
            transition-colors duration-300
          "
        >
          {title}
        </h5>

        <p
          className="
            font-normal
            text-sm sm:text-base
            text-[var(--card-text)]
            opacity-70
            break-words leading-relaxed
            transition-colors duration-300
          "
        >
          {description}
        </p>
      </div>

      {/* Flèche au hover */}
      <span
        className="
          absolute bottom-4 right-4
          text-sm text-[var(--card-text)] opacity-0
          group-hover:opacity-40
          transition-opacity duration-200
        "
      >
        ↗
      </span>
    </div>
  );
}