type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string; // bg-blue-700, bg-green-600, etc.
  buttonText: string;
};

export default function Card({
  title,
  description,
  image,
  link,
  color,
  buttonText,
}: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <img className="rounded-t-lg w-full" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-white ${color} rounded-lg hover:brightness-110 focus:ring-4 focus:outline-none`}
        >
          {buttonText}
          <svg
            className="w-3.5 h-3.5 ms-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 14 10"
          >
            <path d="M1 5h12M9 1l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
}
