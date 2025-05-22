export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/favicon.ico" style={{ width: "6%" }} />
        <a
          href="#"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Mon Portfolio
        </a>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              À propos de moi
            </a>
          </li>
          <li>
            <a
              href="contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
