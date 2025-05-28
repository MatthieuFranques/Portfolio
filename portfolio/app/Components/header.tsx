export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-dark">
      <div className="flex justify-between items-center py-4 px-[7vw]">
        {" "}
        {/* py-6 → py-4 */}
        {/* Logo + Titre */}
        <div className="flex items-center space-x-4">
          <img src="/favicon.ico" alt="Logo" className="w-16 h-16" />
          <span className="text-2xl font-semibold text-white">Matthieu</span>
        </div>
        {/* Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-200 font-medium text-xl">
          <li>
            <a
              href="#aboutMe"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#competences"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#career"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Expériences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
