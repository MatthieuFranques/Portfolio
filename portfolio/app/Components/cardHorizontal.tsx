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
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-white dark:bg-gray-800 dark:hover:bg-gray-700 h-[220px]"
    >
      <img
        className="w-[200px] h-[200px] object-contain p-2 rounded-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
