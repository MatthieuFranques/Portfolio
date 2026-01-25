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
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-[375px]" src={image} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[100px]">
          {description}
        </p>
        {buttonText && (
          <button
            onClick={onClick}
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
          </button>
        )}
      </div>
    </div>
  );
}
