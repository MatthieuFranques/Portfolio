export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Titre */}
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Mon Portfolio
          </span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-5 text-gray-700 dark:text-gray-200 font-medium text-lg">
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
