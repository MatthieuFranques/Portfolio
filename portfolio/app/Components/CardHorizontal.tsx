type CardHorizontalProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function CardHorizontal({
  title,
  description,
  image,
  link = "#",
}: CardHorizontalProps) {
  return (
    <a
      href={link}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full md:w-auto md:min-w-[150px] md:max-w-[250px] h-auto md:h-[200px] md:rounded-none md:rounded-s-lg"
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
    </a>
  );
}
