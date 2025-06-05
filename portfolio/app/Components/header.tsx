export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center py-4 px-[7vw]">
        {/* Logo + Titre */}
        <div className="flex items-center space-x-4">
          <img src="/favicon.ico" alt="Logo" className="w-16 h-16" />
          <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Matthieu
          </span>
        </div>
        {/* Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-300 font-medium text-xl">
          {[
            { href: "#aboutMe", label: "À propos" },
            // { href: "#competences", label: "Compétences" },
            { href: "#career", label: "Expériences" },
            { href: "#projects", label: "Projets" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
