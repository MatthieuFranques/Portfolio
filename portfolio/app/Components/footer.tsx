const currentYear = new Date().getFullYear();
import Contact from "@/app/Components/contact";

export function Footer() {
  return (
    <footer className="footer-container contact-section border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Les deux lueurs en bas de chaque côté */}
      <div className="footer-circle-left"></div>
      <div className="footer-circle-right"></div>

      <div className="relative z-10">
        <Contact />

        <div className="border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="mx-auto max-w-screen-xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between text-sm">
            <p className="font-medium text-[var(--foreground)]">
              © {new Date().getFullYear()} Matthieu Franques
            </p>

            <div className="mt-6 sm:mt-0 flex space-x-8 text-[var(--foreground)]">
              <a
                href="https://www.linkedin.com/in/matthieu-franques-35a8121b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                {/* SVG LinkedIn */}
              </a>

              <a
                href="https://github.com/MatthieuFranques"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-110"
              >
                {/* SVG GitHub */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
