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
        bg-white dark:bg-gray-800
        rounded-lg shadow-sm
        hover:bg-gray-100 dark:hover:bg-gray-700
        w-full
        overflow-hidden
      "
    >
      {/* Image */}
      <img
        className="
          w-full md:w-[200px]
          h-[160px] md:h-[200px]
          object-contain
          p-2
          rounded-lg
          shrink-0
        "
        src={image}
        alt={title}
      />

      {/* Texte */}
      <div className="flex flex-col p-4 min-w-0 flex-1">
        <h5
          className="
            mb-2
            font-extrabold
            tracking-tight
            text-lg
            sm:text-xl
            md:text-2xl
            text-gray-900 dark:text-white
          "
        >
          {title}
        </h5>

        <p
          className="
            font-normal
            text-sm
            sm:text-base
            text-gray-700 dark:text-gray-400
            break-words
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
